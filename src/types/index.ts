export interface Project {
  id: string;
  title: string;
  description: string;
	cover: string;
  image: string;
  repository: string;
  demo: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'other';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export type Language = 'pt' | 'en';
export type Theme = 'light' | 'dark';
