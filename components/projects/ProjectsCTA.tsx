"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function ProjectsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 md:p-10 text-center"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-[#87CEEB]">
        Want to Work With Us?
      </h2>
      <p className="text-white text-sm mt-3 max-w-lg mx-auto">
        Have a project in mind? Let&apos;s discuss how we can bring your
        vision to life with our expertise and experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all"
        >
          Start a Project <FaArrowRight size={12} />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-text-primary/80 text-sm hover:bg-surface hover:border-gray-300 transition-all"
        >
          View Our Services <FaChevronRight size={10} />
        </Link>
      </div>
    </motion.div>
  );
}
