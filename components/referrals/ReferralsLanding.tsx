"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaGift,
  FaShareAlt,
  FaChartLine,
  FaHandshake,
  FaEnvelopeOpenText,
  FaTag,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import Reveal from "@/components/Reveal";
import { STORE_KEYS, appendStoreItem } from "@/lib/store";
import { referralFlow, type Referral, type ReferralStatus } from "@/lib/seed-data";

const servicesList = [
  "Cloud Migration & Networking",
  "Web & App Development",
  "Digital Academy",
  "POS & Inventory Management",
  "Graphic Design & Video Editing",
  "Drone Services",
  "Gadget Sales",
  "IT Consulting",
  "Digitization & Records Management",
];

const benefits = [
  {
    icon: FaGift,
    title: "Earn on Every Conversion",
    text: "When a referral you make becomes a confirmed engagement, you earn a commission — tracked transparently in your dashboard.",
  },
  {
    icon: FaChartLine,
    title: "Live Status Tracking",
    text: "Follow every referral through its full lifecycle: Submitted, Contacted, Proposal Sent, Converted, and Commission Due.",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Email Acknowledgement",
    text: "You receive an automated acknowledgement the moment your referral is logged, along with your unique tracking ID.",
  },
  {
    icon: FaHandshake,
    title: "For Everyone",
    text: "Individuals and organisations can refer clients. Past clients, partners, students, and friends of NICEGENE all welcome.",
  },
];

export default function ReferralsLanding() {
  return (
    <main className="w-full bg-background text-text-primary">
      <ReferralsHero />
      <BenefitsSection />
      <ReferralFormSection />
      <ReferralsCTA />
    </main>
  );
}

function ReferralsHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <FloatingOrbs
        orbs={[
          { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
          { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
        ]}
      />
      <GridOverlay opacity={0.06} size={60} color="rgba(255,255,255,0.08)" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] as const }}
        >
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
            <FaShareAlt size={22} className="text-accent-light" />
          </div>
          <p className="text-accent-light text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Referral Programme
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Refer a Client, <span className="text-accent-light">Earn a Reward</span>
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Know a school, business, or institution that needs cloud systems, websites, networking,
            or training? Refer them to NICEGENE Technologies and earn a commission when the
            engagement is confirmed. Track every referral — from submission to commission — in
            your personal dashboard.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#refer-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-light text-primary font-semibold text-sm hover:bg-white transition-all shadow-lg"
            >
              Submit a Referral <FaArrowRight size={13} />
            </a>
            <Link
              href="/referrals/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Track My Referrals
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Why Refer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            A Simple, <span className="text-accent">Transparent</span> Programme
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <b.icon size={20} />
                </div>
                <h3 className="font-semibold text-text-primary">{b.title}</h3>
                <p className="text-[13px] text-text-secondary mt-2 leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 bg-surface border border-gray-100 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              How Referral Status Works
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {referralFlow.map((status, i) => (
                <div key={status} className="text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-2">
                    {i + 1}
                  </div>
                  <p className="text-[13px] font-semibold text-text-primary">{status}</p>
                  <p className="text-[11px] text-text-secondary mt-1">
                    {status === "Submitted" && "Referral logged in the system"}
                    {status === "Contacted" && "NICEGENE contacts the lead"}
                    {status === "Proposal Sent" && "Formal proposal issued"}
                    {status === "Converted" && "Engagement confirmed"}
                    {status === "Commission Due" && "Reward payable to you"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReferralFormSection() {
  const [form, setForm] = useState({
    referrerName: "",
    referrerContact: "",
    relationship: "",
    refereeName: "",
    refereeContact: "",
    refereeCompany: "",
    service: servicesList[0],
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{ trackingId: string; referrerName: string } | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.referrerName.trim() ||
      !form.referrerContact.trim() ||
      !form.refereeName.trim() ||
      !form.refereeContact.trim()
    ) {
      setError("Please complete all required fields marked with an asterisk.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.referrerContact) && !/^\+?\d[\d\s()-]{7,}$/.test(form.referrerContact)) {
      setError("Your contact must be a valid email address or phone number.");
      return;
    }

    const trackingId = `NDR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const referral: Referral = {
      id: `ref-${crypto.randomUUID()}`,
      trackingId,
      referrerName: form.referrerName,
      referrerContact: form.referrerContact,
      relationship: form.relationship,
      refereeName: form.refereeName,
      refereeContact: form.refereeContact,
      refereeCompany: form.refereeCompany,
      service: form.service,
      status: "Submitted",
      dateSubmitted: new Date().toISOString(),
      statusHistory: [
        {
          status: "Submitted",
          date: new Date().toISOString(),
          note: "Referral received and logged in the system (automated email acknowledgement sent to referrer)",
        },
      ],
      commission: 0,
    };
    appendStoreItem(STORE_KEYS.referrals, () => [], referral);
    setSubmitted({ trackingId, referrerName: form.referrerName });
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all";

  return (
    <section id="refer-form" className="px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center"
          >
            <FaCheckCircle size={56} className="text-success mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-text-primary">Referral Submitted</h2>
            <p className="text-text-secondary text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Thank you, {submitted.referrerName.split(" ")[0]}. Your referral has been logged and
              an email acknowledgement with your tracking ID has been sent to you. Save your
              tracking ID to follow the referral.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/20">
              <FaTag size={15} className="text-accent" />
              <span className="font-mono font-bold text-text-primary text-lg">
                {submitted.trackingId}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => {
                  setSubmitted(null);
                  setForm({
                    referrerName: "",
                    referrerContact: "",
                    relationship: "",
                    refereeName: "",
                    refereeContact: "",
                    refereeCompany: "",
                    service: servicesList[0],
                  });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                Submit Another Referral
              </button>
              <Link
                href="/referrals/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                Track This Referral
              </Link>
            </div>
          </motion.div>
        ) : (
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5">
              <div className="bg-primary px-8 md:px-12 py-8">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Submit a Referral
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  Tell us about the person or organisation you are referring.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FaHandshake size={14} className="text-accent" />
                    About You (the Referrer)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="r-name" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="r-name"
                        className={inputCls}
                        placeholder="e.g. Chinedu Eze"
                        value={form.referrerName}
                        onChange={(e) => setForm({ ...form, referrerName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="r-contact" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Email or Phone *
                      </label>
                      <input
                        id="r-contact"
                        className={inputCls}
                        placeholder="you@email.com or +234..."
                        value={form.referrerContact}
                        onChange={(e) => setForm({ ...form, referrerContact: e.target.value })}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="r-rel" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Your Relationship to the Referee
                      </label>
                      <input
                        id="r-rel"
                        className={inputCls}
                        placeholder="e.g. Business acquaintance, former colleague, client"
                        value={form.relationship}
                        onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                    About the Referee
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="rf-name" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Referee Name / Organisation *
                      </label>
                      <input
                        id="rf-name"
                        className={inputCls}
                        placeholder="e.g. Hope Academy Schools"
                        value={form.refereeName}
                        onChange={(e) => setForm({ ...form, refereeName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rf-contact" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Referee Contact *
                      </label>
                      <input
                        id="rf-contact"
                        className={inputCls}
                        placeholder="email or phone"
                        value={form.refereeContact}
                        onChange={(e) => setForm({ ...form, refereeContact: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rf-company" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Company (if applicable)
                      </label>
                      <input
                        id="rf-company"
                        className={inputCls}
                        placeholder="Company or institution"
                        value={form.refereeCompany}
                        onChange={(e) => setForm({ ...form, refereeCompany: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="rf-service" className="block text-xs font-semibold text-text-primary mb-1.5">
                        Service They Need *
                      </label>
                      <select
                        id="rf-service"
                        className={inputCls}
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        {servicesList.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3">
                    <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
                >
                  <FaShareAlt size={14} />
                  Submit Referral
                </button>
                <p className="text-[11px] text-text-secondary text-center">
                  You will receive an automated email acknowledgement with a unique tracking ID.
                </p>
              </form>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function ReferralsCTA() {
  return (
    <section className="px-6 md:px-20 pb-20">
      <Reveal>
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 text-center relative overflow-hidden">
          <FloatingOrbs
            orbs={[
              { size: 300, color: "bg-secondary", x: 80, y: 20, duration: 18, delay: 0, blur: 100 },
              { size: 250, color: "bg-accent", x: 15, y: 70, duration: 20, delay: 1, blur: 90 },
            ]}
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white">
              Already submitted referrals?
            </h2>
            <p className="text-white/70 text-sm mt-3 max-w-lg mx-auto">
              Log in to your referrer dashboard to see live statuses, follow your referrals
              through the pipeline, and view commissions earned.
            </p>
            <Link
              href="/referrals/dashboard"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-accent-light transition-all"
            >
              Go to Referrer Dashboard
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}