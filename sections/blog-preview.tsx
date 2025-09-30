'use client';

import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/blog-data';
import { MonoHeader, Muted, SmallLabel } from '@/components/typography';
import { motion } from 'framer-motion';
import { IconCalendar, IconClock, IconArrowRight } from '@tabler/icons-react';

export default function BlogPreview() {
  const featuredPosts = getFeaturedPosts().slice(0, 2); // Show only 2 featured posts

  return (
    <section className="mb-16">
      <div className='flex flex-row justify-between gap-4'>
      <div className="flex items-center gap-2 mb-8">
      <h1 className="doto-font text-2xl font-bold text-white">
              <span className="relative">
                <span>BLOG</span>
              </span>
              </h1>
        <div className="w-20 h-px bg-gradient-to-r from-brand/60 to-transparent" />
        <SmallLabel>Latest Thoughts</SmallLabel>
      </div>
      <div className="flex items-center justify-end mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-brand transition-colors group"
        >
          <span>View all posts</span>
          <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      </div>


      <div className="grid gap-6 md:grid-cols-2">
        {featuredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="group relative block rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.02] transition-all duration-300 group-hover:border-white/20 h-full">
                {/* dotted focus frame with corner brackets */}
                <div className="pointer-events-none absolute inset-0 z-10 -m-px border border-dashed border-white/15 bg-muted/15 focus-dots opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90"></div>
                  <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90"></div>
                  <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90"></div>
                  <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90"></div>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-heading mb-2 group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-light text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-light mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <IconCalendar className="w-3 h-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IconClock className="w-3 h-3" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-brand group-hover:gap-2 transition-all">
                    <span>Read</span>
                    <IconArrowRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
