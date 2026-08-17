import { businessSetupDetails } from "@/data/business-setup-detail";
import { BusinessSetupDetail } from "@/features/business-setup/components/BusinessSetupDetail";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Offshore Company Setup",
  path: routes.businessSetupOffshore,
  description:
    "Establish a UAE offshore company with Nexus Zone — ideal for asset protection and international trade structuring.",
});

export default function OffshorePage() {
  return <BusinessSetupDetail detail={businessSetupDetails.offshore} />;
}
