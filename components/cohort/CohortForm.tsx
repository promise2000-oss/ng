"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FaUser, FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { courses } from "@/lib/cohort";
import { appendStoreItem, STORE_KEYS } from "@/lib/store";

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

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-primary/70 focus:outline-none focus:border-secondary/50 transition-all";

export default function CohortForm() {
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    whatsapp: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.course) next.course = "Please select a course.";
    if (!formData.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!formData.whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number.";
    else if (!/^\+?[0-9\s-]{7,17}$/.test(formData.whatsapp.trim()))
      next.whatsapp = "Please enter a valid phone number.";
    if (!formData.email.trim()) next.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      next.email = "Please enter a valid email address.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    appendStoreItem(
      STORE_KEYS.registrations,
      () => [],
      {
        id: `reg-${Date.now()}`,
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        course: formData.course,
        date: new Date().toISOString(),
        cohort: new Date().getFullYear(),
        reviewed: false,
      }
    );
    setSubmitted(true);
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
        <h3 className="text-xl font-semibold text-success mb-2">Application Sent!</h3>
        <p className="text-text-primary text-sm mb-6 max-w-md mx-auto">
          Thank you for choosing NICEGENE. Please click the WhatsApp link below to provide your proof of payment.
        </p>
        <motion.a
          href="https://wa.me/2348060704412"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/20 text-success font-semibold text-sm hover:bg-success hover:text-white transition-all"
        >
          <FaWhatsapp size={14} /> Chat with Admissions
        </motion.a>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-semibold mb-6 flex items-center gap-2"
      >
        <motion.span
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaUser className="text-primary" size={18} />
        </motion.span>
        Registration Form
      </motion.h2>
      <motion.form
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
      >
        <motion.div variants={fieldVariants}>
          <label htmlFor="cohort-course" className="text-xs text-text-primary mb-1.5 block font-medium">
            Select Course
          </label>
          <div className="relative">
            <select
              id="cohort-course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.course)}
              aria-describedby={errors.course ? "cohort-course-error" : undefined}
              className={`${inputCls} appearance-none pr-10 ${errors.course ? "border-error" : ""}`}
            >
              <option value="" disabled>-- Select a Course --</option>
              {courses.map((c) => (
                <option key={c} value={c} className="text-text-primary bg-white">{c}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="fill-text-secondary h-4 w-4" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </div>
          </div>
          {errors.course && (
            <p id="cohort-course-error" className="text-error text-xs mt-1.5">
              {errors.course}
            </p>
          )}
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label htmlFor="cohort-name" className="text-xs text-text-primary mb-1.5 block font-medium">
            Full Name
          </label>
          <input
            id="cohort-name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "cohort-name-error" : undefined}
            placeholder="Enter your full name"
            className={`${inputCls} ${errors.fullName ? "border-error" : ""}`}
          />
          {errors.fullName && (
            <p id="cohort-name-error" className="text-error text-xs mt-1.5">
              {errors.fullName}
            </p>
          )}
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label htmlFor="cohort-whatsapp" className="text-xs text-text-primary mb-1.5 block font-medium">
            WhatsApp Number
          </label>
          <input
            id="cohort-whatsapp"
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "cohort-whatsapp-error" : undefined}
            placeholder="+234 8XX XXX XXXX"
            className={`${inputCls} ${errors.whatsapp ? "border-error" : ""}`}
          />
          {errors.whatsapp && (
            <p id="cohort-whatsapp-error" className="text-error text-xs mt-1.5">
              {errors.whatsapp}
            </p>
          )}
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label htmlFor="cohort-email" className="text-xs text-text-primary mb-1.5 block font-medium">
            Email Address
          </label>
          <input
            id="cohort-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cohort-email-error" : undefined}
            placeholder="your@email.com"
            className={`${inputCls} ${errors.email ? "border-error" : ""}`}
          />
          {errors.email && (
            <p id="cohort-email-error" className="text-error text-xs mt-1.5">
              {errors.email}
            </p>
          )}
        </motion.div>

        <motion.button
          variants={fieldVariants}
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Submit Registration <FaArrowRight size={12} />
        </motion.button>
      </motion.form>
    </div>
  );
}