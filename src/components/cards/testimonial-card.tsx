import { type Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils/cn";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn("flex flex-col gap-3 border-b border-border py-4", className)}
    >
      <p className="text-base text-text">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="text-sm text-text-muted">
        <cite className="not-italic font-medium text-text">
          {testimonial.authorName}
        </cite>
        {testimonial.authorRole || testimonial.company ? (
          <span>
            {" "}
            — {[testimonial.authorRole, testimonial.company]
              .filter(Boolean)
              .join(", ")}
          </span>
        ) : null}
      </footer>
    </blockquote>
  );
}
