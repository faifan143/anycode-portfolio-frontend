"use client";
import { motion } from "framer-motion";
import React from "react";
import ContactInfo from "./ContactInfo";
import { homeData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";

const SocialMediaSection = () => {
  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-bl-full" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {homeData.contact.title.ar}
                </h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  {homeData.contact.subtitle.ar}
                </p>
              </motion.div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {homeData.contact.socialLinks.map((social, index) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                        {/* Icon Container */}
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>

                        {/* Platform Name */}
                        <span className="text-sm font-medium text-gray-400 group-hover:text-orange-400 transition-colors">
                          {social.platform}
                        </span>

                        {/* Hover Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Contact Info */}
              <ContactInfo />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
