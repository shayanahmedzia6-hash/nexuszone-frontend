import { type ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/navigation/header";
import { LeadCaptureModal } from "@/features/lead-capture/components/LeadCaptureModal";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <div id="main-content" className="flex flex-1 flex-col">
        {children}
      </div>
      <Footer />
      <LeadCaptureModal />
    </>
  );
}
