"use client";

import { useQuery } from "@tanstack/react-query";
import { coursesService } from "@/lib/services/courses.service";

const COURSES_KEY = ["courses"];

export function useCourses() {
  return useQuery({
    queryKey: COURSES_KEY,
    queryFn: coursesService.getAll,
  });
}
