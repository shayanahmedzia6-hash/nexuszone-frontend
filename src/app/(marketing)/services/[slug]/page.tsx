import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  return createPageMetadata({
    title: "Service",
    path: `/services/${slug}`,
    noIndex: true,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  return (
    <PhasePlaceholder
      title="Service detail"
      description={`Route ready for /services/${slug}. Content ships in a later phase.`}
    />
  );
}
