"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import CountUp from "@/components/animations/CountUp";
import BackgroundVideo from "@/components/animations/BackgroundVideo";
import GridOverlay from "@/components/animations/GridOverlay";
import eventImg from "@/assets/images/events/NICEGENE GRAND LAUNCH.jpg";

export default function EventsHero({
  upcomingCount,
  pastCount,
}: {
  upcomingCount: number;
  pastCount: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden">
      <BackgroundVideo
        src="/videos/video-dpo2.mp4"
        overlayOpacity={0.92}
        gradientFrom="rgba(27, 58, 107, 0.95)"
        gradientVia="rgba(27, 58, 107, 0.88)"
        gradientTo="rgba(13, 33, 64, 0.92)"
      />
      <GridOverlay opacity={0.025} size={60} color="rgba(156, 195, 232, 0.12)" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-[0.05] blur-[150px] rounded-full pointer-events-none"
        style={{ y: parallaxY }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 overflow-hidden ring-2 ring-white/20"
        >
          <Image
            src={eventImg}
            alt="NICEGENE Events"
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent-light text-sm uppercase tracking-[0.2em] font-semibold"
        >
          NICEGENE Events
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mt-4 text-white"
        >
          Events, Launches &amp; <span className="text-accent-light">Celebrations</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Company launches, training graduations, workshops, webinars, community outreach, and
          speaking engagements — explore what is coming up and relive our best moments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-8 mt-8 text-sm text-white/80"
        >
          <span>
            <strong className="text-white text-xl">
              <CountUp to={upcomingCount} />
            </strong>{" "}
            upcoming
          </span>
          <span>
            <strong className="text-white text-xl">
              <CountUp to={pastCount} />
            </strong>{" "}
            past events
          </span>
          <span>
            <strong className="text-white text-xl">
              <CountUp to={pastCount + upcomingCount} />
            </strong>{" "}
            total
          </span>
        </motion.div>
      </div>
    </section>
  );
}