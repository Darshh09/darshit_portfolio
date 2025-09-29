'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/blog-data';
import { PageWrap } from '@/components/containers';
import { MonoHeader, Muted } from '@/components/typography';
import { IconCalendar, IconClock, IconTag, IconArrowLeft } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { ShareButton } from '@/components/ui/share-button';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const publishedDate = new Date(post.publishedAt);
  const updatedDate = post.updatedAt ? new Date(post.updatedAt) : null;

  return (
    <>
      <PageWrap>
        <div className="mb-20">
        {/* Back Navigation */}
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-brand transition-colors group"
        >
          <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-4">
        <h1 className="doto-font text-xl font-bold text-white">
              <span className="relative">
                <span>Article</span>
              </span>
              </h1>
          <div className="w-20 h-px bg-gradient-to-r from-brand/60 to-transparent" />
        </div>

        <MonoHeader className="mb-6">{post.title}</MonoHeader>

        <Muted className="text-lg leading-relaxed mb-8 max-w-3xl">
          {post.excerpt}
        </Muted>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-light mb-8">
          <div className="flex items-center gap-2">
            <IconCalendar className="w-4 h-4" />
            <span>
              {publishedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IconClock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>

          {updatedDate && (
            <div className="text-xs">
              Updated {updatedDate.toLocaleDateString()}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              <IconTag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Share Button */}
        <div className="flex items-center gap-2">
          <ShareButton
            title={post.title}
            text={post.excerpt}
            url={`https://darshitshukla.dev/blog/${post.slug}`}
          />
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        <div
          className="prose-headings:text-heading prose-headings:font-medium prose-p:text-muted-light prose-p:leading-relaxed prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-heading prose-code:text-brand prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-cardColor prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-brand prose-blockquote:bg-white/5 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:rounded-r prose-blockquote:text-muted-light"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </motion.article>

      {/* Article Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 pt-8 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-heading mb-2">Written by {post.author}</h3>
            <p className="text-sm text-muted-light">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-light hover:text-brand transition-colors border border-white/10 hover:border-brand/30 rounded-md"
          >
            <span>More Articles</span>
            <IconArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
          </div>
        </motion.footer>
      </div>
      </PageWrap>

      <FloatingDock items={navigationLinks} />
    </>
  );
}

function formatContent(content: string): string {
  // Convert markdown-like content to HTML
  let html = content
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

  // Wrap in paragraph tags
  html = `<p class="text-muted-light leading-relaxed mb-4">${html}</p>`;

  return html;
}
