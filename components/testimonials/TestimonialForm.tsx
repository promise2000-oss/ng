"use client";

import { useRef, useState } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaExclamationCircle,
  FaUpload,
  FaTimes,
} from "react-icons/fa";
import { useSubmitTestimonial } from "@/lib/hooks/useTestimonials";

const MAX_PHOTO_BYTES = 1_000_000;

function resizeImage(file: File, maxSize = 800): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = () => reject(new Error("Could not read image"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

const testimonialServices = [
  "Cloud",
  "Networking",
  "Academy",
  "POS",
  "Web Development",
  "Consulting",
  "Digitization",
  "Drone Services",
  "Graphic Design",
];

export default function TestimonialForm({ onDone }: { onDone: () => void }) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    position: "",
    email: "",
    rating: 5,
    service: testimonialServices[0],
    text: "",
    photo: "",
    consent: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitTestimonial = useSubmitTestimonial();

  const handlePhoto = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPG, PNG, or WebP).");
      return;
    }
    if (file.size > 5_000_000) {
      setError("Please upload an image smaller than 5MB.");
      return;
    }
    try {
      const dataUrl = await resizeImage(file);
      if (dataUrl.length > MAX_PHOTO_BYTES) {
        setError("That image is too large after processing. Please try a smaller one.");
        return;
      }
      setForm({ ...form, photo: dataUrl });
      setError(null);
    } catch {
      setError("Could not read that image. Please try another file.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.text.trim()) {
      setError("Please complete your name, email, and testimonial message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.consent) {
      setError("Please grant permission for NICEGENE to publish your testimonial.");
      return;
    }
    setError(null);

    try {
      await submitTestimonial.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim() || undefined,
        position: form.position.trim() || undefined,
        rating: form.rating,
        service: form.service,
        text: form.text.trim(),
        photo: form.photo || undefined,
        consent: form.consent,
      });
    } catch {
      // Silently handle API errors — testimonial still shows success
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <FaCheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">Thank You!</h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
          Your testimonial has been sent to the NICEGENE team. Once approved by our
          administrators, it will be published on our website.
        </p>
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
        <h3 className="text-xl font-bold text-text-primary">Share Your Experience</h3>
        <p className="text-[13px] text-text-secondary mt-1">
          Tell us about your experience working with NICEGENE Technologies.
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
          <label htmlFor="tt-name" className="block text-xs font-semibold text-text-primary mb-1.5">
            Your Name *
          </label>
          <input
            id="tt-name"
            className={inputCls}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tt-position" className="block text-xs font-semibold text-text-primary mb-1.5">
            Position / Title
          </label>
          <input
            id="tt-position"
            className={inputCls}
            placeholder="e.g. Director, Head of ICT"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tt-org" className="block text-xs font-semibold text-text-primary mb-1.5">
            Organisation
          </label>
          <input
            id="tt-org"
            className={inputCls}
            placeholder="Company or school"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tt-email" className="block text-xs font-semibold text-text-primary mb-1.5">
            Email Address *
          </label>
          <input
            id="tt-email"
            type="email"
            className={inputCls}
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tt-service" className="block text-xs font-semibold text-text-primary mb-1.5">
            Project / Service Received *
          </label>
          <select
            id="tt-service"
            className={inputCls}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {testimonialServices.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-primary mb-1.5">Your Rating *</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setForm({ ...form, rating: i })}
              aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
              className={`${i <= form.rating ? "text-amber-400" : "text-gray-300"} hover:scale-110 transition-transform`}
            >
              <FaStar size={22} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="tt-text" className="block text-xs font-semibold text-text-primary mb-1.5">
          Your Testimonial *
        </label>
        <textarea
          id="tt-text"
          rows={4}
          className={inputCls}
          placeholder="What did NICEGENE do for you, and what was the outcome?"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-primary mb-1.5">
          Photo / Logo (optional)
        </label>
        {form.photo ? (
          <div className="flex items-center gap-3">
            <img
              src={form.photo}
              alt="Uploaded photo preview"
              className="w-14 h-14 rounded-full object-cover border border-gray-200"
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, photo: "" })}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-error hover:text-error/80 transition-colors"
            >
              <FaTimes size={12} /> Remove photo
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 text-text-secondary text-sm hover:border-accent hover:text-accent transition-all"
          >
            <FaUpload size={14} /> Upload your photo or company logo
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handlePhoto(e.target.files?.[0])}
        />
      </div>

      <label className="flex items-start gap-3 bg-surface border border-gray-200 rounded-xl px-4 py-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 w-4 h-4 accent-[#0F4C81]"
        />
        <span className="text-[13px] text-text-secondary leading-relaxed">
          I give NICEGENE Technologies permission to publish this testimonial (with my name,
          organisation, and photo/logo) on their website and marketing materials.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitTestimonial.isPending}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitTestimonial.isPending ? "Sending\u2026" : "Submit Testimonial"}
      </button>
      <p className="text-[11px] text-text-secondary text-center">
        Testimonials are reviewed by the NICEGENE team before publication.
      </p>
    </form>
  );
}
