"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";

export default function CohortHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 pt-36 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker pointer-events-none" />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full pointer-events-none"
        style={{ y: parallaxY }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 text-white/70 text-sm transition-colors group"
          >
            <motion.span
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowLeft size={12} />
            </motion.span>
            Back to Academy
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary text-sm uppercase tracking-[0.2em]"
        >
          Course Enrollment Portal
        </motion.p>
        <TextReveal
          as="h1"
          delay={0.1}
          className="text-4xl md:text-5xl font-semibold leading-tight mt-4 text-white"
        >
          Secure Your Spot Today
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mt-4 max-w-3xl text-sm md:text-base leading-relaxed"
        >
          Payment can be made in two installments. Students will have access to the video
          recordings of their classes even after training.
        </motion.p>
      </div>
    </section>
  );
}
