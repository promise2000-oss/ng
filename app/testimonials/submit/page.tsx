"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import TestimonialForm from "@/components/testimonials/TestimonialForm";

export default function TestimonialSubmitPage() {
  const [done, setDone] = useState(false);

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
      <section className="relative bg-primary overflow-hidden">
        <FloatingOrbs
          orbs={[
            { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
            { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
          ]}
        />
        <GridOverlay opacity={0.06} size={60} color="rgba(255,255,255,0.08)" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] as const }}
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-6"
            >
              <FaArrowLeft size={12} /> Back to testimonials
            </Link>
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar key={i} size={18} />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              How Did <span className="text-accent-light">We Do?</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              Thank you for choosing NICEGENE Technologies. Tell us about your experience working
              with our team — your feedback helps us improve and helps others decide with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-16 md:py-20">
        <FloatingOrbs
          orbs={[
            { size: 400, color: "bg-secondary", x: 85, y: 40, duration: 24, delay: 2, blur: 130 },
            { size: 300, color: "bg-accent", x: 10, y: 70, duration: 20, delay: 1, blur: 110 },
          ]}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-xl shadow-primary/5">
            <TestimonialForm
              onDone={() => {
                setDone(true);
              }}
            />
          </div>
          {done && (
            <p className="text-center mt-6 text-sm text-text-secondary">
              <Link href="/testimonials" className="font-semibold text-accent hover:underline">
                View published testimonials
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}