import { Theme } from "@emotion/react";
import { LocalizedText } from ".";

// types/contact.ts
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactData {
  hero: {
    title: LocalizedText;
    description: LocalizedText;
    terminal: {
      welcomeText: string;
      fileName: string;
    };
  };
  contacts: Array<{
    icon: string;
    title: LocalizedText;
    info: string | LocalizedText;
    subtitle: LocalizedText;
  }>;
  office: {
    title: LocalizedText;
    address: LocalizedText;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  form: {
    title: LocalizedText;
    description: LocalizedText;
    fields: {
      name: LocalizedText;
      email: LocalizedText;
      phone: LocalizedText;
      subject: LocalizedText;
      message: LocalizedText;
    };
    button: LocalizedText;
    success: LocalizedText;
  };
  socialLinks: Array<{
    platform: string;
    icon: string;
    link: string;
    title: LocalizedText;
    description: LocalizedText;
    color: string;
  }>;
  theme: Theme;
}
