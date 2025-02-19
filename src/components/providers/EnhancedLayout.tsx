import { EnhancedLayoutProps } from "@/types/layout.types";
import React, { useEffect, useState } from "react";
import FloatingBackground from "../common/ui/FloatingBackground";

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background relative transition-colors duration-300">
      <FloatingBackground activeSection="home" />
      <div className="relative z-10">
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default EnhancedLayout;
