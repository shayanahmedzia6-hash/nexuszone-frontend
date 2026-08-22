import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { servicesCatalog } from "@/data/services-catalog";
import { createPageMetadata } from "@/lib/seo/metadata";

type ServiceDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function isKnownServiceSlug(slug: string) {
  return servicesCatalog.some((service) => service.slug === slug);
}

export function generateStaticParams() {
  return servicesCatalog.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  if (!isKnownServiceSlug(slug)) {
    return createPageMetadata({
      title: "Service",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  setRequestLocale(locale);
  const t = await getTranslations("servicesDetail");

  return createPageMetadata({
    title: t(`types.${slug}.metaTitle`),
    description: t(`types.${slug}.metaDescription`),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  if (!isKnownServiceSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  return <ServiceDetail slug={slug} />;
}
