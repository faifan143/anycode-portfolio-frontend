"use client";
import { homeData } from "@/data/seed";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import RouteWrapper from "../ui/RouteWrapper";
import { getIcon } from "@/utils/getIcon";

const FeaturesSection = () => {
  // Properly typed icon handling function

  return (
    <section className="relative py-28 bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-28 left-28 w-48 h-48 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-28 right-28 w-48 h-48 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {homeData.features.title.ar}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {homeData.features.subtitle.ar}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
          dir="rtl"
        >
          {homeData.features.sections.map((section, index) => {
            const Icon = getIcon(section.icon);
            return (
              <motion.div
                key={section.title.ar}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <RouteWrapper href={section.link}>
                  <div className="relative m-2 p-8 h-[300px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with animated background */}
                      <div className="relative mb-6">
                        <div className="relative p-3 bg-white/5 rounded-xl w-fit">
                          <Icon className="w-8 h-8 text-orange-400" />
                        </div>
                      </div>

                      {/* Title with line animation */}
                      <h3 className="text-2xl font-bold text-white mb-4 relative">
                        {section.title.ar}
                        <div className="absolute -bottom-1 right-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500" />
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {section.description.ar}
                      </p>

                      {/* Animated Arrow */}
                      <div className="mt-auto flex items-center gap-2 text-orange-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <span className="text-sm font-medium">
                          استكشف المزيد
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                      <div className="absolute inset-0 rotate-45 bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-500" />
                    </div>
                  </div>
                </RouteWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
