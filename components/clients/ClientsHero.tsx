"use client";

import { motion } from "motion/react";
import Image from "next/image";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import clientsImg from "@/assets/images/events/team-working.jpg";

export default function ClientsHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <FloatingOrbs
        orbs={[
          { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
          { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
        ]}
      />
      <GridOverlay opacity={0.06} size={60} color="rgba(255,255,255,0.08)" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] as const }}
        >
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 overflow-hidden ring-2 ring-white/20">
            <Image
              src={clientsImg}
              alt="Our Clients"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-accent-light text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Our Clients
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Building Digital Foundations for <span className="text-accent-light">Schools, Businesses &amp; Institutions</span>
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Explore the institutions and businesses that trust NICEGENE Technologies to design,
            build, and manage their secure cloud systems, infrastructure, and digital services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}