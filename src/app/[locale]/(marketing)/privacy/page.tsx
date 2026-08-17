import { LegalPageLayout } from "@/features/legal/components/LegalPageLayout";
import { siteContact } from "@/data/site-contact";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  path: routes.privacy,
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      updatedLabel="Draft — not yet published"
      intro="This Privacy Policy explains, in general terms, how Nexus Zone may collect, use and protect information submitted through this website."
      sections={[
        {
          heading: "Information We Collect",
          body: "Information you provide directly, such as through the contact or newsletter forms (e.g. name, email, phone number, and message content).",
        },
        {
          heading: "How We Use Information",
          body: "To respond to enquiries, provide requested services, and — where you've opted in — send updates about our services.",
        },
        {
          heading: "Cookies & Analytics",
          body: "This site may use cookies or similar technologies to remember preferences (such as light/dark mode) and understand site usage.",
        },
        {
          heading: "Third-Party Services",
          body: "We may use third-party tools (e.g. hosting, analytics, email delivery) that process information on our behalf.",
        },
        {
          heading: "Data Retention",
          body: "We retain information only for as long as necessary to fulfil the purpose it was collected for, or as required by law.",
        },
        {
          heading: "Your Rights",
          body: "You may request access to, correction of, or deletion of your personal information by contacting us using the details below.",
        },
        {
          heading: "Contact Us",
          body: (
            <>
              Questions about this policy can be sent to{" "}
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
