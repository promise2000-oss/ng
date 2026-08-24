"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "link" | "hidden";

const STATE_CLASSES: Record<CursorState, string> = {
  default: "scale-100 bg-accent/70",
  hover: "scale-[2.2] bg-accent/15 border-accent/60 border",
  link: "scale-[2.2] bg-secondary/15 border-secondary/70 border",
  hidden: "scale-0 opacity-0",
};

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    const frame = window.requestAnimationFrame(() => setEnabled(true));
    document.documentElement.classList.add("custom-cursor");

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], summary, [data-cursor='hover']"
      );
      const editable = target.closest("input, textarea, select, [contenteditable='true']");
      if (editable) setState("hidden");
      else if (interactive) setState("link");
      else setState("default");
    };

    const onLeave = () => {
      pos.x = -100;
      pos.y = -100;
      ring.x = -100;
      ring.y = -100;
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.14;
      ring.y += (pos.y - ring.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      raf = window.requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[90] h-9 w-9 rounded-full transition-all duration-200 ease-out ${STATE_CLASSES[state]}`}
      />
    </>
  );
}