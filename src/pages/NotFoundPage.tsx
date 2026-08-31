import { useI18n } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center justify-center bg-warm-50 pt-20">
      <div className="container-luxury text-center">
        <h1 className="text-9xl font-bold text-charcoal-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-charcoal-700 mb-3">{t.notFound.title}</h2>
        <p className="text-charcoal-500 text-lg mb-10">{t.notFound.subtitle}</p>
        <Link to="/" className="btn-primary">
          <Home className="w-5 h-5" />
          {t.notFound.backHome}
        </Link>
      </div>
    </section>
  );
}
