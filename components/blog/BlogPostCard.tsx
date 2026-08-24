"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import type { BlogPost } from "@/lib/blogs";

export default function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <Link href={`/blog/${post.id}`}>
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-colors h-full"
        >
          <div className="relative h-48 overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-3 left-3">
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary/20 text-primary border border-secondary/30 backdrop-blur-sm">{post.category}</span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 text-[10px] text-text-primary/70 uppercase tracking-wider mb-3">
              <span className="flex items-center gap-1"><FaCalendarAlt size={9} />{post.date}</span>
              <span className="flex items-center gap-1"><FaClock size={9} />{post.readTime}</span>
            </div>
            <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
            <p className="text-xs text-text-primary mt-2 leading-relaxed line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
              <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0"><FaUserAlt size={10} /></div>
              <span className="text-[11px] text-text-primary/70 truncate">{post.author}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
