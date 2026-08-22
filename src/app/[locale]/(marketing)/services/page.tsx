import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { ServiceGroupSection } from "@/features/services/components/ServiceGroupSection";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const t = await getTranslations("servicesCatalogPage");

  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: routes.services,
  });
}

export default async function ServicesPage() {
  const t = await getTranslations("servicesCatalogPage");

  return (
    <>
      <ServicesHero />
      <ServiceGroupSection group="core" className="pt-4 md:pt-6 lg:pt-8" />
      <ServiceGroupSection group="support" className="bg-background-secondary" />
      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        actions={
          <Button href={routes.contact} className="gap-2">
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
