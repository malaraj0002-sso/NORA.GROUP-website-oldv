import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export const homePage = defineType({
  name: 'homePage',
  title: 'דף הבית',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({ name: 'heroTitle', title: 'כותרת הירו', type: 'localeString' }),
    defineField({ name: 'heroSubtitle', title: 'תת־כותרת הירו', type: 'localeText' }),
    defineField({
      name: 'heroImages',
      title: 'תמונות הירו',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'introEyebrow', title: 'Intro — עיניים', type: 'localeString' }),
    defineField({ name: 'introTitle', title: 'Intro — כותרת', type: 'localeString' }),
    defineField({ name: 'introDescription', title: 'Intro — תיאור', type: 'localeText' }),
    defineField({
      name: 'introFeatures',
      title: 'Intro — יתרונות',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'localeString', title: 'כותרת' },
            { name: 'desc', type: 'localeText', title: 'תיאור' },
          ],
          preview: { select: { title: 'title.he' } },
        },
      ],
    }),
    defineField({ name: 'whyEyebrow', title: 'למה אנחנו — עיניים', type: 'localeString' }),
    defineField({ name: 'whyTitle', title: 'למה אנחנו — כותרת', type: 'localeString' }),
    defineField({ name: 'whySubtitle', title: 'למה אנחנו — תת־כותרת', type: 'localeText' }),
    defineField({
      name: 'whyItems',
      title: 'למה אנחנו — פריטים',
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
    defineField({ name: 'processEyebrow', type: 'localeString', title: 'תהליך — עיניים' }),
    defineField({ name: 'processTitle', type: 'localeString', title: 'תהליך — כותרת' }),
    defineField({ name: 'processSubtitle', type: 'localeText', title: 'תהליך — תת־כותרת' }),
    defineField({ name: 'servicesEyebrow', type: 'localeString', title: 'שירותים — עיניים' }),
    defineField({ name: 'servicesTitle', type: 'localeString', title: 'שירותים — כותרת' }),
    defineField({ name: 'servicesSubtitle', type: 'localeText', title: 'שירותים — תת־כותרת' }),
    defineField({ name: 'projectsEyebrow', type: 'localeString', title: 'פרויקטים — עיניים' }),
    defineField({ name: 'projectsTitle', type: 'localeString', title: 'פרויקטים — כותרת' }),
    defineField({ name: 'projectsSubtitle', type: 'localeText', title: 'פרויקטים — תת־כותרת' }),
    defineField({ name: 'materialsEyebrow', type: 'localeString', title: 'חומרים — עיניים' }),
    defineField({ name: 'materialsTitle', type: 'localeString', title: 'חומרים — כותרת' }),
    defineField({ name: 'materialsSubtitle', type: 'localeText', title: 'חומרים — תת־כותרת' }),
    defineField({ name: 'testimonialsEyebrow', type: 'localeString', title: 'המלצות — עיניים' }),
    defineField({ name: 'testimonialsTitle', type: 'localeString', title: 'המלצות — כותרת' }),
    defineField({ name: 'testimonialsSubtitle', type: 'localeText', title: 'המלצות — תת־כותרת' }),
    defineField({ name: 'ctaTitle', type: 'localeString', title: 'CTA — כותרת' }),
    defineField({ name: 'ctaSubtitle', type: 'localeText', title: 'CTA — תת־כותרת' }),
  ],
  preview: {
    prepare: () => ({ title: 'דף הבית' }),
  },
});
