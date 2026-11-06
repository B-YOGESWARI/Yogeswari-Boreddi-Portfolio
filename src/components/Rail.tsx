
import {
  useEffect,
  useState,
  type RefObject,
} from 'react';

/**
 * Desktop navigation controls for horizontal content rails.
 * On touch devices, native swipe scrolling is preserved.
 */

export function RailButtons({
  rail,
}: {
  rail: RefObject<HTMLDivElement | null>;
}) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const element = rail.current;

    if (!element) return;

    const update = () => {
      setCanLeft(element.scrollLeft > 8);

      setCanRight(
        element.scrollLeft + element.clientWidth <
          element.scrollWidth - 8
      );
    };

    update();

    element.addEventListener('scroll', update, {
      passive: true,
    });

    window.addEventListener('resize', update);

    const observer = new ResizeObserver(update);

    observer.observe(element);

    return () => {
      element.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [rail]);

  const page = (direction: 1 | -1) => {
    const element = rail.current;

    if (!element) return;

    element.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  const base =
    'absolute top-8 bottom-8 z-20 hidden w-[var(--gutter)] min-w-10 items-center justify-center text-3xl text-bone opacity-0 transition-all duration-300 group-hover/rail:opacity-100 hover:text-pink-300 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-400 [@media(hover:hover)]:flex';

  return (
    <>
      {/* Previous content */}
      {canLeft && (
        <button
          type="button"
          aria-label="Scroll projects left"
          onClick={() => page(-1)}
          className={`${base} left-0 bg-gradient-to-r from-ink/95 to-transparent`}
        >
          <span
            aria-hidden
            className="transition-transform duration-300 hover:-translate-x-1"
          >
            ‹
          </span>
        </button>
      )}

      {/* Next content */}
      {canRight && (
        <button
          type="button"
          aria-label="Scroll projects right"
          onClick={() => page(1)}
          className={`${base} right-0 bg-gradient-to-l from-ink/95 to-transparent`}
        >
          <span
            aria-hidden
            className="transition-transform duration-300 hover:translate-x-1"
          >
            ›
          </span>
        </button>
      )}
    </>
  );
}