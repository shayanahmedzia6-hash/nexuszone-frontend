import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Business Setup",
  path: routes.businessSetup,
});

export default function BusinessSetupPage() {
  return <PhasePlaceholder title="Business Setup" />;
}
