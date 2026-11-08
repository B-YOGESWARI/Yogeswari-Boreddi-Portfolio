
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';

import Lenis from 'lenis';
import { useReducedMotionPref } from './useMedia';

type ScrollOptions = {
  offset?: number;
  immediate?: boolean;
};

type ScrollApi = {
  scrollTo: (
    target: string | HTMLElement | number,
    opts?: ScrollOptions
  ) => void;
  lock: () => void;
  unlock: () => void;
};

const ScrollCtx = createContext<ScrollApi | null>(null);

export function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const reduced = useReducedMotionPref();

  const lenisRef = useRef<Lenis | null>(null);
  const locks = useRef(0);

  // Initialize Lenis only when reduced motion is disabled.
  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    lenisRef.current = lenis;

    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // Scroll to a selector, element or absolute Y position.
  const scrollTo = useCallback<ScrollApi['scrollTo']>(
    (target, opts = {}) => {
      const offset = opts.offset ?? -72;

      let element: HTMLElement | null = null;

      if (typeof target === 'string') {
        element = document.querySelector<HTMLElement>(target);
      } else if (typeof target !== 'number') {
        element = target;
      }

      if (typeof target !== 'number' && !element) return;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(
          typeof target === 'number' ? target : element!,
          {
            offset: typeof target === 'number' ? 0 : offset,
            immediate: opts.immediate ?? false,
            duration: 1.4,
          }
        );
        return;
      }

      const top =
        typeof target === 'number'
          ? target
          : element!.getBoundingClientRect().top +
            window.scrollY +
            offset;

      window.scrollTo({
        top,
        behavior: opts.immediate ? 'auto' : 'smooth',
      });
    },
    []
  );

  // Lock scrolling while an overlay or modal is open.
  const lock = useCallback(() => {
    locks.current += 1;

    if (locks.current === 1) {
      lenisRef.current?.stop();
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  // Restore scrolling after the final overlay closes.
  const unlock = useCallback(() => {
    locks.current = Math.max(0, locks.current - 1);

    if (locks.current === 0) {
      lenisRef.current?.start();
      document.documentElement.style.overflow = '';
    }
  }, []);

  // Keep Lenis stopped if a modal remains open during initialization.
  useEffect(() => {
    if (locks.current > 0) {
      lenisRef.current?.stop();
    }
  }, [reduced]);

  // Restore document scrolling if the provider unmounts.
  useEffect(() => {
    return () => {
      locks.current = 0;
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <ScrollCtx.Provider
      value={{
        scrollTo,
        lock,
        unlock,
      }}
    >
      {children}
    </ScrollCtx.Provider>
  );
}

export function useSmoothScroll() {
  const context = useContext(ScrollCtx);

  if (!context) {
    throw new Error(
      'useSmoothScroll must be used inside SmoothScrollProvider'
    );
  }

  return context;
}

/**
 * Locks page scrolling while an overlay is active.
 * Useful for project modals, resume viewers and profile selectors.
 */
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useSmoothScroll();

  useEffect(() => {
    if (!active) return;

    lock();

    return () => {
      unlock();
    };
  }, [active, lock, unlock]);
}