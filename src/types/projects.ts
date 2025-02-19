import { Theme } from "@emotion/react";
import { LocalizedText } from ".";

// types/projects.ts
export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  image: string;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  screenshots: string[];
}

export interface ProjectsData {
  hero: {
    badge: LocalizedText;
    title: {
      text: LocalizedText;
      highlight: LocalizedText;
    };
    description: LocalizedText;
  };
  categories: Array<{
    id: string;
    name: LocalizedText;
    icon: string;
  }>;
  projects: Project[];
  pagination: {
    itemsPerPage: number;
    buttons: {
      next: LocalizedText;
      previous: LocalizedText;
    };
  };
  ui: {
    buttons: {
      viewProject: LocalizedText;
      sourceCode: LocalizedText;
    };
    labels: {
      technologies: LocalizedText;
      screenshots: LocalizedText;
    };
  };
  theme: Theme;
}
