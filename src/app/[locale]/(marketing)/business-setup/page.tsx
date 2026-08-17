import { BusinessSetupHub } from "@/features/business-setup/components/BusinessSetupHub";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Business Setup",
  path: routes.businessSetup,
  description:
    "Explore Mainland, Free Zone, Offshore, Branch Office and Professional License options for setting up a business in the UAE with Nexus Zone.",
});

export default function BusinessSetupPage() {
  return <BusinessSetupHub />;
}
