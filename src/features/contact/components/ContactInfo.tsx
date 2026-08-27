"use client";

import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { getSocialIcon } from "@/components/navigation/nav-icons";
import { footerContent } from "@/data/footer";
import { siteContact } from "@/data/site-contact";

export function ContactInfo() {
  const t = useTranslations("contactPage.info");

  const items = [
    {
      icon: Phone,
      label: t("phone"),
      value: siteContact.phoneDisplay,
      href: siteContact.phoneHref,
    },
    {
      icon: MessageCircle,
      label: t("whatsapp"),
      value: t("whatsappValue"),
      href: siteContact.whatsappHref,
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteContact.email,
      href: siteContact.emailHref,
    },
    {
      icon: MapPin,
      label: t("office"),
      value: t("address"),
      href: undefined,
    },
    {
      icon: Clock3,
      label: t("hours"),
      value: t("hoursValue"),
      href: undefined,
    },
  ] as const;

  return (
    <div className="flex flex-col gap-6">
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

      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
          {t("followUs")}
        </p>
        <ul className="flex items-center gap-3">
          {footerContent.social.map((item) => {
            const Icon = getSocialIcon(item.icon);
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
