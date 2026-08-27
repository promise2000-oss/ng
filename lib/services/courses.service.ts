import api from "@/lib/api";
import type { CoursePricing } from "@/lib/types";

export const coursesService = {
  getAll: () =>
    api.get<CoursePricing[]>("/courses").then((r) => r.data),

  upsert: (title: string, data: Partial<CoursePricing>) =>
    api.put<CoursePricing>(`/courses/${encodeURIComponent(title)}`, data).then((r) => r.data),
};
