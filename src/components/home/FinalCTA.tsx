import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/config';
import { projectImages } from '@/lib/data';

export function FinalCTA() {
  const { t } = useI18n();
  const whatsappLink = getWhatsAppLink(t.whatsapp.defaultMessage);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={projectImages.livingRoom1}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/80" />
      </div>

      <div className="relative container-luxury">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-section text-warm-50 mb-4 text-balance">{t.finalCta.title}</h2>
            <p className="text-warm-50/70 text-xl lg:text-2xl mb-10">{t.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote" className="btn-gold">
                {t.finalCta.ctaQuote}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-warm-50 font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                {t.finalCta.ctaWhatsapp}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
