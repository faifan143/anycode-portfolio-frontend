import { Theme } from "@emotion/react";
import { LocalizedText } from ".";

// types/blog.ts
export interface BlogPost {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  image: string;
  readTime: LocalizedText;
  date: string;
  author: {
    name: LocalizedText;
    image: string;
  };
}

export interface BlogData {
  hero: {
    badge: LocalizedText;
    title: {
      text: LocalizedText;
      highlight: LocalizedText;
    };
    description: LocalizedText;
    search: {
      placeholder: LocalizedText;
    };
  };
  categories: Array<{
    id: string;
    name: LocalizedText;
  }>;
  posts: BlogPost[];
  pagination: {
    itemsPerPage: number;
    buttons: {
      next: LocalizedText;
      previous: LocalizedText;
    };
  };
  theme: Theme;
}
