"use client";

import PartnersHero from "@/components/partners/PartnersHero";
import PartnersSection from "@/components/partners/PartnersSection";

export default function PartnersPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <PartnersHero />
      <PartnersSection />
    </main>
  );
}