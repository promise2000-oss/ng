"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Node = {
  x: number;
  y: number;
  connections: number[];
};

function generateNodes(count: number, width: number, height: number): Node[] {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    connections: [] as number[],
  }));
}

function generateConnections(nodes: Node[], maxDist: number): [number, number][] {
  const connections: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        connections.push([i, j]);
      }
    }
  }
  return connections;
}

export default function AnimatedNetwork({
  nodeCount = 20,
  lineColor = "rgba(3, 236, 238, 0.12)",
  dotColor = "rgba(3, 236, 238, 0.3)",
  maxDistance = 0.25,
}: {
  nodeCount?: number;
  lineColor?: string;
  dotColor?: string;
  maxDistance?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.width / devicePixelRatio;
    const h = () => canvas.height / devicePixelRatio;

    let nodes = generateNodes(nodeCount, w(), h());
    let connections = generateConnections(nodes, Math.min(w(), h()) * maxDistance);

    const animationFrame = setInterval(() => {
      nodes = generateNodes(nodeCount, w(), h());
      connections = generateConnections(nodes, Math.min(w(), h()) * maxDistance);
    }, 4000);

    let phase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      phase += 0.008;

      const pulse = Math.sin(phase) * 0.5 + 0.5;

      connections.forEach(([i, j]) => {
        const ni = nodes[i];
        const nj = nodes[j];
        if (!ni || !nj) return;
        const alpha = 0.06 + pulse * 0.1;
        ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(ni.x, ni.y);
        ctx.lineTo(nj.x, nj.y);
        ctx.stroke();
      });

      nodes.forEach((node, idx) => {
        const glow = Math.sin(phase * 2 + idx) * 0.3 + 0.7;
        const alpha = 0.15 + glow * 0.2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 5 + glow * 3, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${alpha * 0.15})`);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    const raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [nodeCount, lineColor, dotColor, maxDistance]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
