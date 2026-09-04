import { defineField, defineType } from 'sanity';
import { ImagesIcon } from '@sanity/icons';

export const project = defineType({
  name: 'project',
  title: 'פרויקטים',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.he', maxLength: 80 },
      validation: (R) => R.required(),
      readOnly: ({ value }) => Boolean(value?.current),
    }),
    defineField({ name: 'title', title: 'כותרת', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'תיאור', type: 'localeText' }),
    defineField({
      name: 'category',
      title: 'קטגוריה',
      type: 'string',
      options: {
        list: [
          { title: 'מטבחים', value: 'kitchens' },
          { title: 'חדרי שינה', value: 'bedrooms' },
          { title: 'ארונות', value: 'wardrobes' },
          { title: 'ריהוט', value: 'furniture' },
          { title: 'מסחרי', value: 'commercial' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'גלריה',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'localeString', title: 'Alt' }],
        },
      ],
    }),
    defineField({
      name: 'materials',
      title: 'חומרים',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'סדר', type: 'number', initialValue: 0 }),
    defineField({ name: 'visible', title: 'מוצג באתר', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title.he', media: 'gallery.0', category: 'category' },
    prepare: ({ title, media, category }) => ({
      title: title || 'פרויקט',
      subtitle: category,
      media,
    }),
  },
});
