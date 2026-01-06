import { getAllPosts } from '@/features/blog/data/posts';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
};

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();

  return posts
    .filter((post) => post.metadata.pinned || post.metadata.new)
    .map((post) => ({
      id: post.slug,
      slug: post.slug,
      title: post.metadata.title,
      excerpt: post.metadata.description || '',
      publishedAt: post.metadata.createdAt,
      readTime: Math.ceil((post.content?.length || 0) / 1000) || 5, // Estimate: ~1000 chars per minute
      tags: post.metadata.category ? [post.metadata.category] : [],
    }))
    .sort((a, b) => {
      // Sort by published date, newest first
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export function getAllBlogPosts(): BlogPost[] {
  const posts = getAllPosts();

  return posts.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.metadata.title,
    excerpt: post.metadata.description || '',
    publishedAt: post.metadata.createdAt,
    readTime: Math.ceil((post.content?.length || 0) / 1000) || 5,
    tags: post.metadata.category ? [post.metadata.category] : [],
  }));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

