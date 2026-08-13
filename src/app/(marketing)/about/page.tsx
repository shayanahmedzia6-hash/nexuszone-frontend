import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { AboutIntro } from "@/features/about/components/AboutIntro";
import { Partners } from "@/features/home/components/Partners";
import { Team } from "@/features/home/components/Team";
import { WhyNexus } from "@/features/home/components/WhyNexus";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About",
  path: routes.about,
  description:
    "Learn about Nexus Zone — your trusted partner for business setup, compliance and corporate solutions across the UAE.",
});

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <WhyNexus />
      <Team showCta={false} emptyState />
      <Partners emptyState />
      <CTASection
        title="Ready to Work Together?"
        description="Tell us about your business and we'll help you get started."
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
