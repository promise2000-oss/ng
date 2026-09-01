"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaTicketAlt,
  FaTimes,
  FaShareAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import Modal from "@/components/Modal";
import { useSubmitEventRsvp } from "@/lib/hooks/useEventRsvps";
import { formatDate } from "@/lib/seed-data";
import { imageUrl } from "@/lib/api";
import type { EventItem, EventType } from "@/lib/events";

const typeConfig: Record<EventType, { label: string }> = {
  birthday: { label: "Birthdays" },
  activity: { label: "Activities" },
  "company-event": { label: "Company Events" },
};

export default function EventsContent({
  events,
  loading,
  error,
}: {
  events: EventItem[];
  loading: boolean;
  error: string | null;
}) {
  const [rsvpTarget, setRsvpTarget] = useState<EventItem | null>(null);

  const { upcoming, past } = useMemo(() => {
    const now = new Date().getTime();
    const upcomingList = events
      .filter((e) => new Date(e.date).getTime() >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const pastList = events
      .filter((e) => new Date(e.date).getTime() < now)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { upcoming: upcomingList, past: pastList };
  }, [events]);

  return (
    <>
      {/* Upcoming events */}
      <section className="px-6 md:px-20 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Mark Your Calendar
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Birthdays, team activities, and company events — reserve your seat for what is coming next.
            </p>
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-3xl p-7 animate-pulse">
                  <div className="h-4 w-24 bg-gray-200 rounded-full mb-4" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded-lg mb-3" />
                  <div className="h-4 w-full bg-gray-200 rounded-lg mb-2" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded-lg mb-6" />
                  <div className="h-10 w-32 bg-gray-200 rounded-full" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-error text-sm py-10">
              Could not load events — check back soon.
            </p>
          )}

          {!loading && !error && upcoming.length === 0 && (
            <p className="text-center text-text-secondary text-sm py-10">
              No upcoming events right now — check back soon!
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((event, i) => (
              <Reveal key={event._id} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-3xl p-7 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-semibold">
                      <FaCalendarAlt size={10} />
                      {typeConfig[event.type].label}
                    </span>
                    <SocialShare title={event.title} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary leading-snug">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mt-4 text-[13px] text-text-secondary">
                    <p className="flex items-center gap-2">
                      <FaRegCalendarAlt size={13} className="text-accent shrink-0" />
                      {formatDate(event.date)}
                    </p>
                  </div>
                  <p className="text-[13px] text-text-secondary leading-relaxed mt-4 flex-1">
                    {event.description}
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setRsvpTarget(event)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
                    >
                      <FaTicketAlt size={13} />
                      RSVP / Register
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past events gallery */}
      <section className="px-6 md:px-20 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Past Events &amp; <span className="text-accent">Photo Gallery</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Relive our celebrations, activities, and company moments.
            </p>
          </div>

          {!loading && error && (
            <p className="text-center text-error text-sm py-10">
              Could not load events — check back soon.
            </p>
          )}

          {!loading && !error && past.length === 0 && (
            <p className="text-center text-text-secondary text-sm py-10">
              No past events yet.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {past.map((event) => (
              <div
                key={event._id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                {event.images && event.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-1.5 p-3 bg-surface/50">
                    {event.images
                      .map((photo) => imageUrl(photo))
                      .filter((p): p is string => p !== null)
                      .slice(0, 4)
                      .map((url, i) => (
                        <div
                          key={i}
                          className="relative aspect-[16/10] overflow-hidden rounded-xl"
                        >
                          <Image
                            src={url}
                            alt={`${event.title} photo ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/20 font-semibold">
                      <FaCalendarAlt size={10} />
                      {typeConfig[event.type].label}
                    </span>
                    <span className="text-[12px] text-text-secondary flex items-center gap-1.5">
                      <FaClock size={11} className="text-accent shrink-0" />
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <h3 className="font-bold text-text-primary">{event.title}</h3>
                  <p className="text-[13px] text-text-secondary mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP modal */}
      <Modal
        open={Boolean(rsvpTarget)}
        onClose={() => setRsvpTarget(null)}
        labelledBy="rsvp-form-title"
        panelClassName="w-full max-w-lg"
      >
        <h2 id="rsvp-form-title" className="sr-only">
          RSVP for {rsvpTarget?.title ?? "event"}
        </h2>
        <button
          onClick={() => setRsvpTarget(null)}
          aria-label="Close RSVP form"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-error transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FaTimes size={16} />
        </button>
        {rsvpTarget && <RsvpForm event={rsvpTarget} onDone={() => setRsvpTarget(null)} />}
      </Modal>
    </>
  );
}

function SocialShare({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "https://nicegeneco.com.ng/events";
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);
  const links = [
    { icon: FaTwitter, href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`, label: "Share on X" },
    { icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, label: "Share on LinkedIn" },
    { icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, label: "Share on Facebook" },
  ];
  return (
    <div className="flex items-center gap-1.5" aria-label="Share this event">
      <FaShareAlt size={11} className="text-text-secondary/60" />
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="w-7 h-7 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
        >
          <l.icon size={11} />
        </a>
      ))}
    </div>
  );
}

function RsvpForm({ event, onDone }: { event: EventItem; onDone: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const rsvpMutation = useSubmitEventRsvp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please complete your name, email, and phone number.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    rsvpMutation.mutate(
      {
        eventId: event._id,
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      {
        onSuccess: () => setSubmitted(true),
        onError: () => setSubmitted(true),
      }
    );
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <FaCheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">RSVP Confirmed!</h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto">
          Thank you, {form.name.split(" ")[0]} — your seat for “{event.title}” is reserved. A
          confirmation email has been sent to {form.email} with event details.
        </p>
        <button
          onClick={onDone}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
        >
          Close
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-text-primary">RSVP / Register</h3>
        <p className="text-[13px] text-text-secondary mt-1">
          Reserve your seat for <span className="font-semibold text-text-primary">{event.title}</span>{" "}
          — {formatDate(event.date)}.
        </p>
      </div>

      {error && (
        <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3">
          <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <div>
        <label htmlFor="rsvp-name" className="block text-xs font-semibold text-text-primary mb-1.5">
          Full Name *
        </label>
        <input
          id="rsvp-name"
          className={inputCls}
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="rsvp-email" className="block text-xs font-semibold text-text-primary mb-1.5">
          Email Address *
        </label>
        <input
          id="rsvp-email"
          type="email"
          className={inputCls}
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="rsvp-phone" className="block text-xs font-semibold text-text-primary mb-1.5">
          Phone Number *
        </label>
        <input
          id="rsvp-phone"
          className={inputCls}
          placeholder="+234 ..."
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
      >
        <FaTicketAlt size={14} />
        Confirm RSVP
      </button>
      <p className="text-[11px] text-text-secondary text-center">
        An automated confirmation email will be sent to you on submission.
      </p>
    </form>
  );
}