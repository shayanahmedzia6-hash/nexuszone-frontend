import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "How It Works",
  path: routes.howItWorks,
  description:
    "See how Nexus Zone takes you from first consultation to a fully set-up business in the UAE.",
});

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks />
      <CTASection
        title="Ready to Begin?"
        description="Share your requirements and we'll take it from there."
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
