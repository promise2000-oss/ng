"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, DURATIONS } from "@/lib/motion";
import IntroductionBackground from "@/components/animations/IntroductionBackground";

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-20 py-20 md:py-28 overflow-hidden bg-[#F7F9FC]"
    >
      <IntroductionBackground />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          style={reduceMotion ? undefined : { y: headingY }}
          className="will-change-transform"
        >
          <div className="relative">
            <span
              className="absolute -top-10 -left-4 text-[120px] leading-none text-primary/8 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: DURATIONS.section, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
              Introduction
            </motion.span>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: DURATIONS.section, delay: 0.05, ease: EASE_OUT_EXPO }}
              className="text-3xl md:text-4xl font-semibold mt-4 leading-tight"
            >
              Replacing Manual, Paper-Based Processes With{" "}
              <span className="text-primary">Secure Cloud Systems</span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DURATIONS.section, delay: 0.12, ease: EASE_OUT_EXPO }}
          className="space-y-5"
        >
          <p className="text-text-primary/80 leading-relaxed">
            NICEGENE Technologies is a Lagos-based IT consulting and digital
            solutions firm trusted by schools, businesses, and public
            institutions to replace manual, paper-based processes with
            secure, cloud-based systems. From cloud architecture, migration,
            and system networking to digitization, web and app development,
            and professional technology training delivered through NICEGENE
            Academy, we deliver end-to-end digital transformation built to
            scale with our clients.
          </p>
          <p className="text-text-primary/80 leading-relaxed">
            Our flagship achievement is a cloud-native, serverless examination
            and school management platform built for the Lagos Archdiocesan
            Education Commission (LAEC). It now supports more than 10 schools
            and over 10,000 students, teachers, and administrative staff, with
            zero service downtime — a standard we bring to every engagement,
            regardless of size.
          </p>
        </motion.div>
      </div>
    </section>
  );
}