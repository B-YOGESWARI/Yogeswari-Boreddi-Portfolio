
import { useRef, type ReactNode } from 'react';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

import { useTrackProgress } from '../hooks/sectionProgress';

/**
 * Cinematic portfolio scene.
 *
 * Responsibilities:
 * - Scroll-based reveal animation.
 * - Smooth fade and scale transitions.
 * - Section viewing progress tracking.
 * - Consistent spacing across portfolio sections.
 */

export default function Scene({
  id,
  children,
  className = '',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  // Track section viewing progress
  useTrackProgress(id, ref);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.55'],
  });

  // Reveal animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.97, 1]
  );

  // Blur animation
  const blur = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [8, 2, 0]
  );

  // Convert MotionValue into a CSS filter value
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        opacity,
        scale,
        filter,
      }}
      className={`relative scroll-mt-16 py-16 sm:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}