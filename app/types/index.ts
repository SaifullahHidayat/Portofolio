export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'design' | 'open-source';
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  description: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}