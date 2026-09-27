export type StyleId = 'apple-liquid' | 'neo-brutalist-soft' | 'neo-brutalist' | 'creative-tech' | 'editorial' | 'swiss-grid';

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: string;
  description: string;
  impactMetric: string;
  impactDetail: string;
  image: string;
  tags: string[];
  status?: 'Online' | 'Development';
  projectType?: string;
  projectDomain?: string;
  caseStudyStory: {
    problem: string;
    approach: string;
    solution: string;
    results: string;
  };
  liveDemoUrl?: string;
  repoUrl?: string;
}

export interface PortfolioProfile {
  name: string;
  username: string;
  publicHandle: string;
  title: string;
  shortBio: string;
  fullBio: string;
  education: string;
  location: string;
  status: string;
  email: string;
  domain: string;
  socials: { label: string; url: string }[];
  contactLinks: {
    github: string;
    telegram: string;
    instagram: string;
    tiktok: string;
    whatsapp: string;
    whatsapp2: string;
    email: string;
    domain: string;
  };
  primaryFocus: string;
  additionalAreas: string[];
  skills: string[];
  tools: {
    design: string[];
    development: string[];
    tools: string[];
  };
  yearsExperience: number;
  completedProjects: number;
  awardsOrClients: string[];
  philosophy: string;
}

export interface StyleArchetype {
  id: StyleId;
  name: string;
  badge: string;
  tagline: string;
  bestFor: string;
  accentColor: string;
  secondaryAccent: string;
  typography: {
    display: string;
    body: string;
    description: string;
  };
  motionPhilosophy: {
    title: string;
    duration: string;
    curve: string;
    description: string;
  };
  pros: string[];
  sampleImage: string;
}

export interface AnimationSettings {
  durationMultiplier: number;
  springStiffness: number;
  springDamping: number;
  enableMagneticCursor: boolean;
  enable3DTilt: boolean;
  enableNoiseTexture: boolean;
  revealMode: 'stagger' | 'curtain' | 'fade-slide';
}
