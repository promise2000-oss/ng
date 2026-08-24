"use client";

import { motion, useReducedMotion } from "motion/react";

interface FlipCardProps {
  cardNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isFlipped: boolean;
  onFlipChange: (cardNumber: number, isFlipped: boolean) => void;
}

export function FlipCard({
  cardNumber,
  icon,
  title,
  description,
  isFlipped,
  onFlipChange,
}: FlipCardProps) {
  const reduceMotion = useReducedMotion();

  const toggle = () => onFlipChange(cardNumber, !isFlipped);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (cardNumber - 1) * 0.05, duration: 0.5 }}
      className="perspective-[1000px] h-[360px] sm:h-[380px] cursor-pointer"
      onClick={toggle}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${title}. ${isFlipped ? "Close details" : "Open details"}`}
      data-flip-card={cardNumber}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 text-center hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-primary mb-5 overflow-hidden ring-1 ring-secondary/10">
            {icon}
          </div>
          <span className="text-primary/40 text-xs font-semibold uppercase tracking-wider mb-2">
            {String(cardNumber).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
          <p className="text-sm text-text-primary/70 leading-relaxed mb-6">{description}</p>
          <span className="text-primary text-[10px] uppercase tracking-widest font-semibold mt-auto">
            Click to explore
          </span>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary-darker flex flex-col items-center justify-center p-8 text-center text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-3 w-full">{title}</h3>
          <p className="text-sm leading-relaxed opacity-90">{description}</p>
          <span className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mt-auto">
            Click to close
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}