"use client";

import { FloatingBackgroundProps, ScreenSize } from "@/types/layout.types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const FloatingBackground: React.FC<FloatingBackgroundProps> = ({
  activeSection,
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = (): void => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Enhanced particle effect with more variety
  const ParticleEffect: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-orange-500/20"
          initial={{
            x: Math.random() * screenSize.width,
            y: Math.random() * screenSize.height,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * screenSize.width,
              Math.random() * screenSize.width,
              Math.random() * screenSize.width,
            ],
            y: [
              Math.random() * screenSize.height,
              Math.random() * screenSize.height,
              Math.random() * screenSize.height,
            ],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  // Geometric shapes floating effect
  const FloatingShapes: React.FC = () => {
    const shapes: string[] = [
      "M0 0L30 0L15 30Z", // Triangle
      "M0 0H30V30H0Z", // Square
      "M15 0L30 30H0Z", // Inverted Triangle
      "M0 15C0 6.716 6.716 0 15 0C23.284 0 30 6.716 30 15C30 23.284 23.284 30 15 30C6.716 30 0 23.284 0 15Z", // Circle
    ];

    return (
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((path, i) => (
          <motion.svg
            key={`shape-${i}`}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="absolute"
            initial={{
              x: Math.random() * screenSize.width,
              y: Math.random() * screenSize.height,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * screenSize.width,
                Math.random() * screenSize.width,
              ],
              y: [
                Math.random() * screenSize.height,
                Math.random() * screenSize.height,
              ],
              rotate: [0, 360],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <path d={path} fill="currentColor" className="text-orange-500/10" />
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-0"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-gray-800/90 backdrop-blur-md" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.05),transparent_70%)]" />

      {/* Animated elements */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleEffect />
          <FloatingShapes />
        </motion.div>
      </AnimatePresence>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />
    </motion.div>
  );
};

export default FloatingBackground;
