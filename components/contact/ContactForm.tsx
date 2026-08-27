"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaPaperPlane, FaCheckCircle, FaSpinner, FaWhatsapp } from "react-icons/fa";
import { useSubmitContact } from "@/lib/hooks/useContact";

const formVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

const serviceOptions = [
  "Cloud System Development, Migration & Operations",
  "IT Consulting & Digital Solutions",
  "Web & App Development",
  "System Networking & Infrastructure",
  "Digitization & Records Management",
  "POS & Inventory Management Systems",
  "NICEGENE Academy Training",
  "Technology Gadget Sales",
  "Drone Services",
  "Graphic Design & Video Editing",
  "Other",
];

function FloatWrapper({
  id,
  label,
  value,
  area = false,
  children,
}: {
  id: string;
  label: string;
  value: string;
  area?: boolean;
  children: ReactNode;
}) {
  const floated = value.length > 0;
  return (
    <div className={`group relative ${area ? "" : ""}`}>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-5 z-[1] text-sm text-text-secondary/70 transition-all duration-200 ${
          floated ? "top-2 text-[11px] text-accent font-medium" : area ? "top-5" : "top-1/2 -translate-y-1/2"
        } group-focus-within:top-2 group-focus-within:text-[11px] group-focus-within:text-accent group-focus-within:font-medium`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitContact = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setError(null);
    try {
      await submitContact.mutateAsync({
        ...formData,
        subject: formData.service,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({
        name: "",
        organisation: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-success/10 border border-success/30 rounded-2xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto rounded-full bg-success/20 flex items-center justify-center mb-4"
        >
          <FaCheckCircle className="text-success text-3xl" />
        </motion.div>
        <h3 className="text-xl font-semibold text-success">Message Sent!</h3>
        <p className="text-text-primary/70 text-sm mt-2 max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-5 pt-7 pb-2.5 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-primary/70 focus:outline-none focus:border-accent focus:bg-accent/5 focus:shadow-[0_0_0_3px_rgba(46,95,163,0.12)] transition-all";

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      <motion.div variants={fieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FloatWrapper id="contact-name" label="Full Name" value={formData.name}>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            className={inputClasses}
          />
        </FloatWrapper>
        <FloatWrapper id="contact-organisation" label="Organisation" value={formData.organisation}>
          <input
            id="contact-organisation"
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className={inputClasses}
          />
        </FloatWrapper>
      </motion.div>

      <motion.div variants={fieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FloatWrapper id="contact-email" label="Email" value={formData.email}>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            className={inputClasses}
          />
        </FloatWrapper>
        <FloatWrapper id="contact-phone" label="Phone" value={formData.phone}>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-required="true"
            className={inputClasses}
          />
        </FloatWrapper>
      </motion.div>

      <motion.div variants={fieldVariants}>
        <div className="relative">
          <label htmlFor="contact-service" className="block text-xs font-semibold text-text-primary mb-1.5">
            Service of Interest *
          </label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-5 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-primary/70 focus:outline-none focus:border-accent focus:bg-accent/5 focus:shadow-[0_0_0_3px_rgba(46,95,163,0.12)] transition-all appearance-none pr-10"
            >
              <option value="" disabled>
                Select a Service of Interest
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="fill-text-secondary h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fieldVariants}>
        <FloatWrapper id="contact-message" label="Project Details" value={formData.message} area>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            rows={5}
            className="w-full px-5 pt-6 pb-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-primary/70 focus:outline-none focus:border-accent focus:bg-accent/5 focus:shadow-[0_0_0_3px_rgba(46,95,163,0.12)] transition-all resize-none"
          />
        </FloatWrapper>
      </motion.div>

      <motion.div variants={fieldVariants}>
        <label className="flex items-start gap-3 text-xs text-text-primary/70 leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent accent-accent shrink-0"
          />
          <span>
            I consent to NICEGENE collecting and processing my personal data as
            described in the{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-primary font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </motion.div>

      {error && <p className="text-error text-sm">{error}</p>}

      <motion.div
        variants={fieldVariants}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <motion.button
          type="submit"
          disabled={submitContact.isPending || !formData.consent}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitContact.isPending ? (
            <>
              <FaSpinner size={14} className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <FaPaperPlane size={14} />
            </>
          )}
        </motion.button>
        <a
          href="https://wa.me/2348060704412"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-text-primary/80 text-sm hover:bg-surface hover:border-gray-300 transition-all active:scale-[0.97]"
        >
          <FaWhatsapp size={14} className="text-green-500" /> Chat on WhatsApp
        </a>
      </motion.div>
    </motion.form>
  );
}
