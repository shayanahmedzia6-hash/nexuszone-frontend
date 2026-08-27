import { getTranslations } from "next-intl/server";

import { OptimizedImage } from "@/components/media/optimized-image";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { CareerApplicationForm } from "@/features/careers/components/CareerApplicationForm";
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
    positionPlaceholder: t("form.positionPlaceholder"),
    cv: t("form.cv"),
    cvPlaceholder: t("form.cvPlaceholder"),
    cvSelected: String(t.raw("form.cvSelected")),
    message: t("form.message"),
    messagePlaceholder: t("form.messagePlaceholder"),
    submit: t("form.submit"),
    sending: t("form.sending"),
    sentTitle: t("form.sentTitle"),
    sentBody: t("form.sentBody"),
    sendAnother: t("form.sendAnother"),
    submitError: t("form.submitError"),
    errors: {
      name: t("form.errors.name"),
      email: t("form.errors.email"),
      phone: t("form.errors.phone"),
      position: t("form.errors.position"),
      cv: t("form.errors.cv"),
      message: t("form.errors.message"),
    },
  };

  return (
    <SectionWrapper id="careers" className="py-6 md:py-8 lg:py-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-text md:text-4xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-sm text-text-muted md:text-base">
          {t("description")}
        </p>
      </div>

      <div className="mt-6 grid items-stretch gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="flex min-w-0 flex-col">
          <h2 className="mb-3 text-base font-semibold text-text md:text-lg">
            {t("applyNow")}
          </h2>
          <CareerApplicationForm copy={formCopy} />
        </div>

        <div className="relative h-full min-h-[16rem] overflow-hidden rounded-2xl bg-surface sm:min-h-[20rem] lg:min-h-0">
          <OptimizedImage
            src="/images/careers/careers.jfif"
            alt={t("metaTitle")}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
