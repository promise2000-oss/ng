"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import AnimatedGradient from "@/components/animations/AnimatedGradient";

export default function AcademyHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker" />
      <AnimatedGradient
        duration={15}
        colors={[
          "rgba(3, 236, 238, 0.03)",
          "rgba(255, 138, 0, 0.02)",
          "rgba(15, 76, 129, 0.02)",
        ]}
      />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <FloatingOrbs
        orbs={[
          { size: 500, color: "bg-secondary", x: 70, y: 30, duration: 20, delay: 0, blur: 140 },
          { size: 400, color: "bg-accent", x: 20, y: 60, duration: 25, delay: 2, blur: 120 },
        ]}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.06] blur-[150px] rounded-full pointer-events-none"
        style={{ y: parallaxY }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold"
        >
          NICEGENE Digital Academy
        </motion.p>
        <TextReveal
          as="h1"
          delay={0.1}
          className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white"
        >
          Master the Skills That Power the Modern Economy
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Practical, instructor-led digital skills training delivered through
          live virtual classes and hands-on projects — built to make
          participants job-ready, not just certificate-ready.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Link
            href="/academy#courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97]"
          >
            Explore Courses
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/25 text-white text-sm hover:bg-white/10 transition-all active:scale-[0.97]"
          >
            Enroll Now
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
