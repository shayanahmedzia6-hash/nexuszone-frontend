import { unstable_cache } from "next/cache";

import {
  type CacheOptions,
  toNextCacheConfig,
} from "@/lib/cache/policies";

/**
 * Thin wrapper around `unstable_cache` for future server data fetchers.
 * Prefer Server Components + this helper for SEO-critical content.
 * Do not use for user-specific data (policy: userSpecific).
 */
export function createCachedFetcher<TArgs extends unknown[], TResult>(
  key: string,
  fetcher: (...args: TArgs) => Promise<TResult>,
  options: CacheOptions,
): (...args: TArgs) => Promise<TResult> {
  if (options.policy === "userSpecific" || options.policy === "dynamic") {
    return fetcher;
  }

  const nextConfig = toNextCacheConfig(options);

  return unstable_cache(fetcher, [key], {
    revalidate:
      typeof nextConfig.revalidate === "number"
        ? nextConfig.revalidate
        : undefined,
    tags: nextConfig.tags,
  });
}
