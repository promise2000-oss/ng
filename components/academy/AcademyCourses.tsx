"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { courses as staticCourses } from "@/lib/academy";
import type { Course } from "@/lib/academy";
import FlipCard from "./FlipCard";

type FilterCategory = "All" | "Development" | "Cloud & Security" | "Design & Creative" | "Business & Data" | "Special Programs";

const categoryTitles: Record<FilterCategory, string> = {
  All: "All",
  Development: "Development",
  "Cloud & Security": "Cloud & Security",
  "Design & Creative": "Design & Creative",
  "Business & Data": "Business & Data",
  "Special Programs": "Special",
};

function getCourseCategory(course: Course): FilterCategory {
  const title = course.title.toLowerCase();
  const track = course.track.toLowerCase();

  if (
    title.includes("web") || title.includes("web3") || title.includes("social media") ||
    track.includes("web") || track.includes("social")
  )
    return "Development";

  if (
    title.includes("cloud") || title.includes("cyber") || title.includes("security") ||
    track.includes("cloud") || track.includes("security")
  )
    return "Cloud & Security";

  if (
    title.includes("design") || title.includes("video") || title.includes("graphics") ||
    title.includes("architect") || title.includes("structural") || title.includes("mep") ||
    title.includes("youtube") ||
    track.includes("design") || track.includes("content") || track.includes("graphics") ||
    track.includes("architect") || track.includes("engineering") || track.includes("mep") ||
    track.includes("growth")
  )
    return "Design & Creative";

  if (
    title.includes("project") || title.includes("product") || title.includes("digital market") ||
    title.includes("data") || title.includes("digital product") ||
    title.includes("productivity") ||
    track.includes("management") || track.includes("product") || track.includes("market") ||
    track.includes("data") || track.includes("trading") || track.includes("productivity")
  )
    return "Business & Data";

  return "Special Programs";
}

const categories: FilterCategory[] = ["All", "Development", "Cloud & Security", "Design & Creative", "Business & Data", "Special Programs"];

export default function AcademyCourses({ courses }: { courses?: Course[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const data = courses ?? staticCourses;

  const filtered = activeCategory === "All"
    ? data
    : data.filter((c) => getCourseCategory(c) === activeCategory);

  return (
    <section id="courses" className="px-6 md:px-20 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Courses & <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-text-primary/70 text-sm mt-3 max-w-xl mx-auto">
            Explore our comprehensive curriculum designed for all skill levels.
            Admissions are now open for upcoming cohorts.
          </p>
        </motion.div>

        {/* FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary/70 border border-gray-200 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {categoryTitles[cat]}
            </button>
          ))}
        </motion.div>

        {/* COURSE GRID - 3 columns */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((course, i) => (
            <FlipCard key={course.title} course={course} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-text-primary/50 text-sm mt-10">
            No courses in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
