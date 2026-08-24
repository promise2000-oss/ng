import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import WhoWeAre from "@/components/about/WhoWeAre";
import CompanyInfo from "@/components/about/CompanyInfo";
import Values from "@/components/about/Values";
import WhyNicegene from "@/components/about/WhyNicegene";

export const metadata: Metadata = {
  title: "About Us — NICEGENE TECHNOLOGIES",
  description:
    "NICEGENE Technology Solutions Limited — Nigeria's premier IT consulting and digital solutions partner powering schools, businesses, and public institutions across Africa with secure cloud systems and technology training.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-text-primary">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <Values />
      <WhoWeAre />
      <CompanyInfo />
      <WhyNicegene />
      <MeetOurTeam />
    </main>
  );
}