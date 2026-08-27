"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "motion/react";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

import bg1 from "@/assets/images/services/23324.jpg";
import bg2 from "@/assets/images/services/futurism-perspective-digital-nomads-lifestyle.jpg";
import bg3 from "@/assets/images/services/WhatsApp Image 2026-08-27 at 7.45.40 PM.jpeg";
import cloudServices from "@/assets/images/services/Cloud_Services.png";
import MagneticButton from "@/components/MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion";

const academyAndDPOText = [
  "NICEGENE Digital Academy",
  "Get Certified and Job Ready",
  "NDPC-Certified DPCO",
  "Data Protection Compliance",
  "Professional Training Programs",
  "Data Protection Law & Practices",
  "Visit our Digital Academy",
  "Call +234 8060704412",
  "Email: info@nicegeneco.com.ng",
];

const servicesText = [
  "Cloud System Development",
  "IT Consulting & Digital Solutions",
  "Web & App Development",
  "System Networking & Infrastructure",
  "POS & Inventory Management",
  "NICEGENE Academy",
  "Data Protection & Compliance",
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
  cloudServices,
  bg1,
  bg2,
  bg3,
];

const services = [
  "Cloud System Development",
  "IT Consulting & Digital Solutions",
  "Web & App Development",
  "System Networking & Infrastructure",
  "POS & Inventory Management",
  "NICEGENE Academy",
  "Data Protection & Compliance",
];

const HEADLINE = "Nigeria's Premier IT Consulting & Digital Solutions Firm";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -50]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 200));

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

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

        {/* FULL-BLEED IMAGE SLIDESHOW */}
        <div
          className="absolute inset-0 z-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence>
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay — left-heavy for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                className={`rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  i === index ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
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