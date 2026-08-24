"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";

function ShimmerButton() {
  return (
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
      style={{ mixBlendMode: "overlay" }}
    >
      <motion.div
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
        animate={{ x: ["-200%", "300%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function ServicesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <section ref={sectionRef} className="px-6 md:px-20 pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center"
      >
        <FloatingOrbs
          orbs={[
            { size: 300, color: "bg-accent", x: 80, y: 10, duration: 10, delay: 0, blur: 120 },
            { size: 250, color: "bg-secondary", x: 15, y: 80, duration: 12, delay: 2, blur: 100 },
          ]}
        />
        <GridOverlay opacity={0.025} size={50} color="rgba(3,236,238,0.08)" />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Have a Custom Project{" "}
            <motion.span
              className="text-accent inline-block"
              animate={{
                textShadow: isBtnHovered
                  ? [
                      "0 0 8px rgba(46,95,163,0.35)",
                      "0 0 16px rgba(46,95,163,0.15)",
                      "0 0 8px rgba(46,95,163,0.35)",
                    ]
                  : "0 0 0px rgba(46,95,163,0)",
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              in Mind?
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-white/70 mt-4 max-w-2xl mx-auto text-sm"
          >
            Our team of experts is ready to help you navigate your digital
            transformation journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.div
              className="relative"
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm overflow-hidden transition-all duration-300"
              >
                <ShimmerButton />
                <motion.span
                  animate={isBtnHovered ? { x: [0, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.8, repeat: isBtnHovered ? Infinity : 0 }}
                >
                  Get a Free Consultation
                </motion.span>
                <motion.span
                  animate={isBtnHovered ? { x: [0, 3, 0], opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 0.8, repeat: isBtnHovered ? Infinity : 0 }}
                >
                  <FaArrowRight size={12} />
                </motion.span>
              </Link>
            </motion.div>

            <motion.a
              href="https://wa.me/2348060704412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/5 hover:border-white/40 transition-all active:scale-[0.97]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp size={14} />
              </motion.span>
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
