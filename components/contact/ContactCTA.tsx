"use client";

import { motion } from "motion/react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center"
    >
      <GridOverlay opacity={0.025} size={50} color="rgba(255,255,255,0.06)" />
      <FloatingOrbs
        orbs={[
          { size: 400, color: "bg-accent", x: 70, y: 20, duration: 20, delay: 0, blur: 130 },
          { size: 350, color: "bg-secondary", x: 20, y: 70, duration: 22, delay: 2, blur: 110 },
        ]}
      />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm">
          Let&apos;s discuss how Nicegene Technologies can help you scale with modern digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="tel:+2348060704412"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97]"
          >
            <FaPhoneAlt size={14} /> Call Us Now
          </a>
          <a
            href="https://wa.me/2348060704412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/25 text-white text-sm hover:bg-white/10 transition-all active:scale-[0.97]"
          >
            <FaWhatsapp size={14} /> WhatsApp Us
          </a>
        </div>
      </div>
    </motion.div>
  );
}
