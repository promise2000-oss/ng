"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaTag, FaArrowLeft } from "react-icons/fa";

export default function BlogPostNotFound() {
  return (
    <main className="w-full bg-background text-text-primary min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="text-center px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FaTag className="text-5xl text-gray-600 mx-auto mb-4" />
        </motion.div>
        <h1 className="text-2xl font-semibold mb-2">Article Not Found</h1>
        <p className="text-text-primary text-sm mb-6">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all">
          <FaArrowLeft size={12} /> Back to Blog
        </Link>
      </motion.div>
    </main>
  );
}
