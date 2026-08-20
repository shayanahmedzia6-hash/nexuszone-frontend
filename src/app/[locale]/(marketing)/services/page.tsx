import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { ServiceGroupSection } from "@/features/services/components/ServiceGroupSection";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  path: routes.services,
  description:
    "Explore Nexus Zone's full range of business setup, PRO, corporate, tax and compliance services in the UAE.",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGroupSection group="core" />
      <ServiceGroupSection group="support" className="bg-background-secondary" />
      <CTASection
        title="Not Sure Where to Start?"
        description="Talk to our team and we'll help you find the right service for your business."
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
