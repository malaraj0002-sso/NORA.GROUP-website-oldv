import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';
import { Star, Quote } from 'lucide-react';
import { projectImages } from '@/lib/data';

export function TestimonialsPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.livingRoom1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.testimonials.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.testimonials.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.testimonials.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={(i % 3) * 100}>
                <div className="card-luxury p-8 h-full flex flex-col">
                  <Quote className="w-10 h-10 text-gold-300 mb-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-charcoal-700 leading-relaxed flex-1 italic mb-6">
                    "{testimonial.review[locale]}"
                  </p>
                  <div className="border-t border-charcoal-100 pt-4">
                    <p className="font-bold text-charcoal-900">{testimonial.name}</p>
                    <p className="text-charcoal-500 text-sm">{testimonial.project[locale]}</p>
                    {testimonial.isDemo && (
                      <span className="inline-block mt-2 px-2.5 py-1 rounded-md bg-charcoal-100 text-charcoal-500 text-xs font-medium">
                        {t.common.demo}
                      </span>
                    )}
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
