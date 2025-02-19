import { LocalizedText } from ".";

// types/courses.ts
export interface Course {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  duration: LocalizedText;
  level: LocalizedText;
  price: string;
  image: string;
  topics: LocalizedText[];
  features: LocalizedText[];
  startDate: string;
  instructor: {
    name: LocalizedText;
    position: LocalizedText;
    image: string;
  };
}

export interface CourseCategory {
  id: string;
  icon: string;
  title: LocalizedText;
  courses: Course[];
}

export interface CoursesData {
  hero: {
    title: LocalizedText;
    description: LocalizedText;
  };
  features: Array<{
    icon: string;
    title: LocalizedText;
    description: LocalizedText;
  }>;
  categories: CourseCategory[];
  faq: Array<{
    question: LocalizedText;
    answer: LocalizedText;
  }>;
  ui: {
    buttons: {
      details: LocalizedText;
      enroll: LocalizedText;
    };
    labels: {
      duration: LocalizedText;
      level: LocalizedText;
      price: LocalizedText;
      startDate: LocalizedText;
    };
  };
}
