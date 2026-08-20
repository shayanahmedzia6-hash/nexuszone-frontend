/**
 * Lazy-loading guidance for future phases.
 *
 * Prefer:
 * - Route-level code splitting (automatic with App Router)
 * - `next/dynamic` for heavy client-only widgets (carousel, map)
 * - `Suspense` + `loading.tsx` for streaming async server regions
 *
 * Avoid:
 * - Lazy-loading critical above-the-fold content (Hero / LCP)
 * - Dynamically importing every section by default
 */

export const LAZY_LOAD_CANDIDATES = [
  "HeavyCarousel",
  "MapWidget",
  "AnimationHeavyWidget",
] as const;
