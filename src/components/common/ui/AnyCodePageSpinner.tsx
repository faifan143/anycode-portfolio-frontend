"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AnyCodePageSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[10px] flex justify-center items-center z-50">
      <div>
        {/* Animated Logo Container */}
        <div className="relative w-36 h-36">
          {/* Logo with animation */}
          <motion.div
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))",
              }}
            />
          </motion.div>

          {/* Optional glow effect */}
          <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
        </div>
        {/* Animation styles */}
        <style jsx>{`
          @keyframes barPulse {
            0%,
            100% {
              transform: scaleY(0.5);
              opacity: 0.5;
            }
            50% {
              transform: scaleY(1.3);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AnyCodePageSpinner;
