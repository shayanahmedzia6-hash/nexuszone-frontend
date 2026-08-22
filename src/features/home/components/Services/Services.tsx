import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { services } from "@/data/services";

import { ServiceListItem } from "./ServiceListItem";

export function Services() {
  const t = useTranslations("servicesHome");

  if (services.length === 0) return null;

  return (
    <SectionWrapper id="services">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {t("titlePrimary")}{" "}
            <span className="text-primary">{t("titleAccent")}</span>
          </h2>
          <p className="max-w-md text-base text-text-muted md:text-lg">
            {t("description")}
          </p>
          <AccentBar variant="tri" className="mt-2" />
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceListItem
              key={service.id}
              service={service}
              title={t(`items.${service.id}.title`)}
              summary={t(`items.${service.id}.summary`)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
