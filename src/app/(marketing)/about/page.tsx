import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "About",
  path: routes.about,
});

export default function AboutPage() {
  return <PhasePlaceholder title="About" />;
}
