import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Blog",
  path: routes.blog,
});

export default function BlogPage() {
  return <PhasePlaceholder title="Blog" />;
}
