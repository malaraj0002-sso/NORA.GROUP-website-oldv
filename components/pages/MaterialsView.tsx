import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import { mediaSrc } from '@/lib/content/media';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function MaterialsView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const materials = content.materials.filter((m) => m.visible);
  return (
    <>
      <PageHero
        eyebrow={t(content.home.materialsEyebrow, locale)}
        title={t(content.home.materialsTitle, locale)}
        subtitle={t(content.home.materialsSubtitle, locale)}
        image={materials[0]?.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid gap-6 md:grid-cols-2">
          {materials.map((m, i) => (
            <Reveal key={m.slug} delay={i * 40}>
              <article className="card-luxury grid overflow-hidden sm:grid-cols-2">
                <div className="relative min-h-[200px]">
                  <Image
                    src={mediaSrc(m.image)}
                    alt={t(m.name, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{t(m.name, locale)}</h2>
                  <p className="mt-2 text-sm text-charcoal-600">{t(m.description, locale)}</p>
                  <p className="mt-3 text-sm">{t(m.characteristics, locale)}</p>
                  <p className="mt-1 text-sm text-charcoal-500">{t(m.applications, locale)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
