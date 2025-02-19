"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "@/data/seed";
import {
  containerVariants,
  itemVariants,
} from "@/components/animations/varients";
import { getIcon } from "@/utils/getIcon";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData.projects.projects
      : projectsData.projects.projects.filter(
          (project) => project.category === selectedCategory
        );

  const totalPages = Math.ceil(
    filteredProjects.length / projectsData.projects.pagination.itemsPerPage
  );

  const getCurrentProjects = () => {
    const startIndex =
      (currentPage - 1) * projectsData.projects.pagination.itemsPerPage;
    return filteredProjects.slice(
      startIndex,
      startIndex + projectsData.projects.pagination.itemsPerPage
    );
  };

  return (
    <div className="min-h-screen bg-transparent" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center justify-center px-6 py-2 border border-orange-500/20 rounded-full bg-orange-500/10 text-orange-500"
            >
              <Code2 className="w-5 h-5 ml-2" />
              {projectsData.projects.hero.badge.ar}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {projectsData.projects.hero.title.text.ar}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                {" "}
                {projectsData.projects.hero.title.highlight.ar}
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              {projectsData.projects.hero.description.ar}
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectsData.projects.categories.map((category) => {
                const CategoryIcon = getIcon(category.icon);
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono transition-all
                      ${
                        selectedCategory === category.id
                          ? "bg-orange-500 text-white"
                          : "bg-[#1c1e26] text-gray-400 hover:bg-[#151720]"
                      } border border-gray-800`}
                  >
                    <CategoryIcon className="w-5 h-5" />
                    <span>{category.name.ar}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#1c1e26] rounded-2xl border border-gray-800 overflow-hidden group hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e26] to-transparent z-10" />
                    <Image
                      src={project.image}
                      alt={project.title.ar}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black/50 backdrop-blur-md text-orange-500 rounded-full text-sm font-mono border border-orange-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Code2 className="text-orange-500" size={24} />
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors font-mono">
                        {project.title.ar}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6 text-lg font-mono leading-relaxed">
                      {project.description.ar}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {project.screenshots.map((screenshot, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="relative h-24 rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-colors"
                        >
                          <Image
                            src={screenshot}
                            alt={`Screenshot ${i + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#151720] text-white rounded-xl transition-all hover:bg-orange-500 border border-orange-500/20 font-mono"
                      >
                        <Globe size={18} />
                        <span>
                          {projectsData.projects.ui.buttons.viewProject.ar}
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 font-mono">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-[#151720] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white border-orange-600"
                    : "bg-[#151720] text-gray-400 hover:bg-gray-700 border-gray-800"
                } border`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-[#151720] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
