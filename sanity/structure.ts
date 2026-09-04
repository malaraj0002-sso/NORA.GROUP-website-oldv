import type { StructureResolver } from 'sanity/structure';

/** Hebrew-first desk — singletons + content lists for a non-technical editor */
export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('תוכן האתר')
    .items([
      S.listItem()
        .title('הגדרות אתר')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('דף הבית')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('אודות')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('איך אנחנו עובדים')
        .id('howWeWorkPage')
        .child(S.document().schemaType('howWeWorkPage').documentId('howWeWorkPage')),
      S.listItem()
        .title('יצירת קשר (טקסט)')
        .id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.divider(),
      S.documentTypeListItem('service').title('שירותים'),
      S.documentTypeListItem('project').title('פרויקטים'),
      S.documentTypeListItem('material').title('חומרים'),
      S.documentTypeListItem('testimonial').title('המלצות'),
      S.documentTypeListItem('blogPost').title('בלוג'),
      S.documentTypeListItem('faqItem').title('שאלות נפוצות'),
      S.documentTypeListItem('uiLabels').title('תוויות ממשק'),
    ]);
