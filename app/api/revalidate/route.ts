import { timingSafeEqual } from 'node:crypto';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { REVALIDATE_TAGS } from '@/lib/constants';

export const runtime = 'nodejs';

function secretMatches(provided: string, expected: string): boolean {
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/**
 * Sanity webhook target: POST with header `x-revalidate-secret`.
 * Empty or missing SANITY_REVALIDATE_SECRET rejects every request (fail closed).
 */
export async function POST(request: Request) {
  const expected = process.env.SANITY_REVALIDATE_SECRET?.trim() ?? '';
  const provided = request.headers.get('x-revalidate-secret') ?? '';

  if (!expected || !secretMatches(provided, expected)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag(REVALIDATE_TAGS.all);
  for (const tag of Object.values(REVALIDATE_TAGS)) {
    revalidateTag(tag);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
