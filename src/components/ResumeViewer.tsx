import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '../data/portfolio';

import {
  EASE,
  Magnetic,
  SectionHeading,
} from './fx';

/**
 * Resume section
 *
 * Displays the resume preview, professional statistics,
 * and view/download actions.
 */

export default function ResumeSection({
  onView,
}: {
  onView: () => void;
}) {
  const topScore = education[0]?.score ?? 'N/A';

  return (
    <>
      <SectionHeading
        kicker="Professional Profile"
        title="My Resume"
      />

      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        {/* Resume preview */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            rotateX: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{
            once: true,
            margin: '-10% 0px',
          }}
          transition={{
            duration: 1.1,
            ease: EASE,
          }}
          style={{
            transformPerspective: 1600,
          }}
        >
          <CollapsibleSheet />
        </motion.div>

        {/* Resume actions and statistics */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">
            My journey, skills and experience.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-mist">
            Explore my education, professional experience,
            technical projects, achievements and{' '}
            {certifications.length} certifications.
            View my resume online or download a copy.
          </p>

          {/* Resume actions */}
<div className="mt-6 flex flex-col gap-3">
  <Magnetic className="w-full">
    <button
      type="button"
      data-cursor="view"
      onClick={onView}
      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-6 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(236,72,153,0.18)] transition hover:from-pink-400 hover:to-purple-500"
    >
      Explore My Resumes
      <span aria-hidden>↗</span>
    </button>
  </Magnetic>

  <div className="grid gap-3 sm:grid-cols-2">
    <Magnetic className="w-full">
      <a
        href="/assets/Yogeswari_Boreddi_Zoho_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="link"
        className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold text-bone transition hover:border-pink-400/40 hover:bg-white/15"
      >
        View Zoho Resume
        <span aria-hidden>↗</span>
      </a>
    </Magnetic>

    <Magnetic className="w-full">
      <a
        href="/assets/Yogeswari_Boreddi_Python_Full_Stack_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="link"
        className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold text-bone transition hover:border-pink-400/40 hover:bg-white/15"
      >
        View Python Resume
        <span aria-hidden>↗</span>
      </a>
    </Magnetic>
  </div>
</div>

          {/* Statistics */}
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              {
                value: topScore.replace('CGPA ', ''),
                label: 'Academic Score',
              },
              {
                value: String(projects.length),
                label: 'Projects',
              },
              {
                value: String(certifications.length),
                label: 'Certifications',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-2 px-2 py-4"
              >
                <dd className="font-display text-3xl leading-none text-bone">
                  {stat.value}
                </dd>

                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-smoke">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/**
 * Responsive resume preview.
 */

function CollapsibleSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${
          open ? 'max-h-[4000px]' : 'max-h-[560px]'
        }`}
      >
        <ResumeSheet />
      </div>

      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass min-h-11 rounded-full border border-pink-400/20 px-5 text-sm font-semibold text-bone transition hover:border-pink-400 hover:text-pink-300"
          >
            Read Full Resume ↓
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Reusable resume section heading.
 */

function H({
  children,
}: {
  children: string;
}) {
  return (
    <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-pink-400 first:mt-0">
      {children}
    </h4>
  );
}

/**
 * Complete resume sheet.
 */

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#15111b,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      {/* Top accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/80 to-transparent"
      />

      {/* Header */}
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-pink-400">
            PROFESSIONAL PROFILE
          </p>

          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">
            {profile.fullName}
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-mist">
            {profile.role}
            {' · '}
            Zoho Business Applications
            {' · '}
            Agentic AI
          </p>
        </div>

        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="block transition hover:text-pink-300"
          >
            {profile.email}
          </a>

          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-300"
            >
              LinkedIn ↗
            </a>
          )}

          {' · '}

          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-300"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        {/* Left column */}
        <div>
          {/* Education */}
          <H>Education</H>

          {education.map((item) => (
            <div
              key={item.school}
              className="mb-4"
            >
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.school}, {item.place}
                </p>

                <p className="text-xs text-smoke">
                  {item.period}
                </p>
              </div>

              <p className="text-xs text-mist">
                {item.degree}
                {' · '}
                <span className="text-bone/80">
                  {item.score}
                </span>
              </p>
            </div>
          ))}

          {/* Work experience */}
          <H>Professional Experience</H>

          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="mb-5"
            >
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.company} — {item.role}
                </p>

                <p className="text-xs text-smoke">
                  {item.period}
                </p>
              </div>

              <ul className="mt-2 space-y-1.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-xs leading-relaxed text-mist"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Projects */}
          <H>Projects</H>

          {projects.map((item) => (
            <div
              key={item.id}
              className="mb-3"
            >
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.title}
                </p>

                <p className="text-xs text-smoke">
                  {item.year}
                </p>
              </div>

              <p className="text-xs text-mist">
                {item.stack.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div>
          {/* Skills */}
          <H>Technical Skills</H>

          <div className="space-y-2">
            {skillCategories.map((category) => (
              <p
                key={category.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {category.title}:{' '}
                </span>

                {category.skills
                  .map((skill) => skill.name)
                  .join(', ')}
              </p>
            ))}
          </div>

          {/* Achievements */}
          <H>Achievements & Recognition</H>

          <ul className="space-y-2">
            {achievements.map((achievement) => (
              <li
                key={achievement.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {achievement.title}
                  {' — '}
                  {achievement.org}.
                </span>{' '}
                {achievement.detail}
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <H>Certifications</H>

          <ul className="space-y-2">
            {certifications.map((certificate) => (
              <li
                key={`${certificate.name}-${certificate.issuer}`}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {certificate.name}
                </span>
                {' — '}
                {certificate.issuer}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10 pt-4">
        <p className="text-center text-[9px] font-semibold tracking-[0.3em] text-smoke">
          YOGESWARI BOREDDI · BUSINESS APPLICATION DEVELOPER
        </p>
      </footer>
    </article>
  );
}