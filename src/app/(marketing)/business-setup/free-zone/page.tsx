import { businessSetupDetails } from "@/data/business-setup-detail";
import { BusinessSetupDetail } from "@/features/business-setup/components/BusinessSetupDetail";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Free Zone Company Setup",
  path: routes.businessSetupFreeZone,
  description:
    "Set up a UAE free zone company with Nexus Zone — 100% foreign ownership and full profit repatriation.",
});

export default function FreeZonePage() {
  return <BusinessSetupDetail detail={businessSetupDetails["free-zone"]} />;
}
