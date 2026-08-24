"use client";

import { motion } from "motion/react";

export type Orb = {
  size: number;
  color: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  blur: number;
};

type FloatingOrbsProps = {
  orbs?: Orb[];
  count?: number;
};

const defaultOrbs: Orb[] = [
  { size: 600, color: "bg-secondary", x: 50, y: 50, duration: 20, delay: 0, blur: 150 },
  { size: 400, color: "bg-accent", x: 80, y: 30, duration: 25, delay: 2, blur: 120 },
  { size: 500, color: "bg-purple-500", x: 20, y: 70, duration: 22, delay: 1, blur: 130 },
];

export default function FloatingOrbs({ orbs = defaultOrbs }: FloatingOrbsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            opacity: 0.04,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            x: [`${orb.x}%`, `${orb.x + 15}%`, `${orb.x}%`],
            y: [`${orb.y}%`, `${orb.y - 10}%`, `${orb.y}%`],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
