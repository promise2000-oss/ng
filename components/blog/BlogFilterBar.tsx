"use client";

import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";

const categories = ["All", "Cloud Computing", "Technology", "Gadgets", "Academy", "Web Development", "Drone Technology"];

export default function BlogFilterBar({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: {
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (c: string) => void;
  onSearchChange: (q: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        className="flex flex-wrap items-center gap-2"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => onCategoryChange(cat)}
            className={`text-xs px-4 py-2 rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-secondary/20 text-primary border-secondary/40"
                : "bg-surface text-text-primary border-gray-200 hover:border-secondary/30 hover:text-primary"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-full md:w-64"
      >
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-primary/70 text-sm" />
        <input type="text" placeholder="Search articles..." value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface border border-gray-200 text-sm text-text-primary placeholder:text-text-primary/70 focus:outline-none focus:border-secondary/40 focus:bg-surface transition-all" />
      </motion.div>
    </motion.div>
  );
}
