import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { CostCalculator } from "@/features/home/components/CostCalculator";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cost Calculator",
  path: routes.costCalculator,
  description:
    "Estimate your UAE business setup cost with Nexus Zone's cost calculator — select your business type, jurisdiction, visas and office space.",
});

export default function CostCalculatorPage() {
  return (
    <>
      <CostCalculator />
      <CTASection
        title="Want an Exact Quote?"
        description="Speak with our team for a detailed, no-obligation quote tailored to your business."
        actions={
          <Button href={routes.contact} className="gap-2">
            Talk to an Expert
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
