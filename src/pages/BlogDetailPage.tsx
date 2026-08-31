import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, User, MessageCircle } from 'lucide-react';
import { blogPosts, projectImages } from '@/lib/data';
import { getWhatsAppLink } from '@/lib/config';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useI18n();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-charcoal-900 mb-4">{t.common.error}</h1>
        <Link to="/blog" className="btn-primary">{t.common.backToBlog}</Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const whatsappLink = getWhatsAppLink(t.whatsapp.defaultMessage);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title[locale]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-charcoal-950/30" />
        </div>
        <div className="relative container-luxury pb-12">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-gold-400/90 text-charcoal-900 text-xs font-semibold mb-4">
              {t.blog.categories[post.category as keyof typeof t.blog.categories]}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-warm-50 mb-4 max-w-4xl text-balance">{post.title[locale]}</h1>
            <div className="flex items-center gap-4 text-sm text-warm-50/70">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar' : locale === 'he' ? 'he' : 'en')}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            {post.isDemo && (
              <span className="inline-block mt-4 px-3 py-1 rounded-md bg-charcoal-950/70 text-warm-50/80 text-xs font-medium backdrop-blur-sm">
                {t.blog.demoNotice}
              </span>
            )}
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury max-w-3xl">
          <Reveal>
            <p className="text-charcoal-700 text-lg leading-relaxed mb-8">{post.excerpt[locale]}</p>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal-600 leading-relaxed mb-6">{post.content[locale]}</p>
              <p className="text-charcoal-600 leading-relaxed mb-6">{post.content[locale]}</p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="bg-charcoal-950 rounded-2xl p-8 lg:p-12 text-center mt-12">
              <h2 className="text-2xl font-bold text-warm-50 mb-4">{t.finalCta.title}</h2>
              <p className="text-warm-50/60 mb-8">{t.finalCta.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/quote" className="btn-gold">
                  {t.common.requestQuote}
                  <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                </Link>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="w-5 h-5" />
                  {t.common.contactWhatsapp}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-beige-50">
          <div className="container-luxury">
            <Reveal>
              <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.common.relatedPosts}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link to={`/blog/${p.slug}`} className="group block">
                    <div className="card-luxury overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={p.image} alt={p.title[locale]} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-charcoal-900 mb-2 group-hover:text-gold-500 transition-colors">{p.title[locale]}</h3>
                        <p className="text-charcoal-500 text-sm line-clamp-2">{p.excerpt[locale]}</p>
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
