import { defineField, defineType } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'בלוג',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.he' },
      validation: (R) => R.required(),
      readOnly: ({ value }) => Boolean(value?.current),
    }),
    defineField({ name: 'title', title: 'כותרת', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'excerpt', title: 'תקציר', type: 'localeText' }),
    defineField({ name: 'content', title: 'תוכן', type: 'localeText' }),
    defineField({ name: 'category', title: 'קטגוריה', type: 'string' }),
    defineField({ name: 'author', title: 'מחבר', type: 'string', initialValue: 'Nora Group' }),
    defineField({ name: 'date', title: 'תאריך', type: 'date' }),
    defineField({ name: 'image', title: 'תמונה', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'visible', title: 'מוצג באתר', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title.he', media: 'image', date: 'date' },
    prepare: ({ title, media, date }) => ({ title: title || 'פוסט', subtitle: date, media }),
  },
});
