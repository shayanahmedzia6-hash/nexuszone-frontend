import ar from "../../messages/ar.json";
import en from "../../messages/en.json";
import aboutPageAr from "../../messages/fragments/about-page.ar.json";
import aboutPageEn from "../../messages/fragments/about-page.en.json";
import businessSetupDetailAr from "../../messages/fragments/business-setup-detail.ar.json";
import businessSetupDetailEn from "../../messages/fragments/business-setup-detail.en.json";
import careersPageAr from "../../messages/fragments/careers-page.ar.json";
import careersPageEn from "../../messages/fragments/careers-page.en.json";
import contactPageAr from "../../messages/fragments/contact-page.ar.json";
import contactPageEn from "../../messages/fragments/contact-page.en.json";
import servicesCatalogPageAr from "../../messages/fragments/services-catalog-page.ar.json";
import servicesCatalogPageEn from "../../messages/fragments/services-catalog-page.en.json";
import servicesDetailAr from "../../messages/fragments/services-detail.ar.json";
import servicesDetailEn from "../../messages/fragments/services-detail.en.json";
// import es from "../../messages/es.json";
// import fr from "../../messages/fr.json";

import { type Locale } from "./routing";

export type Messages = typeof en & {
  aboutPage: typeof aboutPageEn;
  businessSetupDetail: typeof businessSetupDetailEn;
  servicesCatalogPage: typeof servicesCatalogPageEn;
  servicesDetail: typeof servicesDetailEn;
  contactPage: typeof contactPageEn;
  careersPage: typeof careersPageEn;
};

const catalogs: Record<Locale, Partial<Messages>> = {
  en,
  ar,
  // fr: fr as Partial<Messages>,
  // es: es as Partial<Messages>,
};

const aboutPageByLocale: Record<Locale, typeof aboutPageEn> = {
  en: aboutPageEn,
  ar: aboutPageAr,
};

const businessSetupDetailByLocale: Record<
  Locale,
  typeof businessSetupDetailEn
> = {
  en: businessSetupDetailEn,
  ar: businessSetupDetailAr,
};

const servicesCatalogPageByLocale: Record<
  Locale,
  typeof servicesCatalogPageEn
> = {
  en: servicesCatalogPageEn,
  ar: servicesCatalogPageAr,
};

const servicesDetailByLocale: Record<Locale, typeof servicesDetailEn> = {
  en: servicesDetailEn,
  ar: servicesDetailAr,
};

const contactPageByLocale: Record<Locale, typeof contactPageEn> = {
  en: contactPageEn,
  ar: contactPageAr,
};

const careersPageByLocale: Record<Locale, typeof careersPageEn> = {
  en: careersPageEn,
  ar: careersPageAr,
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeRecords(
  base: Record<string, unknown>,
  override: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };

  for (const [key, overrideValue] of Object.entries(override)) {
    const baseValue = base[key];

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = mergeRecords(baseValue, overrideValue);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }

  return result;
}

export function getLocaleMessages(locale: Locale): Messages {
  const aboutPage = aboutPageByLocale[locale] ?? aboutPageEn;
  const businessSetupDetail =
    businessSetupDetailByLocale[locale] ?? businessSetupDetailEn;
  const servicesCatalogPage =
    servicesCatalogPageByLocale[locale] ?? servicesCatalogPageEn;
  const servicesDetail = servicesDetailByLocale[locale] ?? servicesDetailEn;
  const contactPage = contactPageByLocale[locale] ?? contactPageEn;
  const careersPage = careersPageByLocale[locale] ?? careersPageEn;

  if (locale === "en") {
    return {
      ...en,
      aboutPage,
      businessSetupDetail,
      servicesCatalogPage,
      servicesDetail,
      contactPage,
      careersPage,
    };
  }

  const override = catalogs[locale] ?? {};
  const merged = mergeRecords(
    en as Record<string, unknown>,
    override as Record<string, unknown>,
  ) as Messages;

  return {
    ...merged,
    aboutPage,
    businessSetupDetail,
    servicesCatalogPage,
    servicesDetail,
    contactPage,
    careersPage,
  };
}
