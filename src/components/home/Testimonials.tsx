import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const { t, locale } = useI18n();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-beige-100">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <p className="heading-eyebrow">{t.testimonials.eyebrow}</p>
            <h2 className="text-section text-charcoal-900 mb-4 text-balance">{t.testimonials.title}</h2>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${locale === 'ar' || locale === 'he' ? current * 100 : -current * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.06)] text-center">
                      <Quote className="w-12 h-12 text-gold-300 mx-auto mb-6" />
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                      <p className="text-charcoal-700 text-lg lg:text-xl leading-relaxed mb-8 italic">
                        "{testimonial.review[locale]}"
                      </p>
                      <div className="flex flex-col items-center gap-1">
                        <p className="font-bold text-charcoal-900">{testimonial.name}</p>
                        <p className="text-charcoal-500 text-sm">{testimonial.project[locale]}</p>
                      </div>
                      {testimonial.isDemo && (
                        <span className="inline-block mt-4 px-3 py-1 rounded-md bg-charcoal-100 text-charcoal-500 text-xs font-medium">
                          {t.common.demo}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 start-0 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-700 hover:bg-charcoal-900 hover:text-warm-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 end-0 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-700 hover:bg-charcoal-900 hover:text-warm-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-8 bg-charcoal-900' : 'w-2 bg-charcoal-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
