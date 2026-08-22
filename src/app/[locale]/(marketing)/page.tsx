import { BlogPreview } from "@/features/home/components/BlogPreview";
import { BusinessSetup } from "@/features/home/components/BusinessSetup";
import { FAQ } from "@/features/home/components/FAQ";
import { FinalCTA } from "@/features/home/components/FinalCTA";
import { Hero } from "@/features/home/components/Hero";
import { HomeReadyGate } from "@/features/home/components/HomeReadyGate";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { Partners } from "@/features/home/components/Partners";
import { Services } from "@/features/home/components/Services";
import { Stats } from "@/features/home/components/Stats";
import { Testimonials } from "@/features/home/components/Testimonials";
import { WhatYouNeed } from "@/features/home/components/WhatYouNeed";
import { WhyNexus } from "@/features/home/components/WhyNexus";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("homePage.meta");

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/",
  });
}

export default function HomePage() {
  return (
    <HomeReadyGate>
      <Hero />
      <Services />
      <HowItWorks />
      <BusinessSetup />
      <WhyNexus />
      <WhatYouNeed />
      <Stats />
      <Testimonials />
      <Partners />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </HomeReadyGate>
  );
}
