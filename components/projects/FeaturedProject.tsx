"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaServer, FaSchool, FaUsers, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";

export default function FeaturedProject() {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden border-t border-gray-200">
      <AnimatedGradient
        duration={15}
        colors={[
          "rgba(15, 76, 129, 0.02)",
          "rgba(3, 236, 238, 0.015)",
          "rgba(255, 138, 0, 0.015)",
        ]}
      />
      <FloatingOrbs
        orbs={[
          { size: 400, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 130 },
          { size: 300, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 110 },
        ]}
      />
      <GridOverlay opacity={0.015} size={50} color="rgba(15, 76, 129, 0.1)" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-[10px] uppercase tracking-[0.2em] font-semibold mb-5">
                <FaServer size={10} /> Featured Project
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Cloud-Native CBT &amp; School Management Platform
              </h2>
              <p className="text-white/80 text-sm mt-5 leading-relaxed">
                We designed and deployed a cloud-native, multi-tenant
                serverless System for the Lagos Archdiocesan Education
                Commission (LAEC) to digitally transform the administration of
                its CBT exams.
              </p>
              <p className="text-white/80 text-sm mt-4 leading-relaxed">
                Built on a serverless architecture, the platform provides a
                secure, scalable, and highly available environment that
                supports the day-to-day operations of over 10 schools and more
                than 10,000 students, teachers, and administrative staff.
              </p>
              <p className="text-white/80 text-sm mt-4 leading-relaxed">
                The solution enables centralized management while allowing each
                school to operate independently within a shared infrastructure
                — ensuring high performance, operational efficiency, seamless
                scalability, and zero service downtime.
              </p>
              <Link
                href="https://www.laaec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
              >
                Visit Portal <FaExternalLinkAlt size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm"
              >
                <FaSchool className="text-secondary mx-auto mb-3" size={24} />
                <p className="text-2xl sm:text-3xl font-bold text-white break-words">10+</p>
                <p className="text-white/70 text-xs mt-2">Schools supported</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm"
              >
                <FaUsers className="text-secondary mx-auto mb-3" size={24} />
                <p className="text-2xl sm:text-3xl font-bold text-white break-words">10,000+</p>
                <p className="text-white/70 text-xs mt-2">Students, teachers &amp; staff</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm"
              >
                <FaCheckCircle className="text-secondary mx-auto mb-3" size={24} />
                <p className="text-2xl sm:text-3xl font-bold text-white break-words">Zero</p>
                <p className="text-white/70 text-xs mt-2">Service downtime</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm"
              >
                <FaServer className="text-secondary mx-auto mb-3" size={24} />
                <p className="text-xl sm:text-3xl font-bold text-white break-words">Serverless</p>
                <p className="text-white/70 text-xs mt-2">Multi-tenant architecture</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}