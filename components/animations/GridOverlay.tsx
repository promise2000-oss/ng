"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function GridOverlay({
  opacity = 0.02,
  size = 60,
  color = "rgba(255,255,255,0.3)",
}: {
  opacity?: number;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ y, opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px will-change-transform"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(3,236,238,0.3), transparent)",
        }}
        animate={{ y: ["-10%", "1000%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}