export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
  coverImage?: string;
};

export type BlogListItem = Pick<
  BlogPost,
  "id" | "slug" | "title" | "excerpt" | "publishedAt" | "coverImage"
>;
