import api from "@/lib/api";
import type { TestimonialPayload } from "@/lib/types";

export const testimonialsService = {
  submit: (data: TestimonialPayload) =>
    api.post<{ message: string }>("/testimonials", data).then((r) => r.data),
};
