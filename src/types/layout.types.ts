import { ReactNode } from "react";

// Type definitions
export interface ScreenSize {
  width: number;
  height: number;
}

export interface FloatingBackgroundProps {
  activeSection: string;
}

export interface EnhancedLayoutProps {
  children: ReactNode;
}
