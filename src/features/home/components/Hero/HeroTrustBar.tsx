import { useTranslations } from "next-intl";

import { getNavIcon } from "@/components/navigation/nav-icons";
import { heroContent } from "@/data/hero";
import { cn } from "@/lib/utils/cn";

type HeroTrustBarProps = {
  className?: string;
};

export function HeroTrustBar({ className }: HeroTrustBarProps) {
  const t = useTranslations("hero.trust");

  return (
    <div
      className={cn(
        "relative z-10 rounded-2xl border border-glass-border bg-glass/90 shadow-md backdrop-blur-xl",
        className,
      )}
    >
      <ul className="grid grid-cols-2 divide-border/60 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
        {heroContent.trustItems.map((item) => {
          const Icon = getNavIcon(item.icon);
          return (
            <li
              key={item.id}
              className="flex min-w-0 flex-col items-center gap-1.5 px-2 py-4 text-center sm:gap-2 sm:px-4 sm:py-5"
            >
              {Icon ? (
                <Icon
                  className="h-5 w-5 text-text-muted"
                  strokeWidth={1.5}
                  aria-hidden
                />
              ) : null}
              <p className="text-xs leading-snug font-semibold sm:text-sm md:text-base">
                <span
                  className={cn(
                    item.accentValue ? "text-primary" : "text-text",
                  )}
                >
                  {item.value}
                </span>{" "}
                <span className="font-medium text-text-muted">{t(item.id)}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
