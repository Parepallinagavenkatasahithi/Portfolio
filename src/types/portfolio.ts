export interface ImageConfig {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string; // CSS object-position e.g. 'center', 'top 20%', etc.
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface PersonalDetails {
  name: string;
  displayName: string;
  tagline: string;
  headline: string;
  conciseBio: string;
  fullBio: string[];
  problemSolvingPhilosophy: string;
  education: {
    degree: string;
    specialization: string;
    status: string; // "Currently Pursuing" - NEVER "Graduate"
    cgpa: string;
    highlight: string;
  };
  highlightClaim: {
    count: string;
    label: string;
    sublabel: string;
  };
  profileImage: ImageConfig;
  resumePath: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
    displayEmail: string;
  };
  stats: StatItem[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  capabilities: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export type ProjectCategory = 'all' | 'ai-ml' | 'generative-ai' | 'quantum' | 'software' | 'data-science';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured: boolean;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: ImageConfig;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  badge: string;
  stage: string;
  description: string;
  impactPoints: string[];
  image: ImageConfig;
  credentialUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image: ImageConfig;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Technical Event' | 'Workshop' | 'Team' | 'Demonstration';
  date: string;
  caption: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
  image: ImageConfig;
}

export interface PortfolioData {
  personal: PersonalDetails;
  expertise: ExpertiseItem[];
  experience: ExperienceItem[];
  featuredProjects: ProjectItem[];
  additionalProjects: ProjectItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  gallery: GalleryItem[];
}
