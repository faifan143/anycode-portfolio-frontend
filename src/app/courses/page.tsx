"use client";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, Clock, Star, Users } from "lucide-react";
import { useState } from "react";
import { coursesData } from "@/data/seed";
import Image from "next/image";
import PaginatedCourses from "@/components/common/courses/PaginatedCourses";
import CourseModal from "@/components/common/courses/CourseModal";
import { getIcon } from "@/utils/getIcon";
import { Course } from "@/types/courses";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setScrollProgressStatus } from "@/redux/reducers/wrapper.slice";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-transparent z-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              {coursesData.hero.title.ar}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {coursesData.hero.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {coursesData.features.map((feature) => {
              const FeatureIcon = getIcon(feature.icon);
              return (
                <motion.div
                  key={feature.title.ar}
                  variants={itemVariants}
                  className="bg-[#151923] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-orange-500/10 rounded-lg sm:rounded-xl">
                      <FeatureIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title.ar}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {feature.description.ar}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Course Categories and Listings */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-nowrap overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 pb-2 sm:pb-0">
            {coursesData.categories.map((category, index) => {
              const CategoryIcon = getIcon(category.icon);
              return (
                <motion.button
                  key={category.title.ar}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shrink-0 ${
                    selectedCategory === index
                      ? "bg-orange-500 text-white"
                      : "bg-[#151923] text-gray-400 hover:text-white"
                  }`}
                >
                  <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">
                    {category.title.ar}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Course Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {coursesData.categories[selectedCategory].courses.map((course) => (
              <motion.div
                key={course.title.ar}
                variants={itemVariants}
                className="bg-[#151923] rounded-xl sm:rounded-2xl border border-gray-800 overflow-hidden group hover:border-orange-500/50 transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151923] to-transparent z-10" />
                  <Image
                    src={course.image}
                    alt={course.title.ar}
                    width={100}
                    height={100}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Course Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {course.title.ar}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4">
                    {course.description.ar}
                  </p>

                  {/* Course Metadata */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                      <span>{course.duration.ar}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                      <span>{course.level.ar}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                      <span>
                        {new Date(course.startDate).toLocaleDateString("ar")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-orange-500 font-semibold">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{course.price}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name.ar}
                      width={10}
                      height={10}
                      sizes="100vw"
                      quality={100}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-medium">
                        {course.instructor.name.ar}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {course.instructor.position.ar}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const courseWithFeatures: Course = {
                        ...course,
                        features: course.features || [],
                      };
                      setSelectedCourse(courseWithFeatures);
                      setIsModalOpen(true);
                      dispatch(setScrollProgressStatus(true));
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    <span>{coursesData.ui.buttons.details.ar}</span>
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PaginatedCourses />

      {/* FAQ Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {coursesData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#151923] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.question.ar}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {item.answer.ar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Courses;
