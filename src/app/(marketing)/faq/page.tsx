import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "FAQ",
  path: routes.faq,
});

export default function FaqPage() {
  return <PhasePlaceholder title="FAQ" />;
}
