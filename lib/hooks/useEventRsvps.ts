"use client";

import { useMutation } from "@tanstack/react-query";
import { eventRsvpsService, type EventRsvpPayload } from "@/lib/services/event-rsvps.service";

export function useSubmitEventRsvp() {
  return useMutation({
    mutationFn: (data: EventRsvpPayload) => eventRsvpsService.submit(data),
  });
}
