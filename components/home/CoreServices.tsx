"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import cloudImg from "@/assets/images/core-services/cloud.jpg";
import consultingImg from "@/assets/images/core-services/consulting.jpg";
import webImg from "@/assets/images/core-services/web.jpg";
import networkingImg from "@/assets/images/core-services/networking.jpg";
import digitizationImg from "@/assets/images/core-services/digitization.jpg";
import posImg from "@/assets/images/core-services/pos.jpg";
import academyImg from "@/assets/images/core-services/academy.jpg";
import gadgetsImg from "@/assets/images/core-services/gadgets.jpg";
import dataProtectionImg from "@/assets/images/core-services/data-protection.jpg";
import corporateEmailImg from "@/assets/images/core-services/corporate-email.jpg";

const services = [
  {
    slug: "cloud",
    title: "Cloud System Development, Migration & Operations",
    description:
      "Secure, scalable AWS architectures built around how your organization actually works.",
    image: cloudImg,
  },
  {
    slug: "consulting",
    title: "IT Consulting & Digital Solutions",
    description:
      "Strategic advisory that turns manual, paper-heavy operations into efficient digital workflows.",
    image: consultingImg,
  },
  {
    slug: "data-protection",
    title: "Data Protection & Compliance",
    description:
      "Licensed DPCO services — compliance audits, DPIAs, outsourced DPO, and NDPC registration under the Nigeria Data Protection Act, 2023.",
    image: dataProtectionImg,
  },
  {
    slug: "web",
    title: "Web & App Development",
    description:
      "Custom, responsive, and secure websites and applications built on modern frameworks.",
    image: webImg,
  },
  {
    slug: "networking",
    title: "System Networking & Infrastructure",
    description:
      "End-to-end LAN design, server setup, and technical infrastructure that keeps you connected and secure.",
    image: networkingImg,
  },
  {
    slug: "digitization",
    title: "Digitization & Records Management",
    description:
      "Converting paper-based records into structured, searchable digital systems.",
    image: digitizationImg,
  },
  {
    slug: "pos",
    title: "POS & Inventory Management Systems",
    description:
      "Complete retail automation, from hardware installation to real-time stock tracking.",
    image: posImg,
  },
  {
    slug: "academy",
    title: "NICEGENE Academy",
    description:
      "Industry-standard, instructor-led training in cloud computing, web development, and data analytics.",
    image: academyImg,
  },
  {
    slug: "gadgets",
    title: "Technology Gadget Sales",
    description:
      "Premium laptops and IT hardware from trusted global brands, backed by our own technical support.",
    image: gadgetsImg,
  },
  {
    slug: "corporate-email",
    title: "Corporate Email Setup",
    description:
      "Professional business email on your own domain — Google Workspace, Microsoft 365, or custom hosting, fully configured and secured.",
    image: corporateEmailImg,
  },
];

const LIST_INDEX = (services: { title: string }[], current: string, delta: number) => {
  const i = services.findIndex((s) => s.title === current);
  return (i + delta + services.length) % services.length;
};

function FloatingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(46, 95, 184, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(46, 95, 184, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
    </div>
  );
}

function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const [mobileOpen, setMobileOpen] = useState<string | null>(services[0].slug);
  const listRef = useRef<HTMLDivElement>(null);

  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  const onListKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const delta = e.key === "ArrowDown" ? 1 : -1;
    const next = LIST_INDEX(services, activeSlug, delta);
    setActiveSlug(services[next].slug);
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons?.[next]?.focus();
  };

  return (
    <section className="relative w-full px-4 py-20 sm:px-8 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#0a0f1a]" />
      <FloatingGrid />

      {/* Decorative orbs */}
      <GlowOrb className="w-[600px] h-[600px] -top-40 -left-40 bg-primary/20 blur-[150px]" />
      <GlowOrb className="w-[500px] h-[500px] -bottom-40 -right-40 bg-accent/15 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-6"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            What We Do
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">
                Core
              </span>
              <span className="absolute -inset-2 bg-accent/20 blur-xl rounded-full" aria-hidden="true" />
            </span>{" "}
            Services
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A full-stack offering — strategy, build, training, and hardware — under a single accountable partner.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(92,200,242,0.6)]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </motion.div>

        {/* Desktop: interactive selector */}
        <div className="hidden lg:grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-8 items-stretch">
          {/* Service List */}
          <div
            ref={listRef}
            role="tablist"
            aria-label="Our core services"
            onKeyDown={onListKeyDown}
            className="flex flex-col gap-2"
          >
            {services.map((service, i) => {
              const isActive = service.slug === activeSlug;
              return (
                <motion.button
                  key={service.slug}
                  role="tab"
                  id={`service-tab-${service.slug}`}
                  aria-selected={isActive}
                  aria-controls="service-panel"
                  onClick={() => setActiveSlug(service.slug)}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  className={`relative group text-left py-4 px-5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 shadow-[0_0_30px_rgba(92,200,242,0.1)]"
                      : "bg-transparent hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-active-bar"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-accent to-blue-400 rounded-full shadow-[0_0_12px_rgba(92,200,242,0.8)]"
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: EASE_OUT_EXPO }}
                      aria-hidden="true"
                    />
                  )}

                  <span className="flex items-center gap-4">
                    <span className="flex flex-col gap-0.5">
                      <span
                        className={`font-semibold leading-snug transition-all duration-300 ${
                          isActive ? "text-white text-[15px]" : "text-white/60 text-[14px] group-hover:text-white/80"
                        }`}
                      >
                        {service.title}
                      </span>
                    </span>
                    <span
                      className={`ml-auto font-mono text-[11px] transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-white/20"
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Service Panel */}
          <div className="relative rounded-3xl overflow-hidden min-h-[520px] border border-white/10">
            {/* Panel glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 rounded-3xl blur-sm pointer-events-none" />

            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  role="tabpanel"
                  id="service-panel"
                  aria-labelledby={`service-tab-${active.slug}`}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  className="absolute inset-0 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 shrink-0 overflow-hidden">
                    <motion.div
                      initial={reduceMotion ? false : { scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/30 to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wider">Service</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-8 pb-8 pt-4">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-lg">
                      {active.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/services/${active.slug}`}
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-accent font-semibold text-sm hover:from-accent/30 hover:to-accent/20 hover:border-accent/50 transition-all duration-300"
                      >
                        Explore {active.title.split(",")[0]}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: expandable selector */}
        <div className="lg:hidden space-y-4">
          {services.map((service, i) => {
            const isOpen = mobileOpen === service.slug;
            return (
              <motion.div
                key={service.slug}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? "bg-white/10 border-accent/30 shadow-[0_0_40px_rgba(92,200,242,0.15)]"
                    : "bg-white/5 border-white/10 hover:bg-white/[0.07]"
                }`}
              >
                <button
                  onClick={() => setMobileOpen(isOpen ? null : service.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-service-panel-${service.slug}`}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  <span className="flex-1 font-semibold text-sm text-white/90">
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-7 h-7 rounded-lg bg-accent/20 text-accent flex items-center justify-center"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`mobile-service-panel-${service.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: EASE_OUT_EXPO }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/80 to-transparent" />
                        </div>
                        <p className="text-white/60 text-[13px] leading-relaxed mt-4">
                          {service.description}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-[13px] group"
                        >
                          Explore {service.title.split(",")[0]}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-accent to-blue-400 text-white font-semibold text-sm shadow-[0_0_40px_rgba(92,200,242,0.3)] hover:shadow-[0_0_60px_rgba(92,200,242,0.5)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-blue-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <span className="relative">Explore All Services</span>
            <svg viewBox="0 0 24 24" fill="none" className="relative h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
