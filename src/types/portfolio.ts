export interface SocialLinks {
  github: string;
  resume: string;
  linkedin: string;
  twitter: string;
  insta: string;
  facebook: string;
}

export interface BioData extends SocialLinks {
  name: string;
  roles: string[];
  description: string;
}

export interface SkillItem {
  name: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
  doc?: string;
}

export interface EducationItem {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface ProjectMember {
  img: string;
  name: string;
  github: string;
  linkedin: string;
}

export type ProjectCategory = 'web app' | 'android app' | 'machine learning';

export interface ProjectItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  webapp: string;
  member?: ProjectMember[];
}

export interface TimelineItem {
  year: number;
  text: string;
}

export interface ProjectModalState {
  state: boolean;
  project: ProjectItem | null;
}
