import { LOCALES } from '@/lib/constants';

export function localeSlugStaticParams(slugs: string[]) {
  return LOCALES.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}
