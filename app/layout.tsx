import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import GlobalBackground from "@/components/animations/GlobalBackground";


export const metadata: Metadata = {
  title: "NICEGENE TECHNOLOGIES",
  description:
    "Nigeria's Premier IT Consulting & Digital Solutions Firm — we design, build, and manage secure cloud systems, digital infrastructure, and technology training that power schools, businesses, and public institutions across Africa.",
  icons: {
    icon: [{ url: "/NICEGENE%20TECHNOLOGIES%20LOGO.png", sizes: "64x64", type: "image/png" }],
    apple: "/NICEGENE%20TECHNOLOGIES%20LOGO.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background text-text-primary pt-20`}
        suppressHydrationWarning
      >
        <MotionConfig reducedMotion="user">
          <GlobalBackground />
          <Navbar />
          <div className="relative z-10">
            <PageTransitionWrapper>
              {children}
            </PageTransitionWrapper>
            <Footer />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}