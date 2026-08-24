"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="relative min-h-[60vh] w-full bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <p className="text-accent text-sm uppercase tracking-[0.25em] font-semibold">
          Something went wrong
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mt-3">
          We hit a snag loading this page
        </h1>
        <p className="text-text-secondary text-sm md:text-base mt-4 leading-relaxed">
          This is on us, not you. Try again — or head home and explore the rest of what we
          build.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all shadow-lg shadow-accent/25 active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-300 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}