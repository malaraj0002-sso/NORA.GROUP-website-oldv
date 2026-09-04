import { images } from '@/lib/content/images';

/** Never pass an empty src to next/image (Sanity can omit an asset). */
export function mediaSrc(src: string | undefined | null): string {
  if (typeof src === 'string' && src.trim()) return src.trim();
  return images.hero1;
}
