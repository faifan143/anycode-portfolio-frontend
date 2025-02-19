// types/home.ts
import { ContactInfo, SocialLink, LocalizedText, TeamMember } from ".";

export interface HomeFeature {
  icon: string;
  text: LocalizedText;
}

export interface CTAButton {
  text: LocalizedText;
  link: string;
  variant: "primary" | "secondary";
}

export interface HomeData {
  hero: {
    features: HomeFeature[];
    title: LocalizedText;
    subtitle: LocalizedText;
    cta: CTAButton[];
    illustration: string;
  };
  brief: {
    introTitle: LocalizedText;
    introText: LocalizedText;
  };
  stats: {
    items: Array<{
      id: string;
      value: string;
      label: LocalizedText;
      icon: string;
      suffix?: string;
    }>;
  };
  features: {
    title: LocalizedText;
    subtitle: LocalizedText;
    sections: Array<{
      title: string;
      description: string;
      icon: string;
      link: string;
    }>;
  };
  team: {
    title: LocalizedText;
    members: Array<TeamMember>;
  };
  contact: {
    title: LocalizedText;
    subtitle: LocalizedText;
    socialLinks: SocialLink[];
    contactInfo: ContactInfo;
  };
}
