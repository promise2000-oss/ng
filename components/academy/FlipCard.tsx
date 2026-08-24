"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { Course } from "@/lib/academy";

export default function FlipCard({ course, index }: { course: Course; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="perspective-[1000px] h-[380px] sm:h-[420px] cursor-pointer"
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${course.title}. ${flipped ? "Close pricing details" : "Open pricing details"}`}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-gray-200 flex flex-col overflow-hidden hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top: Image */}
          <div className="relative w-full h-1/2">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {/* Bottom: Details */}
          <div className="w-full h-1/2 flex flex-col items-center justify-center p-5 text-center">
            <h3 className="text-base font-semibold text-text-primary mb-1">{course.title}</h3>
            <p className="text-text-primary/70 text-xs mb-3 leading-relaxed">{course.desc}</p>
            <span className="text-primary text-[10px] uppercase tracking-widest font-semibold mt-auto">
              Click to see pricing
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary-darker flex flex-col items-center justify-center p-8 text-center text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-3 w-full">{course.track}</h3>
          {course.age && (
            <div className="flex justify-between w-full text-sm mb-2">
              <span className="font-semibold opacity-90">Age:</span>
              <span>{course.age}</span>
            </div>
          )}
          <div className="flex justify-between w-full text-sm mb-2">
            <span className="font-semibold opacity-90">Fee:</span>
            <span className="text-accent font-bold">{course.fee}</span>
          </div>
          <div className="flex justify-between w-full text-sm mb-2">
            <span className="font-semibold opacity-90">Duration:</span>
            <span>{course.time}</span>
          </div>
          <div className="flex justify-between w-full text-sm mb-3">
            <span className="font-semibold opacity-90">Status:</span>
            <span className="px-2 py-0.5 rounded-full bg-success/20 text-success text-[11px]">{course.status}</span>
          </div>
          <p className="text-xs italic leading-relaxed opacity-90 mt-2 border-t border-white/20 pt-3 w-full">{course.courseDesc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}