
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

// Verified certifications from Yogeswari's resume
const certifications = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Internship Studio',
    category: 'CLOUD COMPUTING',
  },
  {
    name: 'Cyber Security Fundamentals',
    issuer: 'IIDT Team',
    category: 'CYBER SECURITY',
  },
  {
    name: 'Java Full Stack Development',
    issuer: 'Rooman Technologies',
    category: 'FULL STACK DEVELOPMENT',
  },
  {
    name: 'Frontend Web Development',
    issuer: 'IIDT Team',
    category: 'WEB DEVELOPMENT',
  },
  {
    name: 'TCS iON Career Edge',
    issuer: 'TCS iON',
    category: 'PROFESSIONAL DEVELOPMENT',
  },
];

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading
        kicker="Learning & Recognition"
        title="Certifications"
      />

      {/* CERTIFICATION OVERVIEW */}

      <div className="gutter grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{
              opacity: 0,
              y: 40,
              rotateX: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            viewport={{
              once: true,
              margin: '-8% 0px',
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: EASE,
            }}
          >
            <Tilt max={6} className="h-full rounded-2xl">

              <article className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] p-6 ring-1 ring-[#d9b46a]/20 transition duration-500 hover:ring-[#d9b46a]/60">

                {/* Gold accent */}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/80 to-transparent" />

                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />

                {/* Certificate icon */}

                <div className="relative flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d9b46a]/30 bg-[#d9b46a]/10">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6 text-[#d9b46a]"
                      aria-hidden="true"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="16"
                        height="15"
                        rx="2"
                      />
                      <path d="M8 8h8M8 12h5" />
                      <path d="m9 18 3 3 3-3" />
                    </svg>

                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#d9b46a]">
                    0{i + 1}
                  </span>

                </div>

                {/* Certificate details */}

                <div className="relative mt-7">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">
                    {cert.category}
                  </p>

                  <h3 className="mt-3 font-display text-xl leading-snug text-bone">
                    {cert.name}
                  </h3>

                  <p className="mt-3 text-xs text-mist">
                    Issued by {cert.issuer}
                  </p>

                </div>

                <div className="mt-auto pt-5">
                  <div className="h-px bg-gradient-to-r from-[#d9b46a]/40 to-transparent" />

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-smoke">
                    Professional Learning
                  </p>
                </div>

              </article>

            </Tilt>
          </motion.div>
        ))}

      </div>

      {/* PUBLICATION SECTION */}

      <div className="gutter mt-16">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
        >

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

            <h3 className="font-sans text-xl font-semibold text-bone sm:text-2xl">
              Publication
              <span className="text-mist"> · Writing & Research</span>
            </h3>

            <span className="rounded-full border border-[#d9b46a]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">
              Medium
            </span>

          </div>

          <Tilt max={4} className="rounded-2xl">

            <article className="relative overflow-hidden rounded-2xl bg-[radial-gradient(100%_100%_at_100%_0%,#38102c,#110b12_60%,#07070a)] p-7 ring-1 ring-[#d9b46a]/20 sm:p-10">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e00083]/10 blur-3xl" />

              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b46a]">
                    Published on Medium
                  </p>

                  <h3 className="mt-5 max-w-2xl font-display text-2xl leading-tight text-bone sm:text-4xl">
                    The Incredible Journey of DevOps – The Story of Innovation and Collaboration
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-mist">
                    A publication exploring the evolution of DevOps,
                    highlighting innovation, collaboration and the
                    role of modern development practices.
                  </p>

                  <p className="mt-6 text-xs font-medium text-smoke">
                    Author · Yogeswari Boreddi
                  </p>

                </div>

                {/* Publication visual */}

                <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#d9b46a]/30 bg-[#d9b46a]/5 md:h-40 md:w-40">

                  <div className="absolute inset-3 rounded-full border border-[#d9b46a]/20" />

                  <span className="font-display text-6xl font-bold text-[#d9b46a]">
                    D
                  </span>

                </div>

              </div>

            </article>

          </Tilt>

        </motion.div>

      </div>

      {/* CERTIFICATION HORIZONTAL RAIL */}

      <div className="mt-16">

        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">

          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            My Learning Journey
            <span className="text-mist">
              {' '}· {certifications.length} Certifications
            </span>
          </h3>

          <p className="text-xs text-smoke">
            Technology · Development · Cloud
          </p>

        </div>

        <div className="group/rail relative">

          <div
            ref={rail}
            className="rail gutter flex snap-x gap-3 overflow-x-auto py-5"
          >

            {certifications.map((cert, i) => (

              <motion.div
                key={cert.name}
                className="group relative flex w-[250px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-[#d9b46a]/50"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: EASE,
                }}
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">
                    {cert.category}
                  </span>

                  <span className="text-sm text-smoke">
                    0{i + 1}
                  </span>

                </div>

                <div className="mt-6">

                  <p className="text-sm font-semibold leading-snug text-bone">
                    {cert.name}
                  </p>

                  <p className="mt-3 text-xs text-mist">
                    {cert.issuer}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          <RailButtons rail={rail} />

        </div>

      </div>

    </>
  );
}
