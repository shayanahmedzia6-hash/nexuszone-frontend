import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Free Zone Company Setup",
  path: routes.businessSetupFreeZone,
});

export default function FreeZoneSetupPage() {
  return <PhasePlaceholder title="Free Zone Company Setup" />;
}
