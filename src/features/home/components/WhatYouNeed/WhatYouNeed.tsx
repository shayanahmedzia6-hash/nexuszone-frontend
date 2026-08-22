import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { needCategories } from "@/data/what-you-need";
import { routes } from "@/lib/constants/routes";

export function WhatYouNeed() {
  const t = useTranslations("whatYouNeed");

  if (needCategories.length === 0) return null;

  return (
    <SectionWrapper
      id="what-you-need"
      className="bg-background-secondary pb-6 md:pb-8 lg:pb-10"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text md:text-5xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h2>
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          {t("description")}
        </p>
        <AccentBar variant="duo" align="center" className="mt-1" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {needCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40 hover:bg-surface"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
              <DynamicIcon name={category.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-text">
                {t(`categories.${category.id}.title`)}
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                {t(`categories.${category.id}.description`)}
              </p>
            </div>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button href={routes.services} className="gap-2">
          {t("viewAllServices")}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </SectionWrapper>
  );
}
