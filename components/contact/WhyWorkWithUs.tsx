"use client";

import { motion } from "motion/react";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "@/components/Reveal";

const benefits = [
  { title: "Fast Response Time", desc: "We respond within 24 hours on all inquiries." },
  { title: "Expert Team", desc: "Certified engineers and industry professionals." },
  { title: "Tailored Solutions", desc: "Every solution is custom-built for your needs." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const benefitVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

export default function WhyWorkWithUs() {
  return (
    <div className="space-y-8">
      <Reveal variant="fadeLeft">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Why Work With Us?</h2>
          <p className="text-text-primary text-sm leading-relaxed">
            We combine technical expertise with a genuine commitment to your success. Every project we undertake is backed by
            deep knowledge, integrity, and a passion for redefining what technology can do for your organization.
          </p>
        </div>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.1}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl p-6 divide-y divide-gray-200"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={benefitVariants}
              whileHover={{ x: 5 }}
              className={`flex gap-4 ${i === 0 ? "pb-5" : i === benefits.length - 1 ? "pt-5" : "py-5"}`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0"
              >
                <FaCheckCircle size={16} />
              </motion.div>
              <div>
                <h4 className="text-sm font-semibold">{b.title}</h4>
                <p className="text-text-primary text-xs mt-0.5">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.2}>
        <motion.div
          whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0 mt-0.5"
          >
            <FaMapMarkerAlt size={16} />
          </motion.div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Visit Us</h4>
            <p className="text-text-primary text-xs leading-relaxed">
              Road 15, Lekki Gardens Estate Phase 3, Hitech Road, 106104, Lekki-Ajah, Lagos, Nigeria
            </p>
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
