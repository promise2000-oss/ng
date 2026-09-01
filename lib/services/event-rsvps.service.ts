import api from "@/lib/api";

export type EventRsvpPayload = {
  eventId: string;
  name: string;
  email: string;
  phone?: string;
};

export const eventRsvpsService = {
  submit: (data: EventRsvpPayload) =>
    api.post<{ message: string }>("/event-rsvps", data).then((r) => r.data),
};
