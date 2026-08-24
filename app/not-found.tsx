"use client";

import Link from "next/link";
import { motion } from "motion/react";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] w-full bg-primary overflow-hidden flex items-center justify-center px-6">
      <GridOverlay opacity={0.03} size={60} color="rgba(3,236,238,0.12)" />
      <FloatingOrbs
        orbs={[
          { size: 420, color: "bg-secondary", x: 15, y: 20, duration: 22, delay: 0, blur: 130 },
          { size: 340, color: "bg-accent", x: 75, y: 65, duration: 26, delay: 2, blur: 110 },
        ]}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4" aria-hidden="true">
          {["4", "0", "4"].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE_OUT_EXPO }}
              className="text-[clamp(96px,18vw,200px)] leading-none font-bold text-white drop-shadow-[0_0_40px_rgba(156,195,232,0.25)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT_EXPO }}
          className="sr-only"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT_EXPO }}
          className="text-accent-light text-sm uppercase tracking-[0.25em] mt-6"
        >
          Page not found
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: EASE_OUT_EXPO }}
          className="text-white/80 mt-4 text-sm md:text-base leading-relaxed max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Our engineers
          keep everything else running smoothly — let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78, ease: EASE_OUT_EXPO }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Take Me Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </main>
  );
}