"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import { faqItems } from "@/lib/legal-content";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full bg-background text-text-primary">
      <section className="relative px-6 md:px-20 pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker" />
        <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
        <FloatingOrbs
          orbs={[
            { size: 400, color: "bg-secondary", x: 10, y: 25, duration: 20, delay: 0, blur: 130 },
            { size: 300, color: "bg-accent", x: 80, y: 60, duration: 24, delay: 2, blur: 110 },
          ]}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary text-sm uppercase tracking-[0.2em]"
          >
            Help Center
          </motion.p>
          <TextReveal
            as="h1"
            delay={0.1}
            className="text-4xl md:text-5xl font-semibold leading-tight mt-4 text-white"
          >
            Frequently Asked Questions
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Answers to common questions about NICEGENE Technologies, our
            services, NICEGENE Academy, and how we handle your data.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-surface py-20 px-6 md:px-20 overflow-hidden">
        <AnimatedGradient
          duration={15}
          colors={[
            "rgba(15, 76, 129, 0.02)",
            "rgba(3, 236, 238, 0.015)",
            "rgba(255, 138, 0, 0.015)",
          ]}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`bg-white border rounded-2xl overflow-hidden transition-shadow ${
                    isOpen ? "border-secondary/40 shadow-md" : "border-gray-200 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  >
                    <h2 id={`faq-question-${i}`} className="text-sm md:text-base font-semibold text-text-primary leading-snug">
                      {item.question}
                    </h2>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary"
                      aria-hidden="true"
                    >
                      <FaChevronDown size={12} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-text-primary/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-primary/70 text-sm">
              Still have questions?{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Contact us
              </Link>{" "}
              or call{" "}
              <a href="tel:+2348060704412" className="text-primary font-semibold hover:underline">
                08060704412
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}