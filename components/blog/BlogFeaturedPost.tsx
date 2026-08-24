"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import type { BlogPost } from "@/lib/blogs";

export default function BlogFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
      <Link href={`/blog/${post.id}`} className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-secondary/30 transition-all">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white md:via-white/50 md:to-transparent" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/10 text-primary border border-secondary/20">{post.category}</span>
              <span className="text-[10px] uppercase tracking-wider text-text-primary/70">Featured</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-text-primary text-sm mt-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 mt-6 text-xs text-text-primary/70">
              <span className="flex items-center gap-1.5"><FaUserAlt size={10} />{post.author}</span>
              <span className="flex items-center gap-1.5"><FaCalendarAlt size={10} />{post.date}</span>
              <span className="flex items-center gap-1.5"><FaClock size={10} />{post.readTime}</span>
            </div>
            <span className="inline-flex items-center gap-2 mt-6 text-sm text-primary font-medium group-hover:gap-3 transition-all">
              Read Article <FaArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
