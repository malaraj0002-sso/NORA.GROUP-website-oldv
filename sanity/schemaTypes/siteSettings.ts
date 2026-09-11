import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'إعدادات الموقع',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'brandName',
      title: 'اسم العلامة',
      type: 'string',
      initialValue: 'Nora Group',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'tagline', title: 'الشعار النصي', type: 'localeString' }),
    defineField({ name: 'pillars', title: 'الركائز', type: 'localeString' }),
    defineField({
      name: 'phoneDisplay',
      title: 'الهاتف (للعرض)',
      type: 'string',
      description: 'مثال: 052-465-9510',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'phoneTel',
      title: 'الهاتف للنقر (E.164)',
      type: 'string',
      description: 'مثال: +972524659510',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'whatsappE164',
      title: 'واتساب (أرقام فقط)',
      type: 'string',
      description: 'مثال: 972524659510',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'email', title: 'البريد الإلكتروني', type: 'string', validation: (R) => R.required().email() }),
    defineField({ name: 'address', title: 'العنوان', type: 'localeString' }),
    defineField({ name: 'workingHours', title: 'ساعات العمل', type: 'localeString' }),
    defineField({ name: 'whatsappMessage', title: 'رسالة واتساب الافتراضية', type: 'localeText' }),
    defineField({ name: 'logo', title: 'الشعار (خلفية فاتحة)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logoDark', title: 'الشعار (خلفية داكنة)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'contactQr', title: 'رمز QR في صفحة التواصل', type: 'image' }),
    defineField({ name: 'seoTitle', title: 'عنوان SEO', type: 'localeString' }),
    defineField({
      name: 'seoDescription',
      title: 'وصف SEO',
      type: 'localeText',
      validation: (R) => R.max(320),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'إعدادات الموقع' }),
  },
});
