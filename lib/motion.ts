/**
 * Central motion language for the NICEGENE public website.
 *
 * Every animation in the codebase should source its easing and duration
 * from this module so the entire site moves as one coherent system.
 *
 * TIERS
 *   micro        100–200ms   button feedback, links, focus states
 *   interaction  250–500ms   cards, navigation, dropdowns, toggles
 *   section      500–900ms   section entrances, image reveals, stats
 *   hero         800–1500ms  hero choreography
 *   cinematic    1500ms+     page transitions (used extremely sparingly)
 */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_EXPO = [0.7, 0, 0.84, 0] as const;
export const EASE_IN_OUT_EXPO = [0.87, 0, 0.13, 1] as const;
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

export const DURATIONS = {
  micro: 0.16,
  interaction: 0.4,
  section: 0.65,
  hero: 1.1,
  cinematic: 1.4,
} as const;

/** Stagger gap between sibling elements (30–60ms). */
export const STAGGER = {
  default: 0.05,
  cards: 0.06,
  list: 0.04,
} as const;

/** Scroll-triggered reveal offset in viewport before triggering. */
export const VIEWPORT_MARGIN = "-80px";

export type MotionEasing =
  | typeof EASE_OUT_EXPO
  | typeof EASE_IN_EXPO
  | typeof EASE_IN_OUT_EXPO
  | typeof EASE_OUT_QUART;