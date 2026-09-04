import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { PageHero } from '@/components/ui/PageHero';
import type { AppLocale } from '@/lib/constants';
import { mediaSrc } from '@/lib/content/media';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function ProjectDetailView({
  locale,
  content,
  slug,
}: {
  locale: AppLocale;
  content: SiteContent;
  slug: string;
}) {
  const project = content.projects.find((p) => p.slug === slug && p.visible);
  if (!project) return null;

  const related = content.projects
    .filter((p) => p.visible && p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const materialName = (id: string) => {
    const match = content.materials.find((m) => m.slug === id);
    return match ? t(match.name, locale) : id;
  };

  return (
    <>
      <PageHero
        eyebrow={content.categoryLabels[locale][project.category]}
        title={t(project.title, locale)}
        subtitle={t(project.description, locale)}
        image={project.images[0]}
      />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={mediaSrc(src)}
                  alt={t(project.title, locale)}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          {project.materials.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.materials.map((m) => (
                <span key={m} className="rounded-full bg-white px-4 py-2 text-sm text-charcoal-700 shadow-sm">
                  {materialName(m)}
                </span>
              ))}
            </div>
          )}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">{content.ui[locale].relatedProjects}</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {related.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="card-luxury block">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={mediaSrc(p.images[0])}
                        alt={t(p.title, locale)}
                        fill
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>
                    <p className="p-4 font-semibold">{t(p.title, locale)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
