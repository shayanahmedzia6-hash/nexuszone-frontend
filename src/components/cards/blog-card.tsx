import Link from "next/link";

import { type BlogListItem } from "@/types/blog";
import { cn } from "@/lib/utils/cn";

type BlogCardProps = {
  post: BlogListItem;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 border-b border-border py-4",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-text">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-sm text-text-muted">{post.excerpt}</p>
      <time
        dateTime={post.publishedAt}
        className="text-xs text-text-muted"
      >
        {post.publishedAt}
      </time>
    </article>
  );
}
