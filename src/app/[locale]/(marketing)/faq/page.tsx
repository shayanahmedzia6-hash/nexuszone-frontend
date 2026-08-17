import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/features/home/components/FAQ";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "FAQ",
  path: routes.faq,
  description:
    "Answers to common questions about business setup, compliance and working with Nexus Zone in the UAE.",
});

export default function FaqPage() {
  return (
    <>
      <FAQ />
      <CTASection
        title="Still Have Questions?"
        description="Our team is happy to walk you through anything that's not covered here."
        className="bg-background"
        actions={
          <Button href={routes.contact} className="gap-2">
            Contact Us
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
