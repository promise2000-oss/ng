"use client";

import { useMutation } from "@tanstack/react-query";
import { testimonialsService } from "@/lib/services/testimonials.service";
import type { TestimonialPayload } from "@/lib/types";

export function useSubmitTestimonial() {
  return useMutation({
    mutationFn: (data: TestimonialPayload) => testimonialsService.submit(data),
  });
}
