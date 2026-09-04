import Image from 'next/image';
import { Link } from '@/i18n/navigation';

/**
 * Keep logo + English wordmark in LTR so RTL layouts never flip to "Group Nora".
 * The logo artwork already includes NORA GROUP; we still show a short text label for accessibility.
 */
export function BrandLockup({
  logoUrl,
  brandName,
  variant = 'light',
  compact = false,
  priority = false,
}: {
  logoUrl: string;
  brandName: string;
  variant?: 'light' | 'dark' | 'transparent';
  compact?: boolean;
  /** Keep false in chrome; hero/page banners own LCP */
  priority?: boolean;
}) {
  const textClass =
    variant === 'transparent'
      ? 'text-warm-50'
      : variant === 'dark'
        ? 'text-warm-50'
        : 'text-charcoal-900';

  return (
    <Link
      href="/"
      className="group flex items-center gap-2 sm:gap-3"
      dir="ltr"
      aria-label={brandName}
    >
      <Image
        src={logoUrl}
        alt={brandName}
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        className={`${compact ? 'h-9 w-9' : 'h-10 w-10 sm:h-11 sm:w-11'} object-contain`}
        priority={priority}
      />
      <span className={`text-lg font-bold tracking-tight sm:text-xl ${textClass}`}>
        {brandName}
      </span>
    </Link>
  );
}
