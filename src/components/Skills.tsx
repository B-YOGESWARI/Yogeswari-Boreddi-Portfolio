import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  skillCategories,
  skillEvidence,
  type Skill,
} from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const HUES = [
  '#ff4fa3',
  '#b98bff',
  '#4cc9ff',
  '#46e3a8',
  '#ffb547',
  '#ff8a5c',
  '#7ee0ff',
];

export default function Skills() {
  const [cat, setCat] = useState(0);

  if (!skillCategories.length) return null;

  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];

  return (
    <>
      <SectionHeading
        kicker="Technical Expertise"
        title="My Skill Universe"
        aside={
          <p className="max-w-xs text-sm leading-relaxed text-mist">
            Technologies and tools I use to build business applications,
            full-stack solutions, cloud infrastructure, and intelligent
            automation.
          </p>
        }
      />

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">

        {/* Skill categories */}
        <div
          className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
          role="tablist"
          aria-label="Technical skill categories"
        >
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              id={`skill-tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={i === cat}
              aria-controls={`skill-panel-${c.id}`}
              onClick={() => setCat(i)}
              className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${
                i === cat
                  ? 'text-bone'
                  : 'text-smoke hover:text-bone'
              }`}
            >
              {i === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-pink-400/20"
                  transition={{
                    duration: 0.45,
                    ease: EASE,
                  }}
                />
              )}

              {i === cat && (
                <motion.span
                  layoutId="skill-bar"
                  className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block"
                  style={{ background: hue }}
                />
              )}

              <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">
                {c.title}
              </span>

              <span className="relative hidden text-xs text-smoke lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              id={`skill-panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${category.id}`}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ staggerChildren: 0.05 }}
            >
              <motion.p
                className="mb-5 text-sm leading-relaxed text-mist"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                  exit: { opacity: 0 },
                }}
              >
                <span className="font-semibold text-bone">
                  {category.title}
                </span>{' '}
                — {category.subtitle}
              </motion.p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    hue={hue}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function SkillCard({
  skill,
  hue,
}: {
  skill: Skill;
  hue: string;
}) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name];

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((current) => !current)}
      aria-expanded={open}
      aria-label={`${skill.name}${evidence ? `. Evidence: ${evidence.join(', ')}` : ''}`}
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
          scale: 0.94,
          filter: 'blur(6px)',
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.55,
            ease: EASE,
          },
        },
        exit: {
          opacity: 0,
          y: -12,
          transition: {
            duration: 0.2,
          },
        },
      }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
      style={{
        boxShadow: open
          ? `0 18px 50px -12px ${hue}55, 0 0 0 1px ${hue}66`
          : undefined,
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60"
        style={{ background: hue }}
      />

      {/* Skill monogram */}
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{
          background: `${hue}1f`,
          color: hue,
          boxShadow: `inset 0 0 0 1px ${hue}55`,
        }}
        animate={
          open
            ? { rotate: [0, -8, 8, 0], scale: 1.08 }
            : { rotate: 0, scale: 1 }
        }
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        {skill.mono}
      </motion.span>

      {/* Skill name */}
      <span className="relative mt-4 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-bone">
        {skill.name}

        {skill.note && (
          <span
            className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink"
            style={{ background: hue }}
          >
            {skill.note}
          </span>
        )}
      </span>

      {/* Project and certification evidence */}
      <AnimatePresence initial={false}>
        {open && evidence && (
          <motion.span
            className="relative mt-2 block overflow-hidden text-[11px] leading-snug text-mist"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {evidence.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}