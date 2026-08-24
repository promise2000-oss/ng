"use client";

import { useState, useEffect } from "react";
import AcademyHero from "@/components/academy/AcademyHero";
import AcademyCourses from "@/components/academy/AcademyCourses";
import AcademyCTA from "@/components/academy/AcademyCTA";
import TrainingTracks from "@/components/academy/TrainingTracks";
import TechInsightSeries from "@/components/academy/TechInsightSeries";
import { courses as staticCourses, getCoursePricing, mergePricing } from "@/lib/academy";
import type { Course } from "@/lib/academy";

export default function AcademyPage() {
  const [courses, setCourses] = useState<Course[]>(staticCourses);

  useEffect(() => {
    getCoursePricing()
      .then((overrides) => setCourses(mergePricing(staticCourses, overrides)))
      .catch(() => {});
  }, []);

  return (
    <main className="w-full bg-background text-text-primary">
      <AcademyHero />
      <TrainingTracks />
      <AcademyCourses courses={courses} />
      <TechInsightSeries />
      <AcademyCTA />
    </main>
  );
}
