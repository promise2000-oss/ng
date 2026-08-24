"use client";

import { motion } from "motion/react";
import { FaTag } from "react-icons/fa";
import BlogPostCard from "./BlogPostCard";
import type { BlogPost } from "@/lib/blogs";

export default function BlogList({
  posts,
  onClearFilters,
}: {
  posts: BlogPost[];
  onClearFilters: () => void;
}) {
  if (posts.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
        <FaTag className="text-4xl text-gray-600 mx-auto mb-4" />
        <p className="text-text-primary text-sm">No articles found for this category.</p>
        <button onClick={onClearFilters}
          className="mt-4 text-xs px-4 py-2 rounded-full bg-secondary/10 text-primary hover:bg-secondary hover:text-primary transition-all">
          Clear filters
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <BlogPostCard key={post.id} post={post} index={i} />
      ))}
    </div>
  );
}
