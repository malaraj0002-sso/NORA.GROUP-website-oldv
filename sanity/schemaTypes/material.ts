import { defineField, defineType } from 'sanity';

export const material = defineType({
  name: 'material',
  title: 'חומרים',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.he' },
      validation: (R) => R.required(),
      readOnly: ({ value }) => Boolean(value?.current),
    }),
    defineField({ name: 'name', title: 'שם', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'תיאור', type: 'localeText' }),
    defineField({ name: 'characteristics', title: 'מאפיינים', type: 'localeText' }),
    defineField({ name: 'applications', title: 'שימושים', type: 'localeText' }),
    defineField({ name: 'finishes', title: 'גימורים', type: 'localeText' }),
    defineField({ name: 'image', title: 'תמונה', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'סדר', type: 'number', initialValue: 0 }),
    defineField({ name: 'visible', title: 'מוצג באתר', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name.he', media: 'image' },
  },
});
