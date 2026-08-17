import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactInfo } from "@/features/contact/components/ContactInfo";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  path: routes.contact,
  description:
    "Get in touch with Nexus Zone for business setup, compliance and corporate support in the UAE.",
});

export default function ContactPage() {
  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Contact Us
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          Let&apos;s Talk About <span className="text-primary">Your Business</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          Share a few details and our team will get back to you shortly —
          or reach us directly using the details below.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
