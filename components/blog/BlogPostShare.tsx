"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function BlogPostShare({ title }: { title: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200">
      <span className="text-xs text-text-primary/70 uppercase tracking-wider">Share:</span>
      <a href={`https://wa.me/2348060704412?text=${encodeURIComponent(title)}`}
        target="_blank" rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all">
        <FaWhatsapp size={16} />
      </a>
    </motion.div>
  );
}
