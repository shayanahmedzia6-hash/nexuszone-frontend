import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { services } from "@/data/services";

import { ServiceListItem } from "./ServiceListItem";

export function Services() {
  if (services.length === 0) return null;

  return (
    <SectionWrapper id="services">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Our Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Comprehensive Services to{" "}
            <span className="text-primary">Power Your Business</span>
          </h2>
          <p className="max-w-md text-base text-text-muted md:text-lg">
            From company formation to PRO services and beyond, we provide
            end-to-end solutions so you can focus on what matters most —
            growing your business.
          </p>
          <AccentBar variant="tri" className="mt-2" />
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceListItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
