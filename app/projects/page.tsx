"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsFilterBar from "@/components/projects/ProjectsFilterBar";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import {
  staticProjects,
  projectCategories,
  getApiProjects,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>(staticProjects);

  useEffect(() => {
    getApiProjects()
      .then((data) => {
        if (data.length > 0) setProjects(data);
      })
      .catch(() => {});
  }, []);

  const filtered = projects.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchCategory && matchSearch;
  });

  return (
    <main className="w-full bg-background text-text-primary">
      <ProjectsHero />
      <FeaturedProject />

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
          <ProjectsFilterBar
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onCategoryChange={setActiveCategory}
            onSearchChange={setSearchQuery}
          />
          <ProjectsList
            projects={filtered}
            onClearFilters={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
          />
          <ProjectsCTA />
        </div>
      </motion.section>
    </main>
  );
}
