"use client";

import { motion } from "motion/react";

type AnimatedGradientProps = {
  className?: string;
  colors?: string[];
  duration?: number;
};

export default function AnimatedGradient({
  className,
  colors,
  duration = 10,
}: AnimatedGradientProps) {
  const gradient =
    colors?.join(", ") ??
    "rgba(15, 76, 129, 0.03), rgba(3, 236, 238, 0.03), rgba(255, 138, 0, 0.02)";

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${gradient})`,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
