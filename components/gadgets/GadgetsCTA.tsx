"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function GadgetsCTA() {
  return (
    <section className="px-6 md:px-20 pb-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl text-[#87CEEB] md:text-4xl font-semibold">Need a <span className="text-[#87CEEB]">Custom Sourcing</span>?</h2>
          <p className="text-white mt-4 max-w-2xl mx-auto text-sm">
            Looking for a specific high-end system or a particular phone brand? Our sales team are here to serve you better.
          </p>
          <a href="https://wa.me/2348060704412" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all mt-8">
            <FaWhatsapp size={14} /> Chat our Sales Team
          </a>
        </div>
      </motion.div>
    </section>
  );
}
