'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/Reveal';
import type { ProjectCategory } from '@/lib/constants';
import { mediaSrc } from '@/lib/content/media';

export type ProjectCard = {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: string;
};

export function ProjectsGrid({
  labels,
  projects,
}: {
  labels: Record<ProjectCategory | 'all', string>;
  projects: ProjectCard[];
}) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const categories = useMemo(
    () => ['all' as const, ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`min-h-10 rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === cat ? 'bg-charcoal-900 text-warm-50' : 'bg-warm-100 text-charcoal-600 hover:bg-warm-200'
            }`}
          >
            {labels[cat]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={i * 40}>
            <Link href={`/projects/${p.slug}`} className="card-luxury group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={mediaSrc(p.image)}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">{labels[p.category]}</p>
                <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
