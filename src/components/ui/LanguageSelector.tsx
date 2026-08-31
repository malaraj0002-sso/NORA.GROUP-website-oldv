import { useI18n } from '@/lib/i18n';
import { localeMeta } from '@/locales';
import type { Locale } from '@/types';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const locales: Locale[] = ['ar', 'he', 'en'];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-charcoal-100"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        {!compact && <span>{localeMeta[locale].label}</span>}
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 bg-white rounded-lg shadow-xl border border-charcoal-100 py-2 min-w-[140px] z-50 animate-fade-in">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-warm-100"
            >
              <span>{localeMeta[l].label}</span>
              {locale === l && <Check className="w-4 h-4 text-gold-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
