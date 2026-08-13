"use client";

import { NavItem } from "@/components/navigation/nav-item";
import { navigationItems } from "@/data/navigation";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
