"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaQuoteLeft,
  FaTimes,
  FaYoutube,
  FaPenAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import Reveal from "@/components/Reveal";
import Modal from "@/components/Modal";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import { STORE_KEYS, loadStore } from "@/lib/store";
import {
  seedTestimonials,
  testimonialServices,
  type Testimonial,
} from "@/lib/seed-data";
import { EASE_OUT_EXPO } from "@/lib/motion";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {rating >= i ? (
            <FaStar size={13} />
          ) : rating >= i - 0.5 ? (
            <FaStarHalfAlt size={13} />
          ) : (
            <FaRegStar size={13} />
          )}
        </span>
      ))}
    </div>
  );
}

function youtubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      return `https://player.vimeo.com/video${u.pathname}`;
    }
    return null;
  } catch {
    return null;
  }
}

const AUTO_ADVANCE_MS = 6000;

export default function TestimonialsSection() {
  const [testimonials] = useState<Testimonial[]>(() =>
    loadStore(STORE_KEYS.testimonials, () => seedTestimonials).filter(
      (t) => t.status === "approved"
    )
  );
  const [service, setService] = useState<string>("All");
  const [showForm, setShowForm] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const swipeX = useRef(0);

  const filtered = useMemo(() => {
    const list =
      service === "All" ? testimonials : testimonials.filter((t) => t.service === service);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [testimonials, service]);

  const services = useMemo(
    () => Array.from(new Set(testimonials.map((t) => t.service))).sort(),
    [testimonials]
  );

  const count = filtered.length;
  const current = count > 0 ? filtered[((index % count) + count) % count] : null;

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return;
    const t = window.setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, count, reduceMotion]);

  const selectService = (next: string) => {
    setService(next);
    setIndex(0);
  };

  const go = (dir: 1 | -1) => {
    if (count === 0) return;
    setIndex((i) => (((i + dir) % count) + count) % count);
    setPaused(true);
  };

  const embed = current?.videoUrl ? youtubeEmbed(current.videoUrl) : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const }}
      className="relative px-6 md:px-20 py-20 overflow-hidden"
    >
      <AnimatedGradient
        duration={15}
        colors={[
          "rgba(27, 58, 107, 0.03)",
          "rgba(46, 95, 163, 0.02)",
          "rgba(27, 58, 107, 0.02)",
        ]}
      />
      <FloatingOrbs
        orbs={[
          { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
          { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
        ]}
      />
      <GridOverlay opacity={0.015} size={50} color="rgba(27, 58, 107, 0.12)" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            What Our Clients <span className="text-accent">Say About Us</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Real feedback from schools, businesses, and institutions we have served — filter by
            service to see how we have helped organisations like yours.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => selectService("All")}
            className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${
              service === "All"
                ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
            }`}
          >
            All Services
          </button>
          {services.map((s) => (
            <button
              key={s}
              onClick={() => selectService(s)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${
                service === s
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
              }`}
            >
              {s}
            </button>
          ))}
          {testimonialServices
            .filter((s) => !services.includes(s))
            .map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-[13px] font-medium border border-dashed border-gray-200 text-text-secondary/50 cursor-not-allowed"
                title="No testimonials for this category yet"
              >
                {s}
              </span>
            ))}
        </div>
        <p className="text-center mb-8 text-[13px] font-bold text-success">
          Featured testimonials appear first
        </p>

        {/* Editorial carousel */}
        {count > 0 && current ? (
          <div
            className="max-w-3xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="flex items-start gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="hidden sm:flex shrink-0 mt-1 w-11 h-11 rounded-full border border-gray-200 bg-white text-text-primary items-center justify-center hover:border-accent hover:text-accent transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaChevronLeft size={14} />
              </button>

              <div
                className="flex-1 bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5"
                onPointerDown={(e) => {
                  swipeX.current = e.clientX;
                }}
                onPointerUp={(e) => {
                  const dx = e.clientX - swipeX.current;
                  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
                }}
              >
                <div aria-live="polite">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id + service}
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <FaQuoteLeft size={26} className="text-accent/30" aria-hidden="true" />
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-semibold">
                          {current.service}
                        </span>
                      </div>
                      <StarRow rating={current.rating} />
                      <p className="text-lg md:text-xl text-text-primary leading-relaxed mt-4">
                        &ldquo;{current.text}&rdquo;
                      </p>

                      {embed && (
                        <button
                          onClick={() => setVideoUrl(current.videoUrl!)}
                          className="inline-flex items-center gap-2 mt-4 text-[13px] font-semibold text-error hover:text-error/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                          aria-label={`Play video testimonial from ${current.name}`}
                        >
                          <FaYoutube size={16} /> Watch video testimonial
                        </button>
                      )}

                      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                          {current.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary text-sm">{current.name}</p>
                          <p className="text-text-secondary text-[12px]">{current.organization}</p>
                          <p className="text-text-secondary/60 text-[11px]">
                            {new Date(current.date).toLocaleDateString("en-NG", {
                              year: "numeric",
                              month: "short",
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Auto-advance progress */}
                {count > 1 && (
                  <div className="mt-6 h-px w-full bg-gray-100 overflow-hidden" aria-hidden="true">
                    <motion.div
                      key={`${index}-${service}-${paused ? "p" : "r"}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                        ease: "linear",
                      }}
                      className="h-full w-full origin-left bg-accent"
                    />
                  </div>
                )}

                {/* Dots */}
                {count > 1 && (
                  <div className="flex items-center justify-center gap-1.5 mt-5">
                    {filtered.map((t, i) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setIndex(i);
                          setPaused(true);
                        }}
                        aria-label={`Go to testimonial ${i + 1} of ${count}`}
                        className={`rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          i === index ? "w-6 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-gray-300 hover:bg-accent/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="hidden sm:flex shrink-0 mt-1 w-11 h-11 rounded-full border border-gray-200 bg-white text-text-primary items-center justify-center hover:border-accent hover:text-accent transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-text-secondary text-sm py-10">
            No testimonials for this service yet.
          </p>
        )}

        {/* Submission CTA */}
        <Reveal>
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
            >
              <FaPenAlt size={14} />
              Submit Your Testimonial
            </button>
            <p className="text-[12px] text-text-secondary mt-3">
              Worked with us? Share your experience — submissions are reviewed before going live.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Video modal */}
      <Modal
        open={Boolean(videoUrl)}
        onClose={() => setVideoUrl(null)}
        labelledBy="testimonial-video-title"
        panelClassName="bg-black rounded-3xl overflow-hidden max-w-4xl w-full p-0"
      >
        <h2 id="testimonial-video-title" className="sr-only">
          Video testimonial
        </h2>
        <button
          onClick={() => setVideoUrl(null)}
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FaTimes size={15} />
        </button>
        <iframe
          src={videoUrl ? (youtubeEmbed(videoUrl) ?? undefined) : undefined}
          title="Video testimonial"
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>

      {/* Submission form modal */}
      <Modal
        open={showForm}
        onClose={() => setShowForm(false)}
        labelledBy="testimonial-form-title"
        panelClassName="w-full max-w-xl"
      >
        <h2 id="testimonial-form-title" className="sr-only">
          Submit your testimonial
        </h2>
        <button
          onClick={() => setShowForm(false)}
          aria-label="Close testimonial form"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-error transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FaTimes size={16} />
        </button>
        <TestimonialForm onDone={() => setShowForm(false)} />
      </Modal>
    </motion.section>
  );
}
