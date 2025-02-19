// data/home-data.ts
import {
  Article,
  Course,
  HeroData,
  Media,
  Project,
  TeamMember,
} from "@/types/types";

const defaultMedia: Media = {
  id: "default-image",
  url: "/placeholder.jpg",
  alt: { ar: "صورة افتراضية", en: "Default Image" },
  mimeType: "image/jpeg",
};

export const heroData: HeroData = {
  title: {
    ar: "تطوير برمجي احترافي",
    en: "Professional Software Development",
  },
  subtitle: {
    ar: "نبني حلولاً برمجية مبتكرة للمستقبل",
    en: "Building innovative software solutions for the future",
  },
  cta: [
    {
      text: { ar: "تواصل معنا", en: "Contact Us" },
      link: "/contact",
      variant: "primary" as const,
    },
    {
      text: { ar: "مشاريعنا", en: "Our Projects" },
      link: "/projects",
      variant: "secondary" as const,
    },
  ],
};

export const statsData = {
  items: [
    {
      id: "1",
      value: "50+",
      label: { ar: "مشروع مكتمل", en: "Completed Projects" },
      icon: "ProjectIcon",
    },
    {
      id: "2",
      value: "1000+",
      label: { ar: "طالب مستفيد", en: "Students Trained" },
      icon: "StudentIcon",
    },
    {
      id: "3",
      value: "30+",
      label: { ar: "دورة تدريبية", en: "Training Courses" },
      icon: "CourseIcon",
    },
    {
      id: "4",
      value: "4",
      label: { ar: "مؤسسين محترفين", en: "Professional Founders" },
      icon: "TeamIcon",
    },
  ],
};

export const featuredTeamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "mohammad-fansa",
    name: "Mohammad AL-Faisal Fansa",
    title: "Software Engineer",
    profileImage: {
      id: "mohammad-img",
      url: "/faisal.jpg",
      alt: { ar: "محمد الفيصل فنصه", en: "Mohammad AL-Faisal Fansa" },
      mimeType: "image/jpg",
    },
    bio: {
      ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
      en: "Software engineer specialized in web and mobile development and AI applications",
    },
    role: "co-founder",
    specializations: [
      "Web Development",
      "Mobile Development",
      "System Architecture",
    ],
    skills: ["React", "Node.js", "TypeScript", "React Native", "AWS"],
    education: {
      degree: "Bachelor's Degree",
      field: "Computer Engineering",
      university: "Damascus University",
      graduationYear: 2023,
    },
    socialLinks: {
      linkedin: "https://www.facebook.com/faifan143",
      github: "https://github.com/faifan143",
      facebook: "https://www.facebook.com/faifan143",
      email: "faisalfansa.business@gmail.com",
    },
    languages: ["Arabic", "English"],
    isActive: true,
  },
  {
    id: "2",
    slug: "karam-ghareeb",
    name: "Karam Ghareeb",
    title: "Software Engineer",
    profileImage: {
      id: "karam-img",
      url: "/karam.jpg",
      alt: { ar: "كرم غريب", en: "Karam Ghareeb" },
      mimeType: "image/jpg",
    },
    bio: {
      ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
      en: "Software engineer specialized in web and mobile development and AI applications",
    },
    role: "co-founder",
    specializations: ["Web Development", "AI", "Machine Learning"],
    skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
    education: {
      degree: "Bachelor's Degree",
      field: "Computer Engineering",
      university: "Damascus University",
      graduationYear: 2023,
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/karam-ghareeb",
      github: "https://github.com/karamghareeb",
      email: "karam@anycode.dev",
    },
    languages: ["Arabic", "English"],
    isActive: true,
  },
  {
    id: "3",
    slug: "besher-hamze",
    name: "Besher Hamze",
    title: "Software Engineer",
    profileImage: {
      id: "besher-img",
      url: "/besher.jpg",
      alt: { ar: "بشر حمزه", en: "Besher Hamze" },
      mimeType: "image/jpg",
    },
    bio: {
      ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
      en: "Software engineer specialized in web and mobile development and AI applications",
    },
    role: "co-founder",
    specializations: ["Web Development", "AI", "Machine Learning"],
    skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
    education: {
      degree: "Bachelor's Degree",
      field: "Computer Engineering",
      university: "Damascus University",
      graduationYear: 2023,
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/karam-ghareeb",
      github: "https://github.com/karamghareeb",
      email: "karam@anycode.dev",
    },
    languages: ["Arabic", "English"],
    isActive: true,
  },
  {
    id: "4",
    slug: "adnan-mouslli",
    name: "Adnan Mouslli",
    title: "Software Engineer",
    profileImage: {
      id: "adnan-img",
      url: "/adnan.jpg",
      alt: { ar: "عدنان موصللي", en: "Adnan Mouslli" },
      mimeType: "image/jpg",
    },
    bio: {
      ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
      en: "Software engineer specialized in web and mobile development and AI applications",
    },
    role: "co-founder",
    specializations: ["Web Development", "AI", "Machine Learning"],
    skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
    education: {
      degree: "Bachelor's Degree",
      field: "Computer Engineering",
      university: "Damascus University",
      graduationYear: 2023,
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/karam-ghareeb",
      github: "https://github.com/karamghareeb",
      email: "karam@anycode.dev",
    },
    languages: ["Arabic", "English"],
    isActive: true,
  },
];

export const featuredProjects: Project[] = [
  {
    id: "1",
    slug: "smart-project-management",
    title: {
      ar: "نظام إدارة المشاريع الذكي",
      en: "Smart Project Management System",
    },
    summary: {
      ar: "نظام متكامل لإدارة المشاريع باستخدام الذكاء الاصطناعي",
      en: "Comprehensive project management system using AI",
    },
    description: {
      ar: "نظام إدارة مشاريع متكامل يستخدم تقنيات الذكاء الاصطناعي لتحسين الإنتاجية وتتبع التقدم",
      en: "Comprehensive project management system leveraging AI for improved productivity and progress tracking",
    },
    type: "commercial",
    category: ["enterprise", "ai"],
    technologies: ["React", "Node.js", "AI", "MongoDB"],
    features: [
      { ar: "تتبع المهام الذكي", en: "Smart Task Tracking" },
      { ar: "تحليلات متقدمة", en: "Advanced Analytics" },
    ],
    images: [defaultMedia],
    thumbnail: defaultMedia,
    team: ["1", "2"],
    client: "TechCorp Inc.",
    startDate: new Date("2024-01-01"),
    completionDate: new Date("2024-06-30"),
    status: "completed",
    githubLink: "https://github.com/anycode/smart-pm",
    demoLink: "https://demo.smartpm.anycode.dev",
  },
  {
    id: "2",
    slug: "e-learning-platform",
    title: {
      ar: "منصة التعليم الإلكتروني",
      en: "E-Learning Platform",
    },
    summary: {
      ar: "منصة تعليمية تفاعلية للدورات البرمجية",
      en: "Interactive learning platform for programming courses",
    },
    description: {
      ar: "منصة تعليم إلكتروني متكاملة تقدم دورات برمجة تفاعلية مع دعم للتعلم الذاتي",
      en: "Comprehensive e-learning platform offering interactive programming courses with self-paced learning support",
    },
    type: "commercial",
    category: ["education", "web"],
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    features: [
      { ar: "دورات تفاعلية", en: "Interactive Courses" },
      { ar: "نظام تقييم متقدم", en: "Advanced Assessment System" },
    ],
    images: [defaultMedia],
    thumbnail: defaultMedia,
    team: ["1", "2"],
    startDate: new Date("2024-03-01"),
    completionDate: new Date("2024-09-30"),
    status: "completed",
  },
];

export const currentCourses: Course[] = [
  {
    id: "1",
    slug: "react-web-development",
    title: {
      ar: "تطوير تطبيقات الويب باستخدام React",
      en: "Web Development with React",
    },
    description: {
      ar: "تعلم تطوير تطبيقات الويب الحديثة باستخدام React و Next.js",
      en: "Learn modern web development using React and Next.js",
    },
    instructor: "1",
    level: "intermediate",
    duration: 40,
    status: "ongoing",
    price: 299,
    category: ["web", "frontend"],
    technologies: ["React", "Next.js", "TypeScript"],
    thumbnail: defaultMedia,
    syllabus: [
      {
        title: { ar: "مقدمة في React", en: "Introduction to React" },
        topics: [
          { ar: "أساسيات React", en: "React Basics" },
          { ar: "Hooks و Components", en: "Hooks and Components" },
        ],
      },
    ],
    prerequisites: [
      {
        ar: "معرفة أساسية في HTML و CSS",
        en: "Basic knowledge of HTML and CSS",
      },
    ],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-04-01"),
    schedule: {
      days: ["Saturday", "Monday"],
      time: "18:00",
      timezone: "GMT+3",
    },
    enrollmentStats: {
      maxStudents: 20,
      enrolledStudents: 15,
    },
    isPublished: true,
  },
  {
    id: "2",
    slug: "flutter-mobile-development",
    title: {
      ar: "تطوير تطبيقات الموبايل باستخدام Flutter",
      en: "Mobile Development with Flutter",
    },
    description: {
      ar: "تعلم تطوير تطبيقات الموبايل لنظامي Android و iOS",
      en: "Learn mobile development for Android and iOS",
    },
    instructor: "2",
    level: "beginner",
    duration: 35,
    status: "upcoming",
    price: 349,
    category: ["mobile"],
    technologies: ["Flutter", "Dart"],
    thumbnail: defaultMedia,
    syllabus: [
      {
        title: { ar: "أساسيات Flutter", en: "Flutter Basics" },
        topics: [
          { ar: "مقدمة في Dart", en: "Introduction to Dart" },
          { ar: "واجهات المستخدم في Flutter", en: "Flutter UI" },
        ],
      },
    ],
    prerequisites: [{ ar: "لا يوجد متطلبات مسبقة", en: "No prerequisites" }],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-01"),
    schedule: {
      days: ["Sunday", "Wednesday"],
      time: "18:00",
      timezone: "GMT+3",
    },
    enrollmentStats: {
      maxStudents: 15,
      enrolledStudents: 8,
    },
    isPublished: true,
  },
];

export const featuredArticles: Article[] = [
  {
    id: "1",
    slug: "intro-to-ai-programming",
    title: {
      ar: "مقدمة في برمجة الذكاء الاصطناعي",
      en: "Introduction to AI Programming",
    },
    summary: {
      ar: "تعرف على أساسيات برمجة الذكاء الاصطناعي وتطبيقاته",
      en: "Learn the basics of AI programming and its applications",
    },
    content: {
      ar: "محتوى تفصيلي عن برمجة الذكاء الاصطناعي...",
      en: "Detailed content about AI programming...",
    },
    author: "1",
    publishDate: new Date("2025-01-15"),
    categories: ["AI", "Programming"],
    tags: ["AI", "Machine Learning", "Python"],
    thumbnail: defaultMedia,
    readingTime: 10,
    featured: true,
    status: "published",
    seo: {
      metaTitle: "Introduction to AI Programming | AnyCode",
      metaDescription:
        "Learn the fundamentals of AI programming and its real-world applications",
      keywords: ["AI", "Programming", "Machine Learning", "Python"],
    },
  },
  {
    id: "2",
    slug: "react-best-practices-2025",
    title: {
      ar: "أفضل ممارسات React في 2025",
      en: "React Best Practices in 2025",
    },
    summary: {
      ar: "دليلك الشامل لأفضل ممارسات React في عام 2025",
      en: "Your comprehensive guide to React best practices in 2025",
    },
    content: {
      ar: "محتوى تفصيلي عن أفضل ممارسات React...",
      en: "Detailed content about React best practices...",
    },
    author: "2",
    publishDate: new Date("2025-01-10"),
    categories: ["Web Development", "React"],
    tags: ["React", "JavaScript", "Frontend"],
    thumbnail: defaultMedia,
    readingTime: 15,
    featured: true,
    status: "published",
    seo: {
      metaTitle: "React Best Practices 2025 | AnyCode",
      metaDescription: "Learn the latest React best practices for 2025",
      keywords: ["React", "JavaScript", "Web Development", "Frontend"],
    },
  },
];

// data/home-data.ts
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  BookOpen,
  Code2,
  FileText,
  Newspaper,
} from "lucide-react";

export const companyInfo = {
  introTitle: "نبني المستقبل الرقمي",
  introText:
    "نحن شركة تطوير برمجيات رائدة تقدم حلولاً مبتكرة وخدمات تقنية متكاملة. نساعد عملائنا على تحقيق أهدافهم من خلال التكنولوجيا المتقدمة والخبرة المتخصصة.",
  socialLinks: [
    {
      platform: "Github",
      url: "https://github.com/yourcompany",
      icon: Github,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourcompany",
      icon: Twitter,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      icon: Linkedin,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourcompany",
      icon: Instagram,
    },
  ],
};

export const featuredSections = [
  {
    title: "من نحن",
    description: "تعرف على قصتنا وقيمنا ورؤيتنا للمستقبل",
    icon: BookOpen,
    link: "/about",
  },
  {
    title: "المشاريع",
    description: "استكشف مشاريعنا المتميزة وإنجازاتنا",
    icon: Code2,
    link: "/projects",
  },
  {
    title: "الدورات",
    description: "تصفح دوراتنا التدريبية المتخصصة",
    icon: FileText,
    link: "/courses",
  },
  {
    title: "المقالات",
    description: "اقرأ أحدث المقالات والأخبار التقنية",
    icon: Newspaper,
    link: "/articles",
  },
];
