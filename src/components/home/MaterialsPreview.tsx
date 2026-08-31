import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { materials } from '@/lib/data';

export function MaterialsPreview() {
  const { t, locale } = useI18n();

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <p className="heading-eyebrow">{t.materials.eyebrow}</p>
            <h2 className="text-section text-charcoal-900 mb-4 text-balance">{t.materials.title}</h2>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">{t.materials.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {materials.map((material, i) => (
            <Reveal key={material.slug} delay={(i % 4) * 100}>
              <Link to="/materials" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={material.image}
                    alt={material.name[locale]}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-warm-50 font-bold text-base lg:text-lg">{material.name[locale]}</h3>
                    <p className="text-warm-50/60 text-xs lg:text-sm line-clamp-2 mt-1">{material.description[locale]}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/materials" className="btn-secondary">
            {t.common.viewAll}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
