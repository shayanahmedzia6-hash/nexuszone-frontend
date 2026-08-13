import { ArrowRight } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { routes } from "@/lib/constants/routes";

export function BlogPreview() {
  if (blogPosts.length === 0) return null;

  const posts = blogPosts.slice(0, 3);

  return (
    <SectionWrapper id="blog">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Latest Insights
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Stay Updated With <span className="text-primary">Our Blog</span>
          </h2>
          <p className="max-w-lg text-base text-text-muted">
            Expert insights, guides and updates to help you grow your
            business.
          </p>
        </div>
        <Button href={routes.blog} variant="outline" className="shrink-0 gap-2">
          View All Articles
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </SectionWrapper>
  );
}
