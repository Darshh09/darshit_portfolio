import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, blogPosts } from '@/lib/blog-data';
import BlogPostClient from './blog-post-client';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.description,
    },
    alternates: {
      canonical: post.seo.canonicalUrl,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@type': 'Person',
              name: post.author,
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': post.seo.canonicalUrl,
            },
            keywords: post.tags.join(', '),
            articleSection: 'Technology',
            wordCount: post.content.split(' ').length,
            timeRequired: `PT${post.readTime}M`,
          }),
        }}
      />

      <BlogPostClient post={post} />
    </>
  );
}
