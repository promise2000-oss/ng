"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "motion/react";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

import bg1 from "@/assets/images/services/23324.jpg";
import bg2 from "@/assets/images/services/futurism-perspective-digital-nomads-lifestyle.jpg";
import bg3 from "@/assets/images/services/WhatsApp Image 2026-08-27 at 7.45.40 PM.jpeg";
import dataCenter from "@/assets/images/services/modern-data-center.jpg";
import serverRack from "@/assets/images/services/server-rack-equipment.jpg";
import MagneticButton from "@/components/MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion";

const academyAndDPOText = [
  "Compliance Audits",
  "Data Protection Impact Assessments (DPIAs)",
  "Outsourced DPO Services",
  "NDPC Registration & Filing Support",
  "Policy & Documentation Development",
  "Staff & Vendor Training",
  "Breach Response & Notification Support",
  "Ongoing Compliance Monitoring",
];

const servicesText = [
  "Google Workspace Setup",
  "Microsoft 365 Setup",
  "Zoho Mail Setup",
  "DNS & MX Configuration",
  "SPF / DKIM / DMARC Security",
  "Domain & Mailbox Configuration",
  "Platform Setup & Migration",
  "Security & Access Management",
  "Corporate Email — Set Up, Secured & Migrated by NICEGENE",
];

const academyCoursesText = [
  "Frontend Web Development",
  "Cloud Computing",
  "Product Design",
  "Project Management",
  "Cybersecurity",
  "Data Analytics",
  "Digital Marketing",
  "Video Editing",
  "Web3 Technologies",
  "Graphics Design",
];

const images = [
  dataCenter,
  serverRack,
  bg1,
  bg2,
  bg3,
];

const SLIDE_INTERVAL = 5000;
const CROSSFADE_MS = 1400;

const services = [
  "Cloud System Development",
  "Web & App Development",
  "Data Protection & Compliance",
  "IT Consulting & Digital Solutions",
  "System Networking & Infrastructure",
  "NICEGENE Academy",
  "Point-of-Sales (POS) & Inventory Management",
];

const HEADLINE = "Premier IT Consulting & Digital Solutions Firm";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -50]);
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const indexRef = useRef(0);
  const crossfadingRef = useRef(false);
  const pausedRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayImgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const preloadRef = useRef<HTMLImageElement | null>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 200));

  // Preload next image whenever index changes
  useEffect(() => {
    const nextIdx = (index + 1) % images.length;
    const nextSrc = images[nextIdx];
    const img = new window.Image();
    img.src = nextSrc.src;
    preloadRef.current = img;
  }, [index]);

  // Crossfade: set overlay opacity via ref, swap index after transition
  const crossfade = (to: number) => {
    if (crossfadingRef.current) return;
    crossfadingRef.current = true;

    // Set overlay image source and fade in
    if (overlayImgRef.current) {
      overlayImgRef.current.src = images[to].src;
    }
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
    }

    fadeTimerRef.current = setTimeout(() => {
      // Swap base to new image, hide overlay
      setIndex(to);
      indexRef.current = to;
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
      }
      crossfadingRef.current = false;
    }, CROSSFADE_MS);
  };

  // Stable interval — reads from refs, never re-creates
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!crossfadingRef.current && !pausedRef.current) {
        const next = (indexRef.current + 1) % images.length;
        crossfade(next);
      }
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(timerRef.current ?? undefined);
      clearTimeout(fadeTimerRef.current ?? undefined);
    };
  }, []);

  const entrance = (delay: number, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: EASE_OUT_EXPO },
  });

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen overflow-hidden flex items-[35%]"
      >
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-secondary opacity-[0.06] blur-[120px] rounded-full pointer-events-none"
          style={{ y: parallaxY }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -bottom-0 -left-20 w-[300px] h-[300px] bg-accent opacity-[0.04] blur-[100px] rounded-full pointer-events-none"
          style={{ y: useTransform(scrollY, [0, 500], [0, 30]) }}
          aria-hidden="true"
        />

        {/* CENTERED CONTENT */}
        <div className="relative z-10 w-full px-6 lg:px-16 pt-8 pb-24 text-center">
          {/* Eyebrow */}
          <motion.div
            {...entrance(0.25, 0.5)}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.span
              className={''}
              animate={reduceMotion ? {} : { scale: [1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Headline — masked word reveal */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            {HEADLINE.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={reduceMotion ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.45 + i * 0.055,
                    duration: reduceMotion ? 0 : 0.85,
                    ease: EASE_OUT_EXPO,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...entrance(1.15, 0.6)}
            className="text-white/80 text-base lg:text-lg mt-3 max-w-2xl mx-auto"
          >
            We design, build, and manage secure cloud systems, digital
            infrastructure, and technology training that power schools,
            businesses, and public institutions across Africa.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            {...entrance(1.35, 0.6)}
            className="flex flex-wrap items-center justify-center gap-4 mt-7"
          >
            <MagneticButton strength={10}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Get a Free Consultation
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* PILLS */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {services.map((item, i) => (
              <motion.span
                key={item}
                initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.55 + i * 0.05, duration: 0.4, ease: EASE_OUT_EXPO }}
                className="
                  px-6 py-3 rounded-full
                  text-sm text-white
                  bg-primary
                  transition-colors duration-300
                  hover:bg-accent
                "
              >
                {item.toUpperCase()}
              </motion.span>
            ))}
          </div>
        </div>

        {/* FULL-BLEED IMAGE SLIDESHOW — ref-driven crossfade */}
        <div
          className="absolute inset-0 z-0"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Base layer — current image */}
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Overlay layer — fades in via ref, no React re-render */}
          <div
            ref={overlayRef}
            className="absolute inset-0"
            style={{
              opacity: 0,
              transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
              willChange: "opacity",
            }}
          >
            <Image
              ref={overlayImgRef}
              src={images[0]}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Gradient overlay — left-heavy for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
        </div>

        {/* Scroll-to-explore cue */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
          className="absolute bottom-10 left-10 hidden lg:flex flex-col items-center gap-3 z-20"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
            Scroll to explore
          </span>
          <span className="relative h-14 w-px bg-white/20 overflow-hidden">
            <motion.span
              className="absolute left-0 top-0 h-4 w-px bg-white"
              animate={{ y: [0, 56] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>

        {/* Handoff: hero dark fades into the light marquee band */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </section>

      {/* MARQUEE SECTION */}
      <div className="w-full bg-white overflow-hidden border-y border-gray-200">
        {/* Marquee 1: Academy + Data Protection */}
        <div className="py-3.5 overflow-hidden group">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
            {[...academyAndDPOText, ...academyAndDPOText].map((item, i) => (
              <span
                key={`m1-${i}`}
                className="text-text-primary font-semibold text-sm sm:text-base whitespace-nowrap tracking-wide"
              >
                {item}
                <span className="mx-6 text-accent" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Marquee 2: Services */}
        <div className="py-3.5 overflow-hidden border-t border-gray-200 group">
          <div className="flex w-max animate-marquee-reverse gap-10 group-hover:[animation-play-state:paused]">
            {[...servicesText, ...servicesText].map((item, i) => (
              <span
                key={`m2-${i}`}
                className="text-text-primary/60 text-sm sm:text-base whitespace-nowrap"
              >
                {item}
                <span className="mx-6 text-accent/60" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Marquee 3: Academy Courses */}
        <div className="py-3.5 overflow-hidden border-t border-gray-200 bg-primary/[0.03] group">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
            {[...academyCoursesText, ...academyCoursesText].map((item, i) => (
              <span
                key={`m3-${i}`}
                className="text-primary font-medium text-sm sm:text-base whitespace-nowrap"
              >
                {item}
                <span className="mx-6 text-accent" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DPCO CERTIFICATION BADGE */}
      <section className="w-full bg-gradient-to-r from-primary via-primary-dark to-primary border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <FaShieldAlt size={28} className="text-accent-light" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-accent-light text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                NDPC-Certified
              </p>
              <h2 className="text-white text-lg md:text-xl font-bold leading-snug">
                Licensed Data Protection Compliance Organization (DPCO)
              </h2>
              <p className="text-white/70 text-sm mt-1 max-w-2xl">
                We&apos;re officially licensed by the Nigeria Data Protection Commission &mdash; helping schools,
                businesses, and institutions across Nigeria build lawful, secure, and audit-ready data protection practices.
              </p>
              <p className="text-accent-light/80 text-xs mt-2 font-mono">
                License No: NDPC/DPCO/XXXX {/* TODO: Replace with actual NDPC license number */}
              </p>
            </div>
            <Link
              href="/services/data-protection"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97]"
            >
              Explore Our Data Protection Services
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}