export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const pink: Palette = {
  from: '#24091b',
  via: '#79164d',
  to: '#09070d',
  accent: '#ff4fa3',
};

const violet: Palette = {
  from: '#160b2b',
  via: '#492078',
  to: '#08070e',
  accent: '#b98bff',
};

const ocean: Palette = {
  from: '#061522',
  via: '#124b69',
  to: '#06090e',
  accent: '#4cc9ff',
};

const jade: Palette = {
  from: '#061b15',
  via: '#126044',
  to: '#060b09',
  accent: '#46e3a8',
};

const amber: Palette = {
  from: '#211306',
  via: '#75420d',
  to: '#0b0806',
  accent: '#ffb547',
};

const crimson: Palette = {
  from: '#250811',
  via: '#751c36',
  to: '#09070b',
  accent: '#ff6685',
};

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: string;
};

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
};

export type Certification = {
  issuer: string;
  name: string;
  link?: string;
};

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export type ProfileId =
  | 'yogeswari'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

// -----------------------------------------------------------------------------
// PROFILE
// -----------------------------------------------------------------------------

export const profile = {
  fullName: 'Yogeswari Boreddi',
  displayName: 'Yogeswari Boreddi',
  firstName: 'YOGESWARI',
  seriesTag: 'THE DEVELOPER SERIES',
  originalLabel: 'A YOGESWARI ORIGINAL',

  role: 'Business Application Developer',

  tagline: [
    'Business Application Developer',
    'Zoho Application Development',
    'Agentic AI Enthusiast',
  ],

  intro:
    'A Business Application Developer with experience building and automating business solutions using the Zoho ecosystem. Skilled in application development, workflow automation, integrations and full-stack technologies, with a growing interest in cloud infrastructure, DevOps and intelligent automation.',

  location: 'Bengaluru, Karnataka, India',
  email: 'yogeswariboreddi@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/yogeswari-boreddi-2161022a7/',
    github: 'https://github.com/B-YOGESWARI',
    portfolio: 'https://yogeswari-portfolio.netlify.app/',
  },

  resumePdf: '/assets/Yogeswari_Boreddi_Resume.pdf',

  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yogeswari Boreddi',
  },

  interests: [
    'Agentic AI',
    'Cloud Computing',
    'AWS',
    'DevOps',
    'System Design',
    'Workflow Automation',
  ],
};

// -----------------------------------------------------------------------------
// EDUCATION
// -----------------------------------------------------------------------------

export const education = [
  {
    school: 'Jawaharlal Nehru Technological University Anantapur',
    place: 'Andhra Pradesh',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2022 – 2026',
    score: '85%',
  },
  {
    school: 'Sree Bharathi Junior College',
    place: 'Piler, Andhra Pradesh',
    degree: 'Intermediate — MPC',
    period: '2020 – 2022',
    score: '60%',
  },
  {
    school: 'Z.P. Girls High School',
    place: 'Rompicherla, Andhra Pradesh',
    degree: 'Secondary School Certificate',
    period: '2016 – 2020',
    score: '98%',
  },
];

// -----------------------------------------------------------------------------
// PROFESSIONAL EXPERIENCE
// -----------------------------------------------------------------------------

export const experience = [
  {
    company: 'VSInterconnect India Pvt. Ltd.',
    role: 'Business Application Developer',
    place: 'India',
    period: 'July 2026 – Present',
    points: [
      'Develop and maintain business applications using Zoho Creator, Deluge scripting and the wider Zoho ecosystem.',
      'Work on pricing, order management, inventory, procurement and production-related business workflows.',
      'Build forms, subforms, reports, dashboards, validations and automation to support business operations.',
      'Work with Zoho APIs and integrations to connect business applications and streamline processes.',
      'Contribute to employee asset management and digital innovation management applications.',
    ],
  },
  {
    company: 'NPK Business Solutions',
    role: 'Junior Zoho Developer',
    place: 'India',
    period: 'January 2026 – June 2026',
    points: [
      'Worked on business application development using Zoho Creator and Deluge.',
      'Developed forms, workflows, reports and application logic for business requirements.',
      'Worked with Zoho CRM, Zoho Inventory and related Zoho applications.',
      'Supported application development, testing, debugging and workflow improvements.',
    ],
  },
];

// -----------------------------------------------------------------------------
// INTERNSHIPS
// -----------------------------------------------------------------------------

export const internships = [
  {
    company: 'Nirmaan Organization',
    role: 'AI and ML Intern',
    period: 'December 2025 – January 2026',
    points: [
      'Gained practical exposure to Artificial Intelligence and Machine Learning concepts.',
      'Worked on learning activities related to AI and ML applications.',
    ],
  },
  {
    company: 'Rooman Technologies',
    role: 'Java Full Stack Trainee',
    period: 'May 2025 – July 2025',
    points: [
      'Developed foundational knowledge of Java full-stack development.',
      'Worked with frontend, backend and database development concepts.',
    ],
  },
  {
    company: 'Internship Studio',
    role: 'AWS Trainee',
    period: 'February 2025 – June 2025',
    points: [
      'Gained exposure to AWS cloud concepts and cloud computing fundamentals.',
      'Learned about cloud services and deployment concepts.',
    ],
  },
];

// -----------------------------------------------------------------------------
// PROJECTS
// -----------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: 'fake-news-analysis',
    title: 'Multimodal Fake News Analysis',
    year: '2026',
    genre: 'AI • Machine Learning • NLP',
    logline:
      'A machine learning project exploring image-text similarity for multimodal fake news analysis.',
    stack: [
      'Python',
      'BERT',
      'ResNet18',
      'TensorFlow',
      'NLP',
      'Machine Learning',
    ],
    build: [
      'Developed a project exploring fake news analysis using both image and text information.',
      'Worked with BERT for text analysis and ResNet18 for image feature extraction.',
      'Explored image-text similarity for multimodal analysis.',
    ],
    features: [
      'Text analysis',
      'Image feature extraction',
      'Image-text similarity',
      'Multimodal analysis',
      'Machine learning workflow',
    ],
    metrics: [],
    palette: violet,
    motif: 'ai',
  },
  {
    id: 'personal-expenses',
    title: 'Personal Expenses Tracker',
    year: '2026',
    genre: 'Python • Full Stack',
    logline:
      'A full-stack application designed to help users track expenses and organize personal financial records.',
    stack: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'Database',
    ],
    build: [
      'Developed a personal expense tracking application using Python full-stack technologies.',
      'Created functionality for managing expenses and organizing financial records.',
      'Worked on the application interface and data management.',
    ],
    features: [
      'Expense tracking',
      'Financial record management',
      'User-friendly interface',
      'Database integration',
      'Full-stack application structure',
    ],
    metrics: [],
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'employee-feedback',
    title: 'Employee Feedback System',
    year: '2026',
    genre: 'Python • Full Stack',
    logline:
      'A web application designed for collecting, organizing and managing employee feedback.',
    stack: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'Database',
    ],
    build: [
      'Developed an employee feedback application using Python full-stack technologies.',
      'Created functionality for collecting and managing employee feedback.',
      'Worked on application workflows, user interface and data management.',
    ],
    features: [
      'Feedback collection',
      'Feedback management',
      'Employee records',
      'Database integration',
      'Web application workflows',
    ],
    metrics: [],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'crm-price-management',
    title: 'CRM and Price Management System',
    year: '2026',
    genre: 'Business Applications • Zoho',
    logline:
      'A business application designed to support customer relationship management and price management workflows.',
    stack: ['Zoho Creator', 'Deluge', 'Zoho CRM', 'REST APIs'],
    build: [
      'Developed and maintained customer and pricing-related business workflows.',
      'Created forms, reports, validations and automated processes.',
      'Implemented business logic using Deluge scripting and Zoho applications.',
    ],
    features: [
      'Customer and account management',
      'Price management workflows',
      'Forms and reports',
      'Deluge automation',
      'Business process management',
    ],
    metrics: [],
    palette: pink,
    motif: 'flow',
  },
  {
    id: 'order-management',
    title: 'Order Management Application',
    year: '2026',
    genre: 'Business Applications • Zoho',
    logline:
      'A business application designed to manage the customer journey from quotation and account creation through order processing and fulfillment.',
    stack: [
      'Zoho CRM',
      'Zoho Creator',
      'Deluge',
      'Zoho Inventory',
      'REST APIs',
    ],
    build: [
      'Designed workflows for managing customer accounts, quotations and opportunities.',
      'Supported order management processes and coordination between sales and customer service workflows.',
      'Created automation and business processes to improve order tracking.',
    ],
    features: [
      'Customer account management',
      'Quotation workflows',
      'Opportunity tracking',
      'Order processing',
      'Business workflow automation',
    ],
    metrics: [],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website Application',
    year: '2026',
    genre: 'Full Stack • Web Application',
    logline:
      'A modern e-commerce website application designed to provide a smooth product browsing and online shopping experience.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Docker',
    ],
    build: [
      'Built a responsive e-commerce user interface using modern frontend technologies.',
      'Developed product browsing and shopping workflows.',
      'Worked with database integration and containerized development environments.',
    ],
    features: [
      'Responsive user interface',
      'Product catalog',
      'Shopping workflows',
      'Database integration',
      'Docker-based development',
    ],
    metrics: [],
    palette: pink,
    motif: 'flow',
  },
  {
    id: 'donation-management',
    title: 'Donation Management System using Zoho Applications',
    year: '2026',
    genre: 'Business Applications • Zoho',
    logline:
      'A donation management application built using Zoho applications to organize donor information, donation records and automated workflows.',
    stack: [
      'Zoho Creator',
      'Deluge',
      'Zoho CRM',
      'Zoho Books',
      'Zoho Applications',
    ],
    build: [
      'Developed workflows for managing donor and donation information.',
      'Created forms and reports to organize donation records.',
      'Implemented automation and validations using Deluge scripting.',
    ],
    features: [
      'Donor management',
      'Donation record tracking',
      'Automated workflows',
      'Reports and dashboards',
      'Zoho application integration',
    ],
    metrics: [],
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'diwali-history',
    title: 'Diwali History Website',
    year: '2026',
    genre: 'Web Development • Python',
    logline:
      'An interactive website that presents the history and cultural significance of Diwali through a modern web experience.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'FastAPI',
    ],
    build: [
      'Created a website focused on presenting the history and significance of Diwali.',
      'Developed the frontend experience using modern web technologies.',
      'Worked with a Python FastAPI backend as part of the application.',
    ],
    features: [
      'Interactive web interface',
      'Diwali history content',
      'Responsive design',
      'Python backend integration',
      'Modern web experience',
    ],
    metrics: [],
    palette: amber,
    motif: 'flow',
  },
];

// -----------------------------------------------------------------------------
// ACHIEVEMENTS
// -----------------------------------------------------------------------------

export const achievements: Achievement[] = [
  {
    id: 'business-applications',
    title: 'Business Application Development',
    org: 'Professional Experience',
    detail:
      'Built and supported business applications, workflows, reports and automation using Zoho Creator and Deluge.',
  },
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    org: 'Technical Development',
    detail:
      'Developed projects using Python, web technologies, databases and modern application development tools.',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud and DevOps Learning',
    org: 'Continuous Learning',
    detail:
      'Exploring AWS, Docker, Jenkins, Kubernetes and CI/CD practices.',
  },
];

// -----------------------------------------------------------------------------
// CERTIFICATIONS
// -----------------------------------------------------------------------------

export const certifications: Certification[] = [
  {
    issuer: 'Internship Studio',
    name: 'AWS Cloud Practitioner Essentials',
  },
  {
    issuer: 'IIDT Team',
    name: 'Cyber Security Fundamentals',
  },
  {
    issuer: 'Rooman Technologies',
    name: 'Java Full Stack Development',
  },
  {
    issuer: 'IIDT Team',
    name: 'Frontend Web Development',
  },
  {
    issuer: 'TCS iON',
    name: 'Career Edge',
  },
];

// -----------------------------------------------------------------------------
// SKILLS
// -----------------------------------------------------------------------------

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Languages and problem solving',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces and web development',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Application logic and APIs',
    skills: [
      { name: 'Django', mono: 'Dj' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JSON', mono: 'Js' },
    ],
  },
  {
    id: 'zoho',
    title: 'Zoho Ecosystem',
    subtitle: 'Business applications and automation',
    skills: [
      { name: 'Zoho Creator', mono: 'ZC', note: 'Core' },
      { name: 'Deluge', mono: 'De' },
      { name: 'Zoho CRM', mono: 'Cr' },
      { name: 'Zoho Books', mono: 'Bk' },
      { name: 'Zoho Inventory', mono: 'In' },
      { name: 'Zoho Desk', mono: 'Ds' },
      { name: 'Zoho Projects', mono: 'Pr' },
      { name: 'Zoho One', mono: 'Zo' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and management',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    subtitle: 'Development and deployment tools',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Intelligent applications and workflows',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'BERT', mono: 'Be' },
      { name: 'ResNet18', mono: 'R18' },
      { name: 'Agentic AI', mono: 'AI' },
      { name: 'Workflow Automation', mono: 'Wa' },
    ],
  },
];

// -----------------------------------------------------------------------------
// SKILL EVIDENCE
// -----------------------------------------------------------------------------

export const skillEvidence: Record<string, string[]> = {
  Python: ['Full-stack and Python application development'],
  Java: ['Java Full Stack Development training'],
  JavaScript: ['Frontend and web application development'],
  React: ['Frontend development projects'],
  TypeScript: ['React and TypeScript application development'],
  Django: ['Python full-stack application development'],
  FastAPI: ['Python backend development'],
  'Zoho Creator': [
    'Business application development',
    'Workflow automation',
  ],
  Deluge: [
    'Zoho Creator workflows',
    'Business process automation',
  ],
  'Zoho CRM': ['CRM and Price Management System'],
  'Zoho Books': ['Zoho ecosystem experience'],
  'Zoho Inventory': ['Business inventory workflows'],
  PostgreSQL: ['Full-stack application development'],
  MySQL: ['Database development'],
  AWS: ['AWS Cloud Practitioner Essentials', 'AWS training'],
  Docker: ['Containerized application development'],
  Jenkins: ['DevOps learning and CI/CD'],
  Kubernetes: ['Cloud and DevOps learning'],
  'Machine Learning': ['AI and ML learning'],
  NLP: ['AI and NLP learning'],
  BERT: ['Machine learning projects'],
  ResNet18: ['Machine learning projects'],
  'Agentic AI': ['Area of professional interest'],
  'Workflow Automation': [
    'Zoho Creator business applications',
    'Deluge scripting',
  ],
  'REST APIs': ['Zoho API integrations', 'Backend development'],
  Git: ['Project development and version control'],
  GitHub: ['Project development and version control'],
};

// -----------------------------------------------------------------------------
// JOURNEY EPISODES
// -----------------------------------------------------------------------------

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2016 – 2022',
    synopsis:
      'The beginning of the learning journey, building academic foundations through school and intermediate education.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The School Years',
        description:
          'Completed secondary education at Z.P. Girls High School, Rompicherla, with 98%.',
        tags: ['SSC', '98%'],
        runtime: '2016 – 2020',
        palette: ocean,
      },
      {
        code: 'S01 E02',
        title: 'The Next Step',
        description:
          'Studied Mathematics, Physics and Chemistry at Sree Bharathi Junior College, Piler.',
        tags: ['Intermediate', 'MPC'],
        runtime: '2020 – 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Becoming an Engineer',
    period: '2022 – 2026',
    synopsis:
      'Pursued a Bachelor of Technology in Computer Science and Engineering while developing technical and software development skills.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Completed B.Tech in Computer Science and Engineering with 85%.',
        tags: ['B.Tech', 'Computer Science', '85%'],
        runtime: '2022 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Explorer',
        description:
          'Explored programming, databases, web development, cloud technologies and software engineering.',
        tags: ['Python', 'Java', 'SQL', 'Web Development'],
        runtime: 'During B.Tech',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Business Application Development',
    period: '2026 – Present',
    synopsis:
      'Developing business applications, workflows and automation using Zoho Creator and the wider Zoho ecosystem.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Zoho Developer',
        description:
          'Worked as a Junior Zoho Developer and developed business applications using Zoho Creator and Deluge.',
        tags: ['Zoho Creator', 'Deluge', 'Business Applications'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Business Application Developer',
        description:
          'Continuing to build and support business applications, automation and integrations.',
        tags: ['Zoho', 'Automation', 'Business Applications'],
        runtime: '2026 – Present',
        palette: pink,
      },
    ],
  },
  {
    number: 4,
    title: 'The Next Chapter',
    period: 'Now Building',
    synopsis:
      'Continuing to grow across business application development, cloud technologies, DevOps and intelligent automation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Beyond Applications',
        description:
          'Exploring AWS, Docker, Jenkins, Kubernetes, CI/CD and cloud deployment.',
        tags: ['AWS', 'Docker', 'DevOps'],
        runtime: 'Ongoing',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'Intelligent Automation',
        description:
          'Exploring Agentic AI and intelligent workflow automation.',
        tags: ['Agentic AI', 'Automation'],
        runtime: 'Ongoing',
        palette: pink,
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// TOP PICKS
// -----------------------------------------------------------------------------

export const topPicks: TopPick[] = [
  {
    label: 'Business Applications',
    title: 'CRM & Price Management',
    detail: 'Customer and pricing business workflows',
    palette: pink,
  },
  {
    label: 'Web Application',
    title: 'E-Commerce Website',
    detail: 'Modern online shopping application',
    palette: ocean,
  },
  {
    label: 'Business Applications',
    title: 'Donation Management',
    detail: 'Donor and donation workflow management',
    palette: amber,
  },
  {
    label: 'Professional Experience',
    title: 'Business Applications',
    detail: 'Zoho Creator, Deluge and workflow automation',
    palette: violet,
  },
  {
    label: 'Current Focus',
    title: 'Agentic AI',
    detail: 'Cloud, automation and intelligent applications',
    palette: jade,
  },
];

// -----------------------------------------------------------------------------
// CINEMATIC INTRO SLIDES
// -----------------------------------------------------------------------------

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'Meet Yogeswari.',
    lines: [
      'Business Application Developer',
      'Zoho Application Development',
      'Bengaluru, Karnataka, India',
    ],
    chips: ['Zoho', 'Automation', 'Business Applications'],
  },
  {
    kicker: 'Education',
    title: 'Computer Science.',
    lines: [
      'Bachelor of Technology — Computer Science and Engineering',
      'Jawaharlal Nehru Technological University Anantapur',
      '2022 – 2026',
    ],
    chips: ['B.Tech', '85%'],
  },
  {
    kicker: 'Professional Journey',
    title: 'Building Business Solutions.',
    lines: [
      'Junior Zoho Developer',
      'Business Application Developer',
      'Business applications and workflow automation',
    ],
    chips: ['Zoho Creator', 'Deluge', 'Business Applications'],
  },
  {
    kicker: 'Development',
    title: 'Building Applications.',
    lines: [
      'Zoho Creator and Deluge',
      'Python and modern web technologies',
      'REST APIs and workflow automation',
    ],
    chips: ['Zoho', 'Python', 'Automation', 'APIs'],
  },
  {
    kicker: 'Projects',
    title: 'Ideas Into Applications.',
    lines: [
      'CRM and Price Management System',
      'E-Commerce Website Application',
      'Donation Management System using Zoho Applications',
    ],
  },
  {
    kicker: 'Cloud & DevOps',
    title: 'Building Beyond Code.',
    lines: [
      'AWS, Docker and CI/CD',
      'Jenkins and Kubernetes',
      'Cloud technologies and deployment workflows',
    ],
    chips: ['AWS', 'Docker', 'Jenkins', 'Kubernetes'],
  },
  {
    kicker: 'Next Chapter',
    title: 'Exploring Agentic AI.',
    lines: [
      'Intelligent workflow automation',
      'AI-powered applications',
      'Continuous learning and building',
    ],
    chips: ['Agentic AI', 'Automation', 'Innovation'],
  },
];

// -----------------------------------------------------------------------------
// VIEWER PROFILES
// -----------------------------------------------------------------------------

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yogeswari',
    name: 'Yogeswari',
    blurb: 'The complete professional journey',
    color: '#ff4fa3',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, education and skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'about',
      'journey',
      'originals',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technologies and development work',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'about',
      'picks',
      'moments',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story and highlights',
    color: '#b98bff',
    order: [
      'journey',
      'picks',
      'originals',
      'about',
      'skills',
      'moments',
      'story',
    ],
  },
];

// -----------------------------------------------------------------------------
// SECTION METADATA
// -----------------------------------------------------------------------------

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Introduction • Education & experience',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Chapters • ${seasons.reduce(
      (total, season) => total + season.episodes.length,
      0,
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects`,
    palette: pink,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Featured Work',
    meta: 'Selected projects and highlights',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Technical Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'Certifications & Highlights',
    meta: `${achievements.length} Highlights • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'My Resume',
    meta: 'Professional experience • Education • Skills',
    palette: violet,
  },
};