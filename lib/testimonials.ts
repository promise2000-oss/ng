import api from "./api";
import type { TestimonialPayload as TestimonialPayloadType } from "./types";

export type TestimonialPayload = TestimonialPayloadType;

export type TestimonialResponse = {
  message: string;
};

export function submitTestimonial(data: TestimonialPayload) {
  return api.post<TestimonialResponse>("/testimonials", data).then((r) => r.data);
}
