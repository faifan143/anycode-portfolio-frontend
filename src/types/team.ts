import { LocalizedText } from ".";

// types/team.ts
export interface TeamMember {
  id: string;
  name: LocalizedText;
  title: string;
  bio: LocalizedText;
  profileImage: {
    url: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    email: string;
  };
}

export interface Department {
  title: LocalizedText;
  icon: string;
  chief: {
    name: LocalizedText;
    position: LocalizedText;
    image: string;
    brief: LocalizedText;
    extendedBrief: LocalizedText;
    education: {
      degree: LocalizedText;
      university: LocalizedText;
      year: string;
    };
    experience: Array<{
      title: LocalizedText;
      company: LocalizedText;
      period: LocalizedText;
    }>;
    skills: string[];
    achievements: LocalizedText[];
    certificates: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
    socialLinks: {
      linkedin?: string;
      github?: string;
    };
  };
}

export interface TeamData {
  hero: {
    title: LocalizedText;
    description: LocalizedText;
  };
  departments: Department[];
  joinTeam: {
    title: LocalizedText;
    description: LocalizedText;
    benefits: LocalizedText[];
    positions: Array<{
      title: LocalizedText;
      type: LocalizedText;
      location: LocalizedText;
    }>;
  };
}
