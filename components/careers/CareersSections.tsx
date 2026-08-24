"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import { FaEnvelope } from "react-icons/fa";
import projectsPerkImg from "@/assets/images/services/NICEGENE system networking and server setup.jpg";
import growthPerkImg from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import valuesPerkImg from "@/assets/images/events/team-working.jpg";

const perks: { image: StaticImageData; title: string; desc: string }[] = [
  {
    image: projectsPerkImg,
    title: "Hands-On, High-Scale Projects",
    desc: "Real exposure to serverless cloud architecture and institutional digital transformation.",
  },
  {
    image: growthPerkImg,
    title: "A Structured Growth Path",
    desc: "A route into our Academy's instructor and mentorship programmes for the right candidates.",
  },
  {
    image: valuesPerkImg,
    title: "Values You Can Build On",
    desc: "A culture rooted in honesty, excellence, integrity, and respect.",
  },
];

export default function CareersHero() {
  return (
    <section className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker" />
      <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
      <FloatingOrbs
        orbs={[
          { size: 400, color: "bg-secondary", x: 80, y: 25, duration: 20, delay: 0, blur: 130 },
          { size: 300, color: "bg-accent", x: 15, y: 60, duration: 24, delay: 2, blur: 110 },
        ]}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary text-sm uppercase tracking-[0.2em]"
        >
          Careers
        </motion.p>
        <TextReveal
          as="h1"
          delay={0.1}
          className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-white"
        >
          Build Africa&apos;s Digital Future With Us
        </TextReveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          NICEGENE Technologies is growing, and we are always interested in
          hearing from talented engineers, developers, consultants, and
          creatives who share our commitment to honesty, excellence, integrity,
          and respect.
        </motion.p>
      </div>
    </section>
  );
}

export function CareersContent() {
  return (
    <section className="relative bg-surface py-20 px-6 md:px-20 overflow-hidden">
      <AnimatedGradient
        duration={15}
        colors={[
          "rgba(15, 76, 129, 0.02)",
          "rgba(3, 236, 238, 0.015)",
          "rgba(255, 138, 0, 0.015)",
        ]}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="border-t-0 border-b-0 w-full text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Join <span className="text-primary">NICEGENE</span>
          </h2>
          <p className="text-text-primary/70 text-sm mt-3 max-w-xl mx-auto">
            We offer hands-on exposure to real, high-scale projects — from
            serverless cloud architecture to institutional digital
            transformation — alongside a structured path into our Academy&apos;s
            instructor and mentorship programmes for the right candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary mx-auto mb-5 overflow-hidden ring-1 ring-secondary/20">
                <Image
                  src={perk.image}
                  alt={perk.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-3">
                {perk.title}
              </h3>
              <p className="text-sm text-text-primary/70 leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-14 text-center"
        >
          <FloatingOrbs
            orbs={[
              { size: 300, color: "bg-accent", x: 80, y: 20, duration: 18, delay: 0, blur: 120 },
              { size: 250, color: "bg-secondary", x: 15, y: 70, duration: 20, delay: 1, blur: 100 },
            ]}
          />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto mb-6">
              <FaEnvelope size={26} />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              How to Apply
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              To apply, send your CV and a short note on what you&apos;d like to
              work on to{" "}
              <a
                href="mailto:info@nicegeneco.com.ng"
                className="text-accent font-semibold hover:underline"
              >
                info@nicegeneco.com.ng
              </a>
              . We review applications on a rolling basis and will reach out
              where there is a fit.
            </p>
            <a
              href="mailto:info@nicegeneco.com.ng?subject=Career%20Application"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
            >
              Send Your Application <FaEnvelope size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}