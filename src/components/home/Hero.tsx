import { useI18n } from '@/lib/i18n';
import { heroImages } from '@/lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/config';
import { useEffect, useState } from 'react';

export function Hero() {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whatsappLink = getWhatsAppLink(t.whatsapp.defaultMessage);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/40 to-charcoal-950/70" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-down">
              {t.intro.eyebrow}
            </p>
            <h1 className="text-hero text-warm-50 font-bold mb-6 text-balance animate-fade-up">
              {t.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-warm-50/80 leading-relaxed max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <Link to="/quote" className="btn-gold">
                {t.hero.ctaQuote}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-warm-50 font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20">
                <Play className="w-5 h-5" />
                {t.hero.ctaProjects}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-warm-50/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-warm-50/60" />
        </div>
      </div>
    </section>
  );
}
