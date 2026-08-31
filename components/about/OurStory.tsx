"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AboutAlbum from "@/components/about/AboutAlbum";
import { EASE_OUT_EXPO, DURATIONS } from "@/lib/motion";

const storyParagraphs = [
  {
    text: "NICEGENE Technologies is a premiere IT Consulting & Digital Solutions firm based in Lagos Nigeria, built to close the gap between traditional, manual operations and modern digital efficiency. We provide end-to-end technology integration for schools, businesses, and public institutions, delivered through a focused portfolio of cloud, infrastructure, development, and training services.",
    highlight: ["IT Consulting", "Digital Solutions", "end-to-end technology integration"],
    stat: { number: "10+", label: "Schools Powered" },
  },
  {
    text: "Since our founding, we've grown from a small team of specialists into a firm trusted with the digital infrastructure of some of Lagos's most established schools and corporate organizations. Our flagship project — a cloud-native, serverless school management and examination platform built for the Lagos Archdiocesan Education Commission — now powers the daily operations of over 10 schools, supporting more than 10,000 students and staff.",
    highlight: ["cloud-native", "serverless", "10,000 students"],
    stat: { number: "10K+", label: "Students & Staff" },
  },
  {
    text: "It reflects the standard of reliability, security, and craftsmanship we bring to every client, from a single-branch retail store to a multi-institution commission. We are guided by four core values — honesty, excellence, integrity, and respect — and by a long-term commitment to the organizations we serve. We do not just build systems; we build the digital foundations our clients will rely on for years to come.",
    highlight: ["reliability, security, and craftsmanship", "honesty, excellence, integrity, and respect", "digital foundations"],
    stat: { number: "100%", label: "Uptime Record" },
  },
];

const STORY_INTERVAL = 8000;

function TypewriterLabel({ reduceMotion }: { reduceMotion: boolean }) {
  const letters = "Our Journey".split("");
  return (
    <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.1 + i * 0.04, duration: 0.15 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-block w-[2px] h-[14px] bg-primary ml-1"
        animate={reduceMotion ? undefined : { opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: 3, repeatType: "reverse", delay: 0.5 }}
      />
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
    </span>
  );
}

function StoryHeading({ reduceMotion }: { reduceMotion: boolean }) {
  const text = "Our Story";
  const chars = text.split("");

  return (
    <div className="relative inline-block">
      {/* Decorative quote mark */}
      <motion.span
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.3, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO }}
        className="absolute -top-14 -left-10 text-[120px] leading-none text-primary/6 select-none pointer-events-none story-quote-mark"
        aria-hidden="true"
      >
        &ldquo;
      </motion.span>

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5"
        style={{ perspective: "800px" }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={reduceMotion ? undefined : { opacity: 0, y: 40, rotateX: -120 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : 0.3 + i * 0.045,
              duration: 0.6,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block story-shimmer-text"
            style={{ transformOrigin: "bottom center" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Decorative accent lines - both sides */}
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.6, ease: EASE_OUT_EXPO }}
          className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary rounded-full"
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          initial={reduceMotion ? undefined : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 1, duration: 0.4, ease: EASE_OUT_EXPO }}
          className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(46,95,184,0.5)]"
        />
        <motion.div
          initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.6, ease: EASE_OUT_EXPO }}
          className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary rounded-full"
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}

function FloatingParticles({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) return null;

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function StatCounter({
  number,
  label,
  isActive,
  reduceMotion,
}: {
  number: string;
  label: string;
  isActive: boolean;
  reduceMotion: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={number}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="absolute -top-3 -right-3 md:top-auto md:-bottom-3 md:-right-4 z-20"
        >
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white px-4 py-2.5 rounded-2xl shadow-lg shadow-primary/25">
            <div className="text-xl md:text-2xl font-bold leading-none">{number}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/80 mt-0.5">{label}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WordRevealText({
  text,
  highlight,
  delay = 0,
  reduceMotion,
}: {
  text: string;
  highlight: string[];
  delay: number;
  reduceMotion: boolean;
}) {
  const highlightedText = text.split(" ").map(word => {
    const isHighlight = highlight.some((h) =>
      word.toLowerCase().replace(/[^a-z]/g, "").includes(h.toLowerCase().split(" ")[0].replace(/[^a-z]/g, ""))
    );
    return isHighlight
      ? `<span class="text-primary font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-primary/40 after:via-primary after:to-primary/40">${word}</span>`
      : word;
  }).join(" ");

  return (
    <motion.p
      initial={reduceMotion ? undefined : { opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className="text-text-primary/80 leading-[1.8] text-[15px] md:text-base text-justify"
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );
}

export default function OurStory() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const prev = useCallback(() => {
    setIsAutoPlaying(false);
    setCardIndex((i) => Math.max(0, i - 1));
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    setIsAutoPlaying(false);
    setCardIndex((i) => Math.min(storyParagraphs.length - 1, i + 1));
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCardIndex((i) => (i + 1) % storyParagraphs.length);
      setProgressKey((k) => k + 1);
    }, STORY_INTERVAL);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const current = storyParagraphs[cardIndex];

  return (
    <section ref={sectionRef} className="relative px-6 md:px-20 py-28 md:py-36 overflow-hidden">
      {/* ── Background Layers ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Animated gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(247,249,252,1) 0%, rgba(240,245,255,1) 50%, rgba(247,249,252,1) 100%)",
          }}
        />

        {/* Floating orbs with parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div
            className={`absolute rounded-full story-orb-1 ${reduceMotion ? "" : ""}`}
            style={{
              width: 700,
              height: 700,
              top: "-20%",
              left: "-12%",
              background: "radial-gradient(circle, rgba(46, 95, 184, 0.25) 0%, rgba(46, 95, 184, 0.08) 40%, transparent 70%)",
              filter: "blur(45px)",
            }}
          />
          <div
            className={`absolute rounded-full story-orb-2 ${reduceMotion ? "" : ""}`}
            style={{
              width: 600,
              height: 600,
              top: "15%",
              right: "-8%",
              background: "radial-gradient(circle, rgba(92, 200, 242, 0.20) 0%, rgba(92, 200, 242, 0.06) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className={`absolute rounded-full story-orb-3 ${reduceMotion ? "" : ""}`}
            style={{
              width: 650,
              height: 650,
              bottom: "-25%",
              left: "25%",
              background: "radial-gradient(circle, rgba(27, 58, 107, 0.18) 0%, rgba(27, 58, 107, 0.05) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* Light streak */}
        <div className={`absolute inset-0 overflow-hidden ${reduceMotion ? "hidden" : ""}`}>
          <div className="story-light-streak" style={{ top: "-50%", left: "-25%" }} />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 15%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 15%, black 100%)",
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="story-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(46, 95, 184, 0.04)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        <FloatingParticles reduceMotion={!!reduceMotion} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading area */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-20 flex flex-col items-center gap-5"
        >
          <TypewriterLabel reduceMotion={!!reduceMotion} />
          <StoryHeading reduceMotion={!!reduceMotion} />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center">
          {/* Left: Glass card with story */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative"
          >
            {/* Stat counter badge */}
            <StatCounter
              number={current.stat.number}
              label={current.stat.label}
              isActive={true}
              reduceMotion={!!reduceMotion}
            />

            <div className="story-glass-card rounded-3xl p-8 md:p-10 min-h-[340px] flex flex-col relative overflow-hidden group">
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary/5 rounded-t-3xl overflow-hidden">
                <motion.div
                  key={progressKey}
                  className="h-full bg-gradient-to-r from-primary via-accent-light to-primary rounded-full relative overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: STORY_INTERVAL / 1000, ease: "linear" }}
                >
                  {/* Shimmer on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[intro-text-shimmer_2s_linear_infinite]" />
                </motion.div>
              </div>

              {/* Chapter indicator */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-primary/50 tracking-wider">
                  CHAPTER {String(cardIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-primary/10" />
                <span className="font-mono text-xs text-primary/50">
                  {String(cardIndex + 1).padStart(2, "0")} / {String(storyParagraphs.length).padStart(2, "0")}
                </span>
              </div>

              {/* Paragraph content */}
              <div className="flex-1 flex items-center min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cardIndex}
                    initial={reduceMotion ? undefined : { opacity: 0, x: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -30, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  >
                    <WordRevealText
                      text={current.text}
                      highlight={current.highlight}
                      delay={0.1}
                      reduceMotion={!!reduceMotion}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/20">
                <button
                  onClick={prev}
                  disabled={cardIndex === 0}
                  className="group/btn flex items-center gap-2.5 text-sm text-text-primary/60 hover:text-primary transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <span className="w-10 h-10 rounded-xl bg-primary/5 group-hover/btn:bg-primary/10 group-hover/btn:shadow-md group-hover/btn:shadow-primary/10 flex items-center justify-center transition-all duration-300 group-hover/btn:-translate-x-1.5">
                    <FiArrowLeft size={16} className="transition-transform duration-300" />
                  </span>
                  <span className="hidden sm:inline font-medium">Prev</span>
                </button>

                {/* Progress dots */}
                <div className="flex items-center gap-2.5">
                  {storyParagraphs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCardIndex(i);
                        setProgressKey((k) => k + 1);
                      }}
                      className="relative group/dot"
                      aria-label={`Go to story ${i + 1}`}
                    >
                      <span
                        className={`block transition-all duration-500 rounded-full ${
                          i === cardIndex
                            ? "w-8 h-2.5 bg-primary shadow-[0_0_10px_rgba(46,95,184,0.4)]"
                            : "w-2.5 h-2.5 bg-primary/15 group-hover/dot:bg-primary/35"
                        }`}
                      />
                      {i === cardIndex && (
                        <motion.span
                          layoutId="active-dot-glow"
                          className="absolute inset-0 rounded-full bg-primary/20 blur-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  disabled={cardIndex === storyParagraphs.length - 1}
                  className="group/btn flex items-center gap-2.5 text-sm text-text-primary/60 hover:text-primary transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <span className="hidden sm:inline font-medium">Next</span>
                  <span className="w-10 h-10 rounded-xl bg-primary/5 group-hover/btn:bg-primary/10 group-hover/btn:shadow-md group-hover/btn:shadow-primary/10 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1.5">
                    <FiArrowRight size={16} className="transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Center: Connecting line with dots */}
          <motion.div
            initial={reduceMotion ? undefined : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 1, ease: EASE_OUT_EXPO }}
            className="hidden md:flex flex-col items-center gap-3 self-stretch py-8"
            style={{ transformOrigin: "top" }}
          >
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-primary/15 to-transparent relative">
              {/* Animated traveling dot */}
              {!reduceMotion && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(46,95,184,0.6)]"
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
          </motion.div>

          {/* Right: Photo album */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            style={{ perspective: "1200px" }}
            className="relative"
          >
            {/* Glow behind album */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-40 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(46, 95, 184, 0.15) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <AboutAlbum />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
