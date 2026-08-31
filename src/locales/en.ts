import type { Locale } from '@/types';

export const locale: Locale = 'en';
export const direction = 'ltr' as const;
export const htmlLang = 'en';

export const t = {
  brandName: 'Nora Group',
  brandTagline: 'Custom Woodworking & Interior Design',

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    materials: 'Materials',
    howWeWork: 'How We Work',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
    faq: 'FAQ',
    quote: 'Request a Quote',
  },

  common: {
    learnMore: 'Learn More',
    viewProject: 'View Project',
    viewAll: 'View All',
    viewAllProjects: 'View All Projects',
    requestQuote: 'Request a Quote',
    contactWhatsapp: 'Contact via WhatsApp',
    startProject: 'Start Your Project',
    startProjectWithUs: 'Start Your Project With Us',
    backToProjects: 'Back to Projects',
    backToServices: 'Back to Services',
    backToBlog: 'Back to Blog',
    relatedProjects: 'Related Projects',
    relatedPosts: 'Related Posts',
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookiePolicy: 'Cookie Policy',
    loading: 'Loading...',
    error: 'An error occurred',
    demo: 'DEMO',
    send: 'Send',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit Request',
    cancel: 'Cancel',
    close: 'Close',
    menu: 'Menu',
    readMore: 'Read More',
    minRead: 'min read',
  },

  hero: {
    title: 'We create spaces that feel uniquely yours',
    subtitle: 'Custom design and manufacturing of furniture and wood solutions with uncompromising quality, from concept and design through manufacturing and installation.',
    ctaQuote: 'Request a Quote',
    ctaProjects: 'View Our Work',
  },

  intro: {
    eyebrow: 'Welcome to Nora Group',
    title: 'Custom Wood Solutions at the Highest Standards',
    description: 'We offer design, manufacturing, and installation services for custom furniture and interior woodworking solutions. Every project we deliver is a reflection of your personality and needs, from the first concept to final delivery.',
    features: [
      { title: 'Custom Design', desc: 'Every piece designed to fit your space and taste' },
      { title: 'Professional Craftsmanship', desc: 'Expert team at the highest levels of precision' },
      { title: 'Premium Materials', desc: 'We select the finest materials for quality and durability' },
      { title: 'Complete Execution', desc: 'From design to installation, we handle every detail' },
    ],
  },

  services: {
    eyebrow: 'Our Services',
    title: 'Comprehensive Wood Solutions',
    subtitle: 'We offer a wide range of design and manufacturing services to meet all your needs',
    items: [
      { title: 'Custom Kitchens', desc: 'Custom kitchens combining beauty and function' },
      { title: 'Bedrooms', desc: 'Designs that bring comfort and elegance' },
      { title: 'Wardrobes', desc: 'Smart and practical storage solutions' },
      { title: 'Walk-in Closets', desc: 'Luxurious and organized walk-in closets' },
      { title: 'Doors', desc: 'Doors with distinctive designs and high quality' },
      { title: 'Custom Furniture', desc: 'Unique pieces designed just for you' },
      { title: 'Offices', desc: 'Practical and elegant workspaces' },
      { title: 'Commercial Projects', desc: 'Comprehensive solutions for commercial projects' },
    ],
  },

  projects: {
    eyebrow: 'Our Work',
    title: 'Projects That Breathe Life Into Spaces',
    subtitle: 'A selection of our projects reflecting our commitment to quality and detail',
    categories: {
      all: 'All',
      kitchens: 'Kitchens',
      bedrooms: 'Bedrooms',
      wardrobes: 'Wardrobes',
      doors: 'Doors',
      furniture: 'Furniture',
      commercial: 'Commercial',
    },
    viewProject: 'View Project',
    demoNotice: 'This is a demo project for illustration purposes',
  },

  whyNora: {
    eyebrow: 'Why Nora Group',
    title: 'We Distinguish Ourselves in the Details',
    subtitle: 'We attend to every detail to deliver results that exceed your expectations',
    items: [
      { title: 'Custom Design', desc: 'We design every project according to your needs and vision' },
      { title: 'High-Quality Materials', desc: 'We select the finest materials for durability and beauty' },
      { title: 'Precise Manufacturing', desc: 'We maintain the highest standards of precision at every stage' },
      { title: 'Attention to Detail', desc: 'Every detail matters, from design to final finishing' },
      { title: 'Professional Installation', desc: 'Expert installation team ensures flawless execution' },
      { title: 'Full Support', desc: 'We accompany you from start to final delivery' },
    ],
  },

  process: {
    eyebrow: 'How We Work',
    title: 'From Concept to Reality',
    subtitle: 'We follow a clear methodology to ensure smooth and professional execution',
    steps: [
      { title: 'Consultation', desc: 'We listen to your needs and discuss your vision' },
      { title: 'Measurement', desc: 'We visit the site and take precise measurements' },
      { title: 'Design', desc: 'We present 3D designs to visualize your project' },
      { title: 'Design Approval', desc: 'We review the design with you and make adjustments' },
      { title: 'Manufacturing', desc: 'We begin manufacturing with the latest equipment' },
      { title: 'Installation', desc: 'Our team performs professional on-site installation' },
      { title: 'Delivery', desc: 'We deliver your project ready at the highest quality' },
    ],
  },

  materials: {
    eyebrow: 'Materials',
    title: 'Carefully Selected Materials',
    subtitle: 'We provide a wide range of high-quality materials',
    learnMore: 'Learn More',
    characteristics: 'Characteristics',
    applications: 'Applications',
    finishes: 'Finishes',
    items: [
      { name: 'MDF', desc: 'Medium-density fiberboard, ideal for smooth surfaces' },
      { name: 'HPL', desc: 'High-pressure laminate, scratch and heat resistant' },
      { name: 'Acrylic', desc: 'High-gloss surface with a luxurious touch' },
      { name: 'Veneer', desc: 'Natural wood veneer for an authentic look' },
      { name: 'Melamine', desc: 'Durable and easy-to-maintain surface at competitive prices' },
      { name: 'Natural Wood', desc: 'Solid wood with warm natural tones' },
      { name: 'Glass', desc: 'A modern touch and illumination for spaces' },
      { name: 'Metal', desc: 'Metal details adding durability and elegance' },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Our Clients\' Trust Is Our Most Valuable Asset',
    subtitle: 'We are proud of our clients\' experience with Nora Group',
    demoNotice: 'This is a demo testimonial for illustration purposes',
  },

  finalCta: {
    title: 'Have a project in mind?',
    subtitle: 'Let us turn it into reality.',
    ctaQuote: 'Request a Quote',
    ctaWhatsapp: 'Contact via WhatsApp',
  },

  about: {
    hero: {
      eyebrow: 'About Us',
      title: 'Nora Group — We Craft Excellence',
      subtitle: 'A company specializing in custom furniture design and interior woodworking solutions',
    },
    intro: {
      title: 'About Us',
      description: 'Nora Group is a company specializing in the design and manufacturing of custom furniture and interior woodworking solutions. We combine traditional craftsmanship with modern technology to deliver spaces that reflect your personality and meet your needs.',
    },
    story: {
      title: 'Our Story',
      description: '[Company story — add text here]',
    },
    vision: {
      title: 'Our Vision',
      description: '[Company vision — add text here]',
    },
    mission: {
      title: 'Our Mission',
      description: '[Company mission — add text here]',
    },
    values: {
      title: 'Our Values',
      items: [
        { title: 'Quality', desc: 'We commit to the highest standards in every project' },
        { title: 'Creativity', desc: 'We always seek innovative solutions and distinctive designs' },
        { title: 'Professionalism', desc: 'We treat every client with respect and responsibility' },
        { title: 'Precision', desc: 'We pay attention to the finest details at every stage' },
      ],
    },
    whyNora: {
      title: 'Why Nora Group',
      description: 'We offer a complete experience from first consultation to delivery, with full commitment to quality and timelines.',
    },
    craftsmanship: {
      title: 'Craftsmanship',
      description: 'We are proud of our team of skilled artisans who combine experience and passion to produce exceptional pieces.',
    },
    quality: {
      title: 'Quality',
      description: 'We carefully select our materials and follow strict manufacturing standards to ensure long-lasting products.',
    },
  },

  contact: {
    eyebrow: 'Contact Us',
    title: 'We Are Here to Help',
    subtitle: 'Reach us through the following channels or send us a message',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    workingHours: 'Working Hours',
    socialMedia: 'Social Media',
    form: {
      title: 'Send Us a Message',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      success: 'Your message has been sent successfully. We will contact you soon.',
      error: 'An error occurred while sending. Please try again.',
    },
    placeholders: {
      phone: '[Phone Number]',
      whatsapp: '[WhatsApp Number]',
      email: '[Email Address]',
      address: '[Address]',
      workingHours: '[Working Hours]',
    },
  },

  quote: {
    eyebrow: 'Request a Quote',
    title: 'Get a Custom Quote',
    subtitle: 'Fill out the form and our team will contact you soon',
    steps: {
      step1: 'Your Information',
      step2: 'Project Type',
      step3: 'Project Details',
      step4: 'Files',
      step5: 'Review',
    },
    form: {
      fullName: 'Full Name',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp Number',
      email: 'Email',
      projectType: 'Project Type',
      projectTypes: {
        kitchen: 'Kitchen',
        bedroom: 'Bedroom',
        wardrobe: 'Wardrobe',
        doors: 'Doors',
        furniture: 'Furniture',
        office: 'Office',
        commercial: 'Commercial',
        other: 'Other',
      },
      location: 'Location',
      dimensions: 'Approximate Dimensions',
      budget: 'Estimated Budget',
      completionDate: 'Desired Completion Date',
      notes: 'Additional Notes',
      files: 'File Upload',
      filesHint: 'JPG, PNG, WEBP, PDF — max 10MB per file',
      selectFiles: 'Select Files',
      removeFile: 'Remove',
      review: 'Review Information',
      submit: 'Submit Request',
      submitting: 'Sending...',
      success: 'Your request has been received successfully.',
      successDesc: 'The Nora Group team will contact you soon.',
      error: 'An error occurred while sending. Please try again.',
      validation: {
        required: 'This field is required',
        email: 'Invalid email address',
        phone: 'Invalid phone number',
        fileSize: 'File size exceeds 10MB',
        fileType: 'Unsupported file type',
        fileCount: 'Cannot upload more than 10 files',
      },
    },
  },

  blog: {
    eyebrow: 'Blog',
    title: 'Ideas & Inspiration',
    subtitle: 'Articles and tips on design, materials, and furniture',
    categories: {
      all: 'All',
      kitchens: 'Kitchens',
      design: 'Design',
      materials: 'Materials',
      furniture: 'Furniture',
      tips: 'Tips',
      trends: 'Trends',
      maintenance: 'Maintenance',
    },
    demoNotice: 'This is a demo article for illustration purposes',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Answers to Your Most Common Questions',
    subtitle: 'Everything you need to know about our services and workflow',
    categories: {
      general: 'General',
      services: 'Services',
      materials: 'Materials',
      pricing: 'Pricing',
      manufacturing: 'Manufacturing',
      installation: 'Installation',
    },
  },

  footer: {
    tagline: 'Custom design and manufacturing of furniture and wood solutions with uncompromising quality',
    servicesTitle: 'Our Services',
    navTitle: 'Quick Links',
    contactTitle: 'Contact',
    languagesTitle: 'Languages',
    cta: 'Start Your Project With Us',
  },

  whatsapp: {
    defaultMessage: 'Hello Nora Group, I would like to inquire about a project.',
    floatingLabel: 'Contact via WhatsApp',
  },

  notFound: {
    title: 'Page Not Found',
    subtitle: 'Sorry, the page you are looking for is not available',
    backHome: 'Back to Home',
  },

  serviceDetail: {
    benefits: 'Benefits',
    options: 'Available Options',
    gallery: 'Work Gallery',
    materials: 'Materials Used',
    process: 'Our Process',
    faq: 'FAQ',
    similarProject: 'I want a similar project',
  },

  projectDetail: {
    category: 'Category',
    materials: 'Materials',
    description: 'Description',
    gallery: 'Image Gallery',
    relatedProjects: 'Related Projects',
    similarProject: 'I want a similar project',
  },

  howWeWork: {
    eyebrow: 'How We Work',
    title: 'Your Project Journey With Us',
    subtitle: 'We follow a clear and organized methodology to ensure smooth and professional execution',
  },
};
