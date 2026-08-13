export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills?: Skill[];
  tools?: { name: string; iconName: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  description: string;
  icon: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
}
