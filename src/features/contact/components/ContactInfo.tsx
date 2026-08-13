import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteContact } from "@/data/site-contact";

const items = [
  {
    icon: Phone,
    label: "Phone",
    value: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteContact.whatsappDisplay,
    href: siteContact.whatsappHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteContact.email,
    href: siteContact.emailHref,
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteContact.address,
    href: undefined,
  },
  {
    icon: Clock3,
    label: "Hours",
    value: siteContact.hours,
    href: undefined,
  },
] as const;

export function ContactInfo() {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 text-primary">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
                {item.label}
              </p>
              <p className="text-base font-medium text-text">{item.value}</p>
            </div>
          </>
        );

        return (
          <li key={item.label} className="flex items-start gap-4">
            {item.href ? (
              <a href={item.href} className="flex items-start gap-4 hover:text-primary">
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
