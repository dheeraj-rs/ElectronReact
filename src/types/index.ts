export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  platform: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}
