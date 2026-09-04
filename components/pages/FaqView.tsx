import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function FaqView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const items = content.faq.filter((f) => f.visible);
  const nav = content.nav[locale];
  return (
    <>
      <PageHero eyebrow={nav.faq} title={nav.faq} subtitle="" />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-3xl space-y-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 30}>
              <details className="card-luxury group p-5">
                <summary className="cursor-pointer list-none font-semibold text-charcoal-900">
                  {t(item.question, locale)}
                </summary>
                <p className="mt-3 text-charcoal-600">{t(item.answer, locale)}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
