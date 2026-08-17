import { Link } from "@/i18n/navigation";

import { getNavIcon } from "@/components/navigation/nav-icons";
import { type NavLinkItem } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

type DropdownMenuProps = {
  id: string;
  items: NavLinkItem[];
  onNavigate?: () => void;
};

export function DropdownMenu({ id, items, onNavigate }: DropdownMenuProps) {
  return (
    <div
      id={id}
      role="menu"
      className={cn(
        "absolute top-full left-1/2 z-50 mt-3 w-64 -translate-x-1/2",
        "rounded-xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-3xl",
      )}
    >
      <ul className="flex flex-col">
        {items.map((item) => {
          const Icon = getNavIcon(item.icon);
          return (
            <li key={item.href + item.label} role="none">
              <Link
                role="menuitem"
                href={item.href}
                onClick={onNavigate}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text"
              >
                {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
