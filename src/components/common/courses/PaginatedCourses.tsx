"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/animations/varients";
import { coursesData } from "@/data/seed";
const PaginatedCourses = () => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Flatten and filter courses
  const allCourses = coursesData.categories.flatMap((category) =>
    category.courses.filter((course) => new Date(course.startDate) > new Date())
  );

  // Pagination logic
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);
  const paginatedCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            الدورات القادمة
          </h2>
          <p className="text-gray-400 text-center">
            احجز مكانك في دوراتنا المرتقبة
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#151923] rounded-2xl border border-gray-800 overflow-hidden group"
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gradient-to-t from-[#151923] to-transparent z-10" />
                <Image
                  src={course.image}
                  alt={course.title.ar}
                  width={100}
                  height={100}
                  sizes="100x100"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                  {new Date(course.startDate).toLocaleDateString("ar")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {course.title.ar}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description.ar}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name.ar}
                      width={8}
                      height={8}
                      sizes="100x100"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-400">
                      {course.instructor.name.ar}
                    </span>
                  </div>
                  <span className="text-orange-500 font-semibold">
                    {course.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-sm ${
              currentPage === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            السابق
          </button>

          <span className="text-gray-400 text-sm">
            الصفحة {currentPage} من {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-sm ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            التالي
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaginatedCourses;
