import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { projectImages } from '@/lib/data';

export function AboutPage() {
  const { t } = useI18n();

  const values = [
    { icon: Award, title: t.about.values.items[0].title, desc: t.about.values.items[0].desc },
    { icon: Sparkles, title: t.about.values.items[1].title, desc: t.about.values.items[1].desc },
    { icon: ShieldCheck, title: t.about.values.items[2].title, desc: t.about.values.items[2].desc },
    { icon: Heart, title: t.about.values.items[3].title, desc: t.about.values.items[3].desc },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.craft1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.about.hero.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4 text-balance">{t.about.hero.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.about.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-section text-charcoal-900 mb-6">{t.about.intro.title}</h2>
              <p className="text-charcoal-600 text-lg leading-relaxed">{t.about.intro.description}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={projectImages.craft2} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                  <img src={projectImages.furniture2} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story / Vision / Mission */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: t.about.story.title, desc: t.about.story.description },
              { icon: Eye, title: t.about.vision.title, desc: t.about.vision.description },
              { icon: Target, title: t.about.mission.title, desc: t.about.mission.description },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-luxury p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{item.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-section text-charcoal-900 mb-4">{t.about.values.title}</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-charcoal-900 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-gold-300" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{value.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Quality */}
      <section className="section-padding bg-charcoal-950 text-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={projectImages.craft1} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t.about.craftsmanship.title}</h2>
                <p className="text-warm-50/60 text-lg leading-relaxed mb-10">{t.about.craftsmanship.description}</p>
                <h3 className="text-2xl font-bold mb-4">{t.about.quality.title}</h3>
                <p className="text-warm-50/60 text-lg leading-relaxed mb-10">{t.about.quality.description}</p>
                <Link to="/quote" className="btn-gold">
                  {t.common.startProject}
                  <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
