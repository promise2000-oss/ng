"use client";

import { motion } from "motion/react";

export default function BlogPostContent({ content }: { content: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="prose prose-invert max-w-none">
      {content.split("\n").map((line, i) => {
        if (line.startsWith("## ")) {
          return <h2 key={i} className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-text-primary">{line.replace("## ", "")}</h2>;
        }
        if (line.startsWith("### ")) {
          return <h3 key={i} className="text-lg font-semibold mt-8 mb-3 text-text-primary">{line.replace("### ", "")}</h3>;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return <p key={i} className="text-text-primary/80 font-semibold mb-3">{line.replace(/\*\*/g, "")}</p>;
        }
        if (line.startsWith("- ")) {
          return <li key={i} className="text-text-primary/80 text-sm leading-relaxed ml-4 list-disc">{line.replace("- ", "")}</li>;
        }
        if (line.startsWith("1. ")) {
          return <li key={i} className="text-text-primary/80 text-sm leading-relaxed ml-4 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
        }
        if (line.trim() === "") {
          return <div key={i} className="h-3" />;
        }
        return <p key={i} className="text-text-primary/80 text-sm leading-relaxed mb-4">{line}</p>;
      })}
    </motion.div>
  );
}
