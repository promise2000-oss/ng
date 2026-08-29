"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, DURATIONS } from "@/lib/motion";
import IntroductionBackground from "@/components/animations/IntroductionBackground";
import TextReveal from "@/components/animations/TextReveal";

function TypewriterLabel({ reduceMotion }: { reduceMotion: boolean }) {
  const letters = "Introduction".split("");
  return (
    <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold">
      <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
      <span aria-label="Introduction">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : 0.3 + i * 0.05,
              duration: 0.15,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-block w-[2px] h-[14px] bg-primary ml-[2px]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [1, 0] }
        }
        transition={{
          duration: 0.6,
          repeat: 3,
          repeatType: "reverse",
          delay: reduceMotion ? 0 : 0.3 + letters.length * 0.05 + 0.2,
        }}
      />
    </span>
  );
}

function HeadingPart1({ reduceMotion }: { reduceMotion: boolean }) {
  const text = "Replacing Manual, Paper-Based Processes With";
  const chars = text.split("");

  return (
    <span className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={
            reduceMotion
              ? undefined
              : { opacity: 0, y: 20, rotateX: -90 }
          }
          whileInView={
            reduceMotion
              ? undefined
              : { opacity: 1, y: 0, rotateX: 0 }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: reduceMotion ? 0 : 0.6 + i * 0.025,
            duration: 0.45,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function HeadingPart2({ reduceMotion }: { reduceMotion: boolean }) {
  const text = "Secure Cloud Systems";
  const chars = text.split("");
  const totalDelay = 0.6 + "Replacing Manual, Paper-Based Processes With".length * 0.025;

  return (
    <span className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={
            reduceMotion
              ? undefined
              : { opacity: 0, y: 20, rotateX: -90 }
          }
          whileInView={
            reduceMotion
              ? undefined
              : { opacity: 1, y: 0, rotateX: 0 }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: reduceMotion ? 0 : totalDelay + i * 0.035,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedParagraph({ children, delay = 0 }: { children: string; delay?: number }) {
  const words = children.split(" ");
  const highlightWords = ["IT Consulting", "Digital Solutions", "cloud-based systems", "NICEGENE Academy", "digital transformation", "cloud-native", "serverless", "zero service downtime"];

  return (
    <p className="text-text-primary/80 leading-relaxed">
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(hw => word.includes(hw.split(" ")[0]));
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: delay + i * 0.025,
              duration: 0.45,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className={`inline-block mr-[0.25em] ${isHighlight ? "text-primary font-semibold" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-20 py-20 md:py-28 overflow-hidden bg-[#F7F9FC]"
    >
      <IntroductionBackground />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          style={reduceMotion ? undefined : { y: headingY }}
          className="will-change-transform"
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <motion.span
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
              className="absolute -top-10 -left-4 text-[120px] leading-none text-primary/8 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </motion.span>

            {/* Typewriter "Introduction" label */}
            <TypewriterLabel reduceMotion={!!reduceMotion} />

            {/* Heading with 3D character flip */}
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.3 }}
              className="text-3xl md:text-4xl font-semibold mt-4 leading-tight"
              style={{ perspective: "600px" }}
            >
              <HeadingPart1 reduceMotion={!!reduceMotion} />
              <br className="hidden md:block" />
              <motion.span
                initial={reduceMotion ? undefined : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : 0.6 + "Replacing Manual, Paper-Based Processes With".length * 0.025 + 0.8,
                  duration: 0.6,
                }}
                className="inline-block intro-shimmer-text font-bold"
              >
                <HeadingPart2 reduceMotion={!!reduceMotion} />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, x: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative"
        >
          {/* Glass card backdrop */}
          <div
            className="absolute inset-0 rounded-3xl -m-6 p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px rgba(27, 58, 107, 0.06)",
            }}
          />
          <div className="relative space-y-5">
            <AnimatedParagraph delay={0.3}>
              NICEGENE Technologies is a premiere IT Consulting & Digital Solutions firm based in Lagos Nigeria, trusted by schools, businesses, and public institutions to replace manual, paper-based processes with secure, cloud-based systems. From cloud architecture, migration, and system networking to digitization, web and app development, and professional technology training delivered through NICEGENE Academy, we deliver end-to-end digital transformation built to scale with our clients.
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.5}>
              Our flagship achievement is a cloud-native, serverless examination and school management platform built for the Lagos Archdiocesan Education Commission (LAEC). It now supports more than 10 schools and over 10,000 students, teachers, and administrative staff, with zero service downtime — a standard we bring to every engagement, regardless of size.
            </AnimatedParagraph>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
