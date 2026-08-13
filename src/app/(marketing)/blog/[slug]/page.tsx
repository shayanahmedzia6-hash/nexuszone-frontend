import { PhasePlaceholder } from "@/components/layout/phase-placeholder";
import { createPageMetadata } from "@/lib/seo/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return createPageMetadata({
    title: "Blog post",
    path: `/blog/${slug}`,
    noIndex: true,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return (
    <PhasePlaceholder
      title="Blog post"
      description={`Route ready for /blog/${slug}. Content ships in a later phase.`}
    />
  );
}
