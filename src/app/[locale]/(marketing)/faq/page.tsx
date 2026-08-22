import { getLocale } from "next-intl/server";

import { redirect } from "@/i18n/navigation";
import { routes } from "@/lib/constants/routes";

export default async function FaqPage() {
  const locale = await getLocale();
  redirect({ href: routes.faq, locale });
}
