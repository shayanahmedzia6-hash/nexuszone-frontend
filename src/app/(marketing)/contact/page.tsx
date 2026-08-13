import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Contact",
  path: routes.contact,
});

export default function ContactPage() {
  return <PhasePlaceholder title="Contact" />;
}
