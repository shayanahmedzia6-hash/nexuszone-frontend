import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team";
import { routes } from "@/lib/constants/routes";

import { TeamLeaderCard, type FounderStorySection } from "./TeamLeaderCard";

const TEAM_ROLE_KEYS: Record<string, string> = {
  waqas: "ceoFounder",
};

type TeamProps = {
  /** Show a "Meet the Team" link to the About page (hide when already on it). */
  showCta?: boolean;
  /** Render the anchor + heading even with no data yet, instead of hiding entirely. */
  emptyState?: boolean;
};

export async function Team({ showCta = true, emptyState = false }: TeamProps) {
  const t = await getTranslations("homePage.team");
  const storyT = await getTranslations("teamFounderStory");
  const leader = teamMembers[0];

  if (!leader && !emptyState) return null;

  const initials = leader?.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  const sections = storyT.raw("sections") as FounderStorySection[];
  const roleKey = leader ? TEAM_ROLE_KEYS[leader.id] : undefined;
  const roleLabel = roleKey ? t(`roles.${roleKey}`) : leader?.role;

  return (
    <SectionWrapper id="team">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h2>
        <p className="max-w-lg text-base text-text-muted">{t("description")}</p>
        {showCta ? (
          <Button
            href={routes.about}
            variant="outline"
            size="sm"
            className="mt-1 w-fit gap-2"
          >
            {t("meetTheTeam")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
          </Button>
        ) : null}
      </div>

      {leader ? (
        <TeamLeaderCard
          name={leader.name}
          roleLabel={roleLabel ?? leader.role}
          imageUrl={leader.imageUrl}
          initials={initials}
          sections={sections}
          tagline={storyT("tagline")}
          outro={storyT("outro")}
          seeMore={storyT("seeMore")}
          seeLess={storyT("seeLess")}
        />
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background-secondary p-8 text-center text-sm text-text-muted">
          {t("emptyState")}
        </div>
      )}
    </SectionWrapper>
  );
}
