import { cache } from 'react';
import { LOCALES } from '@/lib/constants';
import { seedContent } from '@/lib/content/seed';
import type { BlogPostItem, SiteContent } from '@/lib/content/types';
import { isSanityConfigured } from '@/lib/sanity/env';
import { fetchBlogPostContent, fetchSanityContent } from '@/lib/sanity/fetch';

/**
 * Single entry for all public pages.
 * Prefer Sanity when configured; otherwise (or on fetch failure) use seeded content
 * so the marketing site never ships empty.
 *
 * Wrapped in React.cache() so layout + generateMetadata share one result per request.
 */
export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!isSanityConfigured()) {
    return seedContent;
  }

  try {
    const fromCms = await fetchSanityContent();
    return fromCms ?? seedContent;
  } catch (error) {
    console.error('[getSiteContent] Sanity fetch failed; using seed fallback', error);
    return seedContent;
  }
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPostItem | null> => {
  const site = await getSiteContent();
  const post = site.blogPosts.find((b) => b.visible && b.slug === slug);
  if (!post) return null;

  const hasBody = LOCALES.some((code) => post.content[code]?.trim());
  if (hasBody) return post;

  try {
    const body = await fetchBlogPostContent(slug);
    if (body) return { ...post, content: body };
  } catch (error) {
    console.error('[getBlogPost] body fetch failed; using excerpt', error);
  }

  return post;
});
