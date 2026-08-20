import { BlogPreview } from "@/features/home/components/BlogPreview";
import { BusinessSetup } from "@/features/home/components/BusinessSetup";
import { FAQ } from "@/features/home/components/FAQ";
import { FinalCTA } from "@/features/home/components/FinalCTA";
import { Hero } from "@/features/home/components/Hero";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { Partners } from "@/features/home/components/Partners";
import { Services } from "@/features/home/components/Services";
import { Stats } from "@/features/home/components/Stats";
import { Team } from "@/features/home/components/Team";
import { Testimonials } from "@/features/home/components/Testimonials";
import { WhatYouNeed } from "@/features/home/components/WhatYouNeed";
import { WhyNexus } from "@/features/home/components/WhyNexus";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Empower Your Business in the UAE",
  path: "/",
  description:
    "Nexus Zone helps you with company formation, compliance, and business support across the UAE — smart solutions to move forward and achieve lasting success.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <BusinessSetup />
      <WhyNexus />
      <WhatYouNeed />
      <Stats />
      <Testimonials />
      <Team />
      <Partners />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
