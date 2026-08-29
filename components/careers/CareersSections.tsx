"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import { FaEnvelope, FaRocket, FaGraduationCap, FaHeart, FaCheck } from "react-icons/fa";
import cloudProjectsImg from "@/assets/images/services/cloud-projects.jpg";
import careerGrowthImg from "@/assets/images/services/career-growth.jpg";
import teamworkValuesImg from "@/assets/images/services/teamwork-values.jpg";

const imagePerks = [
  {
    image: cloudProjectsImg,
    title: "Hands-On, High-Scale Projects",
    desc: "Real exposure to serverless cloud architecture and institutional digital transformation.",
    icon: <FaRocket className="text-white" size={20} />,
  },
  {
    image: careerGrowthImg,
    title: "A Structured Growth Path",
    desc: "A route into our Academy's instructor and mentorship programmes for the right candidates.",
    icon: <FaGraduationCap className="text-white" size={20} />,
  },
];

const textPerk = {
  title: "Values You Can Build On",
  desc: "A culture rooted in honesty, excellence, integrity, and respect.",
  icon: <FaHeart className="text-primary" size={24} />,
  values: ["Honesty", "Excellence", "Integrity", "Respect"],
};

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
          className="text-[#87CEEB] text-sm uppercase tracking-[0.2em]"
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
          {imagePerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl overflow-hidden h-80 cursor-pointer"
            >
              <Image
                src={perk.image}
                alt={perk.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3"
                >
                  {perk.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5"
            >
              {textPerk.icon}
            </motion.div>

            <h3 className="text-lg font-semibold text-text-primary mb-3">
              {textPerk.title}
            </h3>
            <p className="text-sm text-text-primary/70 leading-relaxed mb-6">
              {textPerk.desc}
            </p>

            <div className="space-y-3">
              {textPerk.values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                    className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center"
                  >
                    <FaCheck className="text-secondary text-xs" />
                  </motion.div>
                  <span className="text-sm font-medium text-text-primary">{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
          </motion.div>
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
