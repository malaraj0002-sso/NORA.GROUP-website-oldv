import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { processSteps, projectImages } from '@/lib/data';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function HowWeWorkPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.craft2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.howWeWork.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.howWeWork.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.howWeWork.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 start-8 lg:start-12 w-px bg-charcoal-200" />

            <div className="space-y-12">
              {processSteps.map((step, i) => {
                const Icon = (Icons as unknown as Record<string, LucideIcon>)[step.icon] || Icons.Circle;
                return (
                  <Reveal key={i} delay={i * 80}>
                    <div className="flex gap-6 lg:gap-8">
                      <div className="relative z-10 shrink-0">
                        <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-charcoal-900 text-warm-50 flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 lg:w-10 lg:h-10 text-gold-300" />
                        </div>
                      </div>
                      <div className="flex-1 pt-2 lg:pt-4">
                        <span className="text-gold-500 text-sm font-bold mb-2 block">{step.number}</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-charcoal-900 mb-3">{step.title[locale]}</h3>
                        <p className="text-charcoal-600 text-base lg:text-lg leading-relaxed">{step.description[locale]}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/quote" className="btn-gold">
              {t.common.startProject}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
