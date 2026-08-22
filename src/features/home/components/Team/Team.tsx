import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { OptimizedImage } from "@/components/media/optimized-image";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team";
import { routes } from "@/lib/constants/routes";

const TEAM_ROLE_KEYS: Record<string, string> = {
  waqas: "ceoFounder",
};

type TeamProps = {
  /** Show a "Meet the Team" link to the About page (hide when already on it). */
  showCta?: boolean;
  /** Render the anchor + heading even with no data yet, instead of hiding entirely. */
  emptyState?: boolean;
};

export function Team({ showCta = true, emptyState = false }: TeamProps) {
  const t = useTranslations("homePage.team");
  const leader = teamMembers[0];

  if (!leader && !emptyState) return null;

  const initials = leader?.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

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
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        ) : null}
      </div>

      {leader ? (
        <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-background-secondary p-6 sm:p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface">
            {leader.imageUrl ? (
              <OptimizedImage
                src={leader.imageUrl}
                alt={leader.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-text-muted">
                {initials}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-text">{leader.name}</h3>
            <p className="text-sm font-medium text-primary">{roleLabel}</p>
            {leader.bio ? (
              <p className="text-base leading-relaxed text-text-muted">
                {leader.bio}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background-secondary p-8 text-center text-sm text-text-muted">
          {t("emptyState")}
        </div>
      )}
    </SectionWrapper>
  );
}
