import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import type { AppLocale } from '@/lib/constants';
import { mediaSrc } from '@/lib/content/media';
import type { SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function BlogView({ locale, content }: { locale: AppLocale; content: SiteContent }) {
  const posts = content.blogPosts.filter((b) => b.visible);
  const nav = content.nav[locale];
  return (
    <>
      <PageHero eyebrow={nav.blog} title={nav.blog} subtitle="" image={posts[0]?.image} />
      <section className="section-padding bg-warm-50">
        <div className="container-luxury grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 40}>
              <Link href={`/blog/${post.slug}`} className="card-luxury group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={mediaSrc(post.image)}
                    alt={t(post.title, locale)}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold">{t(post.title, locale)}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-charcoal-600">{t(post.excerpt, locale)}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-600">
                    {nav.readMore}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
