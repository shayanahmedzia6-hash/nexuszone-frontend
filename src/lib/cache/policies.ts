export type CachePolicy =
  | "static"
  | "revalidate"
  | "dynamic"
  | "userSpecific";

export const CacheTag = {
  services: "services",
  businessSetup: "business-setup",
  testimonials: "testimonials",
  partners: "partners",
  blog: "blog",
  faqs: "faqs",
  calculatorPricing: "calculator-pricing",
  team: "team",
} as const;

export type CacheTag = (typeof CacheTag)[keyof typeof CacheTag];

export type CacheOptions = {
  policy: CachePolicy;
  tags?: CacheTag[];
  /** Seconds. Used when policy is `revalidate`. */
  revalidateSeconds?: number;
};

/**
 * Map a cache policy to Next.js fetch / unstable_cache options.
 * userSpecific must never be shared across users.
 */
export function toNextCacheConfig(options: CacheOptions): {
  revalidate?: number | false;
  tags?: string[];
  cache?: RequestCache;
} {
  switch (options.policy) {
    case "static":
      return {
        revalidate: false,
        tags: options.tags,
      };
    case "revalidate":
      return {
        revalidate: options.revalidateSeconds ?? 3600,
        tags: options.tags,
      };
    case "dynamic":
      return {
        cache: "no-store",
      };
    case "userSpecific":
      return {
        cache: "no-store",
      };
    default: {
      const _exhaustive: never = options.policy;
      return _exhaustive;
    }
  }
}
