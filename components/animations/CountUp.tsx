"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

type CountUpProps = {
  from?: number;
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
  once?: boolean;
};

export default function CountUp({
  from = 0,
  to,
  suffix = "",
  className,
  duration = 2,
  once = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once });
  const spring = useSpring(from, {
    stiffness: 60,
    damping: 20,
    duration,
  });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  if (isInView && spring.get() === from) {
    spring.set(to);
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
