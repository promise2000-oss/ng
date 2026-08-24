"use client";

import { motion } from "motion/react";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import WhyWorkWithUs from "@/components/contact/WhyWorkWithUs";
import ContactCTA from "@/components/contact/ContactCTA";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";

export default function ContactPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <ContactHero />
      <ContactCards />

      {/* FORM + SIDEBAR */}
      <section className="relative bg-surface py-20 px-6 md:px-20 overflow-hidden">
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
            { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
            { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
          ]}
        />
        <GridOverlay opacity={0.015} size={50} color="rgba(15, 76, 129, 0.1)" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Send Us a Message
            </h2>
            <p className="text-text-primary/70 text-sm mt-2 max-w-xl mx-auto">
              Fill out the form below and we&apos;ll respond promptly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <WhyWorkWithUs />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20">
        <ContactCTA />
      </section>
    </main>
  );
}
