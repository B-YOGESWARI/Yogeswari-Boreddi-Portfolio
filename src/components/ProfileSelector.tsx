
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import {
  profile,
  viewerProfiles,
  type ProfileId,
} from '../data/portfolio';

import { EASE } from './fx';

/**
 * Profile avatar
 *
 * Displays Yogeswari's portrait for the main profile
 * and branded icons for the other viewing modes.
 */

export function ProfileAvatar({
  id,
  size = 'lg',
}: {
  id: ProfileId;
  size?: 'sm' | 'lg';
}) {
  const selectedProfile = viewerProfiles.find(
    (item) => item.id === id
  );

  const box =
    size === 'lg'
      ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl'
      : 'h-8 w-8 rounded-md';

  // Main portfolio profile
  if (id === 'yogeswari') {
    return (
      <span
        className={`relative block overflow-hidden ${box}`}
        style={{
          background:
            'radial-gradient(circle at 50% 30%, #55113e, #100611)',
        }}
      >
        <img
          src="/assets/portrait-420.webp"
          alt="Yogeswari Boreddi"
          className="absolute inset-x-0 bottom-0 mx-auto h-[115%] w-auto max-w-none object-cover object-top"
        />
      </span>
    );
  }

  const glyph: Record<string, string> = {
    recruiter: 'R',
    developer: '</>',
    creative: '✦',
  };

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box}`}
      style={{
        background: `linear-gradient(145deg, ${
          selectedProfile?.color ?? '#831843'
        }, #0b0b10 120%)`,
      }}
    >
      <span
        className={
          size === 'lg'
            ? 'text-4xl sm:text-5xl'
            : 'text-sm'
        }
      >
        {glyph[id] ?? 'YB'}
      </span>
    </span>
  );
}

/**
 * Profile selection screen
 */

export default function ProfileSelector({
  onPick,
}: {
  onPick: (id: ProfileId) => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onPick('yogeswari');
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(10px)',
      }}
      transition={{
        duration: 0.7,
        ease: EASE,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your viewing profile"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.16),transparent_70%)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_90%_100%,rgba(110,40,180,0.12),transparent_70%)]"
      />

      {/* Heading */}
      <motion.h2
        className="relative mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{
          opacity: 0,
          y: 20,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        transition={{
          duration: 0.8,
          ease: EASE,
        }}
      >
        Choose your experience.
      </motion.h2>

      {/* Profile cards */}
      <motion.ul
        className="relative grid grid-cols-2 gap-6 sm:flex sm:gap-8"
        initial="hidden"
        animate="show"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.2,
        }}
      >
        {viewerProfiles.map((item) => (
          <motion.li
            key={item.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: EASE,
                },
              },
            }}
          >
            <button
              type="button"
              onClick={() => onPick(item.id)}
              data-cursor="play"
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="relative rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-pink-400 group-focus-visible:ring-pink-400">
                <ProfileAvatar id={item.id} />

                {item.id === 'yogeswari' && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-pink-600 px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white">
                    MAIN
                  </span>
                )}
              </span>

              <span className="font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">
                {item.name}
              </span>

              <span className="max-w-[9rem] text-[11px] leading-snug text-smoke">
                {item.blurb}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Footer */}
      <p className="relative mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every profile explores the professional journey,
        projects, and technical expertise of{' '}
        <span className="font-semibold text-bone">
          {profile.displayName}
        </span>
        . Each experience highlights a different perspective.
      </p>
    </motion.div>
  );
}
