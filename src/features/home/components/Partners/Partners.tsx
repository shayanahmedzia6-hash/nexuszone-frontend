import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { partners } from "@/data/partners";
import { LogoMarquee } from "@/features/home/components/Partners/LogoMarquee";

type PartnersProps = {
  /** Render the anchor + heading even with no data yet, instead of hiding entirely. */
  emptyState?: boolean;
};

export function Partners({ emptyState = false }: PartnersProps) {
  const t = useTranslations("homePage.partners");
  const freeZones = partners.filter((partner) => partner.category === "free-zone");
  const banks = partners.filter((partner) => partner.category === "bank");

  if (partners.length === 0 && !emptyState) return null;

  return (
    <SectionWrapper
      id="partners"
      className="bg-background-secondary pt-4 md:pt-6 lg:pt-8"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h2>
        <AccentBar variant="tri" />
        <p className="max-w-lg text-base text-text-muted">{t("description")}</p>
      </div>

      {freeZones.length > 0 ? (
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
            {t("freeZoneTitle")}
          </h3>
          <LogoMarquee items={freeZones} />
        </div>
      ) : null}

      {banks.length > 0 ? (
        <div className="mt-8">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
            {t("bankingTitle")}
          </h3>
          <LogoMarquee items={banks} reverse />
        </div>
      ) : null}

      {partners.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-8 text-center text-sm text-text-muted">
          {t("emptyState")}
        </div>
      ) : null}
    </SectionWrapper>
  );
}
