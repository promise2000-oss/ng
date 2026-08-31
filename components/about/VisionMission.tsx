"use client";

import { motion } from "motion/react";
import { FiEye, FiTarget } from "react-icons/fi";
import Reveal from "@/components/Reveal";

export default function VisionMission() {
  return (
    <section className="px-6 md:px-20 py-20 bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <Reveal variant="fadeLeft" delay={0.1}>
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0"
              >
                <FiEye size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
            </div>
            <p className="text-text-primary leading-relaxed text-justify">
              To be the Technology partner of choice for startups, institutions, and enterprises building African's next chapter of digital growth.
            </p>
          </motion.div>
        </Reveal>
        <Reveal variant="fadeRight" delay={0.2}>
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0"
              >
                <FiTarget size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
            </div>
            <p className="text-text-primary leading-relaxed text-justify">
              To deliver digital engineering and IT consulting of uncompromising Technical Quality, rooted in commercial realities, and delivered with reliability modern Business demand.
             </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
