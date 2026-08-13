import { Hero } from "@/features/home/components/Hero";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Empower Your Business in the UAE",
  path: "/",
  description:
    "Nexus Zone helps you with company formation, compliance, and business support across the UAE — smart solutions to move forward and achieve lasting success.",
});

export default function HomePage() {
  return <Hero />;
}
