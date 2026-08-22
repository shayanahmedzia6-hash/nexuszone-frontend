import { getTranslations } from "next-intl/server";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { CareerApplicationForm } from "@/features/careers/components/CareerApplicationForm";
import { JobOpenings } from "@/features/careers/components/JobOpenings";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const t = await getTranslations("careersPage");

  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: routes.careers,
  });
}

export default async function CareersPage() {
  const t = await getTranslations("careersPage");

  const formCopy = {
    fullName: t("form.fullName"),
    fullNamePlaceholder: t("form.fullNamePlaceholder"),
    email: t("form.email"),
    emailPlaceholder: t("form.emailPlaceholder"),
    phone: t("form.phone"),
    phonePlaceholder: t("form.phonePlaceholder"),
    position: t("form.position"),
    positionHint: t("form.positionHint"),
    positionPlaceholder: t("form.positionPlaceholder"),
    message: t("form.message"),
    messageHint: t("form.messageHint"),
    messagePlaceholder: t("form.messagePlaceholder"),
    submit: t("form.submit"),
    sentTitle: t("form.sentTitle"),
    sentBody: t("form.sentBody"),
    sendAnother: t("form.sendAnother"),
    mailSubject: String(t.raw("form.mailSubject")),
    mailBody: String(t.raw("form.mailBody")),
    phoneFallback: t("form.phoneFallback"),
    errors: {
      name: t("form.errors.name"),
      email: t("form.errors.email"),
      phone: t("form.errors.phone"),
      position: t("form.errors.position"),
      message: t("form.errors.message"),
    },
  };

  return (
    <SectionWrapper id="careers">
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

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-text">
            {t("openPositions")}
          </h2>
          <JobOpenings emptyMessage={t("emptyOpenings")} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-text">{t("applyNow")}</h2>
          <CareerApplicationForm copy={formCopy} />
        </div>
      </div>
    </SectionWrapper>
  );
}
