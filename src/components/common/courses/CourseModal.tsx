"use client";

import { setScrollProgressStatus } from "@/redux/reducers/wrapper.slice";
import { AppDispatch } from "@/redux/store";
import { Course } from "@/types/courses";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, Clock, Star, Users, X } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CourseModal = ({ course, isOpen, setIsOpen }: CourseModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center flex items-center justify-center z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                dispatch(setScrollProgressStatus(false));
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#151923] w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-800 my-8 max-h-[90vh] flex flex-col"
              dir="rtl"
            >
              {/* Header - Fixed */}
              <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#151923] sticky top-0 z-10">
                <h2 className="text-2xl font-bold text-white">
                  {course.title.ar}
                </h2>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    dispatch(setScrollProgressStatus(false));
                  }}
                  className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="p-6 overflow-y-auto no-scrollbar flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column - Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title.ar}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Column - Course Info */}
                  <div className="space-y-4">
                    <p className="text-gray-400">{course.description.ar}</p>

                    {/* Course Metadata */}
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl">
                      <Image
                        src={course.instructor.image}
                        alt={course.instructor.name.ar}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
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
                  </div>
                </div>

                {/* Course Content */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    محتوى الدورة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>{topic.ar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    مميزات الدورة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span>{feature.ar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-medium"
                >
                  سجل الآن
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
