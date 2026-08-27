"use client";

import { useMemo } from "react";
import EventsHero from "@/components/events/EventsHero";
import EventsContent from "@/components/events/EventsContent";
import EventsCTA from "@/components/events/EventsCTA";
import { useEvents } from "@/lib/hooks/useEvents";

export default function EventsPage() {
  const { data: events = [], isLoading, error } = useEvents();

  const counts = useMemo(() => {
    const now = Date.now();
    return {
      upcoming: events.filter((e) => new Date(e.date).getTime() >= now).length,
      past: events.filter((e) => new Date(e.date).getTime() < now).length,
    };
  }, [events]);

  return (
    <main className="w-full bg-background text-text-primary">
      <EventsHero upcomingCount={counts.upcoming} pastCount={counts.past} />
      <EventsContent
        events={events}
        loading={isLoading}
        error={error ? error.message : null}
      />
      <EventsCTA />
    </main>
  );
}
