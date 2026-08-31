import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/lib/data';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function Process() {
  const { t, locale } = useI18n();

  return (
    <section className="section-padding bg-beige-50">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <p className="heading-eyebrow">{t.process.eyebrow}</p>
            <h2 className="text-section text-charcoal-900 mb-4 text-balance">{t.process.title}</h2>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">{t.process.subtitle}</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-charcoal-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = (Icons as unknown as Record<string, LucideIcon>)[step.icon] || Icons.Circle;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-charcoal-900 text-warm-50 flex items-center justify-center mb-5 shadow-lg">
                      <Icon className="w-7 h-7 text-gold-300" />
                    </div>
                    <span className="text-gold-500 text-sm font-bold mb-2">{step.number}</span>
                    <h3 className="text-base font-bold text-charcoal-900 mb-2">{step.title[locale]}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{step.description[locale]}</p>
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
