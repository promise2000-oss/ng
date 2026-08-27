"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import scaleImg from "@/assets/images/why-choose-us/scale.jpg";
import transformationImg from "@/assets/images/why-choose-us/transformation.jpg";
import educationImg from "@/assets/images/why-choose-us/education.jpg";
import securityImg from "@/assets/images/why-choose-us/security.jpg";
import trainingImg from "@/assets/images/why-choose-us/training.jpg";
import infrastructureImg from "@/assets/images/why-choose-us/infrastructure.jpg";

const reasons = [
  {
    image: scaleImg,
    title: "Proven at Scale",
    desc: "Our flagship platform for the Lagos Archdiocesan Education Commission is built on a serverless architecture that supports over 10 schools and more than 10,000 students, teachers, and administrative staff — with zero service downtime.",
    link: "https://www.nicegeneco.com.ng",
  },
  {
    image: transformationImg,
    title: "End-to-End Digital Transformation",
    desc: "From strategy and cloud architecture to networking, development, digitization, and staff training, we cover the full lifecycle of a digital transformation project under one accountable team.",
  },
  {
    image: educationImg,
    title: "Sector Depth in Education & Institutional IT",
    desc: "We have designed and deployed school ERP systems, LAN and networking infrastructure, and interactive web applications for some of Lagos's most established schools.",
  },
  {
    image: securityImg,
    title: "A Growing Data Protection Practice",
    desc: "As data obligations under the Nigeria Data Protection Act, 2023 become central to how Nigerian organizations operate, we are expanding our capabilities into data protection and privacy advisory.",
  },
  {
    image: trainingImg,
    title: "A Talent Pipeline, Not Just a Vendor",
    desc: "Through NICEGENE Academy and our quarterly Tech Insight Series, we are actively training the next generation of Nigerian tech talent.",
  },
  {
    image: infrastructureImg,
    title: "Trusted Infrastructure We Use",
    desc: "We build exclusively on enterprise-grade platforms — Amazon Web Services, Google Workspace, and Microsoft Teams — so your cloud systems are backed by globally trusted infrastructure.",
  },
];

export default function WhyNicegene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 md:px-20 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            Why NICEGENE Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Why Organizations <span className="text-primary">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Image Section - 50% */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  initial={reduceMotion ? false : { scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <motion.span
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-sm shadow-lg"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
              </div>

              {/* Text Section - 50% */}
              <div className="p-6">
                <motion.h3
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300"
                >
                  {reason.title}
                </motion.h3>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="text-sm text-text-primary/70 leading-relaxed"
                >
                  {reason.desc}
                </motion.p>
                {reason.link && (
                  <motion.a
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                    href={reason.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300"
                  >
                    Learn more
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
