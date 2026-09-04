'use client';

import { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { BrandLockup } from '@/components/layout/BrandLockup';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { useSite } from '@/components/providers/SiteProvider';
import { getTelLink, getWhatsAppLink } from '@/lib/contact';
import { t } from '@/lib/i18n/locale';
import { getDesktopNavLinks, getSiteNavLinks } from '@/lib/nav';

export function Header() {
  const pathname = usePathname();
  const chrome = useSite();
  const { locale, nav, settings } = chrome;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;
  const visibility = {
    showMaterials: chrome.showMaterials,
    showTestimonials: chrome.showTestimonials,
    showBlog: chrome.showBlog,
    showFaq: chrome.showFaq,
  };
  const desktopItems = getDesktopNavLinks(nav, visibility);
  const mobileItems = getSiteNavLinks(nav, visibility);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const whatsapp = getWhatsAppLink(settings.whatsappE164, t(settings.whatsappMessage, locale));
  const tel = getTelLink(settings.phoneTel);
  const logo = transparent || menuOpen ? settings.logoDarkUrl : settings.logoUrl;

  const linkClass = (href: string) =>
    `relative z-10 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium transition-colors xl:px-2.5 xl:text-sm ${
      transparent
        ? 'text-warm-50/90 hover:bg-white/10 hover:text-warm-50'
        : 'text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900'
    } ${pathname === href ? (transparent ? 'text-warm-50' : 'text-charcoal-900') : ''}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-charcoal-100 bg-warm-50/95 shadow-sm backdrop-blur-md'
        }`}
      >
        <div className="container-luxury grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:h-20 sm:gap-3">
          <div className="relative z-20 shrink-0">
            <BrandLockup
              logoUrl={logo}
              brandName={settings.brandName}
              variant={transparent ? 'transparent' : 'light'}
              compact
            />
          </div>

          <nav className="relative z-10 hidden min-w-0 items-center justify-center gap-0.5 overflow-x-auto overscroll-x-contain lg:flex xl:gap-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {desktopItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-20 flex shrink-0 items-center gap-1 sm:gap-2">
            <LanguageSelector light={transparent} />
            <a
              href={tel}
              className={`hidden min-h-11 min-w-11 items-center justify-center rounded-lg sm:inline-flex ${
                transparent ? 'text-warm-50 hover:bg-white/10' : 'text-charcoal-700 hover:bg-charcoal-100'
              }`}
              aria-label={nav.callUs}
              dir="ltr"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden !min-h-11 !px-3 !py-2 text-sm xl:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              {nav.whatsapp}
            </a>
            <a
              href={tel}
              className="btn-gold hidden !min-h-11 !px-3 !py-2 text-sm xl:inline-flex"
              dir="ltr"
            >
              <Phone className="h-4 w-4" />
              {nav.callUs}
            </a>
            <button
              type="button"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg lg:hidden ${
                transparent ? 'text-warm-50' : 'text-charcoal-900'
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-charcoal-950/95 text-warm-50 lg:hidden">
          <div className="container-luxury flex h-16 items-center justify-between sm:h-20">
            <BrandLockup
              logoUrl={settings.logoDarkUrl}
              brandName={settings.brandName}
              variant="dark"
              compact
            />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-luxury flex flex-col gap-1 pb-10 pt-4">
            {mobileItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href={tel} className="btn-gold w-full" dir="ltr">
                <Phone className="h-5 w-5" />
                {nav.callUs}
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                <MessageCircle className="h-5 w-5" />
                {nav.whatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
