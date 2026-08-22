"use client";

import { useTranslations } from "next-intl";

import { ServiceCard } from "@/components/cards/service-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { servicesCatalog } from "@/data/services-catalog";
import { routes } from "@/lib/constants/routes";
import { type ServiceGroup } from "@/types/service";
import { cn } from "@/lib/utils/cn";

type ServiceGroupSectionProps = {
  group: ServiceGroup;
  className?: string;
};

export function ServiceGroupSection({
  group,
  className,
}: ServiceGroupSectionProps) {
  const t = useTranslations("servicesCatalogPage");
  const items = servicesCatalog.filter((service) => service.group === group);

  if (items.length === 0) return null;

  return (
    <SectionWrapper id={`${group}-services`} className={cn(className)}>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {t(`groups.${group}.title`)}
        </h2>
        <p className="max-w-xl text-base text-text-muted">
          {t(`groups.${group}.description`)}
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <ServiceCard
            key={service.id}
            service={{
              id: service.id,
              slug: service.slug,
              icon: service.icon,
              href: service.href ?? `${routes.services}/${service.slug}`,
              title: t(`items.${service.id}.title`),
              summary: t(`items.${service.id}.summary`),
            }}
            learnMoreLabel={t("learnMore")}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
