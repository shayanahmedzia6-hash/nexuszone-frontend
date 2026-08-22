import { getLocale } from "next-intl/server";

import { redirect } from "@/i18n/navigation";
import { routes } from "@/lib/constants/routes";

export default async function BusinessSetupPage() {
  const locale = await getLocale();
  redirect({ href: routes.businessSetup, locale });
}
