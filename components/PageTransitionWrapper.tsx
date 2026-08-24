"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { EASE_IN_OUT_EXPO, EASE_OUT_EXPO } from "@/lib/motion";

const pageVariants = {
  enter: {},
  animate: {},
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE_IN_OUT_EXPO, when: "beforeChildren" },
  },
};

const curtainVariants = {
  enter: {
    y: ["0%", "-100%"],
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
  animate: {
    y: "-100%",
    transition: { duration: 0 },
  },
  exit: {
    y: ["-100%", "0%"],
    transition: { duration: 0.3, ease: EASE_IN_OUT_EXPO },
  },
};

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  if (reduceMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="enter"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="relative"
      >
        {children}
        <motion.div
          aria-hidden="true"
          variants={curtainVariants}
          className="pointer-events-none fixed inset-0 z-[75] bg-primary"
        />
      </motion.div>
    </AnimatePresence>
  );
}