"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const GRID_COLOR = "rgba(46, 95, 184, 0.07)";
const N_STROKE = "rgba(27, 58, 107, 0.08)";
const N_NODE = "rgba(46, 95, 184, 0.10)";
const N_ARC = "rgba(92, 200, 242, 0.06)";

export default function IntroductionBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1 — Atmospheric Radial Glows */}
      <div
        className="absolute inset-0 intro-glow-1"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 30% 20%, rgba(46, 95, 184, 0.14), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute inset-0 intro-glow-2"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 75% 15%, rgba(92, 200, 242, 0.10), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute inset-0 intro-glow-3"
        style={{
          background:
            "radial-gradient(ellipse 600px 450px at 20% 80%, rgba(27, 58, 107, 0.08), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Layer 2 — Technical Grid */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          y: gridY,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, black 100%)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="intro-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={GRID_COLOR}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intro-grid)" />
        </svg>
      </motion.div>

      {/* Layer 3 — Ghosted "N" Monogram */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: 550,
          height: 550,
          right: "5%",
          top: "50%",
          y: "-50%",
          opacity: reduceMotion ? 0.6 : undefined,
        }}
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 360] }
        }
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Left pillar */}
          <line
            x1="100"
            y1="60"
            x2="100"
            y2="340"
            stroke={N_STROKE}
            strokeWidth="2"
          />
          {/* Right pillar */}
          <line
            x1="300"
            y1="60"
            x2="300"
            y2="340"
            stroke={N_STROKE}
            strokeWidth="2"
          />
          {/* Diagonal crossbar */}
          <line
            x1="100"
            y1="60"
            x2="300"
            y2="340"
            stroke={N_STROKE}
            strokeWidth="1.5"
          />

          {/* Orbital arcs — left pillar top */}
          <circle
            cx="100"
            cy="60"
            r="30"
            stroke={N_ARC}
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="4 6"
          />
          <circle
            cx="100"
            cy="60"
            r="50"
            stroke={N_ARC}
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3 8"
          />

          {/* Orbital arcs — right pillar bottom */}
          <circle
            cx="300"
            cy="340"
            r="30"
            stroke={N_ARC}
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="4 6"
          />
          <circle
            cx="300"
            cy="340"
            r="50"
            stroke={N_ARC}
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3 8"
          />

          {/* Orbital arcs — right pillar top */}
          <circle
            cx="300"
            cy="60"
            r="25"
            stroke={N_ARC}
            strokeWidth="0.6"
            fill="none"
            strokeDasharray="3 5"
          />

          {/* Orbital arcs — left pillar bottom */}
          <circle
            cx="100"
            cy="340"
            r="25"
            stroke={N_ARC}
            strokeWidth="0.6"
            fill="none"
            strokeDasharray="3 5"
          />

          {/* Nodes at stroke endpoints */}
          <circle cx="100" cy="60" r="4" fill={N_NODE} />
          <circle cx="300" cy="60" r="4" fill={N_NODE} />
          <circle cx="100" cy="340" r="4" fill={N_NODE} />
          <circle cx="300" cy="340" r="4" fill={N_NODE} />

          {/* Midpoint node on diagonal */}
          <circle cx="200" cy="200" r="3" fill={N_NODE} />
          <circle
            cx="200"
            cy="200"
            r="18"
            stroke={N_ARC}
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Layer 3 Mobile — Smaller "N" Monogram */}
      <motion.div
        className="absolute pointer-events-none block md:hidden"
        style={{
          width: 280,
          height: 280,
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          opacity: reduceMotion ? 0.6 : undefined,
        }}
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 360] }
        }
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <line x1="100" y1="60" x2="100" y2="340" stroke={N_STROKE} strokeWidth="2" />
          <line x1="300" y1="60" x2="300" y2="340" stroke={N_STROKE} strokeWidth="2" />
          <line x1="100" y1="60" x2="300" y2="340" stroke={N_STROKE} strokeWidth="1.5" />
          <circle cx="100" cy="60" r="30" stroke={N_ARC} strokeWidth="0.8" fill="none" strokeDasharray="4 6" />
          <circle cx="300" cy="340" r="30" stroke={N_ARC} strokeWidth="0.8" fill="none" strokeDasharray="4 6" />
          <circle cx="100" cy="60" r="4" fill={N_NODE} />
          <circle cx="300" cy="60" r="4" fill={N_NODE} />
          <circle cx="100" cy="340" r="4" fill={N_NODE} />
          <circle cx="300" cy="340" r="4" fill={N_NODE} />
          <circle cx="200" cy="200" r="3" fill={N_NODE} />
        </svg>
      </motion.div>

      {/* Layer 4 — Heading Spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 30% 40%, rgba(46, 95, 184, 0.10), transparent 65%)",
        }}
      />

      {/* Layer 5 — SVG Noise Texture */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="intro-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#intro-noise)"
          opacity="0.035"
          style={{ mixBlendMode: "multiply" }}
        />
      </svg>
    </div>
  );
}
