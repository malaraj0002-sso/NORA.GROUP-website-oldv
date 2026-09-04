import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import { mediaSrc } from '@/lib/content/media';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function ServicesView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const services = content.services.filter((s) => s.visible);
  return (
    <>
      <PageHero
        eyebrow={t(content.home.servicesEyebrow, locale)}
        title={t(content.home.servicesTitle, locale)}
        subtitle={t(content.home.servicesSubtitle, locale)}
        image={services[0]?.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link href={`/services/${s.slug}`} className="card-luxury group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={mediaSrc(s.image)}
                    alt={t(s.title, locale)}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold">{t(s.title, locale)}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-charcoal-600">{t(s.description, locale)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
