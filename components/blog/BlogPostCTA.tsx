"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function BlogPostCTA() {
  return (
    <section className="px-6 md:px-20 pb-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Have a <span className="text-accent">Project</span> in Mind?</h2>
          <p className="text-text-primary mt-4 max-w-2xl mx-auto text-sm">
            Let&apos;s discuss how NICEGENE TECHNOLOGIES can help you achieve your goals with modern digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.97]">
              Contact Us <FaArrowRight size={12} />
            </Link>
            <a href="https://wa.me/2348060704412" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-text-primary text-sm hover:bg-surface hover:border-gray-300 transition-all active:scale-[0.97]">
              <FaWhatsapp size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
