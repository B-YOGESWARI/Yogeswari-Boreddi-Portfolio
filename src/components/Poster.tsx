
import type { ReactNode } from 'react';

import type {
  Palette,
  Project,
} from '../data/portfolio';

/**
 * Cinematic project-card artwork.
 * Uses each project's own palette.
 * No external stock imagery required.
 */

export function PosterBackdrop({
  palette,
  children,
  className = '',
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(
            120% 90% at 85% 10%,
            ${palette.via} 0%,
            transparent 60%
          ),
          radial-gradient(
            90% 80% at 0% 100%,
            ${palette.from} 0%,
            transparent 70%
          ),
          linear-gradient(
            160deg,
            ${palette.from} 0%,
            ${palette.to} 100%
          )
        `,
      }}
    >
      {/* Ambient light */}
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${palette.accent}55,
            transparent
          )`,
        }}
      />

      {/* Fine cinematic texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]"
      />

      {children}

      {/* Bottom shadow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
      />
    </div>
  );
}

/**
 * Project illustrations generated from project motifs.
 *
 * Supported motifs:
 * shield, flow, tenants, ai
 */

export function ProjectArt({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  const accent = project.palette.accent;

  return (
    <PosterBackdrop
      palette={project.palette}
      className={className}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient
            id={`g-${project.id}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor={accent}
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor={accent}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        <circle
          cx="290"
          cy="120"
          r="130"
          fill={`url(#g-${project.id})`}
        />

        {/* Security / fake news analysis */}
        {project.motif === 'shield' && (
          <g
            transform="translate(232 40)"
            fill="none"
            stroke={accent}
            strokeOpacity="0.85"
          >
            <path
              d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z"
              strokeWidth="2"
            />

            <path
              d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="30"
                x2={i % 2 ? 72 : 86}
                y1={56 + i * 14}
                y2={56 + i * 14}
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity={0.35 + i * 0.1}
              />
            ))}

            <path
              d="M40 124 l12 12 l26 -28"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* Workflow / business applications */}
        {project.motif === 'flow' && (
          <g fill="none" stroke={accent}>
            <rect
              x="200"
              y="56"
              width="150"
              height="94"
              rx="12"
              strokeWidth="2"
              strokeOpacity="0.85"
            />

            <rect
              x="214"
              y="72"
              width="28"
              height="20"
              rx="4"
              strokeOpacity="0.7"
            />

            <line
              x1="214"
              x2="330"
              y1="124"
              y2="124"
              strokeWidth="3"
              strokeOpacity="0.4"
              strokeDasharray="18 8"
            />

            <g transform="translate(176 196)">
              <circle
                cx="16"
                cy="16"
                r="16"
                strokeWidth="2"
              />

              <path
                d="M34 16 h46"
                strokeWidth="2"
              />

              <circle
                cx="96"
                cy="16"
                r="16"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              <path
                d="M112 8 l38 -22 M112 24 l38 22"
                strokeWidth="2"
                strokeOpacity="0.6"
              />

              <circle
                cx="166"
                cy="-18"
                r="10"
                fill={accent}
                fillOpacity="0.8"
              />

              <circle
                cx="166"
                cy="50"
                r="10"
                strokeWidth="2"
                strokeOpacity="0.5"
              />
            </g>
          </g>
        )}

        {/* Application / database architecture */}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={accent}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={
                    0.25 + ((r + c) % 3) * 0.25
                  }
                  fill={
                    (r + c) % 4 === 0
                      ? accent
                      : 'none'
                  }
                  fillOpacity="0.25"
                />
              ))
            )}

            <path
              d="M188 200 h190"
              strokeWidth="2"
              strokeOpacity="0.7"
            />

            <path
              d="M188 214 h190"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            <path
              d="M188 228 h190"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          </g>
        )}

        {/* AI / neural network architecture */}
        {project.motif === 'ai' && (
          <g
            fill="none"
            stroke={accent}
            strokeWidth="1.8"
          >
            {/* Neural network connections */}
            <g strokeOpacity="0.45">
              <path d="M205 90 L260 65 L320 95" />
              <path d="M205 90 L260 145 L320 95" />
              <path d="M205 195 L260 145 L320 195" />
              <path d="M205 195 L260 65" />
              <path d="M260 65 L320 195" />
              <path d="M260 145 L350 145" />
            </g>

            {/* Neural nodes */}
            {[
              [205, 90],
              [205, 195],
              [260, 65],
              [260, 145],
              [320, 95],
              [320, 195],
              [350, 145],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="12"
                  fill={accent}
                  fillOpacity="0.16"
                  strokeOpacity="0.9"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill={accent}
                  stroke="none"
                />
              </g>
            ))}

            <circle
              cx="260"
              cy="145"
              r="34"
              strokeOpacity="0.3"
              strokeDasharray="4 5"
            />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/**
 * YB — Yogeswari Boreddi personal brand mark.
 */

export function SeriesMark({
  className = '',
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Yogeswari Boreddi"
    >
      {/* YB monogram */}
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-pink-400/30 bg-gradient-to-br from-pink-500/20 to-purple-600/20 shadow-[0_0_18px_rgba(236,72,153,0.18)]">
        <span className="bg-gradient-to-br from-pink-300 via-pink-500 to-purple-400 bg-clip-text text-sm font-black tracking-tighter text-transparent">
          YB
        </span>
      </span>

      {/* Personal brand */}
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.62em] font-bold tracking-[0.25em] text-bone">
          YOGESWARI
        </span>

        <span className="mt-1 font-sans text-[0.48em] font-medium tracking-[0.3em] text-mist">
          BOREDDI
        </span>
      </span>
    </span>
  );
}