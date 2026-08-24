"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import CountUp from "@/components/animations/CountUp";
import TextReveal from "@/components/animations/TextReveal";
import BackgroundVideo from "@/components/animations/BackgroundVideo";
import GridOverlay from "@/components/animations/GridOverlay";

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <>
      <section ref={sectionRef} className="relative px-6 md:px-20 py-28 overflow-hidden">
        <BackgroundVideo
          src="/videos/drone-video.mp4"
          overlayOpacity={0.9}
          gradientFrom="rgba(15, 76, 129, 0.94)"
          gradientVia="rgba(15, 76, 129, 0.85)"
          gradientTo="rgba(10, 61, 110, 0.9)"
        />
        <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.03] blur-[120px] rounded-full pointer-events-none"
          style={{ y: parallaxY }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-sm uppercase tracking-widest"
          >
            About Nicegene Technologies
          </motion.p>

          <TextReveal
            as="h1"
            className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white"
            delay={0.1}
          >
            Driving Digital Transformation Across Africa
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm md:text-base mt-4 font-medium"
          >
            Cloud Excellence &bull; Digital Infrastructure &bull; Professional
            Technology Training
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
          >
            NICEGENE Technologies is a Lagos-based IT consulting and digital
            solutions firm built to close the gap between traditional, manual
            operations and modern digital efficiency. We provide end-to-end
            technology integration for schools, businesses, and public
            institutions, delivered through a focused portfolio of cloud,
            infrastructure, development, and training services.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.4 }}
          >
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Explore Our Work <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-y border-gray-200 py-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <p className="text-2xl font-semibold text-primary">
              <CountUp to={100} suffix="+" /> 
            </p>
            <p className="text-text-primary text-sm">Projects Delivered</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <p className="text-2xl font-semibold text-primary">
              <CountUp to={5} suffix="+" />
            </p>
            <p className="text-text-primary text-sm">Institution Partners</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <p className="text-2xl font-semibold text-primary">
              <CountUp to={100} suffix="%" />
            </p>
            <p className="text-text-primary text-sm">Client Satisfaction</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <p className="text-2xl font-semibold text-primary">24/7</p>
            <p className="text-text-primary text-sm">Support System</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
