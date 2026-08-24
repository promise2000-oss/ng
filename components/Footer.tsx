"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import NicegeneLogo from "@/assets/images/logos/nicegene_logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Portfolio", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const services = [
  "Cloud System Development, Migration & Operations",
  "IT Consulting & Digital Solutions",
  "Data Protection & Compliance",
  "Web & App Development",
  "System Networking & Infrastructure",
  "Digitization & Records Management",
  "POS & Inventory Management",
  "NICEGENE Academy",
  "Technology Gadget Sales",
];

const socials = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/2348060704412",
    brand: "text-green-500 hover:text-green-400 hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_18px_rgba(34,197,94,0.45)]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/nicegene_technologies?igsh=MTUzMDB3d3Y1bG90OQ==",
    brand: "text-pink-500 hover:text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_18px_rgba(236,72,153,0.45)]",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nicegene-technologies/",
    brand: "text-[#0A66C2] hover:text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/50 hover:shadow-[0_0_18px_rgba(14,165,233,0.45)]",
  },
  {
    icon: FaTwitter,
    label: "X (Twitter)",
    href: "https://x.com/nicegene_tech",
    brand: "text-white/80 hover:text-white hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/61587024291293",
    brand: "text-[#1877F2] hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]",
  },
];

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: "Office",
    value: "Road 15, Lekki Gardens Estate Phase 3, Hitech Road, Lekki-Ajah, Lagos",
  },
  { icon: FaPhoneAlt, label: "Phone", value: "+234 806 070 4412", href: "tel:+2348060704412" },
  { icon: FaEnvelope, label: "Email", value: "info@nicegeneco.com.ng", href: "mailto:info@nicegeneco.com.ng" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-2 text-white/70 text-sm hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm"
    >
      <FaChevronRight
        size={8}
        className="text-white/60 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
        aria-hidden="true"
      />
      <span className="relative">
        {children}
        <span
          className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      setShowTop(y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="w-full bg-primary border-t border-white/10">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3" aria-label="NICEGENE Technologies — Home">
              <Image
                src={NicegeneLogo}
                alt="NiceGene Logo"
                className="h-auto w-[45px] object-contain"
              />
              <span className="text-white font-bold text-lg">
                NICEGENE
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              NICEGENE Technologies — IT Consulting &amp; Digital Solutions.
              We don&apos;t just build systems — we build lasting digital
              foundations.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-7 h-7 aspect-square shrink-0 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-base transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${social.brand}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <FooterLink href="/services">{service}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <li key={item.label}>
                    <Wrapper
                      {...wrapperProps}
                      className="flex items-start gap-3 text-white/70 text-sm hover:text-white transition-colors"
                    >
                      <div className="w-7 h-7 aspect-square shrink-0 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                        <item.icon size={14} className="text-white" />
                      </div>
                      <span className="leading-relaxed whitespace-pre-line">
                        {item.value}
                      </span>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between gap-4">
          <p className="text-white text-xs text-center w-full md:w-auto md:text-left">
            &copy; 2026 NICEGENE Technology Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            onClick={scrollTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-accent/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
              <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 16}
                strokeDashoffset={2 * Math.PI * 16 * (1 - progress)}
              />
            </svg>
            <FaChevronUp size={14} className="relative" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}