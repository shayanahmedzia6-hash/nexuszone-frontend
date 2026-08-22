"use client";

import { useEffect, type ReactNode } from "react";

import { applyThemeToDocument } from "@/lib/theme/theme-cookie";
import { useThemeStore } from "@/store/theme-store";

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * Syncs Zustand theme with document + cookie after hydration.
 * Initial data-theme comes from the theme cookie on the server layout.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  useEffect(() => {
    const unsub = useThemeStore.persist.onFinishHydration(() => {
      applyThemeToDocument(useThemeStore.getState().theme);
    });

    if (useThemeStore.persist.hasHydrated()) {
      applyThemeToDocument(useThemeStore.getState().theme);
    }

    return unsub;
  }, []);

  return children;
}
