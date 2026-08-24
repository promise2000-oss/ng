"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";
import cloudImg from "@/assets/images/core-services/cloud.jpg";
import consultingImg from "@/assets/images/core-services/consulting.jpg";
import webImg from "@/assets/images/core-services/web.jpg";
import networkingImg from "@/assets/images/core-services/networking.jpg";
import digitizationImg from "@/assets/images/core-services/digitization.jpg";
import posImg from "@/assets/images/core-services/pos.jpg";
import academyImg from "@/assets/images/core-services/academy.jpg";
import gadgetsImg from "@/assets/images/core-services/gadgets.jpg";
import dataProtectionImg from "@/assets/images/core-services/consulting.jpg";

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
];

const LIST_INDEX = (services: { title: string }[], current: string, delta: number) => {
  const i = services.findIndex((s) => s.title === current);
  return (i + delta + services.length) % services.length;
};

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
    <section className="w-full bg-white px-4 py-16 sm:px-8 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              <span className="text-primary">Our </span>
              <span className="text-accent">Core </span>
              <span className="text-primary">Services</span>
            </>
          }
          description="A full-stack offering — strategy, build, training, and hardware — under a single accountable partner."
          className="mb-14"
        />

        {/* Desktop: interactive selector */}
        <div className="hidden lg:grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-stretch">
          <div
            ref={listRef}
            role="tablist"
            aria-label="Our core services"
            onKeyDown={onListKeyDown}
            className="flex flex-col"
          >
            {services.map((service, i) => {
              const isActive = service.slug === activeSlug;
              return (
                <button
                  key={service.slug}
                  role="tab"
                  id={`service-tab-${service.slug}`}
                  aria-selected={isActive}
                  aria-controls="service-panel"
                  onClick={() => setActiveSlug(service.slug)}
                  className={`relative group text-left py-5 pr-6 border-b border-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-lg transition-colors duration-300 ${
                    isActive ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-active-bar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full"
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: EASE_OUT_EXPO }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-text-secondary/50"
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span
                        className={`font-semibold leading-snug transition-colors duration-300 ${
                          isActive ? "text-primary text-[17px]" : "text-text-primary text-[15px]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative bg-surface rounded-3xl overflow-hidden min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                role="tabpanel"
                id="service-panel"
                aria-labelledby={`service-tab-${active.slug}`}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <motion.div
                    initial={reduceMotion ? false : { scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-col flex-1 px-8 pb-8 pt-2">
                  <h3 className="text-display-md font-semibold text-primary leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mt-3 max-w-lg">
                    {active.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services/${active.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                    >
                      Explore {active.title.split(",")[0]}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
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

        {/* Mobile: expandable selector */}
        <div className="lg:hidden space-y-3">
          {services.map((service, i) => {
            const isOpen = mobileOpen === service.slug;
            return (
              <div
                key={service.slug}
                className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-accent/40 shadow-lg shadow-primary/5" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setMobileOpen(isOpen ? null : service.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-service-panel-${service.slug}`}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  <span className="font-mono text-xs text-accent" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-semibold text-sm text-text-primary">
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center"
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
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: EASE_OUT_EXPO }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="relative h-40 rounded-xl overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-text-secondary text-[13px] leading-relaxed mt-3">
                          {service.description}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 mt-3 text-accent font-semibold text-[13px]"
                        >
                          Explore {service.title.split(",")[0]}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97]"
          >
            Explore All Services
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}