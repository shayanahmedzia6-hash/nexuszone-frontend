/** Home page section IDs — must match SectionWrapper `id` attributes. */
export const HOME_SECTION_IDS = [
  "services",
  "how-it-works",
  "business-setup",
  "why-us",
  "what-you-need",
  "stats",
  "team",
  "partners",
  "faq",
  "final-cta",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

export const SECTION_SCROLL_DURATION = 1200;
export const SECTION_SCROLL_OFFSET = -100;

export function hasHashInHref(href: unknown): href is string {
  return typeof href === "string" && href.includes("#");
}

export function getSectionIdFromHref(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const hash = href.slice(hashIndex + 1);
  return hash || null;
}

export function getPathFromHref(href: string): string {
  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  return path || "/";
}

export function isHomeSectionHref(href: string): boolean {
  const sectionId = getSectionIdFromHref(href);
  if (!sectionId) return false;
  if (getPathFromHref(href) !== "/") return false;
  return HOME_SECTION_IDS.includes(sectionId as HomeSectionId);
}
