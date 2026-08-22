import { Briefcase, MapPin } from "lucide-react";

import { jobOpenings } from "@/data/careers";

type JobOpeningsProps = {
  emptyMessage: string;
};

export function JobOpenings({ emptyMessage }: JobOpeningsProps) {
  if (jobOpenings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-background-secondary p-8 text-center text-sm text-text-muted">
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {jobOpenings.map((job) => (
        <li
          key={job.id}
          className="flex flex-col gap-2 rounded-xl border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-base font-semibold text-text">{job.title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
              {job.department ? (
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden />
                  {job.department}
                </span>
              ) : null}
              {job.location ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {job.location}
                </span>
              ) : null}
              {job.type ? <span>{job.type}</span> : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
