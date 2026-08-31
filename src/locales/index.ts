import type { Locale } from '@/types';
import { t as ar, locale as arLocale, direction as arDir, htmlLang as arHtml } from './ar';
import { t as he, locale as heLocale, direction as heDir, htmlLang as heHtml } from './he';
import { t as en, locale as enLocale, direction as enDir, htmlLang as enHtml } from './en';

export type Translation = typeof ar;

export const translations: Record<Locale, Translation> = {
  ar: ar,
  he: he as unknown as Translation,
  en: en as unknown as Translation,
};

export const localeMeta: Record<Locale, { direction: 'rtl' | 'ltr'; htmlLang: string; label: string }> = {
  ar: { direction: arDir, htmlLang: arHtml, label: 'العربية' },
  he: { direction: heDir, htmlLang: heHtml, label: 'עברית' },
  en: { direction: enDir, htmlLang: enHtml, label: 'English' },
};

export { ar, he, en };
