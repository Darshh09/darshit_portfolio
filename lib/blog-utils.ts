import { BlogPost } from './blog-data';

/**
 * Utility function to create a new blog post with proper formatting
 */
export function createBlogPost(data: Omit<BlogPost, 'id' | 'slug' | 'readTime' | 'seo'>): BlogPost {
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();

  const readTime = Math.ceil(data.content.split(' ').length / 200); // Average reading speed: 200 words per minute

  const seo = {
    title: `${data.title} | Darshit's Blog`,
    description: data.excerpt,
    keywords: data.tags,
    canonicalUrl: `https://darshitshukla.dev/blog/${slug}`,
  };

  return {
    ...data,
    id: Date.now().toString(),
    slug,
    readTime,
    seo,
  };
}

/**
 * Function to validate blog post data
 */
export function validateBlogPost(post: Partial<BlogPost>): string[] {
  const errors: string[] = [];

  if (!post.title || post.title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!post.excerpt || post.excerpt.trim().length === 0) {
    errors.push('Excerpt is required');
  }

  if (!post.content || post.content.trim().length === 0) {
    errors.push('Content is required');
  }

  if (!post.author || post.author.trim().length === 0) {
    errors.push('Author is required');
  }

  if (!post.publishedAt) {
    errors.push('Published date is required');
  }

  if (!post.tags || post.tags.length === 0) {
    errors.push('At least one tag is required');
  }

  return errors;
}

/**
 * Function to format content for display
 */
export function formatBlogContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium text-heading mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-medium text-heading mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-medium text-heading mt-12 mb-8">$1</h1>')

    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-cardColor border border-white/10 rounded-lg p-4 overflow-x-auto my-6"><code class="text-brand">$2</code></pre>')

    // Inline code
    .replace(/`([^`]+)`/g, '<code class="text-brand bg-white/5 px-1.5 py-0.5 rounded text-sm">$1</code>')

    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-heading">$1</strong>')

    // Italic text
    .replace(/\*(.*?)\*/g, '<em class="text-muted-light">$1</em>')

    // Line breaks
    .replace(/\n\n/g, '</p><p class="text-muted-light leading-relaxed mb-4">')
    .replace(/\n/g, '<br>');
}

/**
 * Function to generate RSS feed data
 */
export function generateRSSFeed(posts: BlogPost[]) {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Darshit's Blog</title>
    <description>Thoughts on web development, programming, and technology</description>
    <link>https://darshitshukla.dev/blog</link>
    <atom:link href="https://darshitshukla.dev/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>https://darshitshukla.dev/blog/${post.slug}</link>
      <guid isPermaLink="true">https://darshitshukla.dev/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author}</author>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`;

  return rss;
}

/**
 * Function to generate sitemap data
 */
export function generateSitemap(posts: BlogPost[]) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://darshitshukla.dev/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://darshitshukla.dev/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${posts.map(post => `
  <url>
    <loc>https://darshitshukla.dev/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updatedAt || post.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
}
