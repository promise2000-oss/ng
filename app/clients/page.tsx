"use client";

import ClientsHero from "@/components/clients/ClientsHero";
import ClientsSection from "@/components/clients/ClientsSection";

export default function ClientsPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <ClientsHero />
      <ClientsSection />
    </main>
  );
}