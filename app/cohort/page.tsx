"use client";

import { motion } from "motion/react";
import CohortHero from "@/components/cohort/CohortHero";
import CohortForm from "@/components/cohort/CohortForm";
import PaymentDetails from "@/components/cohort/PaymentDetails";
import WhyJoinAcademy from "@/components/cohort/WhyJoinAcademy";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

export default function CohortPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <CohortHero />
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 md:px-20 pb-24"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CohortForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <PaymentDetails />
            <WhyJoinAcademy />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
