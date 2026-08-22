import { type ReactNode } from "react";

import { SectionScrollSync } from "@/components/providers/section-scroll-sync";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

type AppProvidersProps = {
  children: ReactNode;
};

/** Root client boundary for providers that genuinely need the browser. */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <SectionScrollSync />
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
