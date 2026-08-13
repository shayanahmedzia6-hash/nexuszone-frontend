import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

type PhasePlaceholderProps = {
  title: string;
  description?: string;
};

/** Temporary route content until the page is implemented in a later phase. */
export function PhasePlaceholder({
  title,
  description = "This page will be implemented in a later phase.",
}: PhasePlaceholderProps) {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Nexus Zone"
        title={title}
        description={description}
      />
    </PageContainer>
  );
}
