"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaHandshake,
  FaChevronRight,
  FaBuilding,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import Reveal from "@/components/Reveal";
import Modal from "@/components/Modal";
import {
  STORE_KEYS,
  loadStore,
  appendStoreItem,
} from "@/lib/store";
import {
  seedPartners,
  type Partner,
  type PartnerType,
  type PartnerApplication,
} from "@/lib/seed-data";

const partnerTypes: { value: PartnerType | "All"; label: string }[] = [
  { value: "All", label: "All Partners" },
  { value: "Technology", label: "Technology Partners" },
  { value: "Academic", label: "Academic Partners" },
  { value: "Business", label: "Business Partners" },
  { value: "Community", label: "Community Partners" },
];

const typeStyles: Record<PartnerType, string> = {
  Technology: "bg-accent/10 text-accent border-accent/20",
  Academic: "bg-primary/10 text-primary border-primary/20",
  Business: "bg-green-50 text-green-700 border-green-200",
  Community: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function PartnersSection() {
  const [partners] = useState<Partner[]>(() =>
    loadStore(STORE_KEYS.partners, () => seedPartners)
  );
  const [activeFilter, setActiveFilter] = useState<PartnerType | "All">("All");
  const [selected, setSelected] = useState<Partner | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? partners
        : partners.filter((p) => p.type === activeFilter),
    [partners, activeFilter]
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const }}
        className="relative px-6 md:px-20 py-20 overflow-hidden"
      >
        <AnimatedGradient
          duration={15}
          colors={[
            "rgba(27, 58, 107, 0.03)",
            "rgba(46, 95, 163, 0.02)",
            "rgba(27, 58, 107, 0.02)",
          ]}
        />
        <FloatingOrbs
          orbs={[
            { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
            { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
          ]}
        />
        <GridOverlay opacity={0.015} size={50} color="rgba(27, 58, 107, 0.12)" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Strategic Alliances
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Our Technology &amp; Business <span className="text-accent">Partners</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base">
              We build on enterprise-grade platforms and work alongside partners who share our
              commitment to secure, reliable, and scalable digital delivery.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {partnerTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setActiveFilter(t.value)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${
                  activeFilter === t.value
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((partner) => (
              <motion.button
                key={partner.id}
                layout
                onClick={() => setSelected(partner)}
                className="group text-left bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-gray-100 flex items-center justify-center overflow-hidden">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={56}
                        height={56}
                        className="object-contain h-12 w-12"
                      />
                    ) : (
                      <span className="text-primary font-bold text-lg">{partner.initials}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${typeStyles[partner.type]}`}
                  >
                    {partner.type}
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[13px] text-text-secondary mt-2 leading-relaxed">
                  {partner.oneLiner}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-4">
                  View details <FaChevronRight size={10} />
                </span>
              </motion.button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-secondary text-sm py-10">
              No partners in this category yet.
            </p>
          )}

          {/* Become a partner CTA */}
          <Reveal>
            <div className="mt-16 bg-primary rounded-3xl overflow-hidden relative">
              <FloatingOrbs
                orbs={[
                  { size: 350, color: "bg-secondary", x: 70, y: 20, duration: 20, delay: 0, blur: 110 },
                  { size: 280, color: "bg-accent", x: 15, y: 70, duration: 24, delay: 2, blur: 100 },
                ]}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-14 py-12">
                <div className="max-w-xl">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    Partner with NICEGENE Technologies
                  </h3>
                  <p className="text-white/70 text-sm mt-3 leading-relaxed">
                    Businesses, institutions, and organisations interested in becoming a NICEGENE
                    partner — technology, academic, business, or community — can apply below. We
                    respond to every application.
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-accent-light transition-all shadow-lg shrink-0"
                >
                  <FaHandshake size={16} />
                  Apply to Partner
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </motion.section>

      {/* Partner detail modal */}
      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        labelledBy="partner-detail-title"
        panelClassName="w-full max-w-lg"
      >
        <h2 id="partner-detail-title" className="sr-only">
          {selected ? `${selected.name} partner details` : "Partner details"}
        </h2>
        <button
          onClick={() => setSelected(null)}
          aria-label="Close partner details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-error transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FaTimes size={16} />
        </button>

        {selected && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-surface border border-gray-100 flex items-center justify-center overflow-hidden">
                {selected.logo ? (
                  <Image
                    src={selected.logo}
                    alt={`${selected.name} logo`}
                    width={72}
                    height={72}
                    className="object-contain h-16 w-16"
                  />
                ) : (
                  <span className="text-primary font-bold text-xl">{selected.initials}</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">{selected.name}</h3>
                <span
                  className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border mt-1 ${typeStyles[selected.type]}`}
                >
                  {selected.type} Partner
                </span>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {selected.description}
            </p>

            <div className="flex items-center gap-2 text-[13px] text-text-secondary mb-6">
              <FaBuilding size={13} className="text-accent" />
              Partner since {selected.dateJoined}
              {selected.featured && (
                <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[11px] font-medium">
                  <FaCheckCircle size={11} /> Featured
                </span>
              )}
            </div>

            <a
              href={selected.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
            >
              Visit Website <FaExternalLinkAlt size={12} />
            </a>
          </div>
        )}
      </Modal>

      {/* Application form modal */}
      <Modal
        open={showForm}
        onClose={() => setShowForm(false)}
        labelledBy="partner-application-title"
        panelClassName="w-full max-w-xl"
      >
        <h2 id="partner-application-title" className="sr-only">
          Apply to become a partner
        </h2>
        <button
          onClick={() => setShowForm(false)}
          aria-label="Close application form"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-error transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FaTimes size={16} />
        </button>
        <PartnerApplicationForm onDone={() => setShowForm(false)} />
      </Modal>
    </>
  );
}

function PartnerApplicationForm({ onDone }: { onDone: () => void }) {
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    type: "Technology" as PartnerType,
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company.trim() || !form.contactName.trim() || !form.email.trim()) {
      setError("Please complete the required fields: company, contact name, and email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const application: PartnerApplication = {
      id: `pa-${crypto.randomUUID()}`,
      ...form,
      date: new Date().toISOString(),
    };
    appendStoreItem(STORE_KEYS.partnerApplications, () => [], application);
    setSubmitted(
      `Thank you, ${form.contactName.split(" ")[0]}. Your partnership application for ${form.company} has been received. Our partnerships team will respond within 3 business days.`
    );
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <FaCheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">Application Received</h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto">{submitted}</p>
        <button
          onClick={onDone}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
        >
          Close
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-text-primary">Partnership Application</h3>
        <p className="text-[13px] text-text-secondary mt-1">
          Interested in partnering with NICEGENE Technologies? Tell us about your organisation.
        </p>
      </div>

      {error && (
        <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3">
          <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pa-company" className="block text-xs font-semibold text-text-primary mb-1.5">
            Organisation / Company *
          </label>
          <input
            id="pa-company"
            className={inputCls}
            placeholder="e.g. Acme Tech Ltd"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pa-name" className="block text-xs font-semibold text-text-primary mb-1.5">
            Contact Person *
          </label>
          <input
            id="pa-name"
            className={inputCls}
            placeholder="Full name"
            value={form.contactName}
            onChange={(e) => setForm({ ...form, contactName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pa-email" className="block text-xs font-semibold text-text-primary mb-1.5">
            Email Address *
          </label>
          <input
            id="pa-email"
            type="email"
            className={inputCls}
            placeholder="name@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pa-phone" className="block text-xs font-semibold text-text-primary mb-1.5">
            Phone Number
          </label>
          <input
            id="pa-phone"
            className={inputCls}
            placeholder="+234 ..."
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="pa-type" className="block text-xs font-semibold text-text-primary mb-1.5">
          Partnership Type *
        </label>
        <select
          id="pa-type"
          className={inputCls}
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value as PartnerType })}
        >
          <option value="Technology">Technology Partner</option>
          <option value="Academic">Academic Partner</option>
          <option value="Business">Business Partner</option>
          <option value="Community">Community Partner</option>
        </select>
      </div>

      <div>
        <label htmlFor="pa-message" className="block text-xs font-semibold text-text-primary mb-1.5">
          Why do you want to partner with us?
        </label>
        <textarea
          id="pa-message"
          rows={4}
          className={inputCls}
          placeholder="Tell us about your organisation and the kind of partnership you have in mind..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
      >
        <FaHandshake size={15} />
        Submit Application
      </button>
    </form>
  );
}