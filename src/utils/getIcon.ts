import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

export const getIcon = (iconName: string): LucideIcon => {
  // Check if the icon exists in Icons
  return (
    (Icons as unknown as Record<string, LucideIcon>)[iconName] || Icons.Code
  );
};
