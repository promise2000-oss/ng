import api from "@/lib/api";
import type { TestimonialPayload } from "@/lib/types";

export type Testimonial = {
  _id: string;
  name: string;
  email: string;
  organization?: string;
  position?: string;
  rating: number;
  service: string;
  text: string;
  photo?: string;
  initials: string;
  status: "pending" | "approved" | "rejected";
  consent: boolean;
  createdAt?: string;
};

export const testimonialsService = {
  getAll: () =>
    api.get<Testimonial[]>("/testimonials").then((r) => r.data),

  getApproved: () =>
    api.get<Testimonial[]>("/testimonials?status=approved").then((r) => r.data),

  submit: (data: TestimonialPayload) =>
    api.post<{ message: string }>("/testimonials", data).then((r) => r.data),
};
