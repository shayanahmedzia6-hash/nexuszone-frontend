import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { AboutIntro } from "@/features/about/components/AboutIntro";
import { FounderStory } from "@/features/about/components/FounderStory";
import { Partners } from "@/features/home/components/Partners";
import { Team } from "@/features/home/components/Team";
import { WhyNexus } from "@/features/home/components/WhyNexus";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const t = await getTranslations("aboutPage");

  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: routes.about,
  });
}

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  return (
    <>
      <AboutIntro />
      <WhyNexus />
      <Team showCta={false} emptyState />
      <FounderStory />
      <Partners emptyState />
      <CTASection
        title={t("readyTitle")}
        description={t("readyDescription")}
        actions={
          <Button href={routes.contact} className="gap-2">
            {t("talkToExpert")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
