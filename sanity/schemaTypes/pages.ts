import { defineField, defineType } from 'sanity';

const pageHeroFields = [
  defineField({ name: 'eyebrow', title: 'עיניים', type: 'localeString' }),
  defineField({ name: 'title', title: 'כותרת', type: 'localeString' }),
  defineField({ name: 'subtitle', title: 'תת־כותרת', type: 'localeText' }),
  defineField({ name: 'image', title: 'תמונת רקע', type: 'image', options: { hotspot: true } }),
];

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'אודות',
  type: 'document',
  fields: [
    ...pageHeroFields,
    defineField({ name: 'body', title: 'תוכן', type: 'localeText' }),
    defineField({ name: 'valuesTitle', title: 'כותרת ערכים', type: 'localeString' }),
    defineField({
      name: 'values',
      title: 'ערכים',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'localeString', title: 'כותרת' },
            { name: 'desc', type: 'localeText', title: 'תיאור' },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'אודות' }) },
});

export const howWeWorkPage = defineType({
  name: 'howWeWorkPage',
  title: 'איך אנחנו עובדים',
  type: 'document',
  fields: [
    ...pageHeroFields,
    defineField({
      name: 'steps',
      title: 'שלבים',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'מספר' },
            { name: 'title', type: 'localeString', title: 'כותרת' },
            { name: 'description', type: 'localeText', title: 'תיאור' },
          ],
          preview: { select: { title: 'title.he', subtitle: 'number' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'איך אנחנו עובדים' }) },
});

export const contactPage = defineType({
  name: 'contactPage',
  title: 'יצירת קשר',
  type: 'document',
  fields: pageHeroFields,
  preview: { prepare: () => ({ title: 'יצירת קשר' }) },
});

export const uiLabels = defineType({
  name: 'uiLabels',
  title: 'תוויות ממשק',
  type: 'document',
  fields: [
    defineField({
      name: 'locale',
      title: 'שפה',
      type: 'string',
      options: {
        list: [
          { title: 'עברית', value: 'he' },
          { title: 'العربية', value: 'ar' },
          { title: 'English', value: 'en' },
          { title: 'Русский', value: 'ru' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'home', type: 'string', title: 'ראשי' }),
    defineField({ name: 'about', type: 'string', title: 'אודות' }),
    defineField({ name: 'services', type: 'string', title: 'שירותים' }),
    defineField({ name: 'projects', type: 'string', title: 'עבודות' }),
    defineField({ name: 'materials', type: 'string', title: 'חומרים' }),
    defineField({ name: 'howWeWork', type: 'string', title: 'איך עובדים' }),
    defineField({ name: 'testimonials', type: 'string', title: 'המלצות' }),
    defineField({ name: 'blog', type: 'string', title: 'בלוג' }),
    defineField({ name: 'faq', type: 'string', title: 'שאלות' }),
    defineField({ name: 'contact', type: 'string', title: 'צור קשר' }),
    defineField({ name: 'callUs', type: 'string', title: 'התקשרו' }),
    defineField({ name: 'whatsapp', type: 'string', title: 'וואטסאפ' }),
    defineField({ name: 'viewWork', type: 'string', title: 'צפו בעבודות' }),
    defineField({ name: 'learnMore', type: 'string', title: 'למידע נוסף' }),
    defineField({ name: 'viewAll', type: 'string', title: 'הצג הכל' }),
    defineField({ name: 'viewProject', type: 'string', title: 'צפה בפרויקט' }),
    defineField({ name: 'readMore', type: 'string', title: 'קרא עוד' }),
    defineField({ name: 'backHome', type: 'string', title: 'חזרה לבית' }),
    defineField({ name: 'all', type: 'string', title: 'הכל' }),
    defineField({ name: 'footerCta', type: 'string', title: 'CTA פוטר' }),
    defineField({ name: 'footerTagline', type: 'text', title: 'תגית פוטר' }),
    defineField({ name: 'servicesTitle', type: 'string', title: 'כותרת שירותים בפוטר' }),
    defineField({ name: 'navTitle', type: 'string', title: 'כותרת ניווט בפוטר' }),
    defineField({ name: 'contactTitle', type: 'string', title: 'כותרת יצירת קשר בפוטר' }),
    defineField({ name: 'languagesTitle', type: 'string', title: 'כותרת שפות' }),
    defineField({ name: 'notFoundTitle', type: 'string', title: '404 כותרת' }),
    defineField({ name: 'notFoundBody', type: 'text', title: '404 תוכן' }),
    defineField({ name: 'relatedProjects', type: 'string', title: 'פרויקטים קשורים' }),
  ],
  preview: {
    select: { locale: 'locale' },
    prepare: ({ locale }) => ({ title: `תוויות — ${locale}` }),
  },
});
