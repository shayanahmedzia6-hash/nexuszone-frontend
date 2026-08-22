"use client";

import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";

export function ServicesHero() {
  const t = useTranslations("servicesCatalogPage");

  return (
    <SectionWrapper id="services-hero" className="pb-4 md:pb-6 lg:pb-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("heroEyebrow")}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          {t("heroTitlePrimary")}{" "}
          <span className="text-primary">{t("heroTitleAccent")}</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          {t("heroDescription")}
        </p>
      </div>
    </SectionWrapper>
  );
}
