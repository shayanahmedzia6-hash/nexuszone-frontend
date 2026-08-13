import { Newspaper } from "lucide-react";

import { NewsletterForm } from "@/components/layout/newsletter-form";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { blogPosts } from "@/data/blog";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  path: routes.blog,
  description:
    "Insights, guides and updates on UAE business setup, compliance and corporate solutions from Nexus Zone.",
});

export default function BlogPage() {
  return (
    <SectionWrapper id="blog">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Insights
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          Stay Updated With <span className="text-primary">Our Blog</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          Expert insights, guides and updates to help you grow your
          business in the UAE.
        </p>
      </div>

      {blogPosts.length > 0 ? null : (
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-background-secondary p-12 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
            <Newspaper className="h-5 w-5" aria-hidden />
          </span>
          <h2 className="text-lg font-semibold text-text">
            Articles Are Coming Soon
          </h2>
          <p className="max-w-md text-sm text-text-muted">
            We&apos;re preparing guides and insights on UAE business setup
            and compliance. Leave your email and we&apos;ll let you know
            when we publish.
          </p>
          <div className="mt-2 w-full max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
