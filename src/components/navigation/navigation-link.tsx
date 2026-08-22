"use client";

import { Link as ScrollLink } from "react-scroll";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
} from "react";

import {
  getPathFromHref,
  getSectionIdFromHref,
  hasHashInHref,
  isHomeSectionHref,
  SECTION_SCROLL_DURATION,
  SECTION_SCROLL_OFFSET,
} from "@/lib/navigation/section-scroll";
import { routes } from "@/lib/constants/routes";
import { useUiStore } from "@/store/ui-store";

type NavigationLinkProps = ComponentProps<typeof Link>;

const scrollLinkProps = {
  smooth: true as const,
  duration: SECTION_SCROLL_DURATION,
  offset: SECTION_SCROLL_OFFSET,
  spy: false,
};

export function NavigationLink({
  href,
  onClick,
  scroll,
  ...props
}: NavigationLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const setPendingSectionId = useUiStore((state) => state.setPendingSectionId);

  const handleCrossPageHomeSection = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      event.preventDefault();
      event.stopPropagation();

      setPendingSectionId(sectionId);
      router.push(routes.home, { scroll: false });
    },
    [onClick, router, setPendingSectionId],
  );

  if (typeof href === "string" && isHomeSectionHref(href)) {
    const sectionId = getSectionIdFromHref(href)!;
    const isOnHome = pathname === routes.home;
    const { className, children, ...rest } = props;
    const menuDelay = onClick ? 250 : 0;

    if (isOnHome) {
      return (
        <ScrollLink
          to={sectionId}
          {...scrollLinkProps}
          delay={menuDelay}
          className={className}
          onClick={onClick}
          {...rest}
        >
          {children}
        </ScrollLink>
      );
    }

    return (
      <Link
        href={routes.home}
        scroll={false}
        className={className}
        onClick={(event) => handleCrossPageHomeSection(event, sectionId)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (typeof href === "string" && hasHashInHref(href)) {
    const sectionId = getSectionIdFromHref(href);
    const pathPart = getPathFromHref(href);
    const isSamePage = pathPart === pathname;

    if (sectionId && isSamePage) {
      const { className, children, ...rest } = props;
      const menuDelay = onClick ? 250 : 0;

      return (
        <ScrollLink
          to={sectionId}
          {...scrollLinkProps}
          delay={menuDelay}
          className={className}
          onClick={onClick}
          {...rest}
        >
          {children}
        </ScrollLink>
      );
    }
  }

  return <Link href={href} scroll={scroll} onClick={onClick} {...props} />;
}
