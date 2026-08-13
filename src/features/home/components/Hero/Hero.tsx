import { Container } from "@/components/ui/container";
import { HeroContent } from "@/features/home/components/Hero/HeroContent";
import { HeroTrustBar } from "@/features/home/components/Hero/HeroTrustBar";
import { HeroVisual } from "@/features/home/components/Hero/HeroVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background lg:min-h-[calc(100svh-6.5rem)]"
    >
      <HeroVisual />

      <Container className="relative flex flex-col justify-between gap-8 py-8 lg:min-h-[calc(100svh-6.5rem)] lg:gap-0 lg:py-0 lg:pb-8">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
          <HeroContent />
          {/* Wider image plane: visual fills remaining viewport via absolute HeroVisual */}
          <div className="pointer-events-none hidden min-h-[28rem] lg:block" />
        </div>

        <HeroTrustBar className="mb-0 mt-0 lg:mb-2 lg:mt-4" />
      </Container>
    </section>
  );
}
