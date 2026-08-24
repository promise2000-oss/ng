"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUserAlt } from "react-icons/fa";
import type { BlogPost } from "@/lib/blogs";
import BackgroundVideo from "@/components/animations/BackgroundVideo";
import GridOverlay from "@/components/animations/GridOverlay";

export default function BlogPostHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative px-6 md:px-20 pt-36 pb-16 overflow-hidden">
      <BackgroundVideo
        src="/videos/video-dpo.mp4"
        overlayOpacity={0.9}
        gradientFrom="rgba(15, 76, 129, 0.94)"
        gradientVia="rgba(15, 76, 129, 0.85)"
        gradientTo="rgba(10, 61, 110, 0.9)"
      />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 text-sm transition-colors group">
            <FaArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
          <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">{post.category}</span>
          <span className="flex items-center gap-1.5 text-xs text-white/70"><FaCalendarAlt size={10} />{post.date}</span>
          <span className="flex items-center gap-1.5 text-xs text-white/70"><FaClock size={10} />{post.readTime}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold leading-tight text-white">{post.title}</motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mt-6 text-sm">
          <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><FaUserAlt size={12} /></div>
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-[11px] text-white/60">NICEGENE TECHNOLOGIES</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
