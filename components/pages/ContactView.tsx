import Image from 'next/image';
import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import { getMailtoLink, getTelLink, getWhatsAppLink } from '@/lib/contact';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function ContactView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const page = content.contactPage;
  const settings = content.settings;
  const nav = content.nav[locale];
  const whatsapp = getWhatsAppLink(settings.whatsappE164, t(settings.whatsappMessage, locale));
  const tel = getTelLink(settings.phoneTel);

  return (
    <>
      <PageHero
        eyebrow={t(page.eyebrow, locale)}
        title={t(page.title, locale)}
        subtitle={t(page.subtitle, locale)}
        image={page.image}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <ContactRow icon={Phone} label={nav.callUs}>
                <a href={tel} className="text-lg font-medium text-charcoal-900 hover:text-gold-600" dir="ltr">
                  {settings.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label={nav.whatsapp}>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-charcoal-900 hover:text-gold-600">
                  WhatsApp
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={getMailtoLink(settings.email)} className="break-all text-lg font-medium text-charcoal-900 hover:text-gold-600">
                  {settings.email}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label={t(settings.address, locale)}>
                <span className="text-lg text-charcoal-700">{t(settings.address, locale)}</span>
              </ContactRow>
              <ContactRow icon={Clock} label={t(settings.workingHours, locale)}>
                <span className="text-lg text-charcoal-700">{t(settings.workingHours, locale)}</span>
              </ContactRow>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
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
          </Reveal>

          <Reveal delay={120}>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-sm sm:p-6">
                <Image
                  src={settings.qrUrl}
                  alt={`${settings.brandName} WhatsApp QR`}
                  width={220}
                  height={220}
                  className="h-40 w-40 object-contain sm:h-48 sm:w-48 md:h-52 md:w-52"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100">
        <Icon className="h-6 w-6 text-gold-500" />
      </div>
      <div>
        <p className="mb-1 text-sm font-medium text-charcoal-500">{label}</p>
        {children}
      </div>
    </div>
  );
}
