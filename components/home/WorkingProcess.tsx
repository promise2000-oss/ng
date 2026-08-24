"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { EASE_OUT_EXPO, DURATIONS, STAGGER } from "@/lib/motion";

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    desc: "We research, understand your vision, goals, and target audience to build a strong foundation for your product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Design & Development",
    desc: "We translate ideas into modern UI/UX designs and scalable, high-performance digital solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Product Launch",
    desc: "We deploy, optimize, and support your product to ensure a smooth and successful launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L12 12M12 12L18 8M12 12L6 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const CONNECTOR_D = "M 0 12 H 24";

export default function WorkingProcess() {
  const reduceMotion = useReducedMotion();
  const baseTransition = reduceMotion
    ? { duration: 0 }
    : { duration: DURATIONS.section, ease: EASE_OUT_EXPO };

  return (
    <section className="relative bg-surface py-24 md:py-28 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How We Work"
          title="Explore Our 3 Step Working Process"
          description="A clear, disciplined path from first conversation to launch."
          className="mb-16"
        />

        {/* GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Connecting line (desktop) */}
          <svg
            className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-6 -translate-y-1/2 text-accent pointer-events-none"
            viewBox="0 0 24 12"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d={CONNECTOR_D}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
              initial={reduceMotion ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 1 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          {steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...baseTransition, delay: reduceMotion ? 0 : i * STAGGER.cards }}
                className="relative"
              >
                <div
                  className={`relative rounded-2xl p-8 min-h-[240px] flex flex-col transition-shadow duration-300 ${
                    isFirst
                      ? "bg-primary text-white border-2 border-accent shadow-lg shadow-primary/20"
                      : "bg-white text-text-primary border border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* STEP NUMBER */}
                  <span
                    className={`absolute top-4 right-6 text-5xl font-bold leading-none select-none ${
                      isFirst ? "text-white/10" : "text-primary/8"
                    }`}
                    aria-hidden="true"
                  >
                    {String(step.id).padStart(2, "0")}
                  </span>

                  {/* ICON */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${
                      isFirst
                        ? "bg-white/15 text-white"
                        : "bg-secondary/10 text-primary"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isFirst ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      isFirst ? "text-white/80" : "text-text-primary/70"
                    }`}
                  >
                    {step.desc}
                  </p>

                  {/* STEP LABEL */}
                  <span
                    className={`text-[10px] uppercase tracking-widest font-semibold mt-6 ${
                      isFirst ? "text-white/50" : "text-primary/40"
                    }`}
                  >
                    Step {step.id}
                  </span>
                </div>

                {/* CONNECTING ARROW (desktop only) */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-8 z-10 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-primary/50">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...baseTransition, delay: reduceMotion ? 0 : 0.3 }}
          className="flex justify-center mt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Start Projects
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}