"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="px-6 md:px-20 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 flex items-center gap-3">
          <span className="w-1 h-7 bg-accent rounded-full inline-block" />
          Related Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((related, i) => (
            <motion.div key={related.id} initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link href={`/blog/${related.id}`}
                className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 transition-all h-full">
                <div className="relative h-40 overflow-hidden">
                  <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary/20 text-primary border border-secondary/30 backdrop-blur-sm">{related.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{related.title}</h3>
                  <p className="text-xs text-text-primary mt-2 leading-relaxed line-clamp-2">{related.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
