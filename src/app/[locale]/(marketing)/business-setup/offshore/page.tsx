import { getTranslations } from "next-intl/server";

import { BusinessSetupDetail } from "@/features/business-setup/components/BusinessSetupDetail";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const t = await getTranslations("businessSetupDetail.types.offshore");

  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: routes.businessSetupOffshore,
  });
}

export default function OffshorePage() {
  return <BusinessSetupDetail type="offshore" />;
}
