import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { finalCtaContent } from "@/data/final-cta";

export function FinalCTA() {
  const t = useTranslations("finalCta");

  return (
    <SectionWrapper
      id="final-cta"
      contained={false}
      className="bg-background-secondary pt-4 pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-xl)] px-4 md:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
            {t("titlePrimary")}{" "}
            <span className="text-primary">{t("titleAccent")}</span>
          </h2>
          <p className="max-w-xl text-base text-text-muted md:text-lg">
            {t("description")}
          </p>
          <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={finalCtaContent.primaryCta.href}
              size="lg"
              className="w-full justify-center gap-2 sm:w-auto"
            >
              {t("primaryCta")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={finalCtaContent.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
