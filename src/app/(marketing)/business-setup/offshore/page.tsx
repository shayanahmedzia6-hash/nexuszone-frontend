import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Offshore Company Setup",
  path: routes.businessSetupOffshore,
});

export default function OffshoreSetupPage() {
  return <PhasePlaceholder title="Offshore Company Setup" />;
}
