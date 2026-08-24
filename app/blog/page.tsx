"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import BlogFeaturedPost from "@/components/blog/BlogFeaturedPost";
import BlogList from "@/components/blog/BlogList";
import BlogCTA from "@/components/blog/BlogCTA";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import { getBlogs, type BlogPost } from "@/lib/blogs";

function matchesFilter(
  post: BlogPost,
  category: string,
  query: string
): boolean {
  const matchesCategory = category === "All" || post.category === category;
  const matchesSearch =
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase());
  return matchesCategory && matchesSearch;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBlogs()
      .then(setPosts)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.slice(1);

  const filteredPosts = regularPosts.filter((post) =>
    matchesFilter(post, activeCategory, searchQuery)
  );

  return (
    <main className="w-full bg-background text-text-primary">
      <BlogHero />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative px-6 md:px-20 py-20 overflow-hidden"
      >
        <AnimatedGradient
          duration={15}
          colors={[
            "rgba(15, 76, 129, 0.02)",
            "rgba(3, 236, 238, 0.015)",
            "rgba(255, 138, 0, 0.015)",
          ]}
        />
        <FloatingOrbs
          orbs={[
            { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
            { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
          ]}
        />
        <GridOverlay opacity={0.015} size={50} color="rgba(15, 76, 129, 0.1)" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <BlogFilterBar
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onCategoryChange={setActiveCategory}
            onSearchChange={setSearchQuery}
          />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-100" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-1/3" />
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-full" />
                    <div className="h-3 bg-gray-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {featuredPost &&
                matchesFilter(featuredPost, activeCategory, searchQuery) && (
                  <BlogFeaturedPost post={featuredPost} />
                )}
              <BlogList
                posts={filteredPosts}
                onClearFilters={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              />
            </>
          )}
        </div>
      </motion.section>

      <section className="px-6 md:px-20 pb-24">
        <BlogCTA />
      </section>
    </main>
  );
}
