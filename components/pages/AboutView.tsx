import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function AboutView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const page = content.about;
  return (
    <>
      <PageHero
        eyebrow={t(page.eyebrow, locale)}
        title={t(page.title, locale)}
        subtitle={t(page.subtitle, locale)}
        image={page.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-charcoal-700">{t(page.body, locale)}</p>
            <h2 className="mt-12 text-2xl font-bold">{t(page.valuesTitle, locale)}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {page.values.map((v) => (
                <div key={t(v.title, locale)} className="card-luxury p-5">
                  <h3 className="font-semibold">{t(v.title, locale)}</h3>
                  <p className="mt-2 text-sm text-charcoal-600">{t(v.desc, locale)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
