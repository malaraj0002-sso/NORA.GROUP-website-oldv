import { Star } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function TestimonialsView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const items = content.testimonials.filter((x) => x.visible);
  return (
    <>
      <PageHero
        eyebrow={t(content.home.testimonialsEyebrow, locale)}
        title={t(content.home.testimonialsTitle, locale)}
        subtitle={t(content.home.testimonialsSubtitle, locale)}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <div className="card-luxury h-full p-6">
                <div className="mb-3 flex gap-1 text-gold-400">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-700">{t(item.review, locale)}</p>
                <p className="mt-4 font-semibold">{item.name}</p>
                <p className="text-sm text-charcoal-500">{t(item.project, locale)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
