"use client";

import { motion } from "motion/react";
import { FaBuilding, FaIdCard, FaGavel, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import Reveal from "@/components/Reveal";

const companyInfo = [
  {
    icon: FaIdCard,
    label: "Registered Name",
    value: "NICEGENE Technology Solutions Limited",
  },
  {
    icon: FaBuilding,
    label: "RC Number",
    value: "RC 9249681",
  },
  {
    icon: FaGavel,
    label: "Legal Structure",
    value:
      "Private Limited Company, incorporated under the laws of the Federal Republic of Nigeria",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Registered Address",
    value:
      "Road 15, Lekki Gardens Estate Phase 3, Hitech Road, Lekki-Ajah, Lagos State, Nigeria",
  },
  {
    icon: FaShieldAlt,
    label: "Regulatory / Industry Engagement",
    value: "Engagement with the Nigeria Data Protection Commission (NDPC)",
  },
];

export default function CompanyInfo() {
  return (
    <section className="px-6 md:px-20 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            Corporate Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Company <span className="text-primary">Information</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companyInfo.map((item, i) => (
            <Reveal key={item.label} variant="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.07)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-gray-200 rounded-2xl p-7 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xs uppercase tracking-wider text-primary/60 font-semibold mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-text-primary leading-relaxed">
                  {item.value}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}