"use client";

import { motion } from "motion/react";
import { FaCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

export default function ProjectsList({
  projects,
  onClearFilters,
}: {
  projects: Project[];
  onClearFilters: () => void;
}) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <FaCode className="text-4xl text-text-primary/70 mx-auto mb-4" />
        <p className="text-text-primary text-sm">
          No projects found for this category.
        </p>
        <button
          onClick={onClearFilters}
          className="mt-4 text-xs px-4 py-2 rounded-full bg-secondary/10 text-primary hover:bg-secondary hover:text-primary transition-all"
        >
          Clear filters
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
