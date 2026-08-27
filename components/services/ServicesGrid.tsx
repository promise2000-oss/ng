"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import cloudImg from "@/assets/images/services/cloud-servers.jpg";
import consultingImg from "@/assets/images/services/consulting-strategy.jpg";
import dataProtectionImg from "@/assets/images/services/data-protection.jpg";
import webImg from "@/assets/images/services/web-development.jpg";
import networkingImg from "@/assets/images/services/NICEGENE system networking and server setup.jpg";
import digitizationImg from "@/assets/images/services/NICEGENE cloud migration and digitization.jpg";
import posImg from "@/assets/images/services/NICEGENE POS & INVENTORY.jpg";
import academyImg from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import gadgetsImg from "@/assets/images/services/NICEGENE GADGETS 2.jpg";
import droneImg from "@/assets/images/services/drone.jpg";
import graphicsImg from "@/assets/images/services/graphic-design.jpg";

const services = [
  { id: "cloud", image: cloudImg, title: "Cloud System Development, Migration & Operations", desc: "Secure, scalable AWS cloud architectures tailored to how your organisation actually operates — including cloud-native and serverless application development." },
  { id: "consulting", image: consultingImg, title: "IT Consulting & Digital Solutions", desc: "Strategic advisory that turns manual, paper-heavy operations into efficient digital workflows." },
  { id: "data-protection", image: dataProtectionImg, title: "Data Protection & Compliance Services", desc: "Licensed DPCO services — compliance audits, DPIAs, outsourced DPO, NDPC registration, and staff training under the Nigeria Data Protection Act, 2023." },
  { id: "web", image: webImg, title: "Web & App Development", desc: "Custom, responsive, and secure websites and applications built on modern frameworks, designed for performance, security, and maintainability." },
  { id: "networking", image: networkingImg, title: "System Networking & Infrastructure", desc: "End-to-end LAN design, server setup, and administration to give your organisation a stable, secure technical backbone." },
  { id: "digitization", image: digitizationImg, title: "Digitization & Records Management", desc: "Converting paper-based records into structured, secure, and searchable digital systems." },
  { id: "pos", image: posImg, title: "Point of Sale & Inventory Management Systems", desc: "Complete retail automation, including POS hardware installation, real-time stock tracking, and cloud-based sales reporting." },
  { id: "academy", image: academyImg, title: "NICEGENE Academy — Professional Trainings", desc: "Practical, instructor-led digital skills training delivered through live virtual classes and hands-on projects." },
  { id: "gadgets", image: gadgetsImg, title: "Technology Gadget Sales", desc: "Premium laptops and IT hardware from trusted global brands, backed by our own technical support." },
];

const additionalCapabilities = [
  { id: "drone", image: droneImg, title: "Drone Services", desc: "Aerial mapping, industrial inspections, and high-definition cinematography for diverse industry needs." },
  { id: "graphics", image: graphicsImg, title: "Graphic Design & Video Editing", desc: "Brand identity, corporate logos, and professional video marketing collateral." },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className="px-6 md:px-20 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-primary text-xs mt-5 uppercase tracking-[0.2em] mb-3"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            What <span className="text-primary">We Offer</span>
          </motion.h2>
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-16 h-0.5 bg-secondary mx-auto mt-4"
          />
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-text-primary mt-4 max-w-2xl mx-auto text-sm"
          >
            Empowering businesses and institutions through advanced technology,
            professional training, and the sale of high-end technology gadgets.
            Click on any service to explore its full details and offerings.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500"
              >
                {/* Image Section - 50% */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    initial={reduceMotion ? false : { scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
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
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
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
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                    className="text-base font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 leading-snug"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                    className="text-sm text-text-primary/70 leading-relaxed mb-4"
                  >
                    {service.desc}
                  </motion.p>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.4, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary text-xs font-medium group-hover:bg-secondary group-hover:text-primary transition-all duration-300"
                  >
                    <span>View Details</span>
                    <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Additional Capabilities */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
              Additional <span className="text-primary">Capabilities</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {additionalCapabilities.map((service, i) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-gradient-to-br from-secondary/5 to-accent/5 border border-dashed border-secondary/30 rounded-2xl overflow-hidden hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <motion.div
                      initial={reduceMotion ? false : { scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Text Section */}
                  <div className="p-6">
                    <h4 className="text-base font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-text-primary/70 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary text-xs font-medium">
                      <span>Learn more</span>
                      <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
