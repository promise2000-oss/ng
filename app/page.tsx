import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import AtAGlance from "@/components/home/AtAGlance";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeCTA from "@/components/home/HomeCTA";
import ReviewsSection from "@/components/home/ReviewsSection";
import WorkingProcess from "@/components/home/WorkingProcess";

export default function Page() {
  return (
    <main>
      <Hero />
      <Introduction />
      <AtAGlance />
      <CoreServices />
      <WhyChooseUs />
      <WorkingProcess />
      <ReviewsSection />
      <HomeCTA />
    </main>
  );
}