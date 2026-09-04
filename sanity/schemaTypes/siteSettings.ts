import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'הגדרות אתר',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'brandName',
      title: 'שם המותג',
      type: 'string',
      initialValue: 'Nora Group',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'tagline', title: 'סלוגן', type: 'localeString' }),
    defineField({ name: 'pillars', title: 'עמודי תווך', type: 'localeString' }),
    defineField({
      name: 'phoneDisplay',
      title: 'טלפון (תצוגה)',
      type: 'string',
      description: 'למשל 052-465-9510',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'phoneTel',
      title: 'טלפון ללחיצה (E.164)',
      type: 'string',
      description: 'למשל +972524659510',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'whatsappE164',
      title: 'וואטסאפ (ספרות בלבד)',
      type: 'string',
      description: 'למשל 972524659510',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'email', title: 'אימייל', type: 'string', validation: (R) => R.required().email() }),
    defineField({ name: 'address', title: 'כתובת', type: 'localeString' }),
    defineField({ name: 'workingHours', title: 'שעות פעילות', type: 'localeString' }),
    defineField({ name: 'whatsappMessage', title: 'הודעת וואטסאפ ברירת מחדל', type: 'localeText' }),
    defineField({ name: 'logo', title: 'לוגו (רקע בהיר)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logoDark', title: 'לוגו (רקע כהה)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'contactQr', title: 'QR בדף יצירת קשר', type: 'image' }),
    defineField({ name: 'seoTitle', title: 'כותרת SEO', type: 'localeString' }),
    defineField({
      name: 'seoDescription',
      title: 'תיאור SEO',
      type: 'localeText',
      validation: (R) => R.max(320),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'הגדרות אתר' }),
  },
});
