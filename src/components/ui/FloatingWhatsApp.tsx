import { useI18n } from '@/lib/i18n';
import { getWhatsAppLink } from '@/lib/config';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = getWhatsAppLink(t.whatsapp.defaultMessage);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatingLabel}
      className={`fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#1da851] hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute flex h-3 w-3 top-1 end-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </a>
  );
}
