import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { projectImages } from '@/lib/data';
import { getWhatsAppLink } from '@/lib/config';
import { processSteps } from '@/lib/data';

const serviceData: Record<string, {
  image: string;
  benefits: { ar: string; he: string; en: string }[];
  options: { ar: string; he: string; en: string }[];
  faq: { q: { ar: string; he: string; en: string }; a: { ar: string; he: string; en: string } }[];
}> = {
  kitchens: {
    image: projectImages.kitchen1,
    benefits: [
      { ar: 'تصميم مخصص يناسب مساحتك واحتياجاتك', he: 'עיצוב מותאם לחלל ולצרכים שלך', en: 'Custom design tailored to your space and needs' },
      { ar: 'خامات عالية الجودة ومتينة', he: 'חומרים איכותיים ועמידים', en: 'High-quality and durable materials' },
      { ar: 'حلول تخزين ذكية ومحكمة', he: 'פתרונות אחסון חכמים ומדויקים', en: 'Smart and precise storage solutions' },
      { ar: 'تركيب احترافي وضمان', he: 'התקנה מקצועית ואחריות', en: 'Professional installation and warranty' },
    ],
    options: [
      { ar: 'مطابخ حديثة', he: 'מטבחים מודרניים', en: 'Modern kitchens' },
      { ar: 'مطابخ كلاسيكية', he: 'מטבחים קלאסיים', en: 'Classic kitchens' },
      { ar: 'مطابخ بجزيرة وسطية', he: 'מטבחים עם אי מרכזי', en: 'Island kitchens' },
      { ar: 'مطابخ مفتوحة', he: 'מטבחים פתוחים', en: 'Open kitchens' },
    ],
    faq: [
      { q: { ar: 'كم تستغرق مدة تنفيذ المطبخ؟', he: 'כמה זמן לוקח לבצע מטבח?', en: 'How long does a kitchen take?' }, a: { ar: 'تختلف المدة حسب الحجم والتصميم، عادة 3-6 أسابيع.', he: 'משתנה לפי גודל ועיצוב, בדרך כלל 3-6 שבועות.', en: 'Varies by size and design, typically 3-6 weeks.' } },
    ],
  },
  bedrooms: {
    image: projectImages.bedroom1,
    benefits: [
      { ar: 'تصاميم مريحة وأنيقة', he: 'עיצובים נוחים ואלגנטיים', en: 'Comfortable and elegant designs' },
      { ar: 'خزائن مدمجة ذكية', he: 'ארונות מובנים חכמים', en: 'Smart built-in wardrobes' },
      { ar: 'إضاءة مدروسة', he: 'תאורה מחושבת', en: 'Thoughtful lighting' },
      { ar: 'خامات دافئة وطبيعية', he: 'חומרים חמים וטבעיים', en: 'Warm and natural materials' },
    ],
    options: [
      { ar: 'غرف نوم رئيسية', he: 'חדרי שינה ראשיים', en: 'Master bedrooms' },
      { ar: 'غرف أطفال', he: 'חדרי ילדים', en: 'Children rooms' },
      { ar: 'غرف ضيوف', he: 'חדרי אורחים', en: 'Guest rooms' },
    ],
    faq: [
      { q: { ar: 'هل يمكن تصميم غرفة نوم صغيرة؟', he: 'האם ניתן לעצב חדר שינה קטן?', en: 'Can you design a small bedroom?' }, a: { ar: 'نعم، نتخصص في حلول المساحات الصغيرة.', he: 'כן, אנו מתמחים בפתרונות לחללים קטנים.', en: 'Yes, we specialize in small space solutions.' } },
    ],
  },
  wardrobes: {
    image: projectImages.wardrobe1,
    benefits: [
      { ar: 'حلول تخزين مخصصة', he: 'פתרונות אחסון מותאמים', en: 'Custom storage solutions' },
      { ar: 'استغلال أمثل للمساحة', he: 'ניצול אופטימלי של החלל', en: 'Optimal space utilization' },
      { ar: 'تصاميم عصرية وكلاسيكية', he: 'עיצובים מודרניים וקלאסיים', en: 'Modern and classic designs' },
      { ar: 'خامات متينة وعملية', he: 'חומרים עמידים ופרקטיים', en: 'Durable and practical materials' },
    ],
    options: [
      { ar: 'خزائن مدمجة', he: 'ארונות מובנים', en: 'Built-in wardrobes' },
      { ar: 'خزائن منزلقة', he: 'ארונות הזזה', en: 'Sliding wardrobes' },
      { ar: 'خزائن زاوية', he: 'ארונות פינתיים', en: 'Corner wardrobes' },
    ],
    faq: [],
  },
  'walk-in-closets': {
    image: projectImages.wardrobe2,
    benefits: [
      { ar: 'تنظيم فاخر للملابس', he: 'ארגון יוקרתי לבגדים', en: 'Luxurious clothing organization' },
      { ar: 'إضاءة احترافية', he: 'תאורה מקצועית', en: 'Professional lighting' },
      { ar: 'مرايا وتنظيم ذكي', he: 'מראות וארגון חכם', en: 'Mirrors and smart organization' },
      { ar: 'تصميم حسب الطلب', he: 'עיצוב בהזמנה', en: 'Custom design' },
    ],
    options: [
      { ar: 'غرف ملابس صغيرة', he: 'חדרי ארונות קטנים', en: 'Small walk-in closets' },
      { ar: 'غرف ملابس فاخرة', he: 'חדרי ארונות יוקרתיים', en: 'Luxury walk-in closets' },
    ],
    faq: [],
  },
  doors: {
    image: projectImages.door1,
    benefits: [
      { ar: 'تصاميم متنوعة', he: 'מגוון עיצובים', en: 'Diverse designs' },
      { ar: 'خامات متينة', he: 'חומרים עמידים', en: 'Durable materials' },
      { ar: 'عزل صوتي', he: 'בידוד אקוסטי', en: 'Sound insulation' },
      { ar: 'تركيب احترافي', he: 'התקנה מקצועית', en: 'Professional installation' },
    ],
    options: [
      { ar: 'أبواب داخلية', he: 'דלתות פנים', en: 'Interior doors' },
      { ar: 'أبواب رئيسية', he: 'דלתות כניסה', en: 'Entrance doors' },
      { ar: 'أبواب منزلقة', he: 'דלתות הזזה', en: 'Sliding doors' },
    ],
    faq: [],
  },
  'custom-furniture': {
    image: projectImages.furniture1,
    benefits: [
      { ar: 'قطع فريدة مصممة لك', he: 'פריטים ייחודיים המעוצבים עבורך', en: 'Unique pieces designed for you' },
      { ar: 'حرفية يدوية عالية', he: 'מלאכת יד גבוהה', en: 'High handcraftsmanship' },
      { ar: 'خامات منتقاة', he: 'חומרים נבחרים', en: 'Selected materials' },
      { ar: 'تصميم حسب الطلب', he: 'עיצוב בהזמנה', en: 'Custom design' },
    ],
    options: [
      { ar: 'طاولات', he: 'שולחנות', en: 'Tables' },
      { ar: 'كراسي', he: 'כיסאות', en: 'Chairs' },
      { ar: 'وحدات تلفزيون', he: 'יחידות טלוויזיה', en: 'TV units' },
    ],
    faq: [],
  },
  offices: {
    image: projectImages.office1,
    benefits: [
      { ar: 'مساحات عمل عملية', he: 'חללי עבודה פרקטיים', en: 'Practical workspaces' },
      { ar: 'حلول تخزين مكتبي', he: 'פתרונות אחסון משרדיים', en: 'Office storage solutions' },
      { ar: 'تصميم احترافي', he: 'עיצוב מקצועי', en: 'Professional design' },
      { ar: 'راحة وإنتاجية', he: 'נוחות ופרודוקטיביות', en: 'Comfort and productivity' },
    ],
    options: [
      { ar: 'مكاتب منزلية', he: 'משרדים ביתיים', en: 'Home offices' },
      { ar: 'مكاتب تنفيذية', he: 'משרדי מנהלים', en: 'Executive offices' },
    ],
    faq: [],
  },
  commercial: {
    image: projectImages.commercial1,
    benefits: [
      { ar: 'حلول متكاملة للمشاريع التجارية', he: 'פתרונות מקיפים לפרויקטים מסחריים', en: 'Comprehensive commercial solutions' },
      { ar: 'تصميم يعكس هوية العلامة', he: 'עיצוב המשקף את זהות המותג', en: 'Design reflecting brand identity' },
      { ar: 'تنفيذ في الوقت المحدد', he: 'ביצוע בזמן', en: 'On-time delivery' },
      { ar: 'جودة عالية ومتانة', he: 'איכות גבוהה ועמידות', en: 'High quality and durability' },
    ],
    options: [
      { ar: 'مطاعم ومقاهي', he: 'מסעדות ובתי קפה', en: 'Restaurants and cafes' },
      { ar: 'متاجر', he: 'חנויות', en: 'Retail stores' },
      { ar: 'فنادق', he: 'מלונות', en: 'Hotels' },
    ],
    faq: [],
  },
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useI18n();

  if (!slug || !serviceData[slug]) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-charcoal-900 mb-4">{t.common.error}</h1>
        <Link to="/services" className="btn-primary">{t.common.backToServices}</Link>
      </div>
    );
  }

  const data = serviceData[slug];
  const serviceIndex = ['kitchens', 'bedrooms', 'wardrobes', 'walk-in-closets', 'doors', 'custom-furniture', 'offices', 'commercial'].indexOf(slug);
  const serviceTitle = serviceIndex >= 0 ? t.services.items[serviceIndex].title : slug;
  const serviceDesc = serviceIndex >= 0 ? t.services.items[serviceIndex].desc : '';
  const whatsappLink = getWhatsAppLink(`${t.whatsapp.defaultMessage} - ${serviceTitle}`);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-luxury">
          <Reveal>
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t.services.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-50 mb-4">{serviceTitle}</h1>
            <p className="text-warm-50/70 text-lg max-w-2xl">{serviceDesc}</p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <Reveal>
            <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.serviceDetail.benefits}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.benefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-gold-500" />
                  </div>
                  <p className="text-charcoal-700 text-lg leading-relaxed">{benefit[locale]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-padding bg-beige-50">
        <div className="container-luxury">
          <Reveal>
            <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.serviceDetail.options}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.options.map((option, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-luxury p-8 text-center">
                  <h3 className="text-lg font-bold text-charcoal-900">{option[locale]}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-warm-50">
        <div className="container-luxury">
          <Reveal>
            <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.serviceDetail.process}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.slice(0, 4).map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-charcoal-900 text-warm-50 flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold-300 font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{step.title[locale]}</h3>
                  <p className="text-charcoal-500 text-sm">{step.description[locale]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="section-padding bg-beige-50">
          <div className="container-luxury max-w-3xl">
            <Reveal>
              <h2 className="text-section text-charcoal-900 mb-12 text-center">{t.serviceDetail.faq}</h2>
            </Reveal>
            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <Reveal key={i}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-charcoal-900 mb-3">{item.q[locale]}</h3>
                    <p className="text-charcoal-600 leading-relaxed">{item.a[locale]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-charcoal-950 text-warm-50">
        <div className="container-luxury text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">{t.serviceDetail.similarProject}</h2>
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
