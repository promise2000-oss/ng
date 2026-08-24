"use client";

import { useEffect, useState } from "react";
import EventsHero from "@/components/events/EventsHero";
import EventsContent from "@/components/events/EventsContent";
import EventsCTA from "@/components/events/EventsCTA";
import { getEvents, type EventItem } from "@/lib/events";

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [counts, setCounts] = useState({ upcoming: 0, past: 0 });

  useEffect(() => {
    getEvents()
      .then((list) => {
        setEvents(list);
        const now = Date.now();
        setCounts({
          upcoming: list.filter((e) => new Date(e.date).getTime() >= now).length,
          past: list.filter((e) => new Date(e.date).getTime() < now).length,
        });
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="w-full bg-background text-text-primary">
      <EventsHero upcomingCount={counts.upcoming} pastCount={counts.past} />
      <EventsContent events={events} loading={loading} error={error} />
      <EventsCTA />
    </main>
  );
}