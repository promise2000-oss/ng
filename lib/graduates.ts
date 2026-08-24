import { fetchApi } from "./api";

export type Graduate = {
  _id: string;
  name: string;
  course: string;
  graduationYear: number;
  grade?: string;
  image: string;
  testimonial?: string;
  linkedInUrl?: string;
};

export function getGraduates() {
  return fetchApi<Graduate[]>("/graduates");
}

export function getGraduate(id: string) {
  return fetchApi<Graduate>(`/graduates/${id}`);
}
