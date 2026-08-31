import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { faqItems, projectImages } from '@/lib/data';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQPage() {
  const { t, locale } = useI18n();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'general', 'services', 'materials', 'pricing', 'manufacturing', 'installation'];
  const filtered = activeCategory === 'all' ? faqItems : faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.woodTexture3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.faq.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.faq.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.faq.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-4xl">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-charcoal-900 text-warm-50'
                      : 'bg-warm-100 text-charcoal-600 hover:bg-warm-200'
                  }`}
                >
                  {cat === 'all' ? t.projects.categories.all : t.faq.categories[cat as keyof typeof t.faq.categories]}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-start"
                    aria-expanded={openId === item.id}
                  >
                    <span className="font-bold text-charcoal-900 text-lg">{item.question[locale]}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${
                        openId === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === item.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-charcoal-600 leading-relaxed">{item.answer[locale]}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
