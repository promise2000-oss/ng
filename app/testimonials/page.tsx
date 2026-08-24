"use client";

import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function TestimonialsPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <TestimonialsHero />
      <TestimonialsSection />
    </main>
  );
}