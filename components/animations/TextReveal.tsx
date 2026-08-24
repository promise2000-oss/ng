"use client";

import { motion } from "motion/react";

type TextRevealProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  once?: boolean;
  type?: "words" | "chars";
};

export default function TextReveal({
  children,
  as: Tag = "h1",
  className,
  delay = 0,
  once = true,
  type = "words",
}: TextRevealProps) {
  const words = children.split(" ");

  if (type === "chars") {
    const chars = children.split("");
    return (
      <Tag className={className} aria-label={children}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once }}
            transition={{
              delay: delay + i * 0.03,
              duration: 0.4,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{
            delay: delay + i * 0.08,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
