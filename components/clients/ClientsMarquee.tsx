"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { FaBuilding } from "react-icons/fa";
import { useClients } from "@/lib/hooks/useClients";
import { seedClients } from "@/lib/seed-data";

export default function ClientsMarquee() {
  const { data: apiClients } = useClients();

  const clients = useMemo(() => {
    if (apiClients && apiClients.length > 0) return apiClients;
    return seedClients;
  }, [apiClients]);

  const featured = clients.filter((c: any) => c.featured && c.visible);

  if (featured.length === 0) return null;

  const row = [...featured, ...featured];

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold text-center"
        >
          Organisations We Have Served
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="animate-marquee gap-8 px-4">
          {row.map((client: any, i: number) => (
            <div
              key={`${client._id || client.id}-${i}`}
              className="flex items-center gap-3 shrink-0 bg-surface border border-gray-100 rounded-2xl px-5 py-3"
            >
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                {client.initials}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-text-primary whitespace-nowrap">
                  {client.name}
                </p>
                <p className="text-[11px] text-text-secondary whitespace-nowrap">
                  {client.sector} · {client.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-6">
        <a
          href="/clients"
          className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-primary transition-colors"
        >
          <FaBuilding size={13} />
          View all clients &amp; case studies
        </a>
      </div>
    </section>
  );
}
