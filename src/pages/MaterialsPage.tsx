import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { materials, projectImages } from '@/lib/data';

export function MaterialsPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.woodTexture1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.materials.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.materials.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.materials.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, i) => (
              <Reveal key={material.slug} delay={(i % 2) * 100}>
                <div className="card-luxury overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.name[locale]}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
                    <h3 className="absolute bottom-4 start-6 text-2xl font-bold text-warm-50">{material.name[locale]}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-charcoal-600 leading-relaxed mb-6">{material.description[locale]}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500 mb-2">{t.materials.characteristics}</h4>
                        <p className="text-charcoal-600 text-sm leading-relaxed">{material.characteristics[locale]}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500 mb-2">{t.materials.applications}</h4>
                        <p className="text-charcoal-600 text-sm leading-relaxed">{material.applications[locale]}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500 mb-2">{t.materials.finishes}</h4>
                        <p className="text-charcoal-600 text-sm leading-relaxed">{material.finishes[locale]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/quote" className="btn-primary">
              {t.common.requestQuote}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
