"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { FaBuilding, FaQuoteLeft, FaSearch } from "react-icons/fa";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import Reveal from "@/components/Reveal";
import { useClients } from "@/lib/hooks/useClients";
import { seedClients, clientSectors, type Client } from "@/lib/seed-data";

const sectorIconMap: Record<string, string> = {
  Education: "bg-blue-50 text-accent border-blue-100",
  Healthcare: "bg-red-50 text-red-600 border-red-100",
  Retail: "bg-green-50 text-green-700 border-green-100",
  Government: "bg-amber-50 text-amber-600 border-amber-100",
  Legal: "bg-purple-50 text-purple-700 border-purple-100",
  Media: "bg-pink-50 text-pink-600 border-pink-100",
};

export default function ClientsSection() {
  const { data: apiClients } = useClients();
  const [sector, setSector] = useState<string>("All");
  const [service, setService] = useState<string>("All");
  const [query, setQuery] = useState("");

  const clients = useMemo<Client[]>(() => {
    if (apiClients && apiClients.length > 0) return apiClients as unknown as Client[];
    return seedClients;
  }, [apiClients]);

  const services = useMemo(
    () => Array.from(new Set(clients.map((c) => c.service))).sort(),
    [clients]
  );

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      if (sector !== "All" && c.sector !== sector) return false;
      if (service !== "All" && c.service !== service) return false;
      if (query && !c.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [clients, sector, service, query]);

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
            Clients We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Trusted by Institutions &amp; <span className="text-accent">Businesses</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base">
            From single-branch retailers to multi-institution education commissions — explore the
            organisations we have helped transform.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-10">
          <div className="flex flex-wrap gap-2 flex-1">
            {["All", ...clientSectors].map((s) => (
              <button
                key={s}
                onClick={() => setSector(s)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${
                  sector === s
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <select
              aria-label="Filter clients by service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="px-4 py-2 rounded-full text-[13px] font-medium border border-gray-200 bg-white text-text-secondary focus:outline-none focus:border-accent"
            >
              <option value="All">All Services</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="relative">
              <FaSearch
                size={13}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50"
              />
              <input
                aria-label="Search clients"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clients..."
                className="pl-10 pr-4 py-2 rounded-full text-[13px] font-medium border border-gray-200 bg-white text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent w-40"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((client) => (
            <motion.div
              key={client.id}
              layout
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {client.initials}
                </div>
                <div className="flex flex-col items-end gap-2">
                  {client.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-white bg-accent px-2.5 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${sectorIconMap[client.sector] ?? "bg-surface text-text-secondary border-gray-200"}`}
                  >
                    {client.sector}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-text-primary leading-snug">{client.name}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-[11px] text-text-secondary bg-surface border border-gray-100 px-2.5 py-1 rounded-full">
                  {client.service}
                </span>
                <span className="text-[11px] text-text-secondary bg-surface border border-gray-100 px-2.5 py-1 rounded-full">
                  Since {client.year}
                </span>
              </div>
              {client.caseStudy && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FaQuoteLeft size={11} className="text-accent" />
                    <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                      Case Study
                    </span>
                  </div>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {client.caseStudy}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <FaBuilding size={40} className="text-gray-300 mx-auto mb-4" />
            <p className="text-text-secondary text-sm">
              No clients match your filters. Try adjusting the sector or service.
            </p>
          </div>
        )}

        <Reveal>
          <div className="mt-16 bg-surface border border-gray-100 rounded-3xl px-8 md:px-12 py-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary">
              Your organisation could be next.
            </h3>
            <p className="text-text-secondary text-sm mt-2 max-w-xl mx-auto">
              We bring the same standard of reliability, security, and craftsmanship to every
              client — from a single-branch retail store to a multi-institution commission.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
            >
              Start a Conversation
            </a>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}