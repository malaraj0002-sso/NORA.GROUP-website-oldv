import { defineField, defineType } from 'sanity';
import { CaseIcon } from '@sanity/icons';

export const service = defineType({
  name: 'service',
  title: 'שירותים',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.he', maxLength: 64 },
      validation: (R) => R.required(),
      readOnly: ({ value }) => Boolean(value?.current),
    }),
    defineField({ name: 'title', title: 'כותרת', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'תיאור', type: 'localeText' }),
    defineField({ name: 'image', title: 'תמונה', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'imageAlt',
      title: 'טקסט חלופי לתמונה',
      type: 'localeString',
    }),
    defineField({
      name: 'features',
      title: 'יתרונות',
      type: 'array',
      of: [{ type: 'localeString' }],
    }),
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'visible',
      title: 'מוצג באתר',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [{ title: 'סדר', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title.he', media: 'image', visible: 'visible' },
    prepare: ({ title, media, visible }) => ({
      title: title || 'שירות',
      subtitle: visible === false ? 'מוסתר' : 'פעיל',
      media,
    }),
  },
});
