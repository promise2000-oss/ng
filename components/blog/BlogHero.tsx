"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import TextReveal from "@/components/animations/TextReveal";
import BackgroundVideo from "@/components/animations/BackgroundVideo";
import GridOverlay from "@/components/animations/GridOverlay";

export default function BlogHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden">
      <BackgroundVideo
        src="/videos/video-dpo.mp4"
        overlayOpacity={0.9}
        gradientFrom="rgba(15, 76, 129, 0.94)"
        gradientVia="rgba(15, 76, 129, 0.85)"
        gradientTo="rgba(10, 61, 110, 0.9)"
      />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full pointer-events-none"
        style={{ y: parallaxY }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-[#87CEEB] text-sm uppercase tracking-[0.2em]">NICEGENE Insights</motion.p>
        <TextReveal as="h1" delay={0.1}
          className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white">
          Our Blog
        </TextReveal>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Insights, tutorials, and industry perspectives from the NICEGENE team.
        </motion.p>
      </div>
    </section>
  );
}
