import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { PencilRuler, Gem, Hammer, Eye, Wrench, ClipboardCheck } from 'lucide-react';

const icons = [PencilRuler, Gem, Hammer, Eye, Wrench, ClipboardCheck];

export function WhyNora() {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-charcoal-950 text-warm-50">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.whyNora.eyebrow}</p>
            <h2 className="text-section text-warm-50 mb-4 text-balance">{t.whyNora.title}</h2>
            <p className="text-warm-50/60 text-lg max-w-2xl mx-auto">{t.whyNora.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyNora.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="group p-8 rounded-2xl border border-charcoal-800 hover:border-gold-500/30 transition-all duration-500 hover:bg-charcoal-900">
                  <div className="w-14 h-14 rounded-xl bg-charcoal-800 group-hover:bg-gold-500/10 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-7 h-7 text-gold-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-warm-50/50 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
