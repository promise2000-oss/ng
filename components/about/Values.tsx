"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

const values = [
  {
    letter: "H",
    title: "Honesty",
    desc: "We communicate openly, act transparently, and uphold truth in every decision and relationship.",
  },
  {
    letter: "E",
    title: "Excellence",
    desc: "We strive for the highest standards by delivering quality solutions that create lasting value.",
  },
  {
    letter: "I",
    title: "Integrity",
    desc: "We do what is right, remain accountable for our actions, and earn trust through ethical conduct.",
  },
  {
    letter: "R",
    title: "Respect",
    desc: "We value every individual, embrace diverse perspectives, and foster relationships built on dignity and professionalism.",
  },
];

export default function Values() {
  return (
    <section className="px-6 md:px-20 py-20 bg-surface border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            The <span className="text-primary">HEIR</span> Standard
          </h2>
          <p className="text-text-primary/70 text-sm mt-3 max-w-xl mx-auto">
            We don&apos;t just build systems — we build lasting digital
            foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <Reveal key={value.title} variant="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center h-full shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {value.letter}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-text-primary/70 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}