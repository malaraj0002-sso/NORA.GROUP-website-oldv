import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/lib/constants';
import type { SiteContent } from '@/lib/content/types';

export function NotFoundView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  return (
    <section className="section-padding flex min-h-[60vh] items-center bg-warm-50">
      <div className="container-luxury max-w-xl text-center">
        <h1 className="text-3xl font-bold">{content.ui[locale].notFoundTitle}</h1>
        <p className="mt-4 text-charcoal-600">{content.ui[locale].notFoundBody}</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          {content.nav[locale].backHome}
        </Link>
      </div>
    </section>
  );
}
