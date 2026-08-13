import { getNavIcon } from "@/components/navigation/nav-icons";
import { heroContent } from "@/data/hero";
import { cn } from "@/lib/utils/cn";

type HeroTrustBarProps = {
  className?: string;
};

export function HeroTrustBar({ className }: HeroTrustBarProps) {
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
              className="flex flex-col items-center gap-2 px-3 py-5 text-center sm:px-4"
            >
              {Icon ? (
                <Icon
                  className="h-5 w-5 text-text-muted"
                  strokeWidth={1.5}
                  aria-hidden
                />
              ) : null}
              <p className="text-sm leading-snug font-semibold md:text-base">
                <span
                  className={cn(
                    item.accentValue ? "text-primary" : "text-text",
                  )}
                >
                  {item.value}
                </span>{" "}
                <span className="font-medium text-text-muted">{item.label}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
