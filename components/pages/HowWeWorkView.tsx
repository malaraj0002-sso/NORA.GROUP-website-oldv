import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function HowWeWorkView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const page = content.howWeWork;
  return (
    <>
      <PageHero
        eyebrow={t(page.eyebrow, locale)}
        title={t(page.title, locale)}
        subtitle={t(page.subtitle, locale)}
        image={page.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {page.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 40}>
              <div className="card-luxury h-full p-6">
                <p className="text-sm font-bold text-gold-500">{step.number}</p>
                <h3 className="mt-2 text-lg font-semibold">{t(step.title, locale)}</h3>
                <p className="mt-2 text-sm text-charcoal-600">{t(step.description, locale)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
