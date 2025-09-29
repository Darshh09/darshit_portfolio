'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, getAllTags, getPostsByTag } from '@/lib/blog-data';
import { PageWrap } from '@/components/containers';
import { MonoHeader, Muted, SmallLabel } from '@/components/typography';
import { motion } from 'framer-motion';
import { IconCalendar, IconClock, IconTag, IconArrowRight, IconX } from '@tabler/icons-react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';

export default function BlogPageClient() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  // Filter posts based on selected tag
  const filteredPosts = selectedTag ? getPostsByTag(selectedTag) : blogPosts;
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <PageWrap>
        {/* Header */}
        <div className="mb-20">
        <section className="mb-8">
        <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <h1 className="doto-font text-3xl font-bold text-white">
              <span className="relative">
                <span>BLOG</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">Thoughts & Insights</span>
              </span>
            </h1>
          </div>
        <Muted className="mt-4 max-w-2xl">
          Exploring the world of web development, programming, and technology.
          Sharing knowledge, experiences, and insights from my journey as a developer.
        </Muted>

        {/* Filter Indicator */}
        {selectedTag && (
          <div className="mt-6 flex items-center gap-2">
            <span className="text-sm text-muted-light">Filtered by:</span>
            <span className="tag bg-brand/20 border-brand/40 text-brand">
              <IconTag className="w-3 h-3 mr-1" />
              {selectedTag}
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className="ml-2 p-1 text-muted-light hover:text-brand transition-colors"
            >
              <IconX className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* No Posts Found */}
      {filteredPosts.length === 0 && selectedTag && (
        <section className="mb-16 text-center py-12">
          <div className="text-muted-light mb-4">
            <IconTag className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-heading mb-2">No posts found</h3>
            <p>No blog posts found for the tag "{selectedTag}".</p>
          </div>
          <button
            onClick={() => setSelectedTag(null)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-light hover:text-brand transition-colors border border-white/10 hover:border-brand/30 rounded-md"
          >
            <IconX className="w-4 h-4" />
            Clear filter
          </button>
        </section>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <SmallLabel>FEATURED</SmallLabel>
            <div className="w-80 h-px bg-gradient-to-r from-brand/60 to-transparent" />
          </div>

          <div className="grid gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="card p-6 hover:bg-white/[0.02] transition-all duration-300 group-hover:border-white/20">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-xl font-medium text-heading mb-2 group-hover:text-brand transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-light text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-brand/60 group-hover:bg-brand transition-colors" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-light">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <IconCalendar className="w-3 h-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconClock className="w-3 h-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-brand group-hover:gap-2 transition-all">
                        <span>Read more</span>
                        <IconArrowRight className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
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
      )}

      {/* All Posts */}
      <section>
        <div className="flex items-center gap-2 mb-8">
          <SmallLabel>ALL POSTS</SmallLabel>
          <div className="w-80 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="grid gap-4">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (featuredPosts.length + index) * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center justify-between p-4 rounded-lg hover:bg-white/[0.02] transition-all duration-300 group-hover:border-l-2 group-hover:border-brand/60 border-l-2 border-transparent">
                  <div className="flex-1">
                    <h3 className="font-medium text-heading mb-1 group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-light mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-light">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <IconTag className="w-3 h-3" />
                        <span>{post.tags[0]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <IconArrowRight className="w-4 h-4 text-muted-light group-hover:text-brand group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Tags Section */}
      <section className="mt-16 pt-8 border-t border-white/10">
        <div className="flex items-center gap-2 mb-6">
          <SmallLabel>TAGS</SmallLabel>
          <div className="w-80 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`tag transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-brand/20 border-brand/40 text-brand'
                  : 'hover:bg-brand/10 hover:border-brand/30'
              }`}
            >
              <IconTag className="w-3 h-3 mr-1" />
              {tag}
            </button>
          ))}
        </div>
      </section>
      </div>
      </PageWrap>

      <FloatingDock items={navigationLinks} />
    </>
  );
}
