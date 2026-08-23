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
  const setPendingScroll = useUiStore((state) => state.setPendingScroll);

  const handleCrossPageSection = useCallback(
    (
      event: MouseEvent<HTMLAnchorElement>,
      path: string,
      sectionId: string,
    ) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      event.preventDefault();
      event.stopPropagation();

      setPendingScroll({ path, sectionId });
      router.push(path, { scroll: false });
    },
    [onClick, router, setPendingScroll],
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
        onClick={(event) =>
          handleCrossPageSection(event, routes.home, sectionId)
        }
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

    if (sectionId && !isSamePage) {
      const { className, children, ...rest } = props;

      return (
        <Link
          href={pathPart}
          scroll={false}
          className={className}
          onClick={(event) =>
            handleCrossPageSection(event, pathPart, sectionId)
          }
          {...rest}
        >
          {children}
        </Link>
      );
    }
  }

  const isPlainPageLink =
    typeof href === "string" && !hasHashInHref(href);

  return (
    <Link
      href={href}
      scroll={isPlainPageLink ? true : scroll}
      onClick={onClick}
      {...props}
    />
  );
}
