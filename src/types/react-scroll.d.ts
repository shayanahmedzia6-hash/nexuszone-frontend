declare module "react-scroll" {
  import type { ComponentProps, ReactNode } from "react";

  export type ScrollLinkProps = {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    delay?: number;
    spy?: boolean;
    activeClass?: string;
    className?: string;
    onClick?: ComponentProps<"a">["onClick"];
    children?: ReactNode;
  } & Omit<ComponentProps<"a">, "href">;

  export const Link: (props: ScrollLinkProps) => ReactNode;

  export const scroller: {
    scrollTo: (
      name: string,
      options?: {
        smooth?: boolean;
        duration?: number;
        offset?: number;
        delay?: number;
      },
    ) => void;
  };
}
