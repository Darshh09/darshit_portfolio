import { Metadata } from 'next';
import BlogPageClient from './blog-page-client';

export const metadata: Metadata = {
  title: 'Blog | Darshit Shukla',
  description: 'Thoughts on web development, programming, and technology. Explore articles about Next.js, TypeScript, clean code, and more.',
  keywords: ['blog', 'web development', 'programming', 'Next.js', 'TypeScript', 'React', 'clean code'],
  openGraph: {
    title: 'Blog | Darshit Shukla',
    description: 'Thoughts on web development, programming, and technology.',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
