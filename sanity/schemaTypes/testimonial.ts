import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'המלצות',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'שם הלקוח', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'rating',
      title: 'דירוג',
      type: 'number',
      validation: (R) => R.min(1).max(5).required(),
      initialValue: 5,
    }),
    defineField({ name: 'review', title: 'ביקורת', type: 'localeText', validation: (R) => R.required() }),
    defineField({ name: 'project', title: 'סוג פרויקט', type: 'localeString' }),
    defineField({ name: 'order', title: 'סדר', type: 'number', initialValue: 0 }),
    defineField({ name: 'visible', title: 'מוצג באתר', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'project.he' },
  },
});
