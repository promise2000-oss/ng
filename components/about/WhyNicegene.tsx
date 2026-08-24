"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import rocketImg from "@/assets/images/services/NICEGENE DRONE SERVICES.jpg";
import layerImg from "@/assets/images/events/team-working.jpg";
import schoolImg from "@/assets/images/events/ESUT1.jpg";
import shieldImg from "@/assets/images/services/AWS Cloud.png";
import graduationImg from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import cloudImg from "@/assets/images/services/Cloud_Services.png";

const reasons: {
  image: StaticImageData;
  title: string;
  desc: string;
  link?: string;
}[] = [
  {
    image: rocketImg,
    title: "Proven at Scale",
    desc: "Our flagship platform for the Lagos Archdiocesan Education Commission is built on a serverless architecture that supports over 10 schools and more than 10,000 students, teachers, and administrative staff — with zero service downtime. It is a live demonstration of how we build: secure, scalable, and dependable under real institutional load.",
    link: "https://www.nicegeneco.com.ng",
  },
  {
    image: layerImg,
    title: "End-to-End Digital Transformation",
    desc: "From strategy and cloud architecture to networking, development, digitization, and staff training, we cover the full lifecycle of a digital transformation project under one accountable team — so you are not left coordinating between multiple vendors.",
  },
  {
    image: schoolImg,
    title: "Sector Depth in Education & Institutional IT",
    desc: "We have designed and deployed school ERP systems, LAN and networking infrastructure, and interactive web applications for some of Lagos's most established schools, giving us a practical understanding of the compliance, scale, and reliability that institutional clients require.",
  },
  {
    image: shieldImg,
    title: "A Growing Data Protection Practice",
    desc: "As data protection obligations under the Nigeria Data Protection Act, 2023 become central to how Nigerian organizations operate, we are expanding our capabilities into data protection and privacy advisory — helping clients build compliant systems from the ground up, not bolt compliance on afterward.",
  },
  {
    image: graduationImg,
    title: "A Talent Pipeline, Not Just a Vendor",
    desc: "Through NICEGENE Academy and our quarterly Tech Insight Series, we are actively training the next generation of Nigerian tech talent — which means the professionals who support your systems are trained to the same standard we build to.",
  },
  {
    image: cloudImg,
    title: "Trusted Infrastructure We Use",
    desc: "We build exclusively on enterprise-grade platforms — Amazon Web Services, communicate with Google Workspace, and collaborate with Microsoft Teams — so your engagements with us and your cloud systems are backed by globally trusted infrastructure, not proprietary black boxes.",
  },
];

export default function WhyNicegene() {
  return (
    <section className="px-6 md:px-20 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            Why NICEGENE Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Why Organizations <span className="text-primary">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary mb-5 overflow-hidden ring-1 ring-secondary/20">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-text-primary/70 leading-relaxed">
                {reason.desc}
              </p>
              {reason.link && (
                <a
                  href={reason.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs font-semibold text-primary hover:text-accent hover:underline"
                >
                  {reason.link}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}