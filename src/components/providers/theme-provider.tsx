"use client";

import { useEffect, type ReactNode } from "react";

import { useThemeStore } from "@/store/theme-store";

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * Syncs Zustand theme with document after hydration.
 * Initial data-theme is set by the blocking script in root layout.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const unsub = useThemeStore.persist.onFinishHydration(() => {
      const hydrated = useThemeStore.getState().theme;
      document.documentElement.setAttribute("data-theme", hydrated);
    });
    return unsub;
  }, []);

  return children;
}
