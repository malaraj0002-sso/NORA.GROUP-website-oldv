import { defineField, defineType } from 'sanity';

/**
 * Field-level i18n object: HE required (main market), AR/EN/RU optional with site-side fallbacks.
 */
export const localeString = defineType({
  name: 'localeString',
  title: 'טקסט רב־לשוני',
  type: 'object',
  fields: [
    defineField({
      name: 'he',
      title: 'עברית *',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({ name: 'ar', title: 'العربية', type: 'string', validation: (R) => R.max(200) }),
    defineField({ name: 'en', title: 'English', type: 'string', validation: (R) => R.max(200) }),
    defineField({ name: 'ru', title: 'Русский', type: 'string', validation: (R) => R.max(200) }),
  ],
});

export const localeText = defineType({
  name: 'localeText',
  title: 'פסקה רב־לשונית',
  type: 'object',
  fields: [
    defineField({
      name: 'he',
      title: 'עברית *',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(2000),
    }),
    defineField({ name: 'ar', title: 'العربية', type: 'text', rows: 4 }),
    defineField({ name: 'en', title: 'English', type: 'text', rows: 4 }),
    defineField({ name: 'ru', title: 'Русский', type: 'text', rows: 4 }),
  ],
});
