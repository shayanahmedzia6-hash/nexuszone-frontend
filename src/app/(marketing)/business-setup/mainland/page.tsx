import { businessSetupDetails } from "@/data/business-setup-detail";
import { BusinessSetupDetail } from "@/features/business-setup/components/BusinessSetupDetail";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Mainland Company Setup",
  path: routes.businessSetupMainland,
  description:
    "Register a UAE mainland company with Nexus Zone — trade freely across the Emirates with full setup and compliance support.",
});

export default function MainlandPage() {
  return <BusinessSetupDetail detail={businessSetupDetails.mainland} />;
}
