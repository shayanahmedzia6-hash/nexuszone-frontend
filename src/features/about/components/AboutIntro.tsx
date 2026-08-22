"use client";

import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";

export function AboutIntro() {
  const t = useTranslations("aboutPage");

  return (
    <SectionWrapper id="about-intro">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          {t("description")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-background-secondary p-6">
          <h2 className="text-lg font-semibold text-text">{t("missionTitle")}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {t("missionText")}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background-secondary p-6">
          <h2 className="text-lg font-semibold text-text">{t("visionTitle")}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {t("visionText")}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
