"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import MagneticButton from "@/components/MagneticButton";
import { EASE_OUT_EXPO, DURATIONS } from "@/lib/motion";

export default function HomeCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 md:px-20 py-20 md:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: EASE_OUT_EXPO }}
        className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 lg:p-24 text-center"
      >

        <span
          className="absolute -top-2 left-1/2 -translate-x-1/2 text-[18vw] lg:text-[11rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none whitespace-nowrap"
          aria-hidden="true"
        >
          NICEGENE
        </span>

        {/* Oversized ghost brand word */}
        <span
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[15vw] lg:text-[7rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none whitespace-nowrap"
          aria-hidden="true"
        >
          TECHNOLOGIES
        </span>
        

        <FloatingOrbs
          orbs={[
            { size: 350, color: "bg-accent", x: 80, y: 15, duration: 14, delay: 0, blur: 120 },
            { size: 280, color: "bg-secondary", x: 15, y: 80, duration: 16, delay: 2, blur: 100 },
          ]}
        />
        <GridOverlay opacity={0.025} size={50} color="rgba(3,236,238,0.08)" />

        <div className="relative z-10">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-2 text-accent-light text-xs uppercase tracking-[0.25em] font-semibold"
          >
            <span className="h-px w-8 bg-accent-light/50" aria-hidden="true" />
            Let&apos;s Build Together
            <span className="h-px w-8 bg-accent-light/50" aria-hidden="true" />
          </motion.span>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduceMotion ? { duration: 0 } : { duration: DURATIONS.section, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#87CEEB] mt-5 leading-tight"
          >
            Have a Custom Project in Mind?
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduceMotion ? { duration: 0 } : { duration: DURATIONS.section, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="text-white mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Our team is ready to help you navigate your digital transformation
            journey.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduceMotion ? { duration: 0 } : { duration: DURATIONS.section, delay: 0.24, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <MagneticButton strength={12}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/40 hover:bg-accent/90 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Get a Free Consultation
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
            <a
              href="https://wa.me/2348060704412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white text-sm hover:bg-white/10 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <FaWhatsapp size={14} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}