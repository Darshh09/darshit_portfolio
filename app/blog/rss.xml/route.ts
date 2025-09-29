import { blogPosts } from '@/lib/blog-data';
import { generateRSSFeed } from '@/lib/blog-utils';

export async function GET() {
  const rss = generateRSSFeed(blogPosts);

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
