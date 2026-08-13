import { Skeleton } from "@/components/feedback/skeleton";
import { Container } from "@/components/ui/container";

export default function MarketingLoading() {
  return (
    <Container className="flex flex-col gap-4 py-14">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-12 w-full max-w-xl" />
      <Skeleton className="h-24 w-full max-w-2xl" />
    </Container>
  );
}
