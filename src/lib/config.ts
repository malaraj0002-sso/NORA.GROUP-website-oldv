export const SITE_CONFIG = {
  whatsappNumber: '[WHATSAPP_NUMBER]',
  phone: '[PHONE]',
  email: '[EMAIL]',
  address: '[ADDRESS]',
  workingHours: '[WORKING_HOURS]',
  socialMedia: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
};

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || 'Hello Nora Group, I would like to inquire about a project.');
  const number = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${text}`;
}
