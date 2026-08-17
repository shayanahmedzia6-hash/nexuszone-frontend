import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { getNavIcon } from "@/components/navigation/nav-icons";
import {
  type MegaMenuColumn,
  type MegaMenuCta,
  type NavLinkItem,
} from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

type MegaMenuProps = {
  id: string;
  sidebarTitle?: string;
  sidebar?: NavLinkItem[];
  columns: MegaMenuColumn[];
  cta?: MegaMenuCta;
  onNavigate?: () => void;
};

export function MegaMenu({
  id,
  sidebarTitle,
  sidebar,
  columns,
  cta,
  onNavigate,
}: MegaMenuProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Submenu"
      className={cn(
        "absolute top-full left-1/2 z-50 mt-3 w-[min(92vw,72rem)] -translate-x-1/2",
        "rounded-2xl border border-border bg-background/95 p-5 shadow-lg backdrop-blur-3xl",
      )}
    >
      <div
        className={cn(
          "grid gap-6",
          sidebar ? "lg:grid-cols-[14rem_1fr_14rem]" : "lg:grid-cols-[1fr_14rem]",
        )}
      >
        {sidebar ? (
          <div className="border-border/60 lg:border-r lg:pr-4">
            {sidebarTitle ? (
              <p className="mb-3 text-xs font-semibold tracking-wide text-text-muted uppercase">
                {sidebarTitle}
              </p>
            ) : null}
            <ul className="flex flex-col gap-1">
              {sidebar.map((item, index) => {
                const Icon = getNavIcon(item.icon);
                const isActive = index === 0;
                return (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-text-muted hover:bg-surface hover:text-text",
                      )}
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      ) : null}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div
          className={cn(
            "grid gap-6",
            columns.length > 1 ? "sm:grid-cols-2" : "grid-cols-1",
          )}
        >
          {columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="mb-3 text-sm font-semibold text-text">
                {column.title}
              </p>
              <ul className="flex flex-col gap-1">
                {column.items.map((item) => {
                  const Icon = getNavIcon(item.icon);
                  return (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className="group flex items-start gap-2.5 rounded-lg px-2 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text"
                      >
                        {Icon ? (
                          <Icon
                            className="mt-0.5 h-4 w-4 shrink-0 text-text-muted group-hover:text-primary"
                            aria-hidden
                          />
                        ) : null}
                        <span>
                          <span className="block font-medium text-text">
                            {item.label}
                          </span>
                          {item.description ? (
                            <span className="mt-0.5 block text-xs text-text-muted">
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {column.footerLink ? (
                <Link
                  href={column.footerLink.href}
                  onClick={onNavigate}
                  className="mt-3 inline-flex items-center gap-1 px-2 text-sm font-medium text-primary hover:underline"
                >
                  {column.footerLink.label}
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        {cta ? (
          <div className="rounded-xl border border-border/70 bg-background/70 p-5">
            <div className="mb-3 h-0.5 w-10 bg-primary" />
            {(() => {
              const Icon = getNavIcon("headset");
              return Icon ? (
                <Icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
              ) : null;
            })()}
            <p className="mb-2 text-sm font-semibold text-text">{cta.title}</p>
            <p className="mb-4 text-sm text-text-muted">{cta.description}</p>
            <Button href={cta.href} size="sm">
              {cta.buttonLabel}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
