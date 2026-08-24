"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import { EASE_OUT_EXPO, DURATIONS, STAGGER } from "@/lib/motion";

const reasons = [
  {
    title: "Proven delivery at scale",
    desc: "A live, multi-tenant platform serving over 10,000 users with zero downtime.",
  },
  {
    title: "Sector depth in education, retail, and institutional IT",
    desc: "Backed by hands-on cloud and networking expertise.",
  },
  {
    title: "A full-stack offering",
    desc: "Strategy, build, training, and hardware — under a single accountable partner.",
  },
  {
    title: "A growing footprint in data protection and privacy services",
    desc: "Aligned with the Nigeria Data Protection Act, 2023.",
  },
  {
    title: "A talent pipeline of Academy-trained professionals",
    desc: "Professionals who understand both the technology and the standards we build to.",
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const baseTransition = reduceMotion
    ? { duration: 0 }
    : { duration: DURATIONS.section, ease: EASE_OUT_EXPO };

  return (
    <section className="px-6 md:px-20 py-20 md:py-28 bg-surface border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={baseTransition}
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
            Why Organizations Choose NICEGENE
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-tight">
            A Partner Built for{" "}
            <span className="text-primary">Reliable Transformation</span>
          </h2>
          <p className="text-text-primary/70 mt-5 text-sm leading-relaxed max-w-md">
            We do not just build systems — we build lasting digital foundations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            className="absolute left-[13px] top-2 bottom-2 w-px bg-gray-200"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-accent to-primary"
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>

          <div className="space-y-4 pl-10">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...baseTransition, delay: reduceMotion ? 0 : i * STAGGER.list }}
                whileHover={reduceMotion ? undefined : { x: 4 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-5 pl-12 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[26px] h-[26px] rounded-full bg-accent text-white flex items-center justify-center text-[11px] font-bold shadow-md shadow-accent/30"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="flex items-start gap-3">
                  <FaCheckCircle
                    className="text-accent shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    size={16}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-text-primary/70 mt-1 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}