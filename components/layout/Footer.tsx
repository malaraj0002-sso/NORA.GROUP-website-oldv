'use client';

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { BrandLockup } from '@/components/layout/BrandLockup';
import { useSite } from '@/components/providers/SiteProvider';
import { LAZACORE, LOCALES, LOCALE_META } from '@/lib/constants';
import { getMailtoLink, getTelLink, getWhatsAppLink } from '@/lib/contact';
import { t } from '@/lib/i18n/locale';
import { getSiteNavLinks } from '@/lib/nav';

export function Footer() {
  const chrome = useSite();
  const { locale, nav, ui, settings } = chrome;
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = getSiteNavLinks(nav, {
    showMaterials: chrome.showMaterials,
    showTestimonials: chrome.showTestimonials,
    showBlog: chrome.showBlog,
    showFaq: chrome.showFaq,
  });

  const whatsapp = getWhatsAppLink(settings.whatsappE164, t(settings.whatsappMessage, locale));
  const tel = getTelLink(settings.phoneTel);

  return (
    <footer className="bg-charcoal-950 text-warm-50">
      <div className="border-b border-charcoal-800">
        <div className="container-luxury flex flex-col items-start justify-between gap-6 py-12 sm:py-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{ui.footerCta}</h2>
            <p className="mt-2 text-base text-warm-50/70 sm:text-lg">{chrome.ctaSubtitle}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-5 w-5" />
              {nav.whatsapp}
            </a>
            <a href={tel} className="btn-gold" dir="ltr">
              <Phone className="h-5 w-5" />
              {nav.callUs}
            </a>
          </div>
        </div>
      </div>

      <div className="container-luxury grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
        <div>
          <BrandLockup
            logoUrl={settings.logoDarkUrl}
            brandName={settings.brandName}
            variant="dark"
          />
          <p className="mt-4 text-sm leading-relaxed text-warm-50/60">{ui.footerTagline}</p>
          <p className="mt-2 text-sm text-gold-300">{t(settings.pillars, locale)}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-300">
            {ui.servicesTitle}
          </h3>
          <ul className="space-y-3">
            {chrome.services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-warm-50/60 transition hover:text-warm-50"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-300">
            {ui.navTitle}
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-warm-50/60 transition hover:text-warm-50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-300">
            {ui.contactTitle}
          </h3>
          <ul className="space-y-4 text-sm text-warm-50/60">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <a href={tel} className="hover:text-warm-50" dir="ltr">
                {settings.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-warm-50">
                {nav.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <a href={getMailtoLink(settings.email)} className="break-all hover:text-warm-50">
                {settings.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <span>{t(settings.address, locale)}</span>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-300">
              {ui.languagesTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => router.replace(pathname, { locale: code })}
                  className={`min-h-9 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    locale === code
                      ? 'bg-gold-400 text-charcoal-900'
                      : 'bg-charcoal-800 text-warm-50/60 hover:text-warm-50'
                  }`}
                >
                  {LOCALE_META[code].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LazaCore credit is hardcoded — not editable in Sanity */}
      <div className="border-t border-charcoal-800">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-warm-50/40">
            © {new Date().getFullYear()} {settings.brandName}
          </p>
          <p className="text-sm text-warm-50/40">
            {ui.madeBy}{' '}
            <a
              href={LAZACORE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 transition hover:text-gold-200"
            >
              {LAZACORE.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
