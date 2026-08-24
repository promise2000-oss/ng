import { fetchApi } from "./api";

export type EventType = "birthday" | "activity" | "company-event";

export type EventItem = {
  _id: string;
  type: EventType;
  title: string;
  date: string;
  description: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
};

export function getEvents() {
  return fetchApi<EventItem[]>("/events");
}

export function getEvent(id: string) {
  return fetchApi<EventItem>(`/events/${id}`);
}

export function createEvent(data: {
  title: string;
  type: EventType;
  date: string;
  description: string;
  images?: string[];
}) {
  return fetchApi<EventItem>("/events", {
    method: "POST",
    body: JSON.stringify(data),
  });
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
  return fetchApi<EventItem>(`/events/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteEvent(id: string) {
  return fetchApi<{ message: string }>(`/events/${id}`, {
    method: "DELETE",
  });
}
