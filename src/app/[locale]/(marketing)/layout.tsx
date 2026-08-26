import { type ReactNode } from "react";

type MarketingLayoutProps = {
  children: ReactNode;
};

/** Route group shell — site chrome (Header/Footer) lives in `[locale]/layout`. */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return children;
}
