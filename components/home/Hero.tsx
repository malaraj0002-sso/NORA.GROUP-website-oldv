'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from '@/lib/content/images';
import { mediaSrc } from '@/lib/content/media';

export function Hero({
  title,
  subtitle,
  pillars,
  slides,
  whatsapp,
  tel,
  whatsappLabel,
  callLabel,
  viewWorkLabel,
}: {
  title: string;
  subtitle: string;
  pillars: string;
  slides: string[];
  whatsapp: string;
  tel: string;
  whatsappLabel: string;
  callLabel: string;
  viewWorkLabel: string;
}) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const safeSlides = slides.length > 0 ? slides : [HERO_VIDEO_POSTER];

  const [slide, setSlide] = useState(0);
  const [videoOk, setVideoOk] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (reduceMotion || videoOk || safeSlides.length < 2) return;
    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % safeSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduceMotion, videoOk, safeSlides.length]);

  useEffect(() => {
    if (reduceMotion) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled) setLoadVideo(true);
    }, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !loadVideo) return;
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = async () => {
      try {
        await el.play();
        setVideoOk(true);
      } catch {
        // Autoplay blocked or missing file — Ken Burns stills stay visible
      }
    };
    void tryPlay();
  }, [reduceMotion, loadVideo]);

  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const poster = mediaSrc(videoOk ? safeSlides[0] : safeSlides[slide]);

  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden pb-16 pt-28 sm:min-h-screen sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={videoOk ? 'poster-static' : poster}
            className="absolute inset-0"
            initial={reduceMotion || videoOk ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: videoOk || reduceMotion ? 1 : 1.12 }}
            exit={reduceMotion || videoOk ? undefined : { opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: videoOk ? 0.01 : 7, ease: 'linear' },
            }}
          >
            <Image
              src={poster}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {!reduceMotion && loadVideo && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={
              videoOk
                ? { opacity: 1, scale: [1, 1.05, 1] }
                : { opacity: 0, scale: 1.04 }
            }
            transition={
              videoOk
                ? { opacity: { duration: 1.2 }, scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' } }
                : { duration: 1.2 }
            }
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_VIDEO_POSTER}
              aria-hidden
              onCanPlay={() => setVideoOk(true)}
              onPlaying={() => setVideoOk(true)}
              onError={() => setVideoOk(false)}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/25" />
        <motion.div
          className="absolute inset-0 bg-charcoal-950/20"
          initial={reduceMotion ? false : { opacity: 0.4 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2.2 }}
        />
      </div>

      <div className="container-luxury relative z-10 max-w-4xl">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300"
          {...fadeUp(0.08)}
        >
          {pillars}
        </motion.p>
        <motion.h1 className="text-hero font-bold text-balance text-warm-50" {...fadeUp(0.2)}>
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-base text-warm-50/85 sm:text-lg lg:text-xl"
          {...fadeUp(0.34)}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          {...fadeUp(0.48)}
        >
          <motion.a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <MessageCircle className="h-5 w-5" />
            {whatsappLabel}
          </motion.a>
          <motion.a
            href={tel}
            className="btn-gold"
            dir="ltr"
            whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <Phone className="h-5 w-5" />
            {callLabel}
          </motion.a>
          <Link
            href="/projects"
            className="btn-secondary border-warm-50 text-warm-50 hover:bg-warm-50 hover:text-charcoal-900"
          >
            {viewWorkLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
