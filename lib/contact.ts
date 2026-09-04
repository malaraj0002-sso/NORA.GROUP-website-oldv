import { CONTACT_DEFAULTS } from '@/lib/constants';

/** Build a WhatsApp deep link. Number must be digits only (no +). */
export function getWhatsAppLink(
  e164Digits: string = CONTACT_DEFAULTS.whatsappE164,
  message?: string,
): string {
  const digits = e164Digits.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(
    message || 'שלום Nora Group, אשמח לשמוע פרטים על פרויקט.',
  );
  return `https://wa.me/${digits}?text=${text}`;
}

export function getTelLink(phoneTel: string = CONTACT_DEFAULTS.phoneTel): string {
  return `tel:${phoneTel}`;
}

export function getMailtoLink(email: string = CONTACT_DEFAULTS.email): string {
  return `mailto:${email}`;
}
