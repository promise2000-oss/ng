"use client";

import { motion } from "motion/react";
import TextReveal from "@/components/animations/TextReveal";
import GridOverlay from "@/components/animations/GridOverlay";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import type { LegalPageContent } from "@/lib/legal-content";

export default function LegalLayout({ content }: { content: LegalPageContent }) {
  return (
    <main className="w-full bg-background text-text-primary">
      <section className="relative px-6 md:px-20 pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker" />
        <GridOverlay opacity={0.025} size={60} color="rgba(3,236,238,0.12)" />
        <FloatingOrbs
          orbs={[
            { size: 400, color: "bg-secondary", x: 10, y: 25, duration: 20, delay: 0, blur: 130 },
            { size: 300, color: "bg-accent", x: 80, y: 60, duration: 24, delay: 2, blur: 110 },
          ]}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary text-sm uppercase tracking-[0.2em]"
          >
            Policies &amp; Legal
          </motion.p>
          <TextReveal
            as="h1"
            delay={0.1}
            className="text-4xl md:text-5xl font-semibold leading-tight mt-4 text-white"
          >
            {content.title}
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {content.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-xs mt-4 uppercase tracking-widest"
          >
            Last updated: {content.updated}
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 md:px-20 py-16 overflow-hidden">
        <AnimatedGradient
          duration={18}
          colors={[
            "rgba(3, 236, 238, 0.018)",
            "rgba(255, 138, 0, 0.012)",
            "rgba(15, 76, 129, 0.015)",
          ]}
        />
        <GridOverlay opacity={0.012} size={60} color="rgba(3,236,238,0.1)" />
        <FloatingOrbs
          orbs={[
            { size: 320, color: "bg-accent", x: 88, y: 18, duration: 20, delay: 0, blur: 120 },
            { size: 260, color: "bg-secondary", x: 14, y: 72, duration: 24, delay: 3, blur: 110 },
          ]}
        />
        <div className="relative z-10 max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
          {content.intro?.map((p, i) => (
            <p key={i} className="text-text-primary/80 leading-relaxed mb-5">
              {p}
            </p>
          ))}

          <div className="mt-4 space-y-10">
            {content.sections.map((section, i) => (
              <section key={i} className="border-t border-gray-100 pt-8">
              {section.heading && (
                <TextReveal
                  as="h2"
                  className="text-xl md:text-2xl font-semibold text-primary mb-4"
                >
                  {section.heading}
                </TextReveal>
              )}
                {section.paragraphs?.map((p, pi) => (
                  <p key={pi} className="text-text-primary/80 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-text-primary/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphsEnd?.map((p, pi) => (
                  <p key={pi} className="text-text-primary/80 leading-relaxed mt-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="border-t border-gray-100 mt-10 pt-8 text-center">
            <p className="text-text-primary/60 text-sm leading-relaxed">
              For any questions about this policy, contact us at{" "}
              <a
                href="mailto:info@nicegeneco.com.ng"
                className="text-primary font-medium hover:underline"
              >
                info@nicegeneco.com.ng
              </a>{" "}
              or call{" "}
              <a
                href="tel:+2348060704412"
                className="text-primary font-medium hover:underline"
              >
                +234-8060704412
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}