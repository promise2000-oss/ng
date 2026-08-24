"use client";

import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <AnimatedGradient
        duration={26}
        colors={[
          "rgba(3, 236, 238, 0.012)",
          "rgba(255, 138, 0, 0.008)",
          "rgba(15, 76, 129, 0.014)",
        ]}
      />
      <FloatingOrbs
        orbs={[
          { size: 520, color: "bg-secondary", x: 78, y: 22, duration: 32, delay: 0, blur: 160 },
          { size: 420, color: "bg-accent", x: 20, y: 76, duration: 36, delay: 6, blur: 150 },
        ]}
      />
    </div>
  );
}
