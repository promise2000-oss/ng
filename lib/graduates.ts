import api from "./api";
import type { Graduate as GraduateType } from "./types";

export type Graduate = GraduateType;

export function getGraduates() {
  return api.get<Graduate[]>("/graduates").then((r) => r.data);
}

export function getGraduate(id: string) {
  return api.get<Graduate>(`/graduates/${id}`).then((r) => r.data);
}
