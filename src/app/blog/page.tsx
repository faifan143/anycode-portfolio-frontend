"use client";
import { blogsData } from "@/data/seed";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Blogs",
//   description:
//     "مدونة متخصصة في مجالات البرمجة والتقنية تقدم محتوى معرفي قيم. مقالات تقنية شاملة، شروحات مفصلة، تجارب عملية، أحدث التقنيات والأدوات، نصائح احترافية للمطورين، وحلول للتحديات البرمجية. تصفح مكتبتنا المعرفية المتجددة واكتشف مقالات في مختلف مجالات التقنية والتطوير.",
// };
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const blogsPerPage = 6;

  const filteredBlogs = blogsData.blog.posts
    .filter((blog) =>
      selectedCategory === "all" ? true : blog.category === selectedCategory
    )
    .filter(
      (blog) =>
        blog.title.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.ar.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <div className="min-h-screen bg-transparent" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 md:mb-8 inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 border border-orange-500/20 rounded-full bg-orange-500/10 text-orange-500 text-sm sm:text-base"
            >
              <BookText className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              مدونة المعرفة التقنية
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              اكتشف آخر المقالات في عالم
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                {" "}
                التقنية والبرمجة
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 px-2">
              مقالات تقنية شاملة، تجارب عملية، ودروس تعليمية في مختلف مجالات
              التقنية
            </p>

            <div className="relative max-w-2xl mx-auto px-2">
              <input
                type="text"
                placeholder="ابحث عن مقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#1c1e26] border border-gray-800 rounded-xl sm:rounded-2xl text-white focus:outline-none focus:border-orange-500/50 pr-10 sm:pr-12 text-sm sm:text-base"
              />
              <Search
                className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {blogsData.blog.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg sm:rounded-xl font-mono transition-all text-sm sm:text-base ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-[#1c1e26] text-gray-400 hover:bg-[#151720]"
              } border border-gray-800`}
            >
              {category.name.ar}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
          >
            {currentBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                className="bg-[#1c1e26] rounded-lg sm:rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title.ar}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 py-1 sm:px-3 bg-black/50 backdrop-blur-md text-orange-500 rounded-full text-xs sm:text-sm font-mono border border-orange-500/20">
                      {
                        blogsData.blog.categories.find(
                          (cat) => cat.id === blog.category
                        )?.name.ar
                      }
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <BookText className="text-orange-500" size={18} />
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {blog.title.ar}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">
                    {blog.description.ar}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name.ar}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>{blog.author.name.ar}</span>
                    </div>
                    <span>{blog.readTime.ar}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 font-mono pb-8 sm:pb-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 sm:p-2 rounded-lg bg-[#151720] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all text-sm sm:text-base ${
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
              className="p-1.5 sm:p-2 rounded-lg bg-[#151720] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
