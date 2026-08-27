import api from "@/lib/api";
import type { Graduate } from "@/lib/types";

export const graduatesService = {
  getAll: () =>
    api.get<Graduate[]>("/graduates").then((r) => r.data),

  getById: (id: string) =>
    api.get<Graduate>(`/graduates/${id}`).then((r) => r.data),

  create: (data: Partial<Graduate>) =>
    api.post<Graduate>("/graduates", data).then((r) => r.data),

  update: (id: string, data: Partial<Graduate>) =>
    api.put<Graduate>(`/graduates/${id}`, data).then((r) => r.data),

  delete: (id: string) =>
    api.delete(`/graduates/${id}`).then((r) => r.data),
};
