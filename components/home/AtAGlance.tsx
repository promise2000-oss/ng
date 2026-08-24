"use client";

import { motion, useReducedMotion } from "motion/react";
import CountUp from "@/components/animations/CountUp";
import { EASE_OUT_EXPO, DURATIONS, STAGGER } from "@/lib/motion";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Schools onboarded onto NICEGENE-built platforms",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Students, teachers, and administrative staff supported",
  },
  {
    value: 0,
    suffix: "",
    label: "Service downtime recorded on our flagship LAEC platform since deployment",
  },
  {
    value: 158,
    suffix: "",
    label: "Professionals reached through the maiden edition of our Tech Insight Series",
  },
];

export default function AtAGlance() {
  const reduceMotion = useReducedMotion();
  const baseTransition = reduceMotion
    ? { duration: 0 }
    : { duration: DURATIONS.section, ease: EASE_OUT_EXPO };

  return (
    <section className="px-6 md:px-20 py-20 md:py-28 bg-surface border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={baseTransition}
            className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
            At a Glance
            <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
          </motion.span>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...baseTransition, delay: reduceMotion ? 0 : STAGGER.default }}
            className="text-3xl md:text-4xl font-semibold mt-4"
          >
            Our Impact in <span className="text-accent">Numbers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...baseTransition, delay: reduceMotion ? 0 : i * STAGGER.cards }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-8 text-center shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-2" aria-hidden="true">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50 group-hover:to-accent transition-all duration-300" />
                <span className="w-1.5 h-1.5 rotate-45 bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50 group-hover:to-accent transition-all duration-300" />
              </div>
              <p className="font-mono text-xl sm:text-3xl md:text-4xl font-bold text-primary break-words tabular-nums">
                <CountUp to={stat.value} suffix={stat.suffix} duration={1.6} />
              </p>
              <p className="text-text-primary/70 text-xs md:text-sm leading-relaxed mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-text-primary/50 text-xs mt-10"
        >
          158 professionals drew from 23 states and the FCT.
        </motion.p>
      </div>
    </section>
  );
}