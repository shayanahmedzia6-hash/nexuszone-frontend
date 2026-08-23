import { getTranslations } from "next-intl/server";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { teamMembers } from "@/data/team";

import { TeamLeaderCard, type FounderStorySection } from "@/features/home/components/Team/TeamLeaderCard";

const FOUNDER_ROLE_KEYS: Record<string, string> = {
  waqas: "ceoFounder",
};

export async function FounderCeo() {
  const t = await getTranslations("aboutPage.founderCeo");
  const rolesT = await getTranslations("homePage.team.roles");
  const storyT = await getTranslations("teamFounderStory");
  const leader = teamMembers[0];

  if (!leader) return null;

  const initials = leader.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  const sections = storyT.raw("sections") as FounderStorySection[];
  const roleKey = FOUNDER_ROLE_KEYS[leader.id];
  const roleLabel = roleKey ? rolesT(roleKey) : leader.role;

  return (
    <SectionWrapper id="founder-ceo">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {t("titlePrimary")}{" "}
          <span className="text-primary">{t("titleAccent")}</span>
        </h2>
        <p className="max-w-lg text-base text-text-muted">{t("description")}</p>
      </div>

      <TeamLeaderCard
        name={leader.name}
        roleLabel={roleLabel}
        imageUrl={leader.imageUrl}
        initials={initials}
        sections={sections}
        tagline={storyT("tagline")}
        outro={storyT("outro")}
        seeMore={storyT("seeMore")}
        seeLess={storyT("seeLess")}
      />
    </SectionWrapper>
  );
}
