import { useTranslations } from "next-intl";

/** Maps navigation.ts menu ids to messages.navMega.* namespace keys. */
export const NAV_MEGA_KEYS: Record<string, string> = {
  "business-setup": "businessSetup",
  services: "services",
  about: "about",
};

export function useNavMega(menuId: string) {
  const ns = NAV_MEGA_KEYS[menuId];
  const t = useTranslations(ns ? `navMega.${ns}` : "navMega");

  const text = (key: string, fallback: string) =>
    ns && t.has(key) ? t(key) : fallback;

  return { text, ns: ns ?? menuId };
}
