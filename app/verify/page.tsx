"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { FaSearch, FaShieldAlt, FaQrcode } from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";

export default function VerifyHome() {
  const router = useRouter();
  const [certId, setCertId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = certId.trim();
    if (!id) {
      setError("Please enter a certificate ID.");
      return;
    }
    setError(null);
    router.push(`/verify/${encodeURIComponent(id)}`);
  };

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
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
              <FaShieldAlt size={24} className="text-accent-light" />
            </div>
            <p className="text-accent-light text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Certificate Verification
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              Verify a NICEGENE Digital Academy <span className="text-accent-light">Certificate</span>
            </h1>
            <p className="text-white/70 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
              Employers, institutions, and third parties can instantly confirm the authenticity of
              any certificate issued by the NICEGENE Digital Academy. Enter the unique Certificate
              ID printed on the certificate, or scan its QR code.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-primary/5"
          >
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Enter Certificate ID
            </h2>
            <p className="text-[13px] text-text-secondary mb-6">
              The Certificate ID is printed on the certificate, for example{" "}
              <span className="font-mono text-accent font-semibold">NDA-2026-CLD-0047</span>. You
              can also scan the QR code on the certificate with any phone camera.
            </p>

            {error && (
              <p className="text-[13px] text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3 mb-4">
                {error}
              </p>
            )}

            <label htmlFor="verify-id" className="block text-xs font-semibold text-text-primary mb-1.5">
              Certificate ID *
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="verify-id"
                value={certId}
                onChange={(e) => setCertId(e.target.value.toUpperCase())}
                placeholder="e.g. NDA-2026-CLD-0047"
                className="flex-1 px-4 py-3.5 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm font-mono placeholder:font-sans placeholder:text-text-secondary/60 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                <FaSearch size={14} />
                Verify
              </button>
            </div>
          </motion.form>

          <div className="flex items-start gap-3 mt-8 text-[13px] text-text-secondary bg-surface border border-gray-100 rounded-2xl px-5 py-4">
            <FaQrcode size={18} className="text-accent shrink-0 mt-0.5" />
            <p>
              Every certificate carries a QR code that opens its verification page directly. No
              app needed — just point your camera at the QR code on the certificate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}