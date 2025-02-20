import { CoursesData } from "@/types/courses";

export const homeData = {
  hero: {
    features: [
      {
        icon: "Code2",
        text: {
          // ar: "تطوير برمجي احترافي",
          ar: "33 الموكي حبيبي",
          en: "Professional Software Development",
        },
      },
      {
        icon: "Sparkles",
        text: {
          ar: "حلول تقنية مبتكرة",
          en: "Innovative Technical Solutions",
        },
      },
      {
        icon: "Rocket",
        text: {
          ar: "تحسين أداء المشاريع",
          en: "Project Performance Optimization",
        },
      },
    ],
    title: {
      ar: "حلول برمجية متكاملة",
      en: "Comprehensive Software Solutions",
    },
    subtitle: {
      ar: "نطور حلول تقنية مبتكرة لتحسين أداء مشاريعكم",
      en: "We develop innovative technical solutions to enhance your projects",
    },
    cta: [
      {
        text: {
          ar: "ابدأ مشروعك",
          en: "Start Your Project",
        },
        link: "/contact",
        variant: "primary",
      },
      {
        text: {
          ar: "تعرف على خدماتنا",
          en: "Explore Our Services",
        },
        link: "/services",
        variant: "secondary",
      },
    ],
    illustration: "/developer-illustration.svg",
  },

  brief: {
    introTitle: {
      ar: "من نحن",
      en: "About Us",
    },
    introText: {
      ar: "شركة رائدة في مجال تطوير البرمجيات وتقديم الحلول التقنية المتكاملة",
      en: "A leading company in software development and integrated technical solutions",
    },
  },

  stats: {
    items: [
      {
        id: "1",
        value: "150",
        label: {
          ar: "مشروع منجز",
          en: "Completed Projects",
        },
        icon: "Briefcase",
        suffix: "+",
      },
      {
        id: "2",
        value: "98",
        label: {
          ar: "عميل راضٍ",
          en: "Satisfied Clients",
        },
        icon: "Users",
        suffix: "%",
      },
      {
        id: "3",
        value: "24",
        label: {
          ar: "مطور محترف",
          en: "Professional Developers",
        },
        icon: "Code",
      },
      {
        id: "4",
        value: "5",
        label: {
          ar: "سنوات خبرة",
          en: "Years of Experience",
        },
        icon: "Target",
        suffix: "+",
      },
    ],
  },

  features: {
    title: {
      ar: "خدماتنا",
      en: "Our Services",
    },
    subtitle: {
      ar: "نقدم مجموعة متكاملة من الخدمات لتلبية احتياجاتكم التقنية",
      en: "We provide a comprehensive range of services to meet your technical needs",
    },
    sections: [
      {
        title: {
          ar: "تطبيقات الويب والموبايل",
          en: "Web & Mobile Apps",
        },
        description: {
          ar: "تطوير تطبيقات ويب وموبايل قوية باستخدام أحدث التقنيات",
          en: "Create powerful web and mobile applications with cutting-edge technologies",
        },
        icon: "Code",
        link: "/services/web-mobile",
      },
      {
        title: {
          ar: "تطبيقات الذكاء الاصطناعي",
          en: "AI Applications",
        },
        description: {
          ar: "حلول ذكية مدعومة بتقنيات الذكاء الاصطناعي المتقدمة",
          en: "Intelligent solutions powered by advanced AI technologies",
        },
        icon: "Brain",
        link: "/services/ai-ml",
      },
      {
        title: {
          ar: "الأنظمة المدمجة",
          en: "Embedded Systems",
        },
        description: {
          ar: "أنظمة تحكم وأتمتة ذكية لمختلف التطبيقات",
          en: "Smart automation and control systems for various applications",
        },
        icon: "Cloud",
        link: "/services/cloud",
      },
      {
        title: {
          ar: "الدورات والتدريب",
          en: "Training & Courses",
        },
        description: {
          ar: "برامج تطوير مهني في التقنيات الحديثة",
          en: "Professional development programs in modern technologies",
        },
        icon: "GraduationCap",
        link: "/services/training",
      },
    ],
  },

  team: [
    {
      id: "1",
      slug: "mohammad-fansa",
      name: {
        ar: "محمد الفيصل فنصه",
        en: "Mohammad AL-Faisal Fansa",
      },
      title: {
        ar: "مهندس برمجيات",
        en: "Software Engineer",
      },
      profileImage: {
        id: "mohammad-img",
        url: "/faisal.jpg",
        alt: {
          ar: "محمد الفيصل فنصه",
          en: "Mohammad AL-Faisal Fansa",
        },
        mimeType: "image/jpg",
      },
      bio: {
        ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
        en: "Software engineer specialized in web and mobile development and AI applications",
      },
      role: {
        ar: "شريك مؤسس",
        en: "co-founder",
      },
      specializations: [
        {
          ar: "تطوير الويب",
          en: "Web Development",
        },
        {
          ar: "تطوير تطبيقات الموبايل",
          en: "Mobile Development",
        },
        {
          ar: "هندسة النظم",
          en: "System Architecture",
        },
      ],
      skills: ["React", "Node.js", "TypeScript", "React Native", "AWS"],
      education: {
        degree: {
          ar: "بكالوريوس",
          en: "Bachelor's Degree",
        },
        field: {
          ar: "هندسة حاسوب",
          en: "Computer Engineering",
        },
        university: {
          ar: "جامعة دمشق",
          en: "Damascus University",
        },
        graduationYear: 2023,
      },
      socialLinks: {
        linkedin: "https://www.facebook.com/faifan143",
        github: "https://github.com/faifan143",
        facebook: "https://www.facebook.com/faifan143",
        email: "faisalfansa.business@gmail.com",
      },
      languages: [
        {
          ar: "العربية",
          en: "Arabic",
        },
        {
          ar: "الإنجليزية",
          en: "English",
        },
      ],
      isActive: true,
    },
    {
      id: "2",
      slug: "karam-ghareeb",
      name: {
        ar: "كرم غريب",
        en: "Karam Ghareeb",
      },
      title: {
        ar: "مهندس برمجيات",
        en: "Software Engineer",
      },
      profileImage: {
        id: "karam-img",
        url: "/karam.jpg",
        alt: {
          ar: "كرم غريب",
          en: "Karam Ghareeb",
        },
        mimeType: "image/jpg",
      },
      bio: {
        ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
        en: "Software engineer specialized in web and mobile development and AI applications",
      },
      role: {
        ar: "شريك مؤسس",
        en: "co-founder",
      },
      specializations: [
        {
          ar: "تطوير الويب",
          en: "Web Development",
        },
        {
          ar: "الذكاء الاصطناعي",
          en: "AI",
        },
        {
          ar: "تعلم الآلة",
          en: "Machine Learning",
        },
      ],
      skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
      education: {
        degree: {
          ar: "بكالوريوس",
          en: "Bachelor's Degree",
        },
        field: {
          ar: "هندسة حاسوب",
          en: "Computer Engineering",
        },
        university: {
          ar: "جامعة دمشق",
          en: "Damascus University",
        },
        graduationYear: 2023,
      },
      socialLinks: {
        linkedin: "https://linkedin.com/in/karam-ghareeb",
        github: "https://github.com/karamghareeb",
        email: "karam@anycode.dev",
      },
      languages: [
        {
          ar: "العربية",
          en: "Arabic",
        },
        {
          ar: "الإنجليزية",
          en: "English",
        },
      ],
      isActive: true,
    },
    {
      id: "3",
      slug: "besher-hamze",
      name: {
        ar: "بشر حمزه",
        en: "Besher Hamze",
      },
      title: {
        ar: "مهندس برمجيات",
        en: "Software Engineer",
      },
      profileImage: {
        id: "besher-img",
        url: "/besher.jpg",
        alt: {
          ar: "بشر حمزه",
          en: "Besher Hamze",
        },
        mimeType: "image/jpg",
      },
      bio: {
        ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
        en: "Software engineer specialized in web and mobile development and AI applications",
      },
      role: {
        ar: "شريك مؤسس",
        en: "co-founder",
      },
      specializations: [
        {
          ar: "تطوير الويب",
          en: "Web Development",
        },
        {
          ar: "الذكاء الاصطناعي",
          en: "AI",
        },
        {
          ar: "تعلم الآلة",
          en: "Machine Learning",
        },
      ],
      skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
      education: {
        degree: {
          ar: "بكالوريوس",
          en: "Bachelor's Degree",
        },
        field: {
          ar: "هندسة حاسوب",
          en: "Computer Engineering",
        },
        university: {
          ar: "جامعة دمشق",
          en: "Damascus University",
        },
        graduationYear: 2023,
      },
      socialLinks: {
        linkedin: "https://linkedin.com/in/besher-hamze",
        github: "https://github.com/besherhamze",
        email: "besher@anycode.dev",
      },
      languages: [
        {
          ar: "العربية",
          en: "Arabic",
        },
        {
          ar: "الإنجليزية",
          en: "English",
        },
      ],
      isActive: true,
    },
    {
      id: "4",
      slug: "adnan-mouslli",
      name: {
        ar: "عدنان موصللي",
        en: "Adnan Mouslli",
      },
      title: {
        ar: "مهندس برمجيات",
        en: "Software Engineer",
      },
      profileImage: {
        id: "adnan-img",
        url: "/adnan.jpg",
        alt: {
          ar: "عدنان موصللي",
          en: "Adnan Mouslli",
        },
        mimeType: "image/jpg",
      },
      bio: {
        ar: "مهندس برمجيات متخصص في تطوير الويب وتطبيقات الموبايل و تطبيقات الذكاء الاصطناعي",
        en: "Software engineer specialized in web and mobile development and AI applications",
      },
      role: {
        ar: "شريك مؤسس",
        en: "co-founder",
      },
      specializations: [
        {
          ar: "تطوير الويب",
          en: "Web Development",
        },
        {
          ar: "الذكاء الاصطناعي",
          en: "AI",
        },
        {
          ar: "تعلم الآلة",
          en: "Machine Learning",
        },
      ],
      skills: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
      education: {
        degree: {
          ar: "بكالوريوس",
          en: "Bachelor's Degree",
        },
        field: {
          ar: "هندسة حاسوب",
          en: "Computer Engineering",
        },
        university: {
          ar: "جامعة دمشق",
          en: "Damascus University",
        },
        graduationYear: 2023,
      },
      socialLinks: {
        linkedin: "https://linkedin.com/in/adnan-mouslli",
        github: "https://github.com/adnanmouslli",
        email: "adnan@anycode.dev",
      },
      languages: [
        {
          ar: "العربية",
          en: "Arabic",
        },
        {
          ar: "الإنجليزية",
          en: "English",
        },
      ],
      isActive: true,
    },
  ],

  contact: {
    title: {
      ar: "تواصل معنا",
      en: "Contact Us",
    },
    subtitle: {
      ar: "نحن هنا لمساعدتك. تواصل معنا عبر منصات التواصل الاجتماعي",
      en: "We're here to help. Connect with us through social media platforms",
    },
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com/anycode",
        icon: "Facebook",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/anycode",
        icon: "Twitter",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/anycode",
        icon: "Linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/anycode",
        icon: "Github",
      },
    ],
    contactInfo: {
      address: "123 Tech Street, Silicon Valley",
      phone: "+1 234 567 890",
      email: "contact@anycode.com",
    },
  },
};

export const aboutData = {
  about: {
    hero: {
      title: {
        ar: "من نحن",
        en: "About Us",
      },
      description: {
        ar: "شركة رائدة في مجال تطوير البرمجيات وتقديم الحلول التقنية المبتكرة. نجمع بين الخبرة العميقة والتقنيات الحديثة لنقدم حلولاً تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
        en: "A leading company in software development and innovative technical solutions. We combine deep expertise with modern technologies to deliver solutions that meet and exceed our clients' expectations.",
      },
    },

    companyValues: [
      {
        icon: "Target",
        title: {
          ar: "رؤيتنا",
          en: "Our Vision",
        },
        description: {
          ar: "نسعى لأن نكون الشريك الأول في رحلة التحول الرقمي والابتكار التقني",
          en: "We strive to be the premier partner in digital transformation and technical innovation",
        },
      },
      {
        icon: "Award",
        title: {
          ar: "مهمتنا",
          en: "Our Mission",
        },
        description: {
          ar: "تقديم حلول برمجية مبتكرة تساعد عملائنا على النمو والتطور في العصر الرقمي",
          en: "Providing innovative software solutions that help our clients grow and evolve in the digital age",
        },
      },
      {
        icon: "Lightbulb",
        title: {
          ar: "قيمنا",
          en: "Our Values",
        },
        description: {
          ar: "الابتكار، الجودة، الموثوقية، والتركيز على العميل",
          en: "Innovation, Quality, Reliability, and Customer Focus",
        },
      },
    ],

    timeline: {
      title: {
        ar: "رحلتنا",
        en: "Our Journey",
      },
      subtitle: {
        ar: "مسيرة النجاح والتطور المستمر",
        en: "A Journey of Continuous Success and Development",
      },
      events: [
        {
          year: "2019",
          title: {
            ar: "تأسيس الشركة",
            en: "Company Foundation",
          },
          description: {
            ar: "بداية رحلتنا في عالم التكنولوجيا",
            en: "The beginning of our journey in the technology world",
          },
        },
        {
          year: "2020",
          title: {
            ar: "توسع الفريق",
            en: "Team Expansion",
          },
          description: {
            ar: "نمو فريق العمل وتطوير المشاريع",
            en: "Growth of our team and project development",
          },
        },
        {
          year: "2021",
          title: {
            ar: "إطلاق الأكاديمية",
            en: "Academy Launch",
          },
          description: {
            ar: "بدء برامج التدريب والتطوير",
            en: "Initiation of training and development programs",
          },
        },
        {
          year: "2022",
          title: {
            ar: "توسع إقليمي",
            en: "Regional Expansion",
          },
          description: {
            ar: "افتتاح مكاتب جديدة في المنطقة",
            en: "Opening new offices in the region",
          },
        },
        {
          year: "2023",
          title: {
            ar: "شراكات عالمية",
            en: "Global Partnerships",
          },
          description: {
            ar: "بناء شراكات مع شركات عالمية",
            en: "Building partnerships with global companies",
          },
        },
      ],
    },

    techStack: {
      title: {
        ar: "تقنياتنا",
        en: "Our Technologies",
      },
      subtitle: {
        ar: "نستخدم أحدث التقنيات لتقديم حلول متطورة",
        en: "We use the latest technologies to deliver advanced solutions",
      },
      categories: {
        frontend: {
          title: {
            ar: "تقنيات الواجهة الأمامية",
            en: "Frontend Technologies",
          },
          technologies: [
            "React",
            "Next.js",
            "AngularJS",
            "TypeScript",
            "Tailwind CSS",
            "React Native",
            "Flutter",
          ],
        },
        backend: {
          title: {
            ar: "تقنيات السيرفر",
            en: "Backend Technologies",
          },
          technologies: [
            "Node.js",
            "Express.js",
            "Fastify",
            "Nest.js",
            "Python",
            "Flask",
            "Laravel",
            "Java",
            "C++",
          ],
        },
        database: {
          title: {
            ar: "قواعد البيانات",
            en: "Databases",
          },
          technologies: ["MongoDB", "PostgreSQL"],
        },
        ai: {
          title: {
            ar: "الذكاء الاصطناعي وتعلم الآلة",
            en: "AI & Machine Learning",
          },
          technologies: ["Tensorflow", "Keras", "PyTorch", "Hugging Face"],
        },
        cloud: {
          title: {
            ar: "السحابة والنشر",
            en: "Cloud & Deployment",
          },
          technologies: ["AWS", "Docker"],
        },
      },
    },

    services: {
      title: {
        ar: "خدماتنا التعليمية والإشرافية",
        en: "Our Educational & Supervisory Services",
      },
      subtitle: {
        ar: "نقدم خدمات تعليمية وإشرافية متكاملة لتطوير الكوادر والمشاريع",
        en: "We provide comprehensive educational and supervisory services for personnel and project development",
      },
      educational: [
        {
          icon: "Book",
          title: {
            ar: "دورات تدريبية احترافية",
            en: "Professional Training Courses",
          },
          description: {
            ar: "نقدم دورات متخصصة في مجالات البرمجة والتطوير بإشراف خبراء في المجال",
            en: "We offer specialized courses in programming and development under expert supervision",
          },
          features: [
            {
              ar: "تدريب عملي مكثف",
              en: "Intensive Practical Training",
            },
            {
              ar: "مشاريع حقيقية",
              en: "Real Projects",
            },
            {
              ar: "دعم مستمر",
              en: "Continuous Support",
            },
          ],
        },
      ],
      corporate: {
        title: {
          ar: "خدمات الشركات",
          en: "Corporate Services",
        },
        description: {
          ar: "نقدم خدمات متخصصة للشركات تشمل توفير مشرفين ومدراء مشاريع ذوي خبرة عالية للعمل مع فرق التطوير لديكم",
          en: "We provide specialized services for companies including experienced project managers and supervisors to work with your development teams",
        },
        icon: "Book",
        features: [
          {
            title: {
              ar: "مميزات الخدمة",
              en: "Service Features",
            },
            items: [
              {
                ar: "إدارة احترافية للمشاريع",
                en: "Professional Project Management",
              },
              {
                ar: "تحسين كفاءة فرق العمل",
                en: "Team Efficiency Improvement",
              },
              {
                ar: "ضمان جودة المخرجات",
                en: "Output Quality Assurance",
              },
            ],
          },
          {
            title: {
              ar: "نطاق العمل",
              en: "Scope of Work",
            },
            items: [
              {
                ar: "إشراف تقني متخصص",
                en: "Specialized Technical Supervision",
              },
              {
                ar: "تدريب وتطوير الفريق",
                en: "Team Training and Development",
              },
              {
                ar: "تقارير دورية عن سير العمل",
                en: "Regular Progress Reports",
              },
            ],
          },
        ],
      },
    },

    achievements: [
      {
        number: "50+",
        label: {
          ar: "عميل راضٍ",
          en: "Satisfied Clients",
        },
      },
      {
        number: "100+",
        label: {
          ar: "مشروع منجز",
          en: "Completed Projects",
        },
      },
      {
        number: "5+",
        label: {
          ar: "سنوات خبرة",
          en: "Years of Experience",
        },
      },
      {
        number: "20+",
        label: {
          ar: "مطور محترف",
          en: "Professional Developers",
        },
      },
    ],

    contact: {
      title: {
        ar: "هل لديك مشروع؟",
        en: "Have a Project?",
      },
      description: {
        ar: "نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. دعنا نبني شيئاً رائعاً معاً.",
        en: "We're here to help turn your ideas into reality. Let's build something amazing together.",
      },
      buttonText: {
        ar: "تواصل معنا",
        en: "Contact Us",
      },
    },
  },
};

export const servicesData = {
  hero: {
    badge: {
      ar: "خدماتنا التقنية",
      en: "Our Technical Services",
    },
    title: {
      text: {
        ar: "نقدم حلولاً تقنية",
        en: "We Provide Technical",
      },
      highlight: {
        ar: "متكاملة ومبتكرة",
        en: "Integrated Solutions",
      },
    },
    description: {
      ar: "نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتلبية احتياجات عملائنا وتحقيق أهدافهم",
      en: "We offer a comprehensive range of advanced technical services to meet our clients' needs and achieve their goals",
    },
  },
  mainServices: [
    {
      id: "web-mobile",
      icon: "Code",
      title: {
        ar: "تطوير الويب والموبايل",
        en: "Web & Mobile Development",
      },
      description: {
        ar: "نطور تطبيقات ويب وموبايل حديثة وتفاعلية باستخدام أحدث التقنيات",
        en: "We develop modern and interactive web & mobile applications using cutting-edge technologies",
      },
      features: [
        {
          ar: "تصميم واجهات المستخدم",
          en: "UI/UX Design",
        },
        {
          ar: "تطوير واجهات تفاعلية",
          en: "Interactive Frontends",
        },
        {
          ar: "تطوير خدمات الخلفية",
          en: "Backend Development",
        },
        {
          ar: "تطبيقات الموبايل المتقدمة",
          en: "Advanced Mobile Apps",
        },
      ],
      technologies: ["React", "Next.js", "Flutter", "Node.js", "TypeScript"],
      link: "/services/web-mobile",
    },
    {
      id: "ai-ml",
      icon: "Brain",
      title: {
        ar: "الذكاء الاصطناعي",
        en: "AI & Machine Learning",
      },
      description: {
        ar: "حلول ذكاء اصطناعي متقدمة وأنظمة تعلم آلي لتحسين وأتمتة العمليات",
        en: "Advanced AI solutions and machine learning systems to enhance and automate processes",
      },
      features: [
        {
          ar: "معالجة اللغات الطبيعية",
          en: "Natural Language Processing",
        },
        {
          ar: "الرؤية الحاسوبية",
          en: "Computer Vision",
        },
        {
          ar: "التعلم العميق",
          en: "Deep Learning",
        },
        {
          ar: "التحليل التنبؤي",
          en: "Predictive Analytics",
        },
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
      link: "/services/ai-ml",
    },
    {
      id: "cloud",
      icon: "Cloud",
      title: {
        ar: "الحلول السحابية",
        en: "Cloud Solutions",
      },
      description: {
        ar: "خدمات سحابية متكاملة وحلول استضافة متقدمة لتحسين أداء وكفاءة أعمالك",
        en: "Integrated cloud services and advanced hosting solutions to improve your business performance",
      },
      features: [
        {
          ar: "استضافة سحابية",
          en: "Cloud Hosting",
        },
        {
          ar: "تصميم البنية التحتية",
          en: "Infrastructure Design",
        },
        {
          ar: "إدارة الخدمات",
          en: "Services Management",
        },
        {
          ar: "أمن وحماية",
          en: "Security & Protection",
        },
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      link: "/services/cloud",
    },
    {
      id: "training",
      icon: "GraduationCap",
      title: {
        ar: "التدريب والتطوير",
        en: "Training & Development",
      },
      description: {
        ar: "برامج تدريبية احترافية وخدمات تطوير مهني في مجالات البرمجة والتقنية",
        en: "Professional training programs and career development services in programming and technology",
      },
      features: [
        {
          ar: "دورات برمجة متخصصة",
          en: "Specialized Programming Courses",
        },
        {
          ar: "ورش عمل تقنية",
          en: "Technical Workshops",
        },
        {
          ar: "تدريب عملي",
          en: "Practical Training",
        },
        {
          ar: "شهادات معتمدة",
          en: "Certified Certificates",
        },
      ],
      technologies: ["Web Dev", "Mobile Dev", "AI/ML", "Cloud Computing"],
      link: "/services/training",
    },
  ],
  process: {
    title: {
      ar: "منهجية العمل",
      en: "Our Process",
    },
    description: {
      ar: "نتبع منهجية عمل منظمة لضمان تقديم أفضل النتائج",
      en: "We follow an organized methodology to ensure the best results",
    },
    steps: [
      {
        icon: "Lightbulb",
        title: {
          ar: "التخطيط والتحليل",
          en: "Planning & Analysis",
        },
        description: {
          ar: "دراسة المتطلبات وتحليل الاحتياجات بدقة",
          en: "Study requirements and analyze needs carefully",
        },
      },
      {
        icon: "Pencil",
        title: {
          ar: "التصميم",
          en: "Design",
        },
        description: {
          ar: "تصميم الحلول المناسبة وتطوير النماذج الأولية",
          en: "Design appropriate solutions and develop prototypes",
        },
      },
      {
        icon: "Code2",
        title: {
          ar: "التطوير",
          en: "Development",
        },
        description: {
          ar: "تنفيذ الحلول باستخدام أحدث التقنيات",
          en: "Implement solutions using the latest technologies",
        },
      },
      {
        icon: "CheckCircle",
        title: {
          ar: "المراجعة والإطلاق",
          en: "Review & Launch",
        },
        description: {
          ar: "اختبار شامل وإطلاق المشروع",
          en: "Comprehensive testing and project launch",
        },
      },
    ],
  },
  cta: {
    title: {
      ar: "هل لديك مشروع؟",
      en: "Have a Project?",
    },
    description: {
      ar: "نحن هنا لمساعدتك في تحويل فكرتك إلى واقع. تواصل معنا لمناقشة مشروعك",
      en: "We're here to help turn your idea into reality. Contact us to discuss your project",
    },
    button: {
      text: {
        ar: "ابدأ مشروعك",
        en: "Start Your Project",
      },
      href: "/contact",
    },
  },
};

export const teamData = {
  team: {
    hero: {
      title: {
        ar: "فريقنا",
        en: "Our Team",
      },
      description: {
        ar: "نحن فريق من المحترفين المتخصصين في مجال التطوير والتقنية",
        en: "We are a team of professionals specialized in development and technology",
      },
    },
    departments: [
      {
        title: {
          ar: "قسم الفرونت ايند",
          en: "Frontend Department",
        },
        icon: "Layout",
        chief: {
          name: {
            ar: "محمد الفيصل فنصه",
            en: "Mohammed Al-Faisal Fansa",
          },
          position: {
            ar: "مدير قسم الفرونت ايند",
            en: "Frontend Department Manager",
          },
          image: "/faisal.jpg",
          brief: {
            ar: "مهندس حواسيب مختص في البرمجيات والذكاء الاصطناعي مع خبرة 3 سنوات في تطوير تطبيقات الويب والموبايل",
            en: "Computer engineer specialized in software and AI with 3 years of experience in web and mobile app development",
          },
          extendedBrief: {
            ar: "خبير في تطوير واجهات المستخدم مع تركيز خاص على تحسين تجربة المستخدم وأداء التطبيقات. قاد العديد من المشاريع الناجحة وطور حلولاً مبتكرة للعديد من التحديات التقنية.",
            en: "Expert in UI development with special focus on improving user experience and application performance. Led many successful projects and developed innovative solutions for various technical challenges.",
          },
          education: {
            degree: {
              ar: "بكالوريوس هندسة معلوماتية",
              en: "Bachelor's in Information Engineering",
            },
            university: {
              ar: "جامعة حلب",
              en: "University of Aleppo",
            },
            year: "2022",
          },
          experience: [
            {
              title: {
                ar: "مطور واجهات أمامية",
                en: "Frontend Developer",
              },
              company: {
                ar: "شركة تقنية",
                en: "Tech Company",
              },
              period: {
                ar: "2022 - الآن",
                en: "2022 - Present",
              },
            },
            {
              title: {
                ar: "متدرب مطور ويب",
                en: "Web Developer Intern",
              },
              company: {
                ar: "شركة برمجيات",
                en: "Software Company",
              },
              period: {
                ar: "2021 - 2022",
                en: "2021 - 2022",
              },
            },
          ],
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Flutter",
            "React Native",
          ],
          achievements: [
            {
              ar: "قيادة فريق من 5 مطورين",
              en: "Leading a team of 5 developers",
            },
            {
              ar: "تطوير أكثر من 10 مشاريع ناجحة",
              en: "Developed over 10 successful projects",
            },
            {
              ar: "تحسين أداء التطبيقات بنسبة 40%",
              en: "Improved application performance by 40%",
            },
          ],
          certificates: [
            {
              name: "React Advanced Developer",
              issuer: "Meta",
              year: "2023",
            },
            {
              name: "AWS Certified Developer",
              issuer: "Amazon",
              year: "2023",
            },
          ],
          socialLinks: {
            linkedin: "#",
            github: "#",
          },
        },
      },
      {
        title: {
          ar: "قسم الباك ايند",
          en: "Backend Department",
        },
        icon: "Server",
        chief: {
          name: {
            ar: "محمد بشر حمزه",
            en: "Mohammed Besher Hamza",
          },
          position: {
            ar: "مدير قسم الباك اند",
            en: "Backend Department Manager",
          },
          image: "/besher.jpg",
          brief: {
            ar: "مهندس برمجيات متخصص في تطوير الخدمات الخلفية وقواعد البيانات مع خبرة في تصميم وتطوير API",
            en: "Software engineer specialized in backend services and databases with experience in API design and development",
          },
          skills: [
            "Node.js",
            "Python",
            "PostgreSQL",
            "Docker",
            "Nest.js",
            "MongoDB",
          ],
          achievements: [
            {
              ar: "تطوير بنية تحتية قوية للمشاريع",
              en: "Developed robust infrastructure for projects",
            },
            {
              ar: "تحسين أداء قواعد البيانات بنسبة 50%",
              en: "Improved database performance by 50%",
            },
          ],
          certificates: [
            {
              name: "Node.js Advanced Developer",
              issuer: "Node.js Foundation",
              year: "2023",
            },
          ],
          socialLinks: {
            linkedin: "#",
            github: "#",
          },
        },
      },
    ],
    joinTeam: {
      title: {
        ar: "انضم إلى فريقنا",
        en: "Join Our Team",
      },
      description: {
        ar: "نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا",
        en: "We're always looking for exceptional talent to join our team",
      },
      benefits: [
        {
          ar: "بيئة عمل مرنة",
          en: "Flexible Work Environment",
        },
        {
          ar: "فرص تعلم مستمرة",
          en: "Continuous Learning Opportunities",
        },
        {
          ar: "مشاريع متنوعة",
          en: "Diverse Projects",
        },
        {
          ar: "تأمين صحي شامل",
          en: "Comprehensive Health Insurance",
        },
      ],
      positions: [
        {
          title: {
            ar: "مطور واجهات أمامية",
            en: "Frontend Developer",
          },
          type: {
            ar: "دوام كامل",
            en: "Full Time",
          },
          location: {
            ar: "حلب",
            en: "Aleppo",
          },
        },
        {
          title: {
            ar: "مهندس برمجيات",
            en: "Software Engineer",
          },
          type: {
            ar: "دوام كامل",
            en: "Full Time",
          },
          location: {
            ar: "حلب",
            en: "Aleppo",
          },
        },
      ],
    },
  },
};

export const contactData = {
  hero: {
    title: {
      ar: "تواصل معنا",
      en: "Contact Us",
    },
    description: {
      ar: "نحن هنا لمساعدتك. تواصل معنا في أي وقت للحصول على المساعدة والدعم",
      en: "We're here to help. Contact us anytime for assistance and support",
    },
    terminal: {
      welcomeText: "<AnyCode /> Contact +963 998 419 869",
      fileName: "contact.tsx",
    },
  },
  contacts: [
    {
      icon: "Phone",
      title: {
        ar: "اتصل بنا",
        en: "Call Us",
      },
      info: "+963 934 567 890",
      subtitle: {
        ar: "متاحون للمساعدة",
        en: "Available for support",
      },
    },
    {
      icon: "Mail",
      title: {
        ar: "راسلنا",
        en: "Email Us",
      },
      info: "info@company.com",
      subtitle: {
        ar: "نرد خلال 24 ساعة",
        en: "We reply within 24 hours",
      },
    },
    {
      icon: "MapPin",
      title: {
        ar: "موقعنا",
        en: "Our Location",
      },
      info: {
        ar: "حلب، سوريا",
        en: "Aleppo, Syria",
      },
      subtitle: {
        ar: "نزلة الهندسة",
        en: "Engineering District",
      },
    },
    {
      icon: "Clock",
      title: {
        ar: "ساعات العمل",
        en: "Working Hours",
      },
      info: {
        ar: "من التاسعة صباحاً حتى الخامسة مساءاً",
        en: "9:00 AM - 5:00 PM",
      },
      subtitle: {
        ar: "السبت - الخميس",
        en: "Saturday - Thursday",
      },
    },
  ],
  office: {
    title: {
      ar: "المكتب الرئيسي",
      en: "Main Office",
    },
    address: {
      ar: "حلب، سوريا - نزلة الهندسة",
      en: "Aleppo, Syria - Engineering District",
    },
    coordinates: {
      lat: 36.206223,
      lng: 37.135382,
    },
  },
  form: {
    title: {
      ar: "أرسل رسالة",
      en: "Send a Message",
    },
    description: {
      ar: "املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن",
      en: "Fill out the form below and we'll get back to you as soon as possible",
    },
    fields: {
      name: {
        ar: "الاسم الكامل",
        en: "Full Name",
      },
      email: {
        ar: "البريد الإلكتروني",
        en: "Email Address",
      },
      phone: {
        ar: "رقم الهاتف",
        en: "Phone Number",
      },
      subject: {
        ar: "الموضوع",
        en: "Subject",
      },
      message: {
        ar: "الرسالة",
        en: "Message",
      },
    },
    button: {
      ar: "إرسال الرسالة",
      en: "Send Message",
    },
    success: {
      ar: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً",
      en: "Your message has been sent successfully. We'll contact you soon",
    },
  },
  socialLinks: [
    {
      platform: "Github",
      icon: "Github",
      link: "#",
      title: {
        ar: "Github",
        en: "Github",
      },
      description: {
        ar: "تصفح مشاريعنا مفتوحة المصدر",
        en: "Browse our open-source projects",
      },
      color: "group-hover:text-[#6e5494]",
    },
    {
      platform: "Twitter",
      icon: "Twitter",
      link: "#",
      title: {
        ar: "Twitter",
        en: "Twitter",
      },
      description: {
        ar: "تابع آخر تحديثاتنا",
        en: "Follow our latest updates",
      },
      color: "group-hover:text-[#1DA1F2]",
    },
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      link: "#",
      title: {
        ar: "LinkedIn",
        en: "LinkedIn",
      },
      description: {
        ar: "تواصل معنا مهنياً",
        en: "Connect with us professionally",
      },
      color: "group-hover:text-[#0A66C2]",
    },
    {
      platform: "Instagram",
      icon: "Instagram",
      link: "#",
      title: {
        ar: "Instagram",
        en: "Instagram",
      },
      description: {
        ar: "شاهد إبداعاتنا",
        en: "See our creations",
      },
      color: "group-hover:text-[#E4405F]",
    },
  ],
  theme: {
    colors: {
      primary: "#FF5722",
      secondary: "#151923",
      background: "#0B0F1A",
      border: "gray-800",
      text: {
        primary: "white",
        secondary: "gray-400",
      },
    },
    terminal: {
      background: "#1E2433",
      header: "#151923",
    },
  },
};

export const blogsData = {
  blog: {
    hero: {
      badge: {
        ar: "مدونة المعرفة التقنية",
        en: "Tech Knowledge Blog",
      },
      title: {
        text: {
          ar: "اكتشف آخر المقالات في عالم",
          en: "Discover Latest Articles in",
        },
        highlight: {
          ar: "التقنية والبرمجة",
          en: "Technology and Programming",
        },
      },
      description: {
        ar: "مقالات تقنية شاملة، تجارب عملية، ودروس تعليمية في مختلف مجالات التقنية",
        en: "Comprehensive technical articles, practical experiences, and tutorials in various tech fields",
      },
      search: {
        placeholder: {
          ar: "ابحث عن مقالات...",
          en: "Search articles...",
        },
      },
    },
    categories: [
      {
        id: "all",
        name: {
          ar: "جميع المقالات",
          en: "All Articles",
        },
      },
      {
        id: "programming",
        name: {
          ar: "البرمجة",
          en: "Programming",
        },
      },
      {
        id: "tech",
        name: {
          ar: "التقنية",
          en: "Technology",
        },
      },
      {
        id: "ai",
        name: {
          ar: "الذكاء الاصطناعي",
          en: "Artificial Intelligence",
        },
      },
      {
        id: "web",
        name: {
          ar: "تطوير الويب",
          en: "Web Development",
        },
      },
    ],
    posts: [
      {
        id: 1,
        title: {
          ar: "مستقبل الذكاء الاصطناعي في 2024",
          en: "The Future of AI in 2024",
        },
        description: {
          ar: "نظرة عميقة على تطورات الذكاء الاصطناعي وتأثيره على المستقبل",
          en: "A deep look at AI developments and its impact on the future",
        },
        category: "ai",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        readTime: {
          ar: "5 دقائق",
          en: "5 minutes",
        },
        date: "2024-01-15",
        author: {
          name: {
            ar: "أحمد محمد",
            en: "Ahmed Mohammed",
          },
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        },
      },
      {
        id: 2,
        title: {
          ar: "تعلم React.js في 2024",
          en: "Learning React.js in 2024",
        },
        description: {
          ar: "دليل شامل لتعلم React.js للمبتدئين مع أفضل الممارسات",
          en: "Comprehensive guide to learning React.js for beginners with best practices",
        },
        category: "programming",
        image:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800",
        readTime: {
          ar: "10 دقائق",
          en: "10 minutes",
        },
        date: "2024-01-10",
        author: {
          name: {
            ar: "سارة أحمد",
            en: "Sarah Ahmed",
          },
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        },
      },
    ],
    pagination: {
      itemsPerPage: 6,
      buttons: {
        next: {
          ar: "التالي",
          en: "Next",
        },
        previous: {
          ar: "السابق",
          en: "Previous",
        },
      },
    },
    theme: {
      colors: {
        primary: "orange-500",
        secondary: "#1c1e26",
        background: "transparent",
        text: {
          primary: "white",
          secondary: "gray-400",
        },
        border: {
          default: "gray-800",
          hover: "orange-500/50",
        },
      },
      animations: {
        container: {
          initial: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        },
        item: {
          initial: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        },
      },
    },
  },
};

export const coursesData: CoursesData = {
  hero: {
    title: {
      ar: "دورات متخصصة وتدريب احترافي",
      en: "Specialized Courses and Professional Training",
    },
    description: {
      ar: "تعلم أحدث التقنيات وأفضل الممارسات في مجال البرمجة وتطوير البرمجيات",
      en: "Learn the latest technologies and best practices in programming and software development",
    },
  },
  features: [
    {
      icon: "Code",
      title: {
        ar: "تعلم عملي",
        en: "Practical Learning",
      },
      description: {
        ar: "تدريب عملي مع مشاريع حقيقية",
        en: "Hands-on training with real projects",
      },
    },
    {
      icon: "Brain",
      title: {
        ar: "خبراء متخصصون",
        en: "Expert Specialists",
      },
      description: {
        ar: "مدربون ذوو خبرة في المجال",
        en: "Experienced field trainers",
      },
    },
    {
      icon: "Book",
      title: {
        ar: "مرونة في التعلم",
        en: "Flexible Learning",
      },
      description: {
        ar: "جداول مرنة تناسب وقتك",
        en: "Flexible schedules that suit your time",
      },
    },
    {
      icon: "Cloud",
      title: {
        ar: "دعم مستمر",
        en: "Continuous Support",
      },
      description: {
        ar: "دعم فني وأكاديمي على مدار الساعة",
        en: "24/7 technical and academic support",
      },
    },
  ],
  categories: [
    {
      id: "frontend",
      icon: "Layout",
      title: {
        ar: "تطوير فرونت اند",
        en: "Frontend Development",
      },
      courses: [
        {
          id: "react-advanced",
          title: {
            ar: "React.js المستوى المتقدم",
            en: "Advanced React.js",
          },
          description: {
            ar: "تعلم تطوير تطبيقات الويب التفاعلية باستخدام React.js",
            en: "Learn to develop interactive web applications using React.js",
          },
          duration: {
            ar: "12 أسبوع",
            en: "12 weeks",
          },
          level: {
            ar: "متقدم",
            en: "Advanced",
          },
          price: "500$",
          image: "/courses/react-course.jpg",
          topics: [
            {
              ar: "React Hooks المتقدمة",
              en: "Advanced React Hooks",
            },
            {
              ar: "إدارة الحالة مع Redux",
              en: "State Management with Redux",
            },
            {
              ar: "أداء وتحسين التطبيق",
              en: "Performance and Optimization",
            },
            {
              ar: "اختبار التطبيقات",
              en: "Application Testing",
            },
          ],
          features: [
            {
              ar: "مشاريع عملية",
              en: "Practical Projects",
            },
            {
              ar: "شهادة معتمدة",
              en: "Certified Certificate",
            },
            {
              ar: "دعم مباشر",
              en: "Direct Support",
            },
            {
              ar: "مصادر تعليمية",
              en: "Educational Resources",
            },
          ],
          startDate: "2025-02-15",
          instructor: {
            name: {
              ar: "محمد الفيصل فنصه",
              en: "Mohammed Al-Faisal Fansa",
            },
            position: {
              ar: "مطور واجهات أمامية رئيسي",
              en: "Senior Frontend Developer",
            },
            image: "/faisal.jpg",
          },
        },
      ],
    },
    {
      id: "backend",
      icon: "Server",
      title: {
        ar: "تطوير باك اند",
        en: "Backend Development",
      },
      courses: [
        {
          id: "nodejs-express",
          title: {
            ar: "Node.js & Express.js",
            en: "Node.js & Express.js",
          },
          description: {
            ar: "بناء خدمات الويب وواجهات برمجة التطبيقات REST",
            en: "Building web services and REST APIs",
          },
          duration: {
            ar: "10 أسابيع",
            en: "10 weeks",
          },
          level: {
            ar: "متوسط",
            en: "Intermediate",
          },
          price: "450$",
          image: "/courses/express-course.jpeg",
          topics: [
            {
              ar: "أساسيات Node.js",
              en: "Node.js Fundamentals",
            },
            {
              ar: "بناء RESTful APIs",
              en: "Building RESTful APIs",
            },
            {
              ar: "قواعد البيانات NoSQL",
              en: "NoSQL Databases",
            },
            {
              ar: "أمان التطبيقات",
              en: "Application Security",
            },
          ],
          features: [
            {
              ar: "مشاريع عملية",
              en: "Practical Projects",
            },
            {
              ar: "شهادة معتمدة",
              en: "Certified Certificate",
            },
            {
              ar: "دعم مباشر",
              en: "Direct Support",
            },
            {
              ar: "مصادر تعليمية",
              en: "Educational Resources",
            },
          ],
          startDate: "2025-02-15",
          instructor: {
            name: {
              ar: "محمد بشر",
              en: "Mohammed Besher",
            },
            position: {
              ar: "مهندس برمجيات أول",
              en: "Senior Software Engineer",
            },
            image: "/besher.jpg",
          },
        },
      ],
    },
  ],
  faq: [
    {
      question: {
        ar: "هل أحتاج إلى خبرة سابقة؟",
        en: "Do I need prior experience?",
      },
      answer: {
        ar: "يختلف ذلك حسب الدورة. بعض الدورات تتطلب معرفة أساسية بالبرمجة، بينما تناسب دورات أخرى المبتدئين.",
        en: "It varies by course. Some courses require basic programming knowledge, while others are suitable for beginners.",
      },
    },
    {
      question: {
        ar: "كيف يتم التدريب؟",
        en: "How is the training conducted?",
      },
      answer: {
        ar: "يتم التدريب بشكل مباشر في مقر الشركة، مع إمكانية الحضور عن بعد في بعض الدورات.",
        en: "Training is conducted on-site at our company, with remote attendance options available for some courses.",
      },
    },
    {
      question: {
        ar: "هل أحصل على شهادة؟",
        en: "Will I receive a certificate?",
      },
      answer: {
        ar: "نعم، تحصل على شهادة معتمدة بعد إتمام الدورة بنجاح.",
        en: "Yes, you will receive a certified certificate upon successful completion of the course.",
      },
    },
  ],
  ui: {
    buttons: {
      details: {
        ar: "عرض التفاصيل",
        en: "View Details",
      },
      enroll: {
        ar: "سجل الآن",
        en: "Enroll Now",
      },
    },
    labels: {
      duration: {
        ar: "المدة",
        en: "Duration",
      },
      level: {
        ar: "المستوى",
        en: "Level",
      },
      price: {
        ar: "السعر",
        en: "Price",
      },
      startDate: {
        ar: "تاريخ البدء",
        en: "Start Date",
      },
    },
  },
} as const;

export const projectsData = {
  projects: {
    hero: {
      badge: {
        ar: "معرض المشاريع التقنية",
        en: "Technical Projects Gallery",
      },
      title: {
        text: {
          ar: "تصفح مجموعة من",
          en: "Browse Our Collection of",
        },
        highlight: {
          ar: "المشاريع الاحترافية",
          en: "Professional Projects",
        },
      },
      description: {
        ar: "مشاريع متنوعة تم تطويرها باستخدام أحدث التقنيات في مجال البرمجة وتطوير الويب",
        en: "Diverse projects developed using the latest technologies in programming and web development",
      },
    },
    categories: [
      {
        id: "all",
        name: {
          ar: "جميع المشاريع",
          en: "All Projects",
        },
        icon: "Layers",
      },
      {
        id: "web",
        name: {
          ar: "تطبيقات الويب",
          en: "Web Applications",
        },
        icon: "Globe",
      },
      {
        id: "mobile",
        name: {
          ar: "تطبيقات الموبايل",
          en: "Mobile Applications",
        },
        icon: "Phone",
      },
      {
        id: "ecommerce",
        name: {
          ar: "متاجر إلكترونية",
          en: "E-commerce",
        },
        icon: "ShoppingBag",
      },
      {
        id: "dashboard",
        name: {
          ar: "لوحات تحكم",
          en: "Dashboards",
        },
        icon: "PieChart",
      },
    ],
    projects: [
      {
        id: "1",
        title: {
          ar: "منصة تعليمية متكاملة",
          en: "Integrated Learning Platform",
        },
        description: {
          ar: "منصة تعليمية تفاعلية للتعلم عن بعد مع نظام إدارة محتوى متكامل ونظام امتحانات",
          en: "Interactive e-learning platform with integrated content management and examination system",
        },
        category: "web",
        image:
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "MongoDB",
          "Socket.io",
        ],
        links: {
          live: "https://example.com",
          github: "https://github.com",
        },
        screenshots: [
          "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800",
          "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        ],
      },
      {
        id: "2",
        title: {
          ar: "نظام إدارة المشاريع",
          en: "Project Management System",
        },
        description: {
          ar: "نظام متكامل لإدارة المشاريع والمهام مع لوحة تحكم تفاعلية وتتبع الوقت",
          en: "Comprehensive project management system with interactive dashboard and time tracking",
        },
        category: "dashboard",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        technologies: [
          "React",
          "Redux",
          "Express",
          "PostgreSQL",
          "Docker",
          "Redis",
        ],
        links: {
          live: "https://example.com",
          github: "https://github.com",
        },
        screenshots: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
          "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800",
        ],
      },
    ],
    pagination: {
      itemsPerPage: 4,
      buttons: {
        next: {
          ar: "التالي",
          en: "Next",
        },
        previous: {
          ar: "السابق",
          en: "Previous",
        },
      },
    },
    ui: {
      buttons: {
        viewProject: {
          ar: "عرض المشروع",
          en: "View Project",
        },
        sourceCode: {
          ar: "الكود المصدري",
          en: "Source Code",
        },
      },
      labels: {
        technologies: {
          ar: "التقنيات المستخدمة",
          en: "Technologies Used",
        },
        screenshots: {
          ar: "صور المشروع",
          en: "Project Screenshots",
        },
      },
    },
    theme: {
      colors: {
        primary: "orange-500",
        secondary: "#1c1e26",
        background: "transparent",
        text: {
          primary: "white",
          secondary: "gray-400",
        },
        border: {
          default: "gray-800",
          hover: "orange-500/50",
        },
      },
      animations: {
        container: {
          initial: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        },
        item: {
          initial: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        },
      },
    },
  },
};

export const floatingContactData = {
  buttons: {
    close: {
      ar: "إغلاق",
      en: "Close",
    },
    contact: {
      ar: "اتصل بنا",
      en: "Contact Us",
    },
  },
  contacts: [
    {
      id: "email",
      type: "email",
      icon: "Mail",
      title: {
        ar: "البريد الإلكتروني",
        en: "Email",
      },
      value: "contact@anycode.dev",
      link: "mailto:contact@anycode.dev",
    },
    {
      id: "whatsapp",
      type: "whatsapp",
      icon: "MessageCircle",
      title: {
        ar: "واتساب",
        en: "WhatsApp",
      },
      value: "+123 456 789",
      link: "https://wa.me/123456789",
    },
    {
      id: "phone",
      type: "phone",
      icon: "Phone",
      title: {
        ar: "اتصل بنا",
        en: "Call Us",
      },
      value: "+123 456 789",
      link: "tel:+123456789",
    },
  ],
  socialLinks: [
    {
      id: "github",
      icon: "Github",
      link: "https://github.com/yourusername",
      title: {
        ar: "جيثب",
        en: "GitHub",
      },
    },
    {
      id: "twitter",
      icon: "Twitter",
      link: "https://twitter.com/yourusername",
      title: {
        ar: "تويتر",
        en: "Twitter",
      },
    },
  ],
  images: {
    logo: "/logo_white.png",
  },
};

export const navigationData = {
  brand: {
    logo: {
      text: {
        ar: "أني كود",
        en: "<AnyCode />",
      },
    },
  },
  navigation: {
    main: [
      {
        id: "home",
        name: {
          ar: "رئيسية",
          en: "Home",
        },
        icon: "HomeIcon",
        href: "/",
      },
      {
        id: "about",
        name: {
          ar: "عن الشركة",
          en: "About",
        },
        icon: "InfoIcon",
        href: "/about",
      },
      {
        id: "services",
        name: {
          ar: "خدماتنا",
          en: "Services",
        },
        icon: "Settings",
        href: "/services",
      },
      {
        id: "team",
        name: {
          ar: "فريقنا",
          en: "Team",
        },
        icon: "Users",
        href: "/team",
      },
      {
        id: "contact",
        name: {
          ar: "التواصل",
          en: "Contact",
        },
        icon: "Mail",
        href: "/contact",
      },
      {
        id: "more",
        name: {
          ar: "المزيد",
          en: "More",
        },
        icon: "LayoutGrid",
        items: [
          {
            id: "courses",
            name: {
              ar: "الدورات و التدريبات",
              en: "Courses",
            },
            icon: "BookOpen",
            href: "/courses",
          },
          {
            id: "projects",
            name: {
              ar: "المشاريع",
              en: "Projects",
            },
            icon: "FileCode2",
            href: "/projects",
          },
          {
            id: "blog",
            name: {
              ar: "المقالات",
              en: "Blog",
            },
            icon: "BookMarked",
            href: "/blog",
          },
        ],
      },
    ],
  },
  buttons: {
    logout: {
      ar: "تسجيل خروج",
      en: "Logout",
    },
    menu: {
      open: {
        ar: "فتح القائمة",
        en: "Open Menu",
      },
      close: {
        ar: "إغلاق القائمة",
        en: "Close Menu",
      },
    },
  },
};

export const footerData = {
  brand: {
    logo: {
      text: {
        ar: "أني كود",
        en: "AnyCode",
      },
    },
    description: {
      ar: "نقدم حلولاً تقنية متكاملة تلبي احتياجات عملائنا في عالم رقمي متطور",
      en: "We provide integrated technical solutions that meet our clients' needs in an evolving digital world",
    },
  },
  quickLinks: {
    buttons: {
      docs: {
        text: {
          ar: "الوثائق التقنية",
          en: "Technical Docs",
        },
        href: "/docs",
      },
      support: {
        text: {
          ar: "الدعم الفني",
          en: "Technical Support",
        },
        href: "/support",
      },
    },
  },
  sections: [
    {
      title: {
        ar: "خدماتنا",
        en: "Our Services",
      },
      links: [
        {
          name: {
            ar: "تطوير الويب",
            en: "Web Development",
          },
          href: "/services/web",
        },
        {
          name: {
            ar: "تطوير الموبايل",
            en: "Mobile Development",
          },
          href: "/services/mobile",
        },
        {
          name: {
            ar: "الذكاء الاصطناعي",
            en: "AI",
          },
          href: "/services/ai",
        },
        {
          name: {
            ar: "الحلول السحابية",
            en: "Cloud Solutions",
          },
          href: "/services/cloud",
        },
      ],
    },
    {
      title: {
        ar: "الشركة",
        en: "Company",
      },
      links: [
        {
          name: {
            ar: "من نحن",
            en: "About Us",
          },
          href: "/about",
        },
        {
          name: {
            ar: "فريق العمل",
            en: "Team",
          },
          href: "/team",
        },
        {
          name: {
            ar: "الوظائف",
            en: "Careers",
          },
          href: "/careers",
        },
        {
          name: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          href: "/contact",
        },
      ],
    },
    {
      title: {
        ar: "المصادر",
        en: "Resources",
      },
      links: [
        {
          name: {
            ar: "المدونة",
            en: "Blog",
          },
          href: "/blog",
        },
        {
          name: {
            ar: "المشاريع",
            en: "Projects",
          },
          href: "/projects",
        },
        {
          name: {
            ar: "الأسئلة الشائعة",
            en: "FAQ",
          },
          href: "/faq",
        },
        {
          name: {
            ar: "سياسة الخصوصية",
            en: "Privacy Policy",
          },
          href: "/privacy",
        },
      ],
    },
  ],
  copyright: {
    text: {
      ar: "جميع الحقوق محفوظة",
      en: "All rights reserved",
    },
  },
};
