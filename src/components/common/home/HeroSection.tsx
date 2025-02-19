"use client";

import { homeData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center  bg-transparent">
      {/* Background Elements with Logo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Logo Background */}
        <div className="absolute left-0 top-[180px] -translate-y-1/2 w-[400px] h-[400px] opacity-[0.03] -rotate-12">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-right order-2 md:order-1"
          >
            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {homeData.hero.features.map((feature, index) => {
                const Icon = getIcon(feature.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center justify-end gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-gray-200">{feature.text.ar}</span>
                    <Icon className="w-5 h-5 text-orange-500" />
                  </motion.div>
                );
              })}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {homeData.hero.title.ar}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              {homeData.hero.subtitle.ar}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-4"
            >
              {homeData.hero.cta.map((button, index) => (
                <Link key={index} href={button.link}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-3 px-8 py-4 rounded-xl font-medium
                      transition-all duration-300 backdrop-blur-sm
                      ${
                        button.variant === "primary"
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20"
                          : "border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:bg-orange-500/10"
                      }
                    `}
                  >
                    <span>{button.text.ar}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] hidden md:block order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-500/5 rounded-2xl backdrop-blur-sm" />
            <Image
              src="/developer-illustration.svg"
              alt="Developer Illustration"
              fill
              className="object-contain p-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
