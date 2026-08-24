"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import cloudImg from "@/assets/images/services/Cloud_Services.png";
import consultingImg from "@/assets/images/services/work.png";
import webImg from "@/assets/images/services/Nicegene services.png";
import networkingImg from "@/assets/images/services/NICEGENE system networking and server setup.jpg";
import digitizationImg from "@/assets/images/services/NICEGENE cloud migration and digitization.jpg";
import posImg from "@/assets/images/services/NICEGENE POS & INVENTORY.jpg";
import academyImg from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import gadgetsImg from "@/assets/images/services/NICEGENE GADGETS 2.jpg";
import droneImg from "@/assets/images/services/drone.jpg";
import graphicsImg from "@/assets/images/services/work white.png";

const services = [
  { id: "cloud", image: cloudImg, title: "Cloud System Development, Migration & Operations", desc: "Secure, scalable AWS cloud architectures tailored to how your organisation actually operates — including cloud-native and serverless application development." },
  { id: "consulting", image: consultingImg, title: "IT Consulting & Digital Solutions", desc: "Strategic advisory that turns manual, paper-heavy operations into efficient digital workflows." },
  { id: "data-protection", image: consultingImg, title: "Data Protection & Compliance Services", desc: "Licensed DPCO services — compliance audits, DPIAs, outsourced DPO, NDPC registration, and staff training under the Nigeria Data Protection Act, 2023." },
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-primary text-xs mt-5 uppercase tracking-[0.2em] mb-3"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            What <span className="text-primary">We Offer</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-16 h-0.5 bg-secondary mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-text-primary mt-4 max-w-2xl mx-auto text-sm"
          >
            Empowering businesses and institutions through advanced technology,
            professional training, and the sale of high-end technology gadgets.
            Click on any service to explore its full details and offerings.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: [30, 20, -40, -30, 40][i % 5] || 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 will-change-transform"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-primary mb-5 relative overflow-hidden"
                  animate={hoveredIndex === i ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-secondary/20"
                    animate={
                      hoveredIndex === i
                        ? { scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }
                        : { scale: 1, opacity: 0.2 }
                    }
                    transition={{ duration: 1.5, repeat: hoveredIndex === i ? Infinity : 0 }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      hoveredIndex === i
                        ? { rotateY: [0, 180, 360], scale: 1.1 }
                        : { rotateY: 0, scale: 1 }
                    }
                    transition={
                      hoveredIndex === i
                        ? { duration: 1.2, ease: "easeInOut" }
                        : { duration: 0.3 }
                    }
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>

                <h3 className="text-base font-semibold mb-3 leading-snug min-h-[2.5rem] text-text-primary">
                  {service.title}
                </h3>

                <p className="text-text-primary text-xs leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary text-xs font-medium group-hover:bg-secondary group-hover:text-primary transition-all duration-300"
                  animate={hoveredIndex === i ? { gap: "10px" } : { gap: "6px" }}
                >
                  <span>View Details</span>
                  <motion.span
                    animate={hoveredIndex === i ? { x: [0, 4, 0] } : { x: 0 }}
                    transition={{ duration: 0.6, repeat: hoveredIndex === i ? Infinity : 0, ease: "easeInOut" }}
                  >
                    <FaArrowRight size={10} />
                  </motion.span>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ADDITIONAL CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
              Additional <span className="text-primary">Capabilities</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {additionalCapabilities.map((service, i) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-gradient-to-br from-secondary/5 to-accent/5 border border-dashed border-secondary/30 rounded-2xl p-6 flex items-start gap-4 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-text-primary/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <FaArrowRight
                    size={12}
                    className="ml-auto mt-2 text-primary/40 group-hover:translate-x-1 transition-transform"
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}