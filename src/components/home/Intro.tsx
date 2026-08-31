import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Hammer, Gem, PackageCheck } from 'lucide-react';

const icons = [Ruler, Hammer, Gem, PackageCheck];

export function Intro() {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="heading-eyebrow">{t.intro.eyebrow}</p>
              <h2 className="text-section text-charcoal-900 mb-6 text-balance">{t.intro.title}</h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-10">{t.intro.description}</p>
              <Link to="/about" className="btn-secondary">
                {t.common.learnMore}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.intro.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="card-luxury p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2">{feature.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
