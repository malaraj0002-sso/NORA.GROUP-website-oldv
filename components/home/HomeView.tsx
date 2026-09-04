import Image from 'next/image';
import { ArrowRight, MessageCircle, Phone, Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Hero } from '@/components/home/Hero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import { getTelLink, getWhatsAppLink } from '@/lib/contact';
import type { SiteContent } from '@/lib/content/types';
import { mediaSrc } from '@/lib/content/media';
import { t } from '@/lib/i18n/locale';

export function HomeView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const home = content.home;
  const nav = content.nav[locale];
  const settings = content.settings;

  const whatsapp = getWhatsAppLink(settings.whatsappE164, t(settings.whatsappMessage, locale));
  const tel = getTelLink(settings.phoneTel);
  const services = content.services.filter((s) => s.visible).slice(0, 7);
  const projects = content.projects.filter((p) => p.visible).slice(0, 6);
  const materials = content.materials.filter((m) => m.visible).slice(0, 4);
  const testimonials = content.testimonials.filter((x) => x.visible).slice(0, 3);

  return (
    <>
      <Hero
        title={t(home.heroTitle, locale)}
        subtitle={t(home.heroSubtitle, locale)}
        pillars={t(settings.pillars, locale)}
        slides={home.heroImages}
        whatsapp={whatsapp}
        tel={tel}
        whatsappLabel={nav.whatsapp}
        callLabel={nav.callUs}
        viewWorkLabel={nav.viewWork}
      />

      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="heading-eyebrow">{t(home.introEyebrow, locale)}</p>
            <h2 className="text-section text-charcoal-900">{t(home.introTitle, locale)}</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600">
              {t(home.introDescription, locale)}
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {home.introFeatures.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card-luxury h-full p-5">
                  <h3 className="text-lg font-semibold text-charcoal-900">{t(f.title, locale)}</h3>
                  <p className="mt-2 text-sm text-charcoal-600">{t(f.desc, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="heading-eyebrow">{t(home.servicesEyebrow, locale)}</p>
              <h2 className="text-section">{t(home.servicesTitle, locale)}</h2>
              <p className="mt-4 text-charcoal-600">{t(home.servicesSubtitle, locale)}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/services/${s.slug}`} className="card-luxury group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={mediaSrc(s.image)}
                      alt={t(s.title, locale)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{t(s.title, locale)}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-charcoal-600">{t(s.description, locale)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              {nav.viewAll}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="heading-eyebrow">{t(home.projectsEyebrow, locale)}</p>
              <h2 className="text-section">{t(home.projectsTitle, locale)}</h2>
              <p className="mt-4 text-charcoal-600">{t(home.projectsSubtitle, locale)}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link href={`/projects/${p.slug}`} className="card-luxury group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={mediaSrc(p.images[0])}
                      alt={t(p.title, locale)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
                      {content.categoryLabels[locale][p.category]}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{t(p.title, locale)}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="btn-primary">
              {nav.viewWork}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-950 text-warm-50">
        <div className="container-luxury">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
                {t(home.whyEyebrow, locale)}
              </p>
              <h2 className="text-section text-warm-50">{t(home.whyTitle, locale)}</h2>
              <p className="mt-4 text-warm-50/70">{t(home.whySubtitle, locale)}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.whyItems.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-2xl border border-charcoal-800 bg-charcoal-900/50 p-6">
                  <h3 className="text-lg font-semibold text-gold-300">{t(item.title, locale)}</h3>
                  <p className="mt-2 text-sm text-warm-50/70">{t(item.desc, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="heading-eyebrow">{t(home.processEyebrow, locale)}</p>
              <h2 className="text-section">{t(home.processTitle, locale)}</h2>
              <p className="mt-4 text-charcoal-600">{t(home.processSubtitle, locale)}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {content.howWeWork.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 40}>
                <div className="rounded-2xl bg-warm-50 p-4 text-center">
                  <p className="text-sm font-bold text-gold-500">{step.number}</p>
                  <h3 className="mt-2 text-sm font-semibold">{t(step.title, locale)}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {materials.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-luxury">
            <Reveal>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="heading-eyebrow">{t(home.materialsEyebrow, locale)}</p>
                <h2 className="text-section">{t(home.materialsTitle, locale)}</h2>
                <p className="mt-4 text-charcoal-600">{t(home.materialsSubtitle, locale)}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {materials.map((m, i) => (
                <Reveal key={m.slug} delay={i * 50}>
                  <div className="card-luxury">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={mediaSrc(m.image)}
                        alt={t(m.name, locale)}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{t(m.name, locale)}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-charcoal-600">{t(m.description, locale)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <Reveal>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="heading-eyebrow">{t(home.testimonialsEyebrow, locale)}</p>
                <h2 className="text-section">{t(home.testimonialsTitle, locale)}</h2>
                <p className="mt-4 text-charcoal-600">{t(home.testimonialsSubtitle, locale)}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((item, i) => (
                <Reveal key={item.id} delay={i * 60}>
                  <div className="card-luxury h-full p-6">
                    <div className="mb-3 flex gap-1 text-gold-400">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-charcoal-700">{t(item.review, locale)}</p>
                    <p className="mt-4 font-semibold">{item.name}</p>
                    <p className="text-sm text-charcoal-500">{t(item.project, locale)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-charcoal-900 text-warm-50">
        <div className="container-luxury text-center">
          <Reveal>
            <h2 className="text-section text-warm-50">{t(home.ctaTitle, locale)}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-warm-50/70">{t(home.ctaSubtitle, locale)}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="h-5 w-5" />
                {nav.whatsapp}
              </a>
              <a href={tel} className="btn-gold" dir="ltr">
                <Phone className="h-5 w-5" />
                {nav.callUs}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
