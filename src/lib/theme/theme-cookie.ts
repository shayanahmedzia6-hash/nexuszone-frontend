export type ThemeMode = "light" | "dark";

/** Cookie used by the root layout to set `data-theme` without a blocking `<script>`. */
export const THEME_COOKIE_KEY = "nexus-zone-theme";

export function isThemeMode(value: unknown): value is ThemeMode {
  return value === "light" || value === "dark";
}

export function applyThemeToDocument(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  document.cookie = `${THEME_COOKIE_KEY}=${theme};path=/;max-age=31536000;samesite=lax`;
}
