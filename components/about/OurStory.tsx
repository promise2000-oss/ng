"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AboutAlbum from "@/components/about/AboutAlbum";
import TextReveal from "@/components/animations/TextReveal";

const storyParagraphs = [
  "NICEGENE Technologies is a Lagos-based IT consulting and digital solutions firm built to close the gap between traditional, manual operations and modern digital efficiency. We provide end-to-end technology integration for schools, businesses, and public institutions, delivered through a focused portfolio of cloud, infrastructure, development, and training services.",
  "Since our founding in 2026, we have grown from a small team of specialists into a firm entrusted with the digital infrastructure of some of Lagos's most established educational institutions. Our flagship engagement — a cloud-native, serverless school management and examination platform for the Lagos Archdiocesan Education Commission — now underpins the day-to-day operations of over 10 schools and more than 10,000 students and staff.",
  "It reflects the standard of reliability, security, and craftsmanship we bring to every client, from a single-branch retail store to a multi-institution commission. We are guided by four core values — honesty, excellence, integrity, and respect — and by a long-term commitment to the organizations we serve. We do not just build systems; we build the digital foundations our clients will rely on for years to come.",
];

export default function OurStory() {
  const [cardIndex, setCardIndex] = useState(0);

  const prev = () => setCardIndex((i) => Math.max(0, i - 1));
  const next = () => setCardIndex((i) => Math.min(storyParagraphs.length - 1, i + 1));

  return (
    <section className="px-6 md:px-20 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">

          <TextReveal
            as="h2"
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary"
          >
            Our Story
          </TextReveal>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Story cards */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 min-h-[280px] flex flex-col">
              <p className="text-text-primary/80 leading-relaxed flex-1">
                {storyParagraphs[cardIndex]}
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={prev}
                  disabled={cardIndex === 0}
                  className="flex items-center gap-2 text-sm text-text-primary hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FiArrowLeft /> Prev
                </button>

                <span className="text-sm text-text-primary/70">
                  {cardIndex + 1} / {storyParagraphs.length}
                </span>

                <button
                  onClick={next}
                  disabled={cardIndex === storyParagraphs.length - 1}
                  className="flex items-center gap-2 text-sm text-text-primary hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Photo album */}
          <div>
            <AboutAlbum />
          </div>
        </div>

      </div>
    </section>
  );
}
