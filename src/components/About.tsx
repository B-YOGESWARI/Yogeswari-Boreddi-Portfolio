
import { motion } from 'framer-motion';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    {
      k: 'Education',
      v: 'B.Tech – CSE',
      s: 'JNTUA · 85% · 2022–2026',
    },
    {
      k: 'Current Role',
      v: 'Business Application Developer',
      s: 'VSInterconnect India Pvt. Ltd.',
    },
    {
      k: 'Primary Technologies',
      v: 'Python & Zoho',
      s: 'Full Stack · Creator · Deluge · REST APIs',
    },
    {
      k: 'Based In',
      v: 'Bengaluru',
      s: 'Karnataka, India',
    },
  ];

  const interests = [
    'Python Development',
    'Full Stack Development',
    'Zoho Creator',
    'Zoho CRM',
    'Deluge Scripting',
    'REST API Integration',
    'Workflow Automation',
    'Agentic AI',
    'Large Language Models',
    'AWS',
    'Docker',
    'DevOps',
  ];

  return (
    <>
      <SectionHeading
        kicker="The Developer"
        title="About Me"
      />

      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">

        {/* PROFESSIONAL PORTRAIT */}

        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{
            opacity: 0,
            scale: 0.88,
            filter: 'blur(12px)',
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          viewport={{
            once: true,
            margin: '-10% 0px',
          }}
          transition={{
            duration: 1.2,
            ease: EASE,
          }}
        >
          <Tilt max={5} className="rounded-2xl">

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">

              {/* Cinematic Background */}

              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#57083f,#21051f_60%,#07070a)]" />

              <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />

              {/* Your Generated Professional Portrait */}

              <img
                src="/assets/portrait-720.webp"
                srcSet="
                  /assets/portrait-420.webp 420w,
                  /assets/portrait-720.webp 720w,
                  /assets/portrait-1100.webp 1100w
                "
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt="Yogeswari Boreddi - Business Application and Python Full Stack Developer"
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />

              {/* Bottom Gradient */}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/95 to-transparent" />

              {/* Portrait Branding */}

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">
                    THE DEVELOPER
                  </p>

                  <p className="font-display text-3xl leading-tight text-bone">
                    Yogeswari
                  </p>

                  <p className="font-display text-2xl leading-tight text-bone">
                    Boreddi
                  </p>
                </div>

                <span className="rounded border border-white/30 px-2 py-1 text-[10px] font-bold text-bone">
                  2026
                </span>

              </div>
            </div>

          </Tilt>
        </motion.div>

        {/* ABOUT CONTENT */}

        <div>

          <motion.p
            className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] italic leading-[1.15] text-bone"
            initial={{
              opacity: 0,
              y: 24,
              filter: 'blur(8px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: EASE,
            }}
          >
            “I build intelligent business applications, develop full-stack solutions, automate workflows and explore the possibilities of Agentic AI.”
          </motion.p>

          <p className="mt-4 text-sm text-mist">
            — Yogeswari Boreddi
          </p>

          {/* PROFESSIONAL FACTS */}

          <motion.dl
            className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >

            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 16,
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

                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
                  {f.k}
                </dt>

                <dd className="mt-2 text-base font-semibold text-bone">
                  {f.v}
                </dd>

                <dd className="mt-1 text-xs leading-relaxed text-mist">
                  {f.s}
                </dd>

              </motion.div>
            ))}

          </motion.dl>

          {/* TECHNICAL INTERESTS */}

          <div className="mt-8">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
              Technologies & Interests
            </p>

            <div className="flex flex-wrap gap-2">

              {interests.map((item) => (
                <span
                  key={item}
                  className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone transition-all duration-300 hover:border-pink-500/50 hover:text-pink-400"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

          {/* PROFESSIONAL DESCRIPTION */}

          <motion.p
            className="mt-8 text-sm leading-7 text-mist"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
          >
            My experience includes developing business applications
            using Zoho Creator, Zoho CRM and Deluge scripting,
            integrating systems through REST APIs, and building
            solutions using Python and modern web technologies.
            I am particularly interested in Large Language Models,
            Agentic AI and intelligent workflow automation.
          </motion.p>

        </div>
      </div>
    </>
  );
}