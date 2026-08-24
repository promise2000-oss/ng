"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs, { type Orb } from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";

export type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
  once?: boolean;
  /** Background treatment applied behind the content. */
  background?: "rich" | "subtle" | "none";
  /** Custom floating orbs (defaults to a site-coloured pair). */
  orbs?: Orb[];
  gradientColors?: string[];
  gridOpacity?: number;
};

const defaultOrbs: Orb[] = [
  { size: 480, color: "bg-secondary", x: 78, y: 26, duration: 22, delay: 0, blur: 150 },
  { size: 360, color: "bg-accent", x: 20, y: 68, duration: 24, delay: 3, blur: 120 },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay,
    },
  }),
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  margin = "-100px",
  once = true,
  background = "rich",
  orbs,
  gradientColors,
  gridOpacity = 0.015,
}: AnimatedSectionProps) {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      custom={delay}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      {background === "rich" && (
        <>
          <AnimatedGradient duration={16} colors={gradientColors} />
          <FloatingOrbs orbs={orbs ?? defaultOrbs} />
          <GridOverlay opacity={gridOpacity} />
        </>
      )}
      {background === "subtle" && (
        <>
          <AnimatedGradient duration={22} colors={gradientColors} />
          <GridOverlay opacity={gridOpacity} />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

AnimatedSection.defaultOrbs = defaultOrbs;
