"use client";

import { useQuery } from "@tanstack/react-query";
import { eventsService } from "@/lib/services/events.service";

const EVENTS_KEY = ["events"];

export function useEvents() {
  return useQuery({
    queryKey: EVENTS_KEY,
    queryFn: eventsService.getAll,
  });
}

export function useEvent(id: string) {
  return useQuery({
    queryKey: [...EVENTS_KEY, id],
    queryFn: () => eventsService.getById(id),
    enabled: !!id,
  });
}
