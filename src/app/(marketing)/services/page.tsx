import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Services",
  path: routes.services,
});

export default function ServicesPage() {
  return <PhasePlaceholder title="Services" />;
}
