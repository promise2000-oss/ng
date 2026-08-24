"use client";

import { useEffect, useState, useCallback } from "react";
import type { StaticImageData } from "next/image";

import ESUT1 from "@/assets/images/events/ESUT1.jpg";
import ESUT2 from "@/assets/images/events/ESUT2.jpg";
import ESUT3 from "@/assets/images/events/ESUT3.jpg";
import Eugene from "@/assets/images/team/Eugene.png";
import buchi2 from "@/assets/images/events/buchi2.jpg";
import buchi from "@/assets/images/events/buchi.jpg";
import teamWorking from "@/assets/images/events/team-working.jpg";

type AlbumItem = {
  src: StaticImageData;
  title: string;
};

const images: AlbumItem[] = [
  { src: ESUT1, title: "ESUT Campus Visit" },
  { src: ESUT2, title: "ESUT Lab Session" },
  { src: ESUT3, title: "ESUT Tech Engagement" },
  { src: Eugene, title: "CEO - Eugene" },
  { src: buchi, title: "Team Member - Buchi" },
  { src: buchi2, title: "Field Work - Buchi" },
  { src: teamWorking, title: "Team Collaboration Session" },
];

export default function AboutAlbum() {
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const flipPage = useCallback(() => {
    if (flipping) return;
    const next = current + 1;
    if (next >= images.length) {
      setCurrent(0);
      return;
    }
    setFlipping(true);
    setTimeout(() => {
      setCurrent(next);
      setFlipping(false);
    }, 500);
  }, [flipping, current]);

  useEffect(() => {
    const timer = setInterval(flipPage, 2500);
    return () => clearInterval(timer);
  }, [flipPage]);

  return (
    <div className="perspective-[2000px] w-full max-w-[360px] mx-auto">
      <div className="relative w-full aspect-[1/1]">

        {/* Book shadow */}
        <div className="absolute inset-0 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.7)]" />

        {/* PAGES */}
        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {/* Next page (underneath) */}
          {current + 1 < images.length && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-accent/20 shadow-2xl">
              <img
                src={images[current + 1].src.src}
                alt={images[current + 1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 h-12 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent text-sm text-accent">
                {images[current + 1].title}
              </div>
            </div>
          )}

          {/* Current page (flipping out) */}
          <div
            className={`absolute inset-0 rounded-2xl overflow-hidden bg-white border border-accent/20 shadow-2xl
              ${flipping ? "animate-page-flip" : ""}
            `}
            style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
          >
            <img
              src={images[current].src.src}
              alt={images[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 h-12 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent text-sm text-accent">
              {images[current].title}
            </div>
          </div>
        </div>

        {/* Book spine */}
        <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-accent/20 via-accent/5 to-transparent rounded-l-2xl pointer-events-none" />
      </div>

      {/* Page indicator */}
      <div className="flex justify-center items-center gap-3 mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent w-6 h-2"
                : "bg-white/20 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
