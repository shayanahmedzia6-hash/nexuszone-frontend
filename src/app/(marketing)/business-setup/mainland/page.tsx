import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Mainland Company Setup",
  path: routes.businessSetupMainland,
});

export default function MainlandSetupPage() {
  return <PhasePlaceholder title="Mainland Company Setup" />;
}
