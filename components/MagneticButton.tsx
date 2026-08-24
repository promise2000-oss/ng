"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum translate in px. */
  strength?: number;
};

/**
 * Subtle magnetic pull for the child element — desktop / fine-pointer only.
 * Automatically disabled on coarse pointers and for reduced-motion users.
 */
export default function MagneticButton({
  children,
  className,
  strength = 14,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(x * x + y * y);
    if (dist > 160) return;
    const pull = 0.35 * (strength / 14);
    ref.current.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block will-change-transform ${className ?? ""}`}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}