"use client";

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  blur?: number;
  children?: React.ReactNode;
};

export default function BackgroundVideo({
  src,
  poster,
  overlayOpacity = 0.85,
  overlayColor = "rgba(15, 76, 129, 0.85)",
  gradientFrom = "rgba(15, 76, 129, 0.95)",
  gradientVia = "rgba(15, 76, 129, 0.85)",
  gradientTo = "rgba(15, 76, 129, 0.9)",
  blur = 0,
  children,
}: BackgroundVideoProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: blur ? `blur(${blur}px)` : undefined,
          transform: "translateY(8%)",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          opacity: overlayOpacity,
        }}
      />
      {children}
    </div>
  );
}