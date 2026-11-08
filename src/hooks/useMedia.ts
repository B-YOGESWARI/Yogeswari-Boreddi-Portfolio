
import { useSyncExternalStore } from 'react';

/**
 * React hook for subscribing to media query changes.
 *
 * @param query CSS media query
 * @param fallback Server-side rendering fallback
 */
export function useMedia(
  query: string,
  fallback = false
): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined' || !window.matchMedia) {
        return () => {};
      }

      const mediaQuery = window.matchMedia(query);

      // Modern browser support.
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', callback);

        return () => {
          mediaQuery.removeEventListener('change', callback);
        };
      }

      // Older browser support.
      mediaQuery.addListener(callback);

      return () => {
        mediaQuery.removeListener(callback);
      };
    },

    () => {
      if (typeof window === 'undefined' || !window.matchMedia) {
        return fallback;
      }

      return window.matchMedia(query).matches;
    },

    () => fallback
  );
}

/**
 * True on devices with a precise pointer (mouse or trackpad).
 * Used to enable hover-only animations and interactions.
 */
export const useFinePointer = () =>
  useMedia('(hover: hover) and (pointer: fine)');

/**
 * Detects whether the visitor prefers reduced motion.
 * Used to limit animations and smooth scrolling.
 */
export const useReducedMotionPref = () =>
  useMedia('(prefers-reduced-motion: reduce)');

/**
 * Detects desktop-sized screens.
 * Breakpoint: 1024px.
 */
export const useDesktop = () =>
  useMedia('(min-width: 1024px)');