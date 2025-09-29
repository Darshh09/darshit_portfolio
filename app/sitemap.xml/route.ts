import { blogPosts } from '@/lib/blog-data';
import { generateSitemap } from '@/lib/blog-utils';

export async function GET() {
  const sitemap = generateSitemap(blogPosts);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
