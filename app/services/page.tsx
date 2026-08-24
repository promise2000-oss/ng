import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Our Services — NICEGENE TECHNOLOGIES",
  description:
    "Cloud system development & operations, IT consulting, web and app development, system networking, digitization, POS & inventory systems, NICEGENE Academy training, and technology gadget sales.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  );
}
