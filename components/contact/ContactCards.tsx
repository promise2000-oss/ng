"use client";

import { motion } from "motion/react";
import { contactCards } from "@/lib/contact";

const iconStyles = [
  { bg: "bg-blue-500/10", icon: "text-blue-500", border: "hover:border-blue-500/40" },
  { bg: "bg-[#2E5FA3]/10", icon: "text-[#2E5FA3]", border: "hover:border-[#2E5FA3]/40" },
  { bg: "bg-green-500/10", icon: "text-green-500", border: "hover:border-green-500/40" },
  { bg: "bg-purple-500/10", icon: "text-purple-500", border: "hover:border-purple-500/40" },
  { bg: "bg-pink-500/10", icon: "text-pink-500", border: "hover:border-pink-500/40" },
];

export default function ContactCards() {
  return (
    <section className="px-6 md:px-20 pt-8 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contactCards.map((card, i) => {
          const Wrapper = card.href ? "a" : "div";
          const wrapperProps = card.href
            ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          const style = iconStyles[i];

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block bg-white border border-gray-200 rounded-2xl p-6 text-center ${style.border} transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md`}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className={`w-14 h-14 mx-auto rounded-full ${style.bg} flex items-center justify-center ${style.icon} mb-4 transition-colors`}
                  >
                    <card.icon size={22} />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {card.title}
                  </h3>
                  {card.details.map((d) => (
                    <p key={d} className="text-text-primary/70 text-xs leading-relaxed">
                      {d}
                    </p>
                  ))}
                  {card.action && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-primary/50 group-hover:text-accent transition-colors font-semibold">
                      {card.action} &rarr;
                    </span>
                  )}
                </Wrapper>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
