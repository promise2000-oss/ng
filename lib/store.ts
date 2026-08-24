"use client";

export const STORE_KEYS = {
  partners: "nicegene_partners",
  partnerApplications: "nicegene_partner_applications",
  clients: "nicegene_clients",
  testimonials: "nicegene_testimonials",
  eventRsvps: "nicegene_event_rsvps",
  registrations: "nicegene_registrations",
  students: "nicegene_students",
  referrals: "nicegene_referrals",
  announcements: "nicegene_announcements",
  newsletter: "nicegene_newsletter",
  certificates: "nicegene_certificates",
  siteConfig: "nicegene_site_config",
  examSession: "nicegene_exam_session",
  examAnswers: "nicegene_exam_answers",
  examActive: "nicegene_exam_active",
  authSession: "nicegene_auth_session",
  demoAuth: "nicegene_demo_auth",
} as const;

export type StoreKey = (typeof STORE_KEYS)[keyof typeof STORE_KEYS];

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadStore<T>(key: StoreKey, seed: () => T): T {
  if (!canUseStorage()) return seed();
  const raw = window.localStorage.getItem(key);
  if (raw) {
    try {
      return JSON.parse(raw) as T;
    } catch {
      // fall through to reseed
    }
  }
  const initial = seed();
  try {
    window.localStorage.setItem(key, JSON.stringify(initial));
  } catch {
    // storage may be full or blocked — ignore
  }
  return initial;
}

export function saveStore<T>(key: StoreKey, value: T): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage may be full or blocked — ignore
  }
}

export function appendStoreItem<T>(key: StoreKey, seed: () => T[], item: T): T[] {
  const list = loadStore<T[]>(key, seed);
  const updated = [item, ...list];
  saveStore(key, updated);
  return updated;
}

export function resetStore(): void {
  if (!canUseStorage()) return;
  Object.values(STORE_KEYS).forEach((key) => window.localStorage.removeItem(key));
}