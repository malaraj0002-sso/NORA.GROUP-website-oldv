import { Link } from '@/i18n/navigation';
import { PageHero } from '@/components/ui/PageHero';
import type { AppLocale } from '@/lib/constants';
import type { BlogPostItem, SiteContent } from '@/lib/content/types';
import { t } from '@/lib/i18n/locale';

export function BlogDetailView({
  locale,
  content,
  post,
}: {
  locale: AppLocale;
  content: SiteContent;
  post: BlogPostItem;
}) {
  const nav = content.nav[locale];
  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={t(post.title, locale)}
        subtitle={t(post.excerpt, locale)}
        image={post.image}
      />
      <section className="section-padding bg-warm-50">
        <article className="container-luxury max-w-3xl">
          <p className="text-sm text-charcoal-500">
            {post.date} · {post.author}
          </p>
          <div className="mt-6 whitespace-pre-line text-lg leading-relaxed text-charcoal-700">
            {t(post.content, locale)}
          </div>
          <Link href="/blog" className="btn-secondary mt-10 inline-flex">
            {nav.blog}
          </Link>
        </article>
      </section>
    </>
  );
}
