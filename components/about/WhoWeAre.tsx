"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

export default function WhoWeAre() {
  const expertise = [
    "Cloud Infrastructure & Migration",
    "Custom Software Development",
    "System Networking & IT Infrastructure",
    "Digital Transformation Strategy",
    "POS & Business Automation Systems",
  ];

  return (
    <section className="px-6 md:px-20 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <Reveal variant="fadeLeft">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Who We Are
            </h2>
            <p className="text-text-primary mt-6 leading-relaxed">
              We are a multidisciplinary team of engineers, designers, and system
              architects focused on solving real-world operational challenges using
              technology. From educational institutions to businesses, we build
              systems that eliminate inefficiencies and replace them with scalable,
              automated digital infrastructure.
            </p>
            <p className="text-text-primary mt-4 leading-relaxed">
              Our strength lies in combining strategy, design, and engineering to
              deliver solutions that are not just functional, but transformative.
            </p>
          </div>
        </Reveal>
        <Reveal variant="fadeRight" delay={0.15}>
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-primary text-sm uppercase mb-5">
              Our Core Expertise
            </h3>
            <ul className="space-y-3 text-sm text-text-primary/80">
              {expertise.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    whileHover={{ scale: 1.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
