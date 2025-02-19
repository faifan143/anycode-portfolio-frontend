// types/shared.ts
export interface LocalizedText {
  ar: string;
  en: string;
}

export interface Icon {
  icon: string;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
    };
    border: {
      default: string;
      hover: string;
    };
  };
  animations?: {
    container: {
      initial: object;
      visible: {
        opacity: number;
        transition: {
          staggerChildren: number;
        };
      };
    };
    item: {
      initial: {
        opacity: number;
        y: number;
      };
      visible: {
        opacity: number;
        y: number;
        transition: {
          duration: number;
        };
      };
    };
  };
}

export interface NavbarItem {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  icon: string;
  href: string;
  items?: undefined;
}
export interface NavbarItem2 {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  icon: string;
  items: {
    id: string;
    name: {
      ar: string;
      en: string;
    };
    icon: string;
    href: string;
  }[];
  href?: undefined;
}
