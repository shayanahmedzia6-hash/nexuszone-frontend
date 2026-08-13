"use client";

import { useSyncExternalStore } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Example foundation hook. Prefer CSS tokens + data-theme for theming.
 */
export function usePrefersDarkMode(): boolean {
  return useMediaQuery("(prefers-color-scheme: dark)");
}

export function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
}
