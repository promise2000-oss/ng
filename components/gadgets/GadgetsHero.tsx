"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import GridOverlay from "@/components/animations/GridOverlay";

export default function GadgetsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
      <GridOverlay opacity={0.015} size={60} color="rgba(21,128,61,0.15)" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500 opacity-[0.04] blur-[150px] rounded-full pointer-events-none"
        style={{ y: parallaxY }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm uppercase tracking-[0.2em]">NICEGENE Device Showroom</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold leading-tight mt-4">
          Premium <span className="text-accent">Tech Gadgets</span> for Maximum Productivity
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-text-primary mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          From MacBook Pro M-series to high-end workstations, we stock premium technological machines for your productivity.
        </motion.p>
      </div>
    </section>
  );
}
