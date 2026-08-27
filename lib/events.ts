import api from "./api";
import type { EventItem as EventItemType, EventType as EventTypeType } from "./types";

export type EventType = EventTypeType;
export type EventItem = EventItemType;

export function getEvents() {
  return api.get<EventItem[]>("/events").then((r) => r.data);
}

export function getEvent(id: string) {
  return api.get<EventItem>(`/events/${id}`).then((r) => r.data);
}

export function createEvent(data: {
  title: string;
  type: EventType;
  date: string;
  description: string;
  images?: string[];
}) {
  return api.post<EventItem>("/events", data).then((r) => r.data);
}

export function updateEvent(
  id: string,
  data: Partial<{
    title: string;
    type: EventType;
    date: string;
    description: string;
  }>
) {
  return api.put<EventItem>(`/events/${id}`, data).then((r) => r.data);
}

export function deleteEvent(id: string) {
  return api.delete(`/events/${id}`).then((r) => r.data);
}
