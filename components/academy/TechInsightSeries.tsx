"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaCertificate, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import participantsImg from "@/assets/images/academy/stats/participants.jpg";
import maleImg from "@/assets/images/academy/stats/male.jpg";
import femaleImg from "@/assets/images/academy/stats/female.jpg";
import statesImg from "@/assets/images/academy/stats/states.jpg";

const whyTrain = [
  "Delivered by practicing professionals with real project experience, not theory alone.",
  "Small, hands-on cohorts using the same tools we deploy for clients — AWS, Vidline, and industry-standard software.",
  "A direct pathway into NICEGENE's own project teams for standout participants.",
];

export default function TechInsightSeries() {
  return (
    <section className="px-6 md:px-20 py-20 bg-surface border-t border-gray-200">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* TECH INSIGHT SERIES */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
              NICEGENE <span className="text-primary">Tech Insight Series</span>
            </h2>
            <p className="text-sm text-text-primary/70 leading-relaxed">
              Have you heard about our quarterly professional training and
              thought-leadership series called NICEGENE Tech Insight Series?
              Oh don&apos;t miss out on this again. The maiden edition, themed
              &ldquo;Data Protection Law &amp; Practices,&rdquo; attracted 158
              registered participants from across Nigeria — 81 male (51.3%) and
              77 female (48.7%) — representing 23 states and the Federal
              Capital Territory. Participants spanned students, lawyers,
              graduates, data analysts, software developers, IT professionals,
              academics, entrepreneurs, and business owners, reflecting the
              growing relevance of data protection across professions and
              industries.
            </p>
            <div className="flex items-start gap-3 mt-5 bg-accent/5 border border-accent/10 rounded-xl p-4">
              <FaCertificate className="text-accent shrink-0 mt-1" size={16} />
              <p className="text-xs text-text-primary/80 leading-relaxed">
                Participants who complete the programme requirements, including
                a post-session evaluation, receive Certificates of
                Participation in recognition of their engagement and successful
                completion.
              </p>
            </div>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-primary/20">
                  <Image
                    src={participantsImg}
                    alt="Registered participants"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-2xl font-bold text-primary">158</p>
                <p className="text-xs text-text-primary/70 mt-1">
                  Registered participants in the maiden edition
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-primary/20">
                  <Image
                    src={maleImg}
                    alt="Male participants"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-2xl font-bold text-primary">81</p>
                <p className="text-xs text-text-primary/70 mt-1">
                  Male participants (51.3%)
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-primary/20">
                  <Image
                    src={femaleImg}
                    alt="Female participants"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-2xl font-bold text-primary">77</p>
                <p className="text-xs text-text-primary/70 mt-1">
                  Female participants (48.7%)
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-primary/20">
                  <Image
                    src={statesImg}
                    alt="States across Nigeria represented"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-2xl font-bold text-primary">23 + FCT</p>
                <p className="text-xs text-text-primary/70 mt-1">
                  States across Nigeria represented
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* WHY TRAIN WITH US */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              Why Train <span className="text-primary">With Us</span>
            </h2>
            <div className="space-y-4">
              {whyTrain.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-text-primary/80 leading-relaxed">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker rounded-3xl p-10 text-center"
          >
            <h3 className="text-2xl font-semibold text-white">
              Join the Next Cohort
            </h3>
            <p className="text-white/70 text-sm mt-4 leading-relaxed">
              Visit NICEGENE Academy or call 08060704412 to learn about
              upcoming cohorts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="tel:+2348060704412"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
              >
                <FaPhoneAlt size={12} /> Call 08060704412
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}