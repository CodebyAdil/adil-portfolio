import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Users,
  Rocket,
  TrendingUp,
  Target,
  Compass,
  type LucideIcon,
} from 'lucide-react';

export const personalInfo = {
  name: 'Adil Usman Saeed',
  title: 'Full-Stack Developer',
  email: 'Adil.fullstack@gmail.com',
  phone: '+92 306 6553738',
  github: 'https://github.com/CodebyAdil',
  githubHandle: 'CodebyAdil',
  linkedin: 'https://www.linkedin.com/in/adilusman/',
  linkedinHandle: 'adil-fullstack',
  availability: 'Open to: Full-time / Freelance',
  resumeUrl: '#',
};

export const heroContent = {
  headline: 'Adil Usman Saeed',
  tagline: 'Full-Stack Developer Building AI-Integrated Web Applications',
  subline: 'MERN → AI Engineering | Solving Problems First, Choosing the Stack Second',
  supportingLine:
    'I focus on the problem and the outcome, not a fixed toolset — picking whatever stack gets a reliable product into users\u2019 hands.',
};

export const aboutContent = {
  bio: `Full-stack developer who ships. Built and deployed DevHire, an AI-powered recruitment platform that cuts resume screening time by ~75% — from architecture to AI integration, solo. MERN background, now specializing in AI engineering. I pick the right tool for the problem, not the one I already know, and I learn fast when the job demands it.`,
  highlights: [
    'End-to-end product ownership',
    'Stack-agnostic by principle',
    'AI engineering specialization',
    'Production-first mindset',
  ],
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST API Design',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Mongoose (Schema Design)', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'AI / Integration',
    icon: BrainCircuit,
    skills: [
      'Claude API Integration',
      'Resume Parsing',
      'AI-Driven Screening Logic',
      'Ingredient-Based Recipe Generation',
    ],
  },
  {
    title: 'Tools & Other',
    icon: Wrench,
    skills: [
      'Multer (File Uploads)',
      'pdf-parse (Document Parsing)',
      'Git / GitHub',
      'Firebase Firestore',
      'Third-Party API Integration',
    ],
  },
  {
    title: 'Working Style',
    icon: Users,
    skills: [
      'End-to-end ownership',
      'Design → Build → Deploy',
      'Problem-first, stack-agnostic',
      'Collaborative team experience',
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  liveUrl?: string;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    role: 'Creator & Full-Stack Developer',
    company: 'DevHire — AI-Assisted Recruitment Platform',
    period: '2026 — Present',
    liveUrl: 'https://devhire-sooty.vercel.app/login',
    description:
      'The problem: Recruiters manually screening large batches of resumes lose hours to repetitive reading and inconsistent judgment calls, slowing down hiring and letting strong candidates fall through the cracks.\n\nThe solution: DevHire lets recruiters bulk-upload resumes for a job posting, then uses AI (Claude API) to parse, screen, and rank candidates against the role — cutting manual screening time and improving shortlisting efficiency by approximately 75% in testing.',
    highlights: [
      'Owned the product end-to-end: system design, backend architecture, authentication, AI integration, and iterative MVP-to-v1 rollout — not just a feature contributor.',
      'Engineered the backend with Node.js, Express, and MongoDB, including JWT-based authentication and a role-based access control system (Admin + Recruiter roles under an Organization model).',
      'Implemented resume text extraction and parsing (pdf-parse) and bulk file handling (Multer).',
      'Built MVP-first, deliberately sequencing features (auth → core upload/parse flow → RBAC/org structure) to ship working software fast and iterate rather than over-engineering upfront.',
    ],
  },
  {
    role: 'Full-Stack Developer (MERN) — Fellow',
    company: 'Bytewise Limited — Remote Fellowship',
    period: '2025',
    description:
      'Completed a remote fellowship focused on hands-on MERN stack development, working through structured, mentor-guided curriculum and practical coding assignments. Strengthened foundational and applied skills in REST API design and system understanding.',
    highlights: [
      'Hands-on MERN stack development through mentor-guided curriculum',
      'Practical coding assignments reinforcing real-world patterns',
      'Strengthened REST API design and system-level understanding',
    ],
  },
];

export type ProjectStatus = 'live' | 'in-progress' | 'placeholder';

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: 'DevHire',
    description:
      'AI-assisted recruitment platform. Recruiters bulk-upload resumes; AI parses and screens candidates, improving shortlisting efficiency by ~75%.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Claude API', 'JWT'],
    githubUrl: '#',
    liveUrl: 'https://devhire-sooty.vercel.app/login',
    status: 'live',
  },
  {
    title: 'Spotify-Style Music Streaming MVP',
    description:
      'A music streaming app MVP with playlist creation, play/pause/skip controls, search, and a persistent audio player bar across navigation.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'in-progress',
  },
  {
    title: 'AI Recipe Generator',
    description:
      'Users input the ingredients they already have at home; an AI API generates healthy, cost-optimized recipe suggestions that minimize extra grocery spend and prioritize nutritional balance.',
    techStack: ['React.js', 'Node.js', 'Express', 'Claude/OpenAI API', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'in-progress',
  },
  /*
  {
    title: 'Add Project',
    description: 'This card is ready for your next project — just update the data file.',
    techStack: [],
    githubUrl: '#',
    liveUrl: '#',
    status: 'placeholder',
  },
  {
    title: 'Add Project',
    description: 'This card is ready for your next project — just update the data file.',
    techStack: [],
    githubUrl: '#',
    liveUrl: '#',
    status: 'placeholder',
  },
  */
];

export const education = {
  degree: 'BS Information Technology',
  institution: 'PUCIT — University of the Punjab, Lahore',
  cgpa: '3.34 / 4.0',
  period: '2020 — 2025',
};

export type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const valueItems: ValueItem[] = [
  {
    title: 'End-to-End Ownership',
    description:
      'I don\u2019t wait to be handed a scoped ticket — I take a problem from "what are we solving" through architecture, build, and deployment.',
    icon: Rocket,
  },
  {
    title: 'Growth Mindset',
    description:
      'I actively pick up new stacks, APIs, and tools as needed — recent example: learning JWT auth, RBAC design, and AI API integration from scratch to ship DevHire.',
    icon: TrendingUp,
  },
  {
    title: 'Problem-First, Not Stack-Bound',
    description:
      'I choose technology based on what the problem needs, not personal preference — which means I adapt fast to a team\u2019s existing stack.',
    icon: Target,
  },
  {
    title: 'Measurable Impact',
    description:
      'DevHire\u2019s AI screening improved candidate shortlisting efficiency by ~75% in testing, showing I build for outcomes, not just working code.',
    icon: Compass,
  },
  {
    title: 'Collaborative Foundation',
    description:
      'Built practical MERN fundamentals through a mentor-guided remote fellowship at Bytewise Limited, then applied and extended that foundation independently to design and ship DevHire end-to-end.',
    icon: Users,
  },
  {
    title: 'Clear Direction',
    description:
      'Actively growing from full-stack development towards AI Engineering, aiming to be the engineer who can take an AI feature from prototype to reliable production.',
    icon: BrainCircuit,
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Contact', href: '#contact' },
];
