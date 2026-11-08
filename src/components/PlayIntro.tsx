
import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';

import {
  introSlides,
  profile,
} from '../data/portfolio';

import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';

import { EASE } from './fx';

const SLIDE_MS = 3600;

/**
 * YOGESWARI BOREDDI — PROFESSIONAL INTRO
 *
 * Portrait zoom → professional highlights →
 * technical expertise → career journey → portfolio
 */

export default function PlayIntro({
  onClose,
}: {
  onClose: () => void;
}) {
  useScrollLock(true);

  const reduced = useReducedMotionPref();

  const [phase, setPhase] = useState<'zoom' | 'reel' | 'end'>(
    reduced ? 'reel' : 'zoom'
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const progress = useMotionValue(0);

  // Portrait zoom transition
  useEffect(() => {
    if (phase !== 'zoom') return;

    const timer = window.setTimeout(() => {
      setPhase('reel');
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [phase]);

  // Move to next highlight
  const next = useCallback(() => {
    setIndex((current) => {
      if (current >= introSlides.length - 1) {
        setPhase('end');
        return current;
      }

      return current + 1;
    });

    progress.set(0);
  }, [progress]);

  // Move to previous highlight
  const prev = useCallback(() => {
    setIndex((current) => Math.max(0, current - 1));
    progress.set(0);
  }, [progress]);

  // One animation clock drives progress and auto-advance
  useEffect(() => {
    if (phase !== 'reel' || paused) return;

    let animationFrame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const value =
        progress.get() + (now - last) / SLIDE_MS;

      last = now;

      if (value >= 1) {
        next();
        return;
      }

      progress.set(value);

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [phase, paused, index, next, progress]);

  // Close after final slide
  useEffect(() => {
    if (phase !== 'end') return;

    const timer = window.setTimeout(onClose, 2200);

    return () => window.clearTimeout(timer);
  }, [phase, onClose]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        next();
      }

      if (event.key === 'ArrowLeft') {
        prev();
      }

      if (event.key === ' ') {
        event.preventDefault();
        setPaused((current) => !current);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, next, prev]);

  const slide = introSlides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(10px)',
      }}
      transition={{
        duration: 0.6,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Professional portfolio highlights"
    >
      {/* Portrait zoom */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center"
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={
          phase === 'zoom'
            ? {
                scale: [1, 1.08, 2.6],
                opacity: [0.9, 1, 0],
              }
            : {
                opacity: 0.1,
                scale: 1.25,
                filter: 'blur(4px)',
              }
        }
        transition={{
          duration: phase === 'zoom' ? 1.7 : 1.2,
          ease: [0.7, 0, 0.2, 1],
          times:
            phase === 'zoom'
              ? [0, 0.3, 1]
              : undefined,
        }}
        style={{
          transformOrigin: '50% 30%',
        }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="100vw"
          alt=""
          className="h-[88vh] w-auto max-w-none object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        />
      </motion.div>

      {/* Neon pink and purple atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(236,72,153,0.25),transparent_70%)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_80%,rgba(90,20,160,0.18),transparent_70%)]"
      />

      {/* Slide progress indicators */}
      {phase !== 'zoom' && (
        <div className="absolute inset-x-0 top-0 z-20 flex gap-1.5 px-4 pt-4 sm:px-10 sm:pt-6">
          {introSlides.map((item, i) => (
            <div
              key={item.kicker}
              className="h-[3px] flex-1 overflow-hidden rounded bg-white/15"
            >
              <motion.div
                className="h-full origin-left bg-crimson-2 shadow-[0_0_10px_rgba(236,72,153,0.7)]"
                style={{
                  scaleX:
                    i === index && phase === 'reel'
                      ? progress
                      : i < index || phase === 'end'
                        ? 1
                        : 0,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Highlight reel */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">

          {phase === 'reel' && slide && (
            <motion.div
              key={index}
              className="max-w-4xl"
              initial={{
                opacity: 0,
                scale: 1.06,
                filter: 'blur(14px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                filter: 'blur(10px)',
              }}
              transition={{
                duration: 0.7,
                ease: EASE,
              }}
            >
              {/* Slide category */}
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2 sm:text-xs">
                HIGHLIGHT {String(index + 1).padStart(2, '0')}
                {' · '}
                {slide.kicker}
              </p>

              {/* Main heading */}
              <h2
                className="font-display leading-[0.88] text-bone"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 8.5rem)',
                }}
              >
                {slide.title}
              </h2>

              {/* Description */}
              <div className="mt-6 space-y-2">
                {slide.lines.map((line, i) => (
                  <motion.p
                    key={line}
                    className="text-base text-bone/80 sm:text-xl"
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.35 + i * 0.15,
                      duration: 0.6,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {/* Technology and achievement tags */}
              {slide.chips && (
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {slide.chips.map((chip, i) => (
                    <motion.span
                      key={chip}
                      className="glass rounded-full border border-crimson-2/10 px-3 py-1 text-xs font-semibold tracking-wide text-bone"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.6 + i * 0.06,
                      }}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Final screen */}
          {phase === 'end' && (
            <motion.div
              key="end"
              initial={{
                opacity: 0,
                letterSpacing: '0.6em',
              }}
              animate={{
                opacity: 1,
                letterSpacing: '0.2em',
              }}
              transition={{
                duration: 1.2,
                ease: EASE,
              }}
            >
              <p className="font-display text-5xl text-bone sm:text-7xl">
                LET'S CONNECT
              </p>

              <p className="mt-4 text-xs font-semibold tracking-[0.4em] text-crimson-2">
                {profile.displayName.toUpperCase()}
              </p>

              <p className="mt-4 text-sm text-mist">
                BUILDING IDEAS INTO DIGITAL EXPERIENCES
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Mobile tap navigation */}
      {phase === 'reel' && (
        <>
          <button
            type="button"
            aria-label="Previous highlight"
            className="absolute inset-y-0 left-0 z-[5] w-1/4"
            onClick={prev}
          />

          <button
            type="button"
            aria-label="Next highlight"
            data-cursor="play"
            className="absolute inset-y-0 right-0 z-[5] w-1/4"
            onClick={next}
          />
        </>
      )}

      {/* Player controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-8">

        <div className="flex items-center gap-2">

          {phase === 'reel' && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? 'Resume highlights' : 'Pause highlights'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-bone transition hover:border-crimson-2 hover:bg-crimson-2/10"
            >
              {paused ? '▶' : '❚❚'}
            </button>
          )}

          <span className="hidden text-[11px] tracking-[0.2em] text-smoke sm:block">
            SPACE · ← → · ESC
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink transition hover:bg-white"
        >
          BACK TO PORTFOLIO
        </button>
      </div>
    </motion.div>
  );
}