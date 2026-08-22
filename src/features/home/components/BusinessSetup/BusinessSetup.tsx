import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { businessSetupOptions } from "@/data/business-setup";
import { routes } from "@/lib/constants/routes";

export function BusinessSetup() {
  const t = useTranslations("businessSetupHome");

  if (businessSetupOptions.length === 0) return null;

  return (
    <SectionWrapper id="business-setup">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h2>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          {t("description")}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {businessSetupOptions.map((option) => (
          <Link
            key={option.id}
            href={option.href ?? routes.businessSetup}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40 hover:bg-surface/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 text-primary">
              <DynamicIcon
                name={option.icon}
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-text md:text-lg">
                {t(`options.${option.id}.title`)}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                {t(`options.${option.id}.summary`)}
              </p>
            </div>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-4 rounded-xl bg-background-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text">
            {t("notSureTitle")}
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            {t("notSureDescription")}
          </p>
        </div>
        <Button
          href={routes.contact}
          variant="secondary"
          className="w-full justify-center gap-2 bg-text text-background hover:opacity-90 sm:w-auto sm:shrink-0"
        >
          {t("notSureButton")}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </SectionWrapper>
  );
}
