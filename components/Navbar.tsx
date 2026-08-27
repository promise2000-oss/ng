"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import { EASE_IN_OUT_EXPO, EASE_OUT_EXPO, DURATIONS } from "@/lib/motion";

const primaryNavItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
  { name: "Portfolio", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const moreItems: { name: string; href: string }[] = [
  { name: "Gadgets", href: "/gadgets" },
  { name: "Events", href: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const lastScrollY = useRef(0);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 120 && y > lastScrollY.current + 4) {
        setHidden(true);
        setMoreOpen(false);
      } else if (y < lastScrollY.current - 4 || y <= 120) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };
    const onPopState = () => {
      setMenuOpen(false);
      setMoreOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navTransition = reduceMotion
    ? { duration: 0 }
    : { duration: DURATIONS.interaction, ease: EASE_IN_OUT_EXPO };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={navTransition}
        className={`fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 ${
          scrolled
            ? "bg-primary shadow-lg shadow-primary/20 border-b border-white/10"
            : "bg-primary shadow-md shadow-primary/10 border-b border-white/10"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.08, ease: EASE_OUT_EXPO }
            }
          >
            <Link href="/" className="flex items-center shrink-0" aria-label="NICEGENE Technologies — Home">
              <Image
                src="/NICEGENE%20TECHNOLOGIES%20LOGO.png"
                alt="Nicegene Technologies"
                width={112}
                height={112}
                priority
                className="h-18 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {primaryNavItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                    active ? "text-white" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-white/15 border border-white/20"
                      transition={navTransition}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </Link>
              );
            })}

            {/* More dropdown */}
            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                More
                <FaChevronDown
                  size={9}
                  className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={navTransition}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-primary-dark border border-white/10 shadow-xl shadow-primary/30 p-1.5"
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        onClick={() => {
                          setMoreOpen(false);
                          setMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isActive(item.href)
                            ? "text-white bg-white/15"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={() => setMoreOpen(false)}
              className="hidden lg:inline-flex items-center px-5 py-2 text-[13px] font-semibold text-white bg-accent hover:bg-accent/90 rounded-full transition-all duration-200 shadow-lg shadow-accent/25 active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Get in Touch
            </Link>

            {/* Animated hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative flex flex-col items-center justify-center w-11 h-11 -mr-2 text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : "-translate-y-[3.5px]"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : "scale-x-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : "translate-y-[3.5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden bg-primary flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-8 pt-28 pb-10">
              <nav className="flex flex-col" aria-label="Mobile">
                {[...primaryNavItems, ...moreItems].map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.06 + i * 0.05, ease: EASE_IN_OUT_EXPO }}
                      className="flex items-center gap-4 border-b border-white/10"
                    >
                      {/* <span className="text-white/30 text-xs font-semibold tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span> */}
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`flex-1 py-4 text-2xl font-semibold transition-colors duration-200 outline-none focus-visible:text-accent ${
                          active ? "text-white" : "text-white hover:text-accent"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.55, ease: EASE_IN_OUT_EXPO }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-5 py-4 text-[14px] font-semibold text-white bg-accent hover:bg-accent/90 rounded-full transition-all duration-200 active:scale-[0.98]"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}