import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { projects } from '@/lib/data';
import { getWhatsAppLink } from '@/lib/config';
import { useState } from 'react';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale, dir } = useI18n();
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-charcoal-900 mb-4">{t.common.error}</h1>
        <Link to="/projects" className="btn-primary">{t.common.backToProjects}</Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);
  const whatsappLink = getWhatsAppLink(`${t.whatsapp.defaultMessage} - ${project.title[locale]}`);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.images[0]} alt={project.title[locale]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-charcoal-950/30" />
        </div>
        <div className="relative container-luxury pb-12">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-gold-400/90 text-charcoal-900 text-xs font-semibold mb-4">
              {t.projects.categories[project.category]}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-2">{project.title[locale]}</h1>
            {project.isDemo && (
              <span className="inline-block mt-2 px-3 py-1 rounded-md bg-charcoal-950/70 text-warm-50/80 text-xs font-medium backdrop-blur-sm">
                {t.projects.demoNotice}
              </span>
            )}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main image */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <img src={project.images[activeImage]} alt={project.title[locale]} className="w-full h-full object-cover" />
                </div>
              </Reveal>
              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-24 rounded-lg overflow-hidden transition-all ${
                      i === activeImage ? 'ring-2 ring-gold-500' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <Reveal delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-charcoal-900 mb-6">{t.projectDetail.description}</h2>
                  <p className="text-charcoal-600 leading-relaxed mb-8">{project.description[locale]}</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-charcoal-400 text-sm font-semibold uppercase tracking-wider">{t.projectDetail.category}</span>
                      <p className="text-charcoal-900 font-medium mt-1">{t.projects.categories[project.category]}</p>
                    </div>
                    <div>
                      <span className="text-charcoal-400 text-sm font-semibold uppercase tracking-wider">{t.projectDetail.materials}</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.materials.map((mat) => (
                          <span key={mat} className="px-3 py-1 rounded-lg bg-warm-100 text-charcoal-700 text-sm">{mat}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link to="/quote" className="btn-primary w-full">
                      {t.projectDetail.similarProject}
                      <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                    </Link>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                      <MessageCircle className="w-5 h-5" />
                      {t.common.contactWhatsapp}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-beige-50">
          <div className="container-luxury">
            <Reveal>
              <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.projectDetail.relatedProjects}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link to={`/projects/${p.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={p.images[0]} alt={p.title[locale]} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-lg font-bold text-warm-50">{p.title[locale]}</h3>
                        <div className="flex items-center gap-2 text-gold-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>{t.common.viewProject}</span>
                          {dir === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
