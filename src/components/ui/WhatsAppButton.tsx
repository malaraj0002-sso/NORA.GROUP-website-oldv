import { useI18n } from '@/lib/i18n';
import { getWhatsAppLink } from '@/lib/config';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ message, className = '' }: { message?: string; className?: string }) {
  const { t } = useI18n();
  const link = getWhatsAppLink(message || t.whatsapp.defaultMessage);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
      aria-label={t.whatsapp.floatingLabel}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{t.common.contactWhatsapp}</span>
    </a>
  );
}
