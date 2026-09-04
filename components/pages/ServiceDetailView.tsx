import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { PageHero } from '@/components/ui/PageHero';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function ServiceDetailView({
  locale,
  content,
  slug,
}: {
  locale: AppLocale;
  content: SiteContent;
  slug: string;
}) {
  const service = content.services.find((s) => s.slug === slug && s.visible);
  if (!service) return null;
  const nav = content.nav[locale];

  return (
    <>
      <PageHero
        eyebrow={nav.services}
        title={t(service.title, locale)}
        subtitle={t(service.description, locale)}
        image={service.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-3xl">
          <ul className="space-y-3">
            {service.features.map((f) => (
              <li key={t(f, locale)} className="rounded-xl bg-white px-5 py-4 shadow-sm">
                {t(f, locale)}
              </li>
            ))}
          </ul>
          <Link href="/services" className="btn-secondary mt-8 inline-flex">
            <ArrowRight className="h-5 w-5 rotate-180 rtl:rotate-0" />
            {nav.services}
          </Link>
        </div>
      </section>
    </>
  );
}
