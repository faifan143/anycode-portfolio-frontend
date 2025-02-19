"use client";

import { motion } from "framer-motion";
import { homeData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {homeData.stats.items.map((stat) => {
            const Icon = getIcon(stat.icon);
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Card Container */}
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-colors duration-100">
                  {/* Icon */}
                  <div className="absolute -top-4 right-4 p-2 rounded-xl bg-orange-500/10 text-orange-500 backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-100">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="text-center pt-4">
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {stat.suffix && (
                        <span className="text-orange-500 text-lg font-medium">
                          {stat.suffix}
                        </span>
                      )}
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      {stat.suffix && (
                        <span className="text-orange-500 text-lg font-medium">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label.ar}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
