import { Container } from "@/components/ui/container";
import { HeroContent } from "@/features/home/components/Hero/HeroContent";
import { HeroTrustBar } from "@/features/home/components/Hero/HeroTrustBar";
import { HeroVisual } from "@/features/home/components/Hero/HeroVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100svh-6.5rem)] overflow-hidden bg-background"
    >
      <HeroVisual />

      <Container className="relative flex min-h-[calc(100svh-6.5rem)] flex-col justify-between pb-8">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
          <HeroContent />
          {/* Wider image plane: visual fills remaining viewport via absolute HeroVisual */}
          <div className="pointer-events-none hidden min-h-[28rem] lg:block" />
        </div>

        <HeroTrustBar className="mb-2 mt-4" />
      </Container>
    </section>
  );
}
