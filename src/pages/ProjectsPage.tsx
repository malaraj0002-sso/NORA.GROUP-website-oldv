import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { projectImages } from '@/lib/data';
import { useState } from 'react';
import type { ProjectCategory } from '@/types';

export function ProjectsPage() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const categories: (ProjectCategory | 'all')[] = ['all', 'kitchens', 'bedrooms', 'wardrobes', 'doors', 'furniture', 'commercial'];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.livingRoom2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.projects.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.projects.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.projects.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-charcoal-900 text-warm-50'
                      : 'bg-warm-100 text-charcoal-600 hover:bg-warm-200'
                  }`}
                >
                  {t.projects.categories[cat]}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title[locale]}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-gold-400/90 text-charcoal-900 text-xs font-semibold mb-3">
                        {t.projects.categories[project.category]}
                      </span>
                      <h3 className="text-xl font-bold text-warm-50 mb-1">{project.title[locale]}</h3>
                      <p className="text-warm-50/70 text-sm mb-3 line-clamp-2">{project.description[locale]}</p>
                      <div className="flex items-center gap-2 text-gold-300 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{t.common.viewProject}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </div>
                    </div>
                    {project.isDemo && (
                      <span className="absolute top-4 end-4 px-2.5 py-1 rounded-md bg-charcoal-950/70 text-warm-50/80 text-xs font-medium backdrop-blur-sm">
                        {t.common.demo}
                      </span>
                    )}
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
