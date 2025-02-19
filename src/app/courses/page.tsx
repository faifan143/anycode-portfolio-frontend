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

  // Animation variants
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
      <section className="relative py-24 overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              {coursesData.hero.title.ar}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {coursesData.hero.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {coursesData.features.map((feature) => {
              const FeatureIcon = getIcon(feature.icon);

              return (
                <motion.div
                  key={feature.title.ar}
                  variants={itemVariants}
                  className="bg-[#151923] p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl">
                      <FeatureIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title.ar}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {feature.description.ar}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Course Categories and Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {coursesData.categories.map((category, index) => {
              const CategoryIcon = getIcon(category.icon);
              return (
                <motion.button
                  key={category.title.ar}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === index
                      ? "bg-orange-500 text-white"
                      : "bg-[#151923] text-gray-400 hover:text-white"
                  }`}
                >
                  <CategoryIcon className="w-5 h-5" />
                  <span>{category.title.ar}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Course Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coursesData.categories[selectedCategory].courses.map((course) => (
              <motion.div
                key={course.title.ar}
                variants={itemVariants}
                className="bg-[#151923] rounded-2xl border border-gray-800 overflow-hidden group hover:border-orange-500/50 transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151923] to-transparent z-10" />
                  <Image
                    src={course.image}
                    alt={course.title.ar}
                    width={100}
                    height={100}
                    sizes="100x100"
                    quality={100}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {course.title.ar}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {course.description.ar}
                  </p>

                  {/* Course Metadata */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{course.duration.ar}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{course.level.ar}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>
                        {new Date(course.startDate).toLocaleDateString("ar")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-orange-500 font-semibold">
                      <Star className="w-4 h-4" />
                      <span>{course.price}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name.ar}
                      width={10}
                      height={10}
                      sizes="100x100"
                      quality={100}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium">
                        {course.instructor.name.ar}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {course.instructor.position.ar}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Create a proper Course object with all required properties
                      const courseWithFeatures: Course = {
                        ...course,
                        features: course.features || [], // Ensure features exists
                      };
                      setSelectedCourse(courseWithFeatures);
                      setIsModalOpen(true);
                      dispatch(setScrollProgressStatus(true));
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 group"
                  >
                    <span>{coursesData.ui.buttons.details.ar}</span>
                    <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PaginatedCourses />

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {coursesData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#151923] p-6 rounded-2xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.question.ar}
                </h3>
                <p className="text-gray-400">{item.answer.ar}</p>
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
