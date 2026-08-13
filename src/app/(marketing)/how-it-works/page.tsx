import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "How It Works",
  path: routes.howItWorks,
});

export default function HowItWorksPage() {
  return <PhasePlaceholder title="How It Works" />;
}
