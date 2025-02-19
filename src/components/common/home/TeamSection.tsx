"use client";
import { homeData } from "@/data/seed";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, User2, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 bg-transparent backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[160px] left-1/3 w-44 h-44 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[160px] right-1/4 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">فريقنا</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {homeData.team.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative h-full"
            >
              <div className="relative p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden h-full flex flex-col ">
                {/* Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  {member.profileImage?.url ? (
                    <Image
                      src={member.profileImage.url}
                      alt={member.name.ar}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                      <User2 className="w-20 h-20 text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4 pb-6 ">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {member.name.ar}
                  </h3>
                  <p className="text-orange-500 text-sm font-medium mb-3">
                    {member.title.ar}
                  </p>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {member.bio.ar}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    {member.socialLinks.github && (
                      <Link
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {member.socialLinks.linkedin && (
                      <Link
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    )}
                    {member.socialLinks.facebook && (
                      <Link
                        href={member.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </Link>
                    )}
                    <Link
                      href={`mailto:${member.socialLinks.email}`}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
