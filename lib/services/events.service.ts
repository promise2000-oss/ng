import api from "@/lib/api";
import type { EventItem } from "@/lib/types";

export const eventsService = {
  getAll: () =>
    api.get<EventItem[]>("/events").then((r) => r.data),

  getById: (id: string) =>
    api.get<EventItem>(`/events/${id}`).then((r) => r.data),

  create: (data: { title: string; type: string; date: string; description: string; images?: string[] }) =>
    api.post<EventItem>("/events", data).then((r) => r.data),

  update: (id: string, data: Partial<{ title: string; type: string; date: string; description: string }>) =>
    api.put<EventItem>(`/events/${id}`, data).then((r) => r.data),

  delete: (id: string) =>
    api.delete(`/events/${id}`).then((r) => r.data),
};
