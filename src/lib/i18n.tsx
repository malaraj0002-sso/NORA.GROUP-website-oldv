import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { Locale } from '@/types';
import { translations, localeMeta, type Translation } from '@/locales';

interface I18nContextValue {
  locale: Locale;
  t: Translation;
  dir: 'rtl' | 'ltr';
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'nora-group-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ar';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && ['ar', 'he', 'en'].includes(stored)) return stored;
  return 'ar';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    window.localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  useEffect(() => {
    const meta = localeMeta[locale];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.direction;
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    t: translations[locale],
    dir: localeMeta[locale].direction,
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
