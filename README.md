# YOGESWARI BOREDDI

A cinematic, streaming-inspired portfolio for **Yogeswari Boreddi** — Python Full Stack Developer and Business Application Developer.

Every section is an episode, every project is an Original, and the whole website plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually [http://localhost:5173](http://localhost:5173)).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## Updating the content

**All portfolio content lives in one file: `src/data/portfolio.ts`.**

This is the single source of truth used by the portfolio components.

| To change… | Edit |
|---|---|
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project or a new project | `projects` |
| Achievements and certifications | `achievements`, `certifications` |
| Skills and their usage notes | `skillCategories`, `skillEvidence` |
| Career journey and episodes | `seasons` |
| Featured projects and Top 10 row | `topPicks` |
| Play Intro highlight reel | `introSlides` |
| Viewer profile order | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

### Resume

Replace:

`public/assets/Yogeswari_Boreddi_Resume.pdf`

Make sure the filename matches the `resumePdf` value in `src/data/portfolio.ts`.

### Photo

Replace the source portrait images used by the image-generation script. The current portfolio expects responsive portrait assets such as:

- `public/assets/portrait-420.webp`
- `public/assets/portrait-720.webp`

If the project includes the image-generation script, update its source image paths and run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and social-sharing image in `public/assets/`.

## What's inside

```text
src/
  data/
    portfolio.ts             ← single source of truth for portfolio content

  App.tsx                    ← opening → profile select → home; overlays

  components/
    OpeningSequence.tsx      ← studio card, name, title and play sequence
    ProfileSelector.tsx      ← viewer profile selection
    Navbar.tsx               ← navigation, profile switcher and mobile menu
    Hero.tsx                 ← cinematic hero with portrait and animations
    PlayIntro.tsx             ← interactive portfolio highlight reel
    ContinueWatching.tsx     ← journey and project progress cards
    About.tsx                ← introduction and professional background
    Seasons.tsx              ← career journey as seasons and episodes
    EpisodeCard.tsx           ← individual journey episodes
    Originals.tsx             ← featured project collection
    ProjectCard.tsx           ← interactive project cards
    ProjectModal.tsx          ← detailed project overlay
    TopPicks.tsx              ← featured projects row
    Skills.tsx                ← technical skills and experience
    Achievements.tsx          ← certifications and publication
    ResumeViewer.tsx          ← designed resume sheet
    ResumeModal.tsx           ← resume and PDF viewer
    FinalCTA.tsx               ← contact section and social links
    CustomCursor.tsx          ← custom cursor interactions
    fx.tsx                    ← magnetic buttons, tilt, reveals and particles

  hooks/
    useWatchProgress.ts       ← scroll and watch progress tracking
    useSmoothScroll.ts        ← smooth scrolling and scroll lock
    useMedia.ts               ← responsive and accessibility preferences

  index.css                   ← global styles and cinematic theme
  main.tsx                    ← React application entry point

public/
  assets/                     ← portraits, resume and social images
  favicon.svg                 ← portfolio favicon
```

## Technology stack

- **Frontend:** React 18, TypeScript, HTML5, CSS3
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 11
- **Smooth scrolling:** Lenis
- **Development tools:** Git, GitHub, VS Code

## Portfolio highlights

The portfolio showcases work and experience across:

- Python Full Stack Development
- React, TypeScript and modern frontend development
- Django, FastAPI and REST API development
- PostgreSQL, MySQL and SQL
- Zoho Creator, Zoho CRM and Zoho One
- Deluge scripting and business process automation
- AWS, Docker, Jenkins and Kubernetes
- AI/ML and multimodal application development

### Featured projects

- Multimodal Fake News Analysis Using Image–Text Similarity
- Personal Expense Tracker
- Employee Feedback System
- Diwali History Website
- VSI CRM and Price Management Application
- Order Management Application
- Inventory Management System
- VSI Production System
- Employee Asset Management System
- Digital Innovation Management System

## Accessibility and performance

- `prefers-reduced-motion` is respected across animations and scrolling effects.
- Hover interactions are optimized for devices with precise pointers.
- Touch devices support tap interactions and swipeable project rails.
- The custom cursor appears only on supported pointer devices.
- Overlays can be closed using the Escape key.
- The highlight reel supports keyboard navigation.
- Responsive WebP portraits help optimize image loading.
- Animations and visual effects are designed to work across desktop and mobile devices.

## Keyboard shortcuts

- **Opening:** Enter or Escape skips the opening sequence.
- **Play Intro:** Space pauses, Left and Right Arrow keys change slides, Escape closes.
- **Project and resume overlays:** Escape closes the active overlay.

## Connect

**Yogeswari Boreddi**

- Portfolio: https://boreddi-yogeswari-portfolio.netlify.app/
- LinkedIn: https://www.linkedin.com/in/yogeswari-boreddi-2161022a7/
- GitHub: https://github.com/B-YOGESWARI
- Email: yogeswariboreddi@gmail.com

---

*Every project has a story. This is mine.*

**YOGESWARI BOREDDI — THE SERIES**
