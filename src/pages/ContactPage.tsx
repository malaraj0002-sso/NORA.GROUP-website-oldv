import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { useState, type FormEvent } from 'react';

export function ContactPage() {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 to-charcoal-950" />
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.contact.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.contact.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.contact.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <Reveal>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-8">{t.contact.title}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{t.contact.phone}</h3>
                      <p className="text-charcoal-500">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{t.contact.email}</h3>
                      <p className="text-charcoal-500">{SITE_CONFIG.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{t.contact.address}</h3>
                      <p className="text-charcoal-500">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{t.contact.workingHours}</h3>
                      <p className="text-charcoal-500">{SITE_CONFIG.workingHours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-charcoal-900 mb-4">{t.contact.socialMedia}</h3>
                  <div className="flex gap-3">
                    <a href={SITE_CONFIG.socialMedia.instagram} className="w-10 h-10 rounded-lg bg-charcoal-100 flex items-center justify-center hover:bg-charcoal-900 hover:text-warm-50 transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={SITE_CONFIG.socialMedia.facebook} className="w-10 h-10 rounded-lg bg-charcoal-100 flex items-center justify-center hover:bg-charcoal-900 hover:text-warm-50 transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={SITE_CONFIG.socialMedia.linkedin} className="w-10 h-10 rounded-lg bg-charcoal-100 flex items-center justify-center hover:bg-charcoal-900 hover:text-warm-50 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div>
              <Reveal delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-6">{t.contact.form.title}</h2>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-charcoal-700 text-lg">{t.contact.form.success}</p>
                      <Link to="/" className="btn-secondary mt-8">{t.notFound.backHome}</Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.contact.form.name}</label>
                        <input type="text" required className="input-luxury" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.contact.form.phone}</label>
                        <input type="tel" required className="input-luxury" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.contact.form.email}</label>
                        <input type="email" required className="input-luxury" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.contact.form.subject}</label>
                        <input type="text" required className="input-luxury" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">{t.contact.form.message}</label>
                        <textarea rows={5} required className="input-luxury resize-none" />
                      </div>
                      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                        {status === 'submitting' ? t.common.loading : t.contact.form.submit}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
