"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import BackgroundVideo from "@/components/animations/BackgroundVideo";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

const headingWords = ["Empowering", "Your", "Digital", "Future"];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden min-h-[80vh] flex items-center"
    >
      <BackgroundVideo
        src="/videos/drone-video.mp4"
        overlayOpacity={0.9}
        gradientFrom="rgba(15, 76, 129, 0.94)"
        gradientVia="rgba(15, 76, 129, 0.85)"
        gradientTo="rgba(10, 61, 110, 0.9)"
      />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <FloatingOrbs
        orbs={[
          { size: 300, color: "bg-secondary", x: 10, y: 20, duration: 8, delay: 0, blur: 120 },
          { size: 200, color: "bg-accent", x: 75, y: 15, duration: 10, delay: 2, blur: 100 },
          { size: 250, color: "bg-accent", x: 20, y: 70, duration: 9, delay: 4, blur: 110 },
          { size: 180, color: "bg-secondary", x: 80, y: 75, duration: 11, delay: 1, blur: 90 },
        ]}
      />
      <motion.div
        className="absolute w-[500px] h-[400px] rounded-full border border-secondary/5 pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          y: parallaxY,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-accent/5 pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs uppercase tracking-[0.2em] mb-6"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Digital Solutions
          </motion.p>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4 overflow-hidden">
          {headingWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`inline-block mr-[0.3em] ${
                word === "Digital" || word === "Future" ? "text-secondary" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/80 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Empowering businesses and institutions through{" "}
          <span className="text-secondary font-semibold">Advanced Technology</span>,{" "}
          <span className="text-secondary font-semibold">Professional Training</span>
          , and the sale of{" "}
          <span className="text-secondary font-semibold">high-end Technology Gadgets</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-14 flex flex-col items-center justify-center gap-3"
        >
          <motion.span
            className="flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-12 h-px bg-white/40" />
            Explore Our Services
            <span className="w-12 h-px bg-white/40" />
          </motion.span>
          <motion.span
            className="text-white/60 text-lg"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
