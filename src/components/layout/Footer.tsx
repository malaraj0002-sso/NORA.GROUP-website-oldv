import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { localeMeta } from '@/locales';
import type { Locale } from '@/types';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export function Footer() {
  const { t, locale, setLocale } = useI18n();

  const services = [
    { slug: 'kitchens', label: t.services.items[0].title },
    { slug: 'bedrooms', label: t.services.items[1].title },
    { slug: 'wardrobes', label: t.services.items[2].title },
    { slug: 'doors', label: t.services.items[4].title },
    { slug: 'custom-furniture', label: t.services.items[5].title },
    { slug: 'offices', label: t.services.items[6].title },
  ];

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/materials', label: t.nav.materials },
    { to: '/how-we-work', label: t.nav.howWeWork },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/blog', label: t.nav.blog },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  const locales: Locale[] = ['ar', 'he', 'en'];

  return (
    <footer className="bg-charcoal-950 text-warm-50">
      {/* CTA Bar */}
      <div className="border-b border-charcoal-800">
        <div className="container-luxury py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">{t.footer.cta}</h2>
              <p className="text-warm-50/70 text-lg">{t.finalCta.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="btn-gold">
                {t.common.requestQuote}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">Nora</span>
              <span className="text-2xl font-light text-gold-300">Group</span>
            </Link>
            <p className="text-warm-50/60 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a href={SITE_CONFIG.socialMedia.instagram} className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.socialMedia.facebook} className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.socialMedia.linkedin} className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300 mb-6">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-warm-50/60 hover:text-warm-50 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300 mb-6">{t.footer.navTitle}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-warm-50/60 hover:text-warm-50 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300 mb-6">{t.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-warm-50/60">
                <Phone className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-50/60">
                <Mail className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-50/60">
                <MapPin className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-50/60">
                <Clock className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.workingHours}</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300 mb-3">{t.footer.languagesTitle}</h4>
              <div className="flex gap-2">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      locale === l ? 'bg-gold-400 text-charcoal-900' : 'bg-charcoal-800 text-warm-50/60 hover:text-warm-50'
                    }`}
                  >
                    {localeMeta[l].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-charcoal-800">
        <div className="container-luxury py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-warm-50/40 text-sm">
              © {new Date().getFullYear()} Nora Group. {t.common.allRightsReserved}.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-warm-50/40 hover:text-warm-50 text-sm transition-colors">{t.common.privacyPolicy}</Link>
              <Link to="/terms" className="text-warm-50/40 hover:text-warm-50 text-sm transition-colors">{t.common.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
