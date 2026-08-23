import { founderStory, founderStoryClosing, teamMembers } from "@/data/team";
import { SectionWrapper } from "@/components/sections/section-wrapper";

export function FounderStory() {
  const founder = teamMembers[0];

  if (!founder || founderStory.length === 0) return null;

  return (
    <SectionWrapper id="founder-story">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Founder&apos;s Story
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Meet {founder.name} —{" "}
          <span className="text-primary">{founder.role}</span>
        </h2>

        <div className="mt-6 flex flex-col gap-10">
          {founderStory.map((section, index) => (
            <div key={section.heading ?? index} className="flex flex-col gap-4">
              {section.heading ? (
                <h3 className="text-xl font-semibold text-text">
                  {section.heading}
                </h3>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-base leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start gap-2 border-t border-border pt-6">
          <p className="text-lg font-semibold tracking-wide text-primary">
            {founderStoryClosing.tagline}
          </p>
          <p className="text-base text-text-muted italic">
            {founderStoryClosing.outro}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
