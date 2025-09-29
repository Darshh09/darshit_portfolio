# Blog Management Guide

This guide explains how to add and manage blog posts in your portfolio.

## Adding New Blog Posts

### Method 1: Direct JSON Addition (Recommended)

1. Open `/lib/blog-data.ts`
2. Add a new blog post object to the `blogPosts` array:

```typescript
{
  id: "unique-id", // Use timestamp or UUID
  title: "Your Blog Post Title",
  slug: "your-blog-post-slug", // Will be auto-generated if not provided
  excerpt: "Brief description of your post (used in previews and SEO)",
  content: `# Your Blog Post Content

Write your content in markdown format here.

## Features Supported

- **Headers**: # ## ###
- **Bold text**: **bold**
- **Italic text**: *italic*
- **Code blocks**: \`\`\`language
- **Inline code**: \`code\`
- **Lists**: - item 1
- **Links**: [text](url)

## Code Examples

\`\`\`javascript
function example() {
  console.log("Hello World");
}
\`\`\`
`,
  author: "Darshit Shukla",
  publishedAt: "2024-01-20", // YYYY-MM-DD format
  updatedAt: "2024-01-25", // Optional
  tags: ["Tag1", "Tag2", "Tag3"], // Array of tags
  readTime: 5, // Estimated reading time in minutes
  featured: false, // Set to true to show on homepage
  coverImage: "/path/to/image.jpg", // Optional
  seo: {
    title: "Custom SEO Title | Darshit's Blog", // Optional, will be auto-generated
    description: "Custom SEO description", // Optional, will use excerpt
    keywords: ["keyword1", "keyword2"], // Optional, will use tags
    canonicalUrl: "https://darshitshukla.dev/blog/your-slug" // Optional
  }
}
```

### Method 2: Using the Utility Function

```typescript
import { createBlogPost } from '@/lib/blog-utils';

const newPost = createBlogPost({
  title: "Your Blog Post Title",
  excerpt: "Brief description",
  content: "Your markdown content...",
  author: "Darshit Shukla",
  publishedAt: "2024-01-20",
  tags: ["React", "TypeScript"],
  featured: true
});

// Add to blogPosts array
blogPosts.push(newPost);
```

## SEO Optimization

Each blog post includes comprehensive SEO features:

- **Meta Tags**: Title, description, keywords
- **Open Graph**: For social media sharing
- **Twitter Cards**: Optimized for Twitter
- **JSON-LD**: Structured data for search engines
- **Canonical URLs**: Prevents duplicate content issues
- **RSS Feed**: Available at `/blog/rss.xml`
- **Sitemap**: Available at `/sitemap.xml`

## Content Formatting

The blog supports markdown-like syntax:

- **Headers**: `# ## ###` (automatically styled)
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Code blocks**: ````language`
- **Inline code**: `` `code` ``
- **Lists**: `- item`

## Styling

The blog uses your existing theme:
- **Colors**: Matches your dark theme with brand colors
- **Typography**: Uses your custom font and sizing
- **Components**: Consistent with your design system
- **Animations**: Smooth transitions and hover effects

## Features

- ✅ **Responsive Design**: Works on all devices
- ✅ **SEO Optimized**: Full meta tags and structured data
- ✅ **RSS Feed**: For subscribers
- ✅ **Sitemap**: For search engines
- ✅ **Tag System**: Organize posts by topics
- ✅ **Reading Time**: Auto-calculated
- ✅ **Social Sharing**: Built-in share functionality
- ✅ **Search Engine Friendly**: Clean URLs and meta data
- ✅ **Performance**: Optimized loading and rendering

## File Structure

```
/lib/
  blog-data.ts          # Blog posts data
  blog-utils.ts         # Utility functions
/app/blog/
  page.tsx              # Blog listing page
  [slug]/
    page.tsx            # Individual blog post page
  rss.xml/
    route.ts            # RSS feed endpoint
/app/sitemap.xml/
  route.ts              # Sitemap endpoint
/sections/
  blog-preview.tsx      # Homepage blog preview
```

## Adding Images

1. Place images in `/public/blog/` directory
2. Reference them in your content: `/blog/image-name.jpg`
3. Use Next.js Image component for optimization:

```jsx
import Image from 'next/image';

<Image
  src="/blog/your-image.jpg"
  alt="Description"
  width={800}
  height={400}
  className="rounded-lg"
/>
```

## Best Practices

1. **Write compelling excerpts** that encourage clicks
2. **Use descriptive titles** that include keywords
3. **Add relevant tags** for better organization
4. **Include code examples** with proper syntax highlighting
5. **Optimize images** before uploading
6. **Test your posts** on different devices
7. **Update the sitemap** when adding new posts

## Troubleshooting

- **Post not showing**: Check if the slug is unique
- **Styling issues**: Ensure markdown syntax is correct
- **SEO problems**: Verify meta tags are properly set
- **Images not loading**: Check file paths and permissions

## Support

For questions or issues, refer to the Next.js documentation or create an issue in your repository.
