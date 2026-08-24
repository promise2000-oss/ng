"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import { STORE_KEYS, loadStore } from "@/lib/store";
import { seedTestimonials } from "@/lib/seed-data";

type HomeReview = {
  tag: string;
  title: string;
  initials: string;
  name: string;
  service: string;
  rating: number;
};

const fallbackReviews: HomeReview[] = [
  {
    tag: "Cloud Services",
    title:
      "This team transformed our operations long before their official launch. Their cloud migration expertise brought our institution from manual systems to modern efficiency.",
    initials: "LS",
    name: "St. Gregory's College, Owerri",
    service: "Cloud Migration & Digitization",
    rating: 5,
  },
  {
    tag: "Cloud Services",
    title:
      "Nicegene Technologies Limited digitization expertise revolutionized our records management. From paper to digital - a seamless transition that solidified our trust in their vision.",
    initials: "VU",
    name: "St. Theresa's College, Awka",
    service: "Digitization & System Networking",
    rating: 5,
  },
  {
    tag: "POS & Inventory",
    title:
      "Their Point of Sales and inventory system installation was a game-changer for our pharmacy. Their system expertise demonstrated why we should trust them with our critical operations.",
    initials: "CP",
    name: "Care Plus Pharmacy, Ilaje, Lagos",
    service: "POS & Inventory Management",
    rating: 5,
  },
  {
    tag: "System Networking",
    title:
      "Their networking solutions have been the backbone of our institution's IT infrastructure. Reliable and consistent support.",
    initials: "ES",
    name: "St. Finbarr's College, Offa",
    service: "System Networking & Infrastructure",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const [reviews] = useState<HomeReview[]>(() => {
    const approved = loadStore(STORE_KEYS.testimonials, () => seedTestimonials)
      .filter((t) => t.status === "approved")
      .slice(0, 8)
      .map((t) => ({
        tag: t.service,
        title: t.text,
        initials: t.initials,
        name: t.name,
        service: t.service,
        rating: t.rating,
      }));
    return approved.length > 0 ? approved : fallbackReviews;
  });
  const [expanded, setExpanded] = useState(false);
  const visibleReviews = expanded ? reviews : reviews.slice(0, 4);

  return (
    <section className="relative bg-surface py-24 overflow-hidden">
      {/* BACKGROUND ANIMATIONS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedGradient
          duration={15}
          colors={[
            "rgba(15, 76, 129, 0.025)",
            "rgba(3, 236, 238, 0.02)",
            "rgba(255, 138, 0, 0.015)",
          ]}
        />
        <FloatingOrbs
          orbs={[
            { size: 600, color: "bg-secondary", x: 60, y: 20, duration: 25, delay: 0, blur: 150 },
            { size: 450, color: "bg-accent", x: 15, y: 60, duration: 20, delay: 3, blur: 130 },
            { size: 350, color: "bg-white", x: 80, y: 70, duration: 22, delay: 1, blur: 100 },
          ]}
        />
        <GridOverlay opacity={0.015} size={50} color="rgba(15, 76, 129, 0.15)" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <div className="flex items-center gap-2 text-sm text-text-primary mb-4">
              <motion.span
                className="w-2 h-2 bg-secondary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Testimonials
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-text-primary">
              What Our Clients Say About{" "}
              <span className="text-primary">Nicegene Technologies</span>
            </h2>

            <p className="text-text-primary/70 mt-5 leading-relaxed max-w-md">
              Hear from businesses, institutions and individuals whose operations
              were transformed by Nicegene Technologies.
            </p>

            <Link
              href="/testimonials/submit"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Share Your Experience
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* RIGHT COLUMN - 2x2 GRID */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {visibleReviews.map((item, i) => (
              <motion.div
                key={item.initials}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                className={`relative bg-white border rounded-2xl p-6 transition-shadow ${
                  i === 0
                    ? "border-accent/40 shadow-md"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {/* Ghosted quote mark */}
                <span className="absolute top-3 right-5 text-6xl text-primary/5 select-none leading-none">
                  &ldquo;
                </span>

                {/* Star rating */}
                <div className="flex gap-0.5 text-accent mb-3">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className={si < item.rating ? "text-accent" : "text-gray-300"}>
                      <StarIcon />
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-text-primary/80 leading-relaxed mb-5 line-clamp-4">
                  &ldquo;{item.title}&rdquo;
                </p>

                {/* Tag badge */}
                <span className="inline-block text-[10px] uppercase tracking-wider text-primary/50 font-semibold mb-3">
                  {item.tag}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-text-primary/60 truncate">
                      {item.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>

            {reviews.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {expanded ? "Show Less" : "See More Testimonials"}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
