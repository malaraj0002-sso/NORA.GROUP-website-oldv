import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts, projectImages } from '@/lib/data';
import { useState } from 'react';

export function BlogPage() {
  const { t, locale, dir } = useI18n();
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'kitchens', 'design', 'materials', 'furniture', 'tips', 'trends', 'maintenance'];
  const filtered = filter === 'all' ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectImages.livingRoom2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.blog.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{t.blog.title}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{t.blog.subtitle}</p>
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
                  {t.blog.categories[cat as keyof typeof t.blog.categories]}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="card-luxury h-full overflow-hidden">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title[locale]}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {post.isDemo && (
                        <span className="absolute top-4 end-4 px-2.5 py-1 rounded-md bg-charcoal-950/70 text-warm-50/80 text-xs font-medium backdrop-blur-sm">
                          {t.common.demo}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-charcoal-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar' : locale === 'he' ? 'he' : 'en')}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-warm-100 text-charcoal-600 text-xs font-medium mb-3">
                        {t.blog.categories[post.category as keyof typeof t.blog.categories]}
                      </span>
                      <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-gold-500 transition-colors">
                        {post.title[locale]}
                      </h3>
                      <p className="text-charcoal-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt[locale]}</p>
                      <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold">
                        <span>{t.common.readMore}</span>
                        {dir === 'rtl' ? <ArrowRight className="w-4 h-4 rotate-180" /> : <ArrowRight className="w-4 h-4" />}
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
