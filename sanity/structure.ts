import type { StructureResolver } from 'sanity/structure';

/** Arabic desk for editors — singletons + content lists */
export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('محتوى الموقع')
    .items([
      S.listItem()
        .title('إعدادات الموقع')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('الصفحة الرئيسية')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('من نحن')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('طريقة عملنا')
        .id('howWeWorkPage')
        .child(S.document().schemaType('howWeWorkPage').documentId('howWeWorkPage')),
      S.listItem()
        .title('تواصل معنا (نصوص)')
        .id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.divider(),
      S.documentTypeListItem('service').title('الخدمات'),
      S.documentTypeListItem('project').title('المشاريع'),
      S.documentTypeListItem('material').title('المواد'),
      S.documentTypeListItem('testimonial').title('آراء العملاء'),
      S.documentTypeListItem('blogPost').title('المدونة'),
      S.documentTypeListItem('faqItem').title('الأسئلة الشائعة'),
      S.documentTypeListItem('uiLabels').title('تسميات الواجهة'),
    ]);
