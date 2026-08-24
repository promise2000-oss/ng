"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { FaChevronRight, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { STORE_KEYS, appendStoreItem } from "@/lib/store";

export default function BlogCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSending(true);
    window.setTimeout(() => {
      appendStoreItem(STORE_KEYS.newsletter, () => [], {
        id: `nl-${Date.now()}`,
        email: email.trim(),
        date: new Date().toISOString(),
      });
      setSending(false);
      setSubscribed(true);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Stay <span className="text-accent">Informed</span>
        </h2>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm">
          Subscribe to our newsletter for the latest in cloud computing, tech gadgets, digital skills, and industry insights.
        </p>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 mt-8 text-white"
          >
            <FaCheckCircle className="text-success" size={20} />
            <p className="text-sm font-medium">
              You&apos;re subscribed! Keep an eye on your inbox.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="w-full px-5 py-3 rounded-full bg-surface border border-gray-200 text-sm text-text-primary placeholder:text-text-primary/70 focus:outline-none focus:border-accent/40 focus:bg-surface transition-all"
            />
            <button
              type="submit"
              disabled={sending}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all whitespace-nowrap disabled:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {sending ? <FaSpinner size={10} className="animate-spin" /> : null}
              Subscribe <FaChevronRight size={10} />
            </button>
          </form>
        )}

        {error && (
          <p id="newsletter-error" className="text-error text-xs mt-3">
            {error}
          </p>
        )}
      </div>
    </motion.div>
  );
}