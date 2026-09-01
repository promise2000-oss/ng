"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { testimonialsService, type Testimonial } from "@/lib/services/testimonials.service";
import type { TestimonialPayload } from "@/lib/types";

const TESTIMONIALS_KEY = ["testimonials"];

export function useTestimonials() {
  return useQuery({
    queryKey: TESTIMONIALS_KEY,
    queryFn: testimonialsService.getAll,
    staleTime: 5 * 60 * 1000,
  });
}

export function useApprovedTestimonials() {
  return useQuery({
    queryKey: [...TESTIMONIALS_KEY, "approved"],
    queryFn: testimonialsService.getApproved,
    staleTime: 5 * 60 * 1000,
  });
}

export function useSubmitTestimonial() {
  return useMutation({
    mutationFn: (data: TestimonialPayload) => testimonialsService.submit(data),
  });
}
