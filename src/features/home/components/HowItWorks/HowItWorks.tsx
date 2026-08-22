"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/data/how-it-works";
import { HowItWorksVisual } from "@/features/home/components/HowItWorks/HowItWorksVisual";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const isDark = useThemeStore((state) => state.theme) === "dark";

  if (processSteps.length === 0) return null;

  const stepCardClass = cn(
    "relative flex flex-col gap-3 rounded-xl border p-5 shadow-lg backdrop-blur-md",
    isDark
      ? "border-white/20 bg-black/55"
      : "border-black/10 bg-white/75",
  );

  const stepTitleClass = cn(
    "text-base font-semibold md:text-lg",
    isDark ? "text-white drop-shadow-sm" : "text-text",
  );

  const stepDescriptionClass = cn(
    "text-sm leading-relaxed",
    isDark ? "text-white/90" : "text-text-muted",
  );

  const connectorClass = cn(
    "absolute top-8 left-[calc(100%-0.5rem)] hidden h-px w-[calc(100%-1rem)] border-t border-dashed md:block",
    isDark ? "border-white/40" : "border-black/20",
  );

  const ctaBoxClass = cn(
    "mt-12 flex flex-col items-stretch gap-4 rounded-xl border p-6 shadow-sm backdrop-blur-md sm:flex-row sm:items-center sm:justify-between",
    isDark ? "border-white/15 bg-black/40" : "border-black/10 bg-white/75",
  );

  const ctaTitleClass = cn(
    "text-lg font-semibold",
    isDark ? "text-white" : "text-text",
  );

  const ctaDescriptionClass = cn(
    "text-sm",
    isDark ? "text-white/85" : "text-text-muted",
  );

  return (
    <SectionWrapper
      id="how-it-works"
      contained={false}
      className="relative overflow-hidden"
    >
      <HowItWorksVisual />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white drop-shadow-sm md:text-4xl">
            {t("titlePrimary")}{" "}
            <span className="text-primary">{t("titleAccent")}</span>
          </h2>
          <p className="max-w-lg text-base text-white/85 md:text-lg">
            {t("description")}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, index) => (
            <li key={step.id} className={stepCardClass}>
              {index < processSteps.length - 1 ? (
                <span className={connectorClass} aria-hidden />
              ) : null}
              <span className="text-2xl font-bold text-primary drop-shadow-sm">
                {step.step}
              </span>
              <h3 className={stepTitleClass}>
                {t(`steps.${step.id}.title`)}
              </h3>
              <p className={stepDescriptionClass}>
                {t(`steps.${step.id}.description`)}
              </p>
            </li>
          ))}
        </ol>

        <div className={ctaBoxClass}>
          <div>
            <h3 className={ctaTitleClass}>{t("ctaTitle")}</h3>
            <p className={ctaDescriptionClass}>{t("ctaDescription")}</p>
          </div>
          <Button
            href={routes.contact}
            className="w-full justify-center gap-2 sm:w-auto"
          >
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
