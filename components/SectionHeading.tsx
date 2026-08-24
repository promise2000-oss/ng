"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, DURATIONS, STAGGER } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: DURATIONS.section, ease: EASE_OUT_EXPO };
  const delayStep = reduceMotion ? 0 : STAGGER.default;

  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignCls} ${className ?? ""}`}>
      {eyebrow && (
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={transition}
          className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold"
        >
          <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
          {eyebrow}
          {align === "center" && <span className="h-px w-6 bg-primary/40" aria-hidden="true" />}
        </motion.span>
      )}
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ ...transition, delay: eyebrow ? delayStep : 0 }}
        className={`text-3xl md:text-4xl font-semibold mt-4 leading-tight ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...transition, delay: eyebrow ? delayStep * 2 : delayStep }}
          className={`text-sm leading-relaxed max-w-2xl mt-4 ${
            dark ? "text-white/70" : "text-text-primary/70"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}