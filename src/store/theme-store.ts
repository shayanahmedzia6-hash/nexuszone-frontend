import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  applyThemeToDocument,
  type ThemeMode,
} from "@/lib/theme/theme-cookie";

export type { ThemeMode };

export const THEME_STORAGE_KEY = "nexus-zone-theme";

type ThemeState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

/**
 * Client UI preference only — never store server/CMS data here.
 * Hydration-safe: initial theme is light; root layout sets data-theme from cookie.
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => {
        set({ theme });
        applyThemeToDocument(theme);
      },
      toggleTheme: () => {
        const next = get().theme === "light" ? "dark" : "light";
        get().setTheme(next);
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
