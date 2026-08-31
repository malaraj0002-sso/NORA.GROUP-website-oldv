import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectImages } from '@/lib/data';

const serviceSlugs = ['kitchens', 'bedrooms', 'wardrobes', 'walk-in-closets', 'doors', 'custom-furniture', 'offices', 'commercial'];
const serviceImages = [
  projectImages.kitchen1,
  projectImages.bedroom1,
  projectImages.wardrobe1,
  projectImages.wardrobe2,
  projectImages.door1,
  projectImages.furniture1,
  projectImages.office1,
  projectImages.commercial1,
];

export function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.kitchen2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.services.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.services.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.services.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, i) => (
              <Reveal key={i} delay={(i % 4) * 100}>
                <Link to={`/services/${serviceSlugs[i]}`} className="group block h-full">
                  <div className="card-luxury h-full overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={serviceImages[i]}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-charcoal-900 mb-2 group-hover:text-gold-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold">
                        <span>{t.common.learnMore}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
