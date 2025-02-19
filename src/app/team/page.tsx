"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Trophy } from "lucide-react";
import { teamData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";

const Team = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  };

  // const cardHover = {
  //   rest: { scale: 1 },
  //   hover: {
  //     scale: 1.02,
  //     transition: {
  //       duration: 0.2,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 "
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="whileInView"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {teamData.team.hero.title.ar}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {teamData.team.hero.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      {teamData.team.departments.map((department) => {
        const Icon = getIcon(department.icon);
        return (
          <section key={department.title.ar} className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="mb-12"
              >
                <div className="flex items-center gap-4 justify-center mb-6">
                  <Icon className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl font-bold text-white text-center">
                    {department.title.ar}
                  </h2>
                </div>
              </motion.div>
              {/* Member Card Component */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group col-span-full"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Image and Basic Info */}
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={department.chief.image}
                        alt={department.chief.name.ar}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {department.chief.name.ar}
                      </h3>
                      <p className="text-orange-500 font-semibold">
                        {department.chief.position.ar}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-4 mt-4">
                        {department.chief.socialLinks.linkedin && (
                          <motion.a
                            href={department.chief.socialLinks.linkedin}
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-orange-500 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        {department.chief.socialLinks.github && (
                          <motion.a
                            href={department.chief.socialLinks.github}
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-orange-500 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Bio and Skills */}
                  <div className="p-6 md:border-r md:border-l border-gray-700/50">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        نبذة تعريفية
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {department.chief.brief.ar}
                      </p>
                      <p className="text-gray-300">
                        {department.chief.extendedBrief?.ar}
                      </p>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        التعليم
                      </h4>
                      <div className="text-gray-300">
                        <p className="font-medium">
                          {department.chief.education?.degree.ar}
                        </p>
                        <p>{department.chief.education?.university.ar}</p>
                        <p className="text-sm text-gray-400">
                          {department.chief.education?.year}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        المهارات
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {department.chief.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Experience and Achievements */}
                  <div className="p-6">
                    {/* Experience */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        الخبرات
                      </h4>
                      <div className="space-y-4">
                        {department.chief.experience?.map((exp, index) => (
                          <div key={index} className="text-gray-300">
                            <p className="font-medium text-white">
                              {exp.title.ar}
                            </p>
                            <p className="text-sm">{exp.company.ar}</p>
                            <p className="text-sm text-gray-400">
                              {exp.period.ar}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        الإنجازات
                      </h4>
                      <ul className="space-y-2">
                        {department.chief.achievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <Trophy className="w-4 h-4 text-orange-500 flex-shrink-0" />
                              <span>{achievement.ar}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Certificates */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        الشهادات
                      </h4>
                      <div className="space-y-3">
                        {department.chief.certificates.map((cert, index) => (
                          <div key={index} className="text-gray-300">
                            <p className="font-medium text-white">
                              {cert.name}
                            </p>
                            <p className="text-sm">
                              {cert.issuer} - {cert.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Join Team Section */}
      <section className="py-20  rounded-3xl">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              {teamData.team.joinTeam.title.ar}
            </h2>
            <p className="text-xl text-gray-300">
              {teamData.team.joinTeam.description.ar}
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {teamData.team.joinTeam.benefits.map((benefit) => (
              <motion.div
                key={benefit.ar}
                variants={fadeInUp}
                className="bg-gray-800/30 rounded-xl p-6 text-center"
              >
                <p className="text-gray-300">{benefit.ar}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Open Positions */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {teamData.team.joinTeam.positions.map((position) => (
              <motion.div
                key={position.title.ar}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {position.title.ar}
                </h3>
                <div className="flex gap-4 text-gray-300">
                  <span>{position.type.ar}</span>
                  <span>•</span>
                  <span>{position.location.ar}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
