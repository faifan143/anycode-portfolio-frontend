export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  email: string;
}

// Company Information
export interface CompanyInfo {
  id: string;
  slug: string;
  name: string; // "AnyCode"
  logo: Media;
  description: LocalizedText;
  vision: LocalizedText;
  mission: LocalizedText;
  socialLinks: SocialLinks;
  contactInformation: {
    email: string;
    phone?: string;
    address?: string;
  };
  statistics: {
    completedProjects: number;
    totalStudents: number;
    totalCourses: number;
    publishedArticles: number;
  };
}

// Team Members
export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  profileImage: Media;
  bio: LocalizedText;
  role: "co-founder" | "developer" | "instructor";
  specializations: string[];
  skills: string[];
  education: {
    degree: string;
    field: string;
    university: string;
    graduationYear: number;
  };
  socialLinks: SocialLinks;
  languages: string[];
  isActive: boolean;
}

// Projects
export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  type: "academic" | "commercial" | "graduation";
  category: string[];
  technologies: string[];
  features: LocalizedText[];
  images: Media[];
  thumbnail: Media;
  team: string[]; // Reference to TeamMember IDs
  client?: string;
  testimonial?: {
    content: LocalizedText;
    author: string;
    position: string;
  };
  startDate: Date;
  completionDate: Date;
  status: "ongoing" | "completed";
  githubLink?: string;
  demoLink?: string;
}

// Courses
export interface Course {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  instructor: string; // Reference to TeamMember ID
  level: "beginner" | "intermediate" | "advanced";
  duration: number; // in hours
  status: "upcoming" | "ongoing" | "completed";
  price: number;
  category: string[];
  technologies: string[];
  thumbnail: Media;
  syllabus: {
    title: LocalizedText;
    topics: LocalizedText[];
  }[];
  prerequisites: LocalizedText[];
  startDate: Date;
  endDate: Date;
  schedule: {
    days: string[];
    time: string;
    timezone: string;
  };
  enrollmentStats: {
    maxStudents: number;
    enrolledStudents: number;
  };
  isPublished: boolean;
}

// Technical Articles
export interface Article {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
  author: string; // Reference to TeamMember ID
  publishDate: Date;
  modifiedDate?: Date;
  categories: string[];
  tags: string[];
  thumbnail: Media;
  readingTime: number; // in minutes
  featured: boolean;
  status: "draft" | "published" | "archived";
  relatedArticles?: string[]; // Reference to other Article IDs
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Shared Types
export interface LocalizedText {
  ar: string;
  en?: string;
}

export interface Media {
  id: string;
  url: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  mimeType: string;
  size?: number;
}

type CTAVariant = "primary" | "secondary";

export interface CTAButton {
  text: LocalizedText;
  link: string;
  variant: CTAVariant;
}

export interface HeroData {
  title: LocalizedText;
  subtitle: LocalizedText;
  cta: CTAButton[];
}

// // API Endpoints Structure
// const apiEndpoints = {
//   company: {
//     getInfo: "/api/company",
//     updateInfo: "/api/company",
//     getStats: "/api/company/stats",
//   },
//   team: {
//     list: "/api/team",
//     details: "/api/team/:id",
//     create: "/api/team",
//     update: "/api/team/:id",
//     delete: "/api/team/:id",
//   },
//   projects: {
//     list: "/api/projects",
//     details: "/api/projects/:id",
//     create: "/api/projects",
//     update: "/api/projects/:id",
//     delete: "/api/projects/:id",
//     byType: "/api/projects/type/:type",
//   },
//   courses: {
//     list: "/api/courses",
//     details: "/api/courses/:id",
//     create: "/api/courses",
//     update: "/api/courses/:id",
//     delete: "/api/courses/:id",
//     upcoming: "/api/courses/upcoming",
//     ongoing: "/api/courses/ongoing",
//   },
//   articles: {
//     list: "/api/articles",
//     details: "/api/articles/:id",
//     create: "/api/articles",
//     update: "/api/articles/:id",
//     delete: "/api/articles/:id",
//     featured: "/api/articles/featured",
//     byTag: "/api/articles/tag/:tag",
//   },
// };
