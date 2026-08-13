import { type TeamMember } from "@/types/team";
import { cn } from "@/lib/utils/cn";

type TeamCardProps = {
  member: TeamMember;
  className?: string;
};

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <article className={cn("flex flex-col gap-1 py-4", className)}>
      <h3 className="text-lg font-semibold text-text">{member.name}</h3>
      <p className="text-sm text-primary">{member.role}</p>
      {member.bio ? (
        <p className="text-sm text-text-muted">{member.bio}</p>
      ) : null}
    </article>
  );
}
