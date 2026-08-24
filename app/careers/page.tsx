import type { Metadata } from "next";
import CareersHero, { CareersContent } from "@/components/careers/CareersSections";

export const metadata: Metadata = {
  title: "Careers — NICEGENE TECHNOLOGIES",
  description:
    "Build Africa's digital future with NICEGENE Technologies. Join a team of engineers, consultants, and trainers delivering digital transformation across Nigeria.",
};

export default function CareersPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <CareersHero />
      <CareersContent />
    </main>
  );
}