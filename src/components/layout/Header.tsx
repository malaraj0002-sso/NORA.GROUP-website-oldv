import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { getWhatsAppLink } from '@/lib/config';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const { t, dir } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.projects },
    { to: '/materials', label: t.nav.materials },
    { to: '/how-we-work', label: t.nav.howWeWork },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/blog', label: t.nav.blog },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  const whatsappLink = getWhatsAppLink(t.whatsapp.defaultMessage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-warm-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className={`text-2xl font-bold tracking-tight transition-colors ${isTransparent ? 'text-warm-50' : 'text-charcoal-900'}`}>
                Nora
              </span>
              <span className={`text-2xl font-light tracking-tight transition-colors ${isTransparent ? 'text-gold-300' : 'text-gold-500'}`}>
                Group
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 7).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isTransparent
                      ? 'text-warm-50/90 hover:text-warm-50 hover:bg-white/10'
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100'
                  } ${location.pathname === item.to ? (isTransparent ? 'text-warm-50' : 'text-charcoal-900') : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <div className={isTransparent ? 'text-warm-50' : 'text-charcoal-900'}>
                <LanguageSelector />
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                  isTransparent ? 'bg-white/10 text-warm-50 hover:bg-white/20' : 'bg-[#25D366] text-white hover:bg-[#1da851]'
                }`}
                aria-label={t.whatsapp.floatingLabel}
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <Link
                to="/quote"
                className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isTransparent
                    ? 'bg-gold-400 text-charcoal-900 hover:bg-gold-300'
                    : 'bg-charcoal-900 text-warm-50 hover:bg-charcoal-800'
                }`}
              >
                {t.nav.quote}
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                  isTransparent ? 'text-warm-50 hover:bg-white/10' : 'text-charcoal-900 hover:bg-charcoal-100'
                }`}
                aria-label={t.common.menu}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-950/50" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[85%] max-w-sm bg-warm-50 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : dir === 'rtl' ? 'translate-x-[-100%]' : 'translate-x-[100%]'
          }`}
        >
          <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.to
                      ? 'bg-charcoal-900 text-warm-50'
                      : 'text-charcoal-700 hover:bg-charcoal-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/quote"
                className="btn-primary w-full"
              >
                {t.nav.quote}
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="w-5 h-5" />
                {t.common.contactWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
