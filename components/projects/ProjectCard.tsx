"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaBuilding, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import type { Project, ProjectStatus } from "@/lib/projects";

const statusColors: Record<ProjectStatus, string> = {
  Completed: "bg-success/10 text-success border-success/20",
  Ongoing: "bg-secondary/10 text-primary border-secondary/20",
  Maintenance: "bg-accent/10 text-accent border-accent/20",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const detailsHref = project.liveUrl ?? "/contact";
  const external = Boolean(project.liveUrl);

  const cardContent = (
    <>
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary/20 text-primary border border-secondary/30 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {project.client && (
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-text-primary/70">
            <FaBuilding size={9} />
            {project.client}
          </div>
        )}

        <p className="text-xs text-text-primary mt-2 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-text-primary border border-gray-100"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 text-text-primary/70">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          {project.year && (
            <span className="flex items-center gap-1 text-[11px] text-text-primary/70">
              <FaCalendarAlt size={9} />
              {project.year}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] text-primary font-medium transition-all group-hover:gap-2">
            View Details{" "}
            <FaArrowRight
              size={8}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group h-full"
    >
      <Link
        href={detailsHref}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={
          external
            ? `${project.title} — view live site`
            : `${project.title} — discuss this project`
        }
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
      >
        <motion.div
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-colors h-full flex flex-col"
        >
          {cardContent}
        </motion.div>
      </Link>
    </motion.div>
  );
}
