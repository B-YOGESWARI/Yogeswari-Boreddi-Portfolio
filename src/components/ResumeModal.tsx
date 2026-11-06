
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { profile } from '../data/portfolio';

import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';

import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/**
 * Full-screen resume viewer.
 *
 * Desktop: Embedded PDF viewer.
 * Mobile: Responsive resume sheet with open/download options.
 */

export default function ResumeModal({
  onClose,
}: {
  onClose: () => void;
}) {
  useScrollLock(true);

  const small = useMedia('(max-width: 767px)');

  // Escape key closes the resume viewer
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.displayName} resume`}
    >
      {/* Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">

        <div className="min-w-0">
          <p className="truncate font-display text-2xl tracking-wide text-bone">
            My Resume
          </p>

          <p className="hidden text-[9px] font-semibold uppercase tracking-[0.3em] text-pink-400 sm:block">
            Professional Profile
          </p>
        </div>

        {/* Header actions */}
        <div className="flex shrink-0 items-center gap-2">

          <a
            href={profile.resumePdf}
            download="Yogeswari_Boreddi_Resume.pdf"
            className="flex min-h-10 items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-xs font-bold text-white transition hover:from-pink-400 hover:to-purple-500"
          >
            <span aria-hidden>⤓</span>
            Download
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-bone transition hover:border-pink-400 hover:bg-pink-500/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Resume content */}
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: EASE,
        }}
      >
        {small ? (
          <div
            data-lenis-prevent
            className="h-full overflow-y-auto"
          >
            <ResumeSheet />

            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="glass mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md border border-pink-400/20 text-sm font-semibold text-bone transition hover:border-pink-400 hover:text-pink-300"
            >
              Open Original PDF
              <span aria-hidden>↗</span>
            </a>

            <a
              href={profile.resumePdf}
              download="Yogeswari_Boreddi_Resume.pdf"
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-bold text-white"
            >
              Download Resume
              <span aria-hidden>⤓</span>
            </a>
          </div>
        ) : (
          <iframe
            title={`${profile.displayName} resume PDF`}
            src={`${profile.resumePdf}#view=FitH`}
            className="h-full w-full rounded-xl bg-white"
          />
        )}
      </motion.div>
    </motion.div>
  );
}