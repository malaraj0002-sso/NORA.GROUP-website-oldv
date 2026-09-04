import { defineField, defineType } from 'sanity';

export const faqItem = defineType({
  name: 'faqItem',
  title: 'שאלות נפוצות',
  type: 'document',
  fields: [
    defineField({ name: 'category', title: 'קטגוריה', type: 'string' }),
    defineField({ name: 'question', title: 'שאלה', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'answer', title: 'תשובה', type: 'localeText', validation: (R) => R.required() }),
    defineField({ name: 'order', title: 'סדר', type: 'number', initialValue: 0 }),
    defineField({ name: 'visible', title: 'מוצג באתר', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'question.he', subtitle: 'category' },
  },
});
