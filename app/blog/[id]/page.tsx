"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaClock,
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaTag,
} from "react-icons/fa";

import { getBlog, getRelatedBlogs, type BlogPost } from "@/lib/blogs";
import { useBlog, useBlogs } from "@/lib/hooks/useBlogs";
import { imageUrl } from "@/lib/api";

type MappedPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
};

function truncate(text: string, maxLength = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "\u2026";
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function cleanTag(tag: string): string {
  return tag.replace(/[[\]"]+/g, "").trim();
}

function mapApiBlog(blog: { _id: string; title: string; content: string; image: string; author: string; tags?: string[]; date: string }): MappedPost {
  const tags = blog.tags?.map(cleanTag);
  return {
    id: blog._id,
    title: blog.title,
    excerpt: truncate(blog.content),
    content: blog.content,
    category: tags?.[0] || "Technology",
    image: imageUrl(blog.image) || "",
    author: blog.author,
    date: formatDate(blog.date),
    readTime: estimateReadTime(blog.content),
    tags,
  };
}

export default function BlogPostPage() {
  const params = useParams();
  const id = (params.id as string) || "";
  const { data: rawPost, isLoading } = useBlog(id);
  const { data: allRawPosts } = useBlogs();

  const post = rawPost ? mapApiBlog(rawPost) : null;
  const relatedPosts = (allRawPosts ?? [])
    .map(mapApiBlog)
    .filter((p) => p.category === post?.category && p.id !== post?.id);

  if (isLoading) {
    return (
      <main className="w-full bg-background text-text-primary min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-4" />
          <div className="h-4 bg-white/5 rounded w-48 mx-auto" />
        </div>
      </main>
    );
  }

  if (!post) return (
    <main className="w-full bg-background text-text-primary min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FaTag className="text-5xl text-text-primary/70 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Post Not Found</h2>
        <p className="text-text-primary text-sm mb-6">
          The article you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
        >
          <FaArrowLeft size={12} /> Back to Blog
        </Link>
      </div>
    </main>
  );

  return (
    <main className="w-full bg-background text-text-primary">
      <section className="relative px-6 md:px-20 pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text-primary text-sm transition-colors group"
            >
              <FaArrowLeft
                size={12}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/10 text-primary border border-secondary/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-text-primary/70">
              <FaCalendarAlt size={10} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-text-primary/70">
              <FaClock size={10} />
              {post.readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mt-6 text-sm text-text-primary"
          >
            <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
              <FaUserAlt size={12} />
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">{post.author}</p>
              <p className="text-[11px] text-text-primary/70">NICEGENE TECHNOLOGIES</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-text-primary"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-semibold mt-8 mb-3 text-text-primary"
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={i} className="text-text-primary/80 font-semibold mb-3">
                    {line.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li
                    key={i}
                    className="text-text-primary/80 text-sm leading-relaxed ml-4 list-disc"
                  >
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("1. ")) {
                return (
                  <li
                    key={i}
                    className="text-text-primary/80 text-sm leading-relaxed ml-4 list-decimal"
                  >
                    {line.replace(/^\d+\.\s/, "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-3" />;
              }
              return (
                <p key={i} className="text-text-primary/80 text-sm leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200"
          >
            <span className="text-xs text-text-primary/70 uppercase tracking-wider">
              Share:
            </span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${typeof window !== "undefined" ? window.location.href : ""}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share this article on WhatsApp"
              className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center text-success hover:bg-success/20 transition-all"
            >
              <FaWhatsapp size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-20 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-1 h-7 bg-secondary rounded-full inline-block" />
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/blog/${related.id}`}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 transition-all h-full"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary/20 text-primary border border-secondary/30 backdrop-blur-sm">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-text-primary mt-2 leading-relaxed line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 md:px-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Have a <span className="text-primary">Project</span> in Mind?
            </h2>
            <p className="text-text-primary mt-4 max-w-2xl mx-auto text-sm">
              Let&apos;s discuss how NICEGENE TECHNOLOGIES can help you
              achieve your goals with modern digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.97]"
              >
                Contact Us <FaArrowRight size={12} />
              </Link>
              <a
                href="https://wa.me/2348060704412"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-text-primary text-sm hover:bg-surface hover:border-gray-300 transition-all active:scale-[0.97]"
              >
                <FaWhatsapp size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
