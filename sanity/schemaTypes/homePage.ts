import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export const homePage = defineType({
  name: 'homePage',
  title: 'الصفحة الرئيسية',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({ name: 'heroTitle', title: 'عنوان القسم الرئيسي', type: 'localeString' }),
    defineField({ name: 'heroSubtitle', title: 'العنوان الفرعي للقسم الرئيسي', type: 'localeText' }),
    defineField({
      name: 'heroImages',
      title: 'صور القسم الرئيسي',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'introEyebrow', title: 'المقدمة — سطر علوي', type: 'localeString' }),
    defineField({ name: 'introTitle', title: 'المقدمة — العنوان', type: 'localeString' }),
    defineField({ name: 'introDescription', title: 'المقدمة — الوصف', type: 'localeText' }),
    defineField({
      name: 'introFeatures',
      title: 'المقدمة — المميزات',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'localeString', title: 'العنوان' },
            { name: 'desc', type: 'localeText', title: 'الوصف' },
          ],
          preview: { select: { title: 'title.ar' } },
        },
      ],
    }),
    defineField({ name: 'whyEyebrow', title: 'لماذا نحن — سطر علوي', type: 'localeString' }),
    defineField({ name: 'whyTitle', title: 'لماذا نحن — العنوان', type: 'localeString' }),
    defineField({ name: 'whySubtitle', title: 'لماذا نحن — العنوان الفرعي', type: 'localeText' }),
    defineField({
      name: 'whyItems',
      title: 'لماذا نحن — البنود',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'localeString', title: 'العنوان' },
            { name: 'desc', type: 'localeText', title: 'الوصف' },
          ],
        },
      ],
    }),
    defineField({ name: 'processEyebrow', type: 'localeString', title: 'طريقة العمل — سطر علوي' }),
    defineField({ name: 'processTitle', type: 'localeString', title: 'طريقة العمل — العنوان' }),
    defineField({ name: 'processSubtitle', type: 'localeText', title: 'طريقة العمل — العنوان الفرعي' }),
    defineField({ name: 'servicesEyebrow', type: 'localeString', title: 'الخدمات — سطر علوي' }),
    defineField({ name: 'servicesTitle', type: 'localeString', title: 'الخدمات — العنوان' }),
    defineField({ name: 'servicesSubtitle', type: 'localeText', title: 'الخدمات — العنوان الفرعي' }),
    defineField({ name: 'projectsEyebrow', type: 'localeString', title: 'المشاريع — سطر علوي' }),
    defineField({ name: 'projectsTitle', type: 'localeString', title: 'المشاريع — العنوان' }),
    defineField({ name: 'projectsSubtitle', type: 'localeText', title: 'المشاريع — العنوان الفرعي' }),
    defineField({ name: 'materialsEyebrow', type: 'localeString', title: 'المواد — سطر علوي' }),
    defineField({ name: 'materialsTitle', type: 'localeString', title: 'المواد — العنوان' }),
    defineField({ name: 'materialsSubtitle', type: 'localeText', title: 'المواد — العنوان الفرعي' }),
    defineField({ name: 'testimonialsEyebrow', type: 'localeString', title: 'الآراء — سطر علوي' }),
    defineField({ name: 'testimonialsTitle', type: 'localeString', title: 'الآراء — العنوان' }),
    defineField({ name: 'testimonialsSubtitle', type: 'localeText', title: 'الآراء — العنوان الفرعي' }),
    defineField({ name: 'ctaTitle', type: 'localeString', title: 'دعوة للتواصل — العنوان' }),
    defineField({ name: 'ctaSubtitle', type: 'localeText', title: 'دعوة للتواصل — العنوان الفرعي' }),
  ],
  preview: {
    prepare: () => ({ title: 'الصفحة الرئيسية' }),
  },
});
