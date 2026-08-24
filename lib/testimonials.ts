import { fetchApi } from "./api";

export type TestimonialPayload = {
  name: string;
  email: string;
  organization: string;
  position?: string;
  rating: number;
  service: string;
  text: string;
  photo?: string;
  consent: boolean;
};

export type TestimonialResponse = {
  message: string;
  testimonial: TestimonialPayload & { _id: string; createdAt: string };
};

export function submitTestimonial(data: TestimonialPayload) {
  return fetchApi<TestimonialResponse>("/testimonials", {
    method: "POST",
    body: JSON.stringify(data),
  });
}