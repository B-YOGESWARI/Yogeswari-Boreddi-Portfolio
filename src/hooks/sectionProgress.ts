
import {
  useEffect,
  useSyncExternalStore,
  type RefObject,
} from 'react';

/**
 * Tracks how much of each portfolio section the visitor has viewed.
 * Progress ranges from 0 to 1 and never decreases.
 */

const progress: Record<string, number> = {};

const listeners = new Set<() => void>();

let snapshot: Record<string, number> = {};

function setProgress(id: string, value: number) {
  const normalized = Math.min(1, Math.max(0, value));
  const previous = progress[id] ?? 0;

  // Avoid unnecessary updates and prevent progress from decreasing.
  if (normalized <= previous || normalized - previous < 0.005) {
    return;
  }

  progress[id] = normalized;
  snapshot = { ...progress };

  listeners.forEach((listener) => listener());
}

/**
 * Subscribe to the shared progress store.
 */
function subscribe(callback: () => void) {
  listeners.add(callback);

  return () => {
    listeners.delete(callback);
  };
}

/**
 * Returns the latest viewing progress for all sections.
 */
function getSnapshot() {
  return snapshot;
}

export function useWatchProgress() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );
}

/**
 * Tracks the visible portion of a section.
 *
 * @param id Unique section identifier
 * @param ref Reference to the section element
 */
export function useTrackProgress(
  id: string,
  ref: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let raf = 0;

    const measure = () => {
      raf = 0;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.height <= 0 || viewportHeight <= 0) return;

      const visibleProgress =
        (viewportHeight - rect.top) /
        (rect.height + viewportHeight * 0.25);

      setProgress(id, visibleProgress);
    };

    const scheduleMeasure = () => {
      if (!raf) {
        raf = requestAnimationFrame(measure);
      }
    };

    // Initial measurement.
    measure();

    window.addEventListener('scroll', scheduleMeasure, {
      passive: true,
    });

    window.addEventListener('resize', scheduleMeasure);

    return () => {
      window.removeEventListener('scroll', scheduleMeasure);
      window.removeEventListener('resize', scheduleMeasure);

      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [id, ref]);
}