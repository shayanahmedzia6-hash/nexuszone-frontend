import { LegalPageLayout } from "@/features/legal/components/LegalPageLayout";
import { siteContact } from "@/data/site-contact";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  path: routes.terms,
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      updatedLabel="Draft — not yet published"
      intro="These Terms & Conditions govern your use of this website. By using the site, you agree to the terms below."
      sections={[
        {
          heading: "Use of This Website",
          body: "This website is provided for general information about Nexus Zone's services. Content should not be relied upon as legal, tax or financial advice.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, branding and design on this website belong to Nexus Zone unless otherwise stated, and may not be reproduced without permission.",
        },
        {
          heading: "Accuracy of Information",
          body: "We aim to keep information on this site accurate and up to date, but make no guarantee that all content is complete, current or error-free.",
        },
        {
          heading: "Limitation of Liability",
          body: "Nexus Zone is not liable for any loss or damage arising from use of, or reliance on, this website.",
        },
        {
          heading: "Governing Law",
          body: "These terms are governed by the laws of the United Arab Emirates.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.",
        },
        {
          heading: "Contact Us",
          body: (
            <>
              Questions about these terms can be sent to{" "}
              <a href={siteContact.emailHref} className="text-primary underline">
                {siteContact.email}
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
