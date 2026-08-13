import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";

export const metadata = createPageMetadata({
  title: "Cost Calculator",
  path: routes.costCalculator,
});

export default function CostCalculatorPage() {
  return <PhasePlaceholder title="Cost Calculator" />;
}
