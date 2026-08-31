import type { Locale } from '@/types';

export const locale: Locale = 'ar';
export const direction = 'rtl' as const;
export const htmlLang = 'ar';

export const t = {
  // Brand
  brandName: 'Nora Group',
  brandTagline: 'تصميم وتصنيع خشبي مخصص',

  // Nav
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    projects: 'أعمالنا',
    materials: 'الخامات',
    howWeWork: 'طريقة العمل',
    testimonials: 'آراء العملاء',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    faq: 'الأسئلة الشائعة',
    quote: 'اطلب عرض سعر',
  },

  // Common
  common: {
    learnMore: 'اعرف المزيد',
    viewProject: 'عرض المشروع',
    viewAll: 'عرض الكل',
    viewAllProjects: 'شاهد جميع الأعمال',
    requestQuote: 'اطلب عرض سعر',
    contactWhatsapp: 'تواصل عبر واتساب',
    startProject: 'ابدأ مشروعك',
    startProjectWithUs: 'ابدأ مشروعك معنا',
    backToProjects: 'العودة للأعمال',
    backToServices: 'العودة للخدمات',
    backToBlog: 'العودة للمدونة',
    relatedProjects: 'مشاريع ذات صلة',
    relatedPosts: 'مقالات ذات صلة',
    allRightsReserved: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    cookiePolicy: 'سياسة ملفات الارتباط',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    demo: 'تجريبي',
    send: 'إرسال',
    next: 'التالي',
    previous: 'السابق',
    submit: 'إرسال الطلب',
    cancel: 'إلغاء',
    close: 'إغلاق',
    menu: 'القائمة',
    readMore: 'اقرأ المزيد',
    minRead: 'دقائق قراءة',
  },

  // Hero
  hero: {
    title: 'نصنع المساحات التي تشبهك',
    subtitle: 'تصميم وتصنيع أثاث وحلول خشبية مخصصة بجودة عالية، من الفكرة والتصميم حتى التصميم والتركيب.',
    ctaQuote: 'اطلب عرض سعر',
    ctaProjects: 'شاهد أعمالنا',
  },

  // Intro
  intro: {
    eyebrow: 'مرحباً بكم في Nora Group',
    title: 'حلول خشبية مخصصة بأعلى معايير الجودة',
    description: 'نقدم خدمات تصميم وتصنيع وتركيب الأثاث المخصص وحلول النجارة الداخلية. كل مشروع ننفذه هو انعكاس لشخصيتك واحتياجاتك، من الفكرة الأولى حتى التسليم النهائي.',
    features: [
      { title: 'تصميم حسب الطلب', desc: 'كل قطعة مصممة خصيصاً لتناسب مساحتك وذوقك' },
      { title: 'حرفية احترافية', desc: 'فريق متخصص بأعلى مستويات الدقة والإتقان' },
      { title: 'خامات ممتازة', desc: 'نختار أفضل الخامات لضمان الجودة والمتانة' },
      { title: 'تنفيذ كامل', desc: 'من التصميم إلى التركيب، نتولى كل التفاصيل' },
    ],
  },

  // Services
  services: {
    eyebrow: 'خدماتنا',
    title: 'حلول خشبية متكاملة',
    subtitle: 'نقدم مجموعة شاملة من خدمات التصميم والتصنيع لتلبية جميع احتياجاتك',
    items: [
      { title: 'المطابخ', desc: 'مطابخ مخصصة تجمع بين الجمال والوظيفة' },
      { title: 'غرف النوم', desc: 'تصاميم تمنحك الراحة والأناقة' },
      { title: 'الخزائن', desc: 'حلول تخزين ذكية وعملية' },
      { title: 'غرف الملابس', desc: 'غرف ملابس فاخرة منظمة' },
      { title: 'الأبواب', desc: 'أبواب بتصاميم مميزة وجودة عالية' },
      { title: 'الأثاث المخصص', desc: 'قطع فريدة مصممة خصيصاً لك' },
      { title: 'المكاتب', desc: 'مساحات عمل عملية وأنيقة' },
      { title: 'المشاريع التجارية', desc: 'حلول متكاملة للمشاريع التجارية' },
    ],
  },

  // Projects
  projects: {
    eyebrow: 'أعمالنا',
    title: 'مشاريع تنفّس الحياة في المساحات',
    subtitle: 'مجموعة مختارة من مشاريعنا التي تعكس التزامنا بالجودة والتفاصيل',
    categories: {
      all: 'الكل',
      kitchens: 'مطابخ',
      bedrooms: 'غرف نوم',
      wardrobes: 'خزائن',
      doors: 'أبواب',
      furniture: 'أثاث',
      commercial: 'تجاري',
    },
    viewProject: 'عرض المشروع',
    demoNotice: 'هذا مشروع تجريبي للأغراض التوضيحية',
  },

  // Why Nora
  whyNora: {
    eyebrow: 'لماذا Nora Group',
    title: 'نميز أنفسنا بالتفاصيل',
    subtitle: 'نحرص على كل تفصيلة لنقدم نتائج تتجاوز توقعاتك',
    items: [
      { title: 'تصميم حسب الطلب', desc: 'نصمم كل مشروع وفقاً لاحتياجاتك ورؤيتك الخاصة' },
      { title: 'خامات عالية الجودة', desc: 'نختار أجود الخامات لضمان المتانة والجمال' },
      { title: 'تصنيع دقيق', desc: 'نلتزم بأعلى معايير الدقة في كل مرحلة من التصنيع' },
      { title: 'اهتمام بالتفاصيل', desc: 'كل تفصيلة مهمة، من التصميم حتى التشطيب النهائي' },
      { title: 'تركيب احترافي', desc: 'فريق تركيب متخصص يضمن تنفيذاً مثالياً' },
      { title: 'متابعة كاملة', desc: 'نرافقك من البداية حتى التسليم النهائي' },
    ],
  },

  // Process
  process: {
    eyebrow: 'طريقة العمل',
    title: 'من الفكرة إلى الواقع',
    subtitle: 'نتبع منهجية واضحة لضمان تنفيذ سلس واحترافي',
    steps: [
      { title: 'الاستشارة', desc: 'نستمع لاحتياجاتك ونناقش رؤيتك للمشروع' },
      { title: 'أخذ المقاسات', desc: 'نزور الموقع ونأخذ المقاسات بدقة' },
      { title: 'التصميم', desc: 'نقدم تصاميم ثلاثية الأبعاد لرؤية مشروعك' },
      { title: 'اعتماد التصميم', desc: 'نراجع التصميم معك ونجري التعديلات اللازمة' },
      { title: 'التصنيع', desc: 'نبدأ التصنيع بأحدث المعدات والتقنيات' },
      { title: 'التركيب', desc: 'فريقنا يقوم بالتركيب في موقعك باحترافية' },
      { title: 'التسليم', desc: 'نسلمك المشروع جاهزاً بأعلى جودة' },
    ],
  },

  // Materials
  materials: {
    eyebrow: 'الخامات',
    title: 'خامات منتقاة بعناية',
    subtitle: 'نوفر تشكيلة واسعة من الخامات عالية الجودة',
    learnMore: 'تفاصيل أكثر',
    characteristics: 'الخصائص',
    applications: 'التطبيقات',
    finishes: 'التشطيبات',
    items: [
      { name: 'MDF', desc: 'لوح ألياف متوسط الكثافة، مثالي للأسطح المستوية' },
      { name: 'HPL', desc: 'رقائق ضغط عالي، مقاوم للخدش والحرارة' },
      { name: 'أكريليك', desc: 'سطح لامع عالي الجودة بلمسة فاخرة' },
      { name: 'قشرة خشبية', desc: 'قشرة خشب طبيعي تمنح مظهراً أصيلاً' },
      { name: 'ميلامين', desc: 'سطح متين وسهل الصيانة بأسعار منافسة' },
      { name: 'خشب طبيعي', desc: 'خشب صلب بألوان طبيعية دافئة' },
      { name: 'زجاج', desc: 'لمسة عصرية وإضاءة للمساحات' },
      { name: 'معدن', desc: 'تفاصيل معدنية تضيف المتانة والأناقة' },
    ],
  },

  // Testimonials
  testimonials: {
    eyebrow: 'آراء العملاء',
    title: 'ثقة عملائنا هي أغلى ما نملك',
    subtitle: 'نفخر بتجربة عملائنا مع Nora Group',
    demoNotice: 'هذا التقييم تجريبي للأغراض التوضيحية',
  },

  // Final CTA
  finalCta: {
    title: 'هل لديك مشروع في ذهنك؟',
    subtitle: 'دعنا نحوله إلى واقع.',
    ctaQuote: 'اطلب عرض سعر',
    ctaWhatsapp: 'تواصل عبر واتساب',
  },

  // About
  about: {
    hero: {
      eyebrow: 'من نحن',
      title: 'Nora Group — نصنع التميّز',
      subtitle: 'شركة متخصصة في تصميم وتصنيع الأثاث المخصص وحلول النجارة الداخلية',
    },
    intro: {
      title: 'من نحن',
      description: 'Nora Group هي شركة متخصصة في تصميم وتصنيع الأثاث المخصص وحلول النجارة الداخلية. نجمع بين الحرفية التقليدية والتقنيات الحديثة لنقدم مساحات تعكس شخصيتك وتلبي احتياجاتك.',
    },
    story: {
      title: 'قصتنا',
      description: '[قصة الشركة — أضف النص هنا]',
    },
    vision: {
      title: 'رؤيتنا',
      description: '[رؤية الشركة — أضف النص هنا]',
    },
    mission: {
      title: 'رسالتنا',
      description: '[رسالة الشركة — أضف النص هنا]',
    },
    values: {
      title: 'قيمنا',
      items: [
        { title: 'الجودة', desc: 'نلتزم بأعلى معايير الجودة في كل مشروع' },
        { title: 'الإبداع', desc: 'نبحث دائماً عن حلول مبتكرة وتصاميم مميزة' },
        { title: 'الاحترافية', desc: 'نتعامل مع كل عميل باحترام ومسؤولية' },
        { title: 'الدقة', desc: 'نهتم بأدق التفاصيل في كل مرحلة' },
      ],
    },
    whyNora: {
      title: 'لماذا Nora Group',
      description: 'نقدم تجربة متكاملة من الاستشارة الأولى حتى التسليم، مع التزام كامل بالجودة والمواعيد.',
    },
    craftsmanship: {
      title: 'الحرفية',
      description: 'نفخر بفريق من الحرفيين المهرة الذين يجمعون بين الخبرة والشغف لإنتاج قطع استثنائية.',
    },
    quality: {
      title: 'الجودة',
      description: 'نختار خاماتنا بعناية ونتبع معايير صارمة في التصنيع لضمان منتجات تدوم طويلاً.',
    },
  },

  // Contact
  contact: {
    eyebrow: 'تواصل معنا',
    title: 'نحن هنا لمساعدتك',
    subtitle: 'تواصل معنا عبر القنوات التالية أو أرسل لنا رسالة',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    workingHours: 'ساعات العمل',
    socialMedia: 'وسائل التواصل',
    form: {
      title: 'أرسل لنا رسالة',
      name: 'الاسم',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال الرسالة',
      success: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
      error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
    },
    placeholders: {
      phone: '[رقم الهاتف]',
      whatsapp: '[رقم واتساب]',
      email: '[البريد الإلكتروني]',
      address: '[العنوان]',
      workingHours: '[ساعات العمل]',
    },
  },

  // Quote form
  quote: {
    eyebrow: 'طلب عرض سعر',
    title: 'احصل على عرض سعر مخصص',
    subtitle: 'املأ النموذج وسيتواصل معك فريقنا قريباً',
    steps: {
      step1: 'معلوماتك',
      step2: 'نوع المشروع',
      step3: 'تفاصيل المشروع',
      step4: 'الملفات',
      step5: 'المراجعة',
    },
    form: {
      fullName: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      whatsapp: 'رقم واتساب',
      email: 'البريد الإلكتروني',
      projectType: 'نوع المشروع',
      projectTypes: {
        kitchen: 'مطبخ',
        bedroom: 'غرفة نوم',
        wardrobe: 'خزانة',
        doors: 'أبواب',
        furniture: 'أثاث',
        office: 'مكتب',
        commercial: 'تجاري',
        other: 'أخرى',
      },
      location: 'الموقع',
      dimensions: 'الأبعاد التقريبية',
      budget: 'الميزانية التقريبية',
      completionDate: 'تاريخ التسليم المطلوب',
      notes: 'ملاحظات إضافية',
      files: 'رفع ملفات',
      filesHint: 'JPG, PNG, WEBP, PDF — بحد أقصى 10 ميجابايت لكل ملف',
      selectFiles: 'اختر الملفات',
      removeFile: 'إزالة',
      review: 'مراجعة المعلومات',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      success: 'تم استلام طلبك بنجاح.',
      successDesc: 'سيتواصل معك فريق Nora Group قريباً.',
      error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
      validation: {
        required: 'هذا الحقل مطلوب',
        email: 'البريد الإلكتروني غير صحيح',
        phone: 'رقم الهاتف غير صحيح',
        fileSize: 'حجم الملف يتجاوز 10 ميجابايت',
        fileType: 'نوع الملف غير مدعوم',
        fileCount: 'لا يمكن رفع أكثر من 10 ملفات',
      },
    },
  },

  // Blog
  blog: {
    eyebrow: 'المدونة',
    title: 'أفكار وإلهام',
    subtitle: 'مقالات ونصائح حول التصميم والخامات والأثاث',
    categories: {
      all: 'الكل',
      kitchens: 'مطابخ',
      design: 'تصميم',
      materials: 'خامات',
      furniture: 'أثاث',
      tips: 'نصائح',
      trends: 'اتجاهات',
      maintenance: 'صيانة',
    },
    demoNotice: 'هذا المقال تجريبي للأغراض التوضيحية',
  },

  // FAQ
  faq: {
    eyebrow: 'الأسئلة الشائعة',
    title: 'إجابات لأكثر أسئلتكم شيوعاً',
    subtitle: 'كل ما تحتاج معرفته عن خدماتنا وطريقة عملنا',
    categories: {
      general: 'عام',
      services: 'الخدمات',
      materials: 'الخامات',
      pricing: 'الأسعار',
      manufacturing: 'التصنيع',
      installation: 'التركيب',
    },
  },

  // Footer
  footer: {
    tagline: 'تصميم وتصنيع أثاث وحلول خشبية مخصصة بجودة عالية',
    servicesTitle: 'خدماتنا',
    navTitle: 'روابط سريعة',
    contactTitle: 'تواصل معنا',
    languagesTitle: 'اللغات',
    cta: 'ابدأ مشروعك معنا',
  },

  // WhatsApp
  whatsapp: {
    defaultMessage: 'مرحباً Nora Group، أود الاستفسار عن مشروع.',
    floatingLabel: 'تواصل عبر واتساب',
  },

  // 404
  notFound: {
    title: 'الصفحة غير موجودة',
    subtitle: 'عذراً، الصفحة التي تبحث عنها غير متوفرة',
    backHome: 'العودة للرئيسية',
  },

  // Service detail
  serviceDetail: {
    benefits: 'المميزات',
    options: 'الخيارات المتاحة',
    gallery: 'معرض الأعمال',
    materials: 'الخامات المستخدمة',
    process: 'طريقة العمل',
    faq: 'الأسئلة الشائعة',
    similarProject: 'أريد مشروعاً مشابهاً',
  },

  // Project detail
  projectDetail: {
    category: 'التصنيف',
    materials: 'الخامات',
    description: 'الوصف',
    gallery: 'معرض الصور',
    relatedProjects: 'مشاريع ذات صلة',
    similarProject: 'أريد مشروعاً مشابهاً',
  },

  // How we work
  howWeWork: {
    eyebrow: 'طريقة العمل',
    title: 'رحلة مشروعك معنا',
    subtitle: 'نتبع منهجية واضحة ومنظمة لضمان تنفيذ سلس واحترافي',
  },
};
