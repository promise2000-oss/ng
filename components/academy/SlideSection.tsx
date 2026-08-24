"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import type { Course } from "@/lib/academy";

export default function SlideSection({ courses }: { courses: Course[] }) {
  const [[page, dir], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const slideIndex = ((page % courses.length) + courses.length) % courses.length;

  const next = useCallback(() => setPage(([p]) => [p + 1, 1]), []);
  const prev = useCallback(() => setPage(([p]) => [p - 1, -1]), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const c = courses[slideIndex];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mb-16">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200">
        <div className="flex items-stretch min-h-[280px]">
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10">
            <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">{c.track}</span>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={slideIndex} custom={dir} variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary mb-4 overflow-hidden"><Image src={c.image} alt={c.title} width={48} height={48} className="object-cover w-full h-full" /></div>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">{c.title}</h3>
                <p className="text-text-primary text-sm leading-relaxed mb-4">{c.courseDesc}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div><span className="text-text-primary/70 text-xs">Fee</span><p className="text-accent font-bold">{c.fee}</p></div>
                  <div><span className="text-text-primary/70 text-xs">Duration</span><p className="text-text-primary">{c.time}</p></div>
                  <div><span className="text-text-primary/70 text-xs">Status</span><p className="text-green-400 text-xs font-semibold mt-0.5">{c.status}</p></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500/5 to-purple-500/5 items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10 text-center p-10">
              <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center text-primary mx-auto mb-4 overflow-hidden"><Image src={c.image} alt={c.title} width={96} height={96} className="object-cover w-full h-full" /></div>
              <p className="text-3xl font-bold text-text-primary">{slideIndex + 1}</p>
              <p className="text-text-primary/70 text-xs uppercase tracking-widest mt-1">of {courses.length}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {courses.map((_, i) => (
            <button key={i} onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all ${i === slideIndex ? "w-6 bg-accent" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
        <button onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </motion.div>
  );
}
