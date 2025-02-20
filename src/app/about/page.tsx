"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { aboutData } from "@/data/seed";
import RouteWrapper from "@/components/common/ui/RouteWrapper";
import { getIcon } from "@/utils/getIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن - شركة AnyCode لحلول البرمجة والتطوير",
  description:
    "تعرف على قصة نجاح AnyCode، خبراتنا، قيمنا، وفريقنا المتخصص في تطوير المواقع والتطبيقات. نقدم حلولاً تقنية مبتكرة للشركات والمؤسسات التعليمية",
  keywords: [
    "عن AnyCode",
    "شركة برمجة",
    "تطوير مواقع",
    "خدمات تقنية",
    "حلول برمجية",
    "تطوير تطبيقات",
    "خدمات تعليمية",
    "تدريب برمجة",
  ],
  authors: [{ name: "AnyCode Team" }],
  creator: "AnyCode",
  publisher: "AnyCode",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("http://anycode-sy.com"),
  alternates: {
    canonical: "/about",
    languages: {
      "ar-SY": "/ar/about",
      "en-US": "/en/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "http://anycode-sy.com/about",
    siteName: "AnyCode",
    title: "من نحن - AnyCode للحلول البرمجية المتكاملة",
    description:
      "تعرف على قصة نجاح AnyCode، خبراتنا، قيمنا، وفريقنا المتخصص في تطوير المواقع والتطبيقات",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "من نحن - AnyCode للحلول البرمجية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - AnyCode للحلول البرمجية",
    description: "تعرف على فريق AnyCode المتخصص في تطوير المواقع والتطبيقات",
    creator: "@anycode",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const About = () => {
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

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const slideIn = (direction: "left" | "right") => ({
    initial: {
      opacity: 0,
      x: direction === "left" ? -30 : 30,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    viewport: { once: true },
    transition: {
      duration: 0.5,
    },
  });

  // Hero animation variants
  const heroText = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const heroBackground = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  const Icon = getIcon(aboutData.about.services.corporate.icon);
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section with enhanced animations */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          variants={heroBackground}
          initial="initial"
          animate="animate"
          className="absolute inset-0 "
        />
        <motion.div
          variants={heroBackground}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={heroText}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {aboutData.about.hero.title.ar}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {aboutData.about.hero.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section with stagger effect */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {aboutData.about.companyValues.map((value, index) => {
              const ValueIcon = getIcon(value.icon);
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                  dir="rtl"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="bg-orange-500/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ValueIcon className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title.ar}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description.ar}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with enhanced animations */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutData.about.timeline.title.ar}
            </h2>
            <p className="text-xl text-gray-300">
              {aboutData.about.timeline.subtitle.ar}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-orange-500/20"
            />
            <div className="space-y-12">
              {aboutData.about.timeline.events.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={slideIn(index % 2 === 0 ? "right" : "left")}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <Icons.Calendar className="w-6 h-6 text-orange-500" />
                      <h3 className="text-2xl font-bold text-white">
                        {item.year}
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-500 mb-2">
                      {item.title.ar}
                    </h4>
                    <p className="text-gray-300">{item.description.ar}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-orange-500 rounded-full">
                    <div className="absolute inset-0 animate-ping bg-orange-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-transparent rounded-3xl"
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutData.about.techStack.title.ar}
            </h2>
            <p className="text-xl text-gray-300">
              {aboutData.about.techStack.subtitle.ar}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-16 max-w-5xl mx-auto"
          >
            {Object.entries(aboutData.about.techStack.categories).map(
              ([key, category]) => (
                <motion.div key={key} variants={fadeInUp} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-orange-500 text-right">
                    {category.title.ar}
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    {category.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        variants={scaleIn}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        className="group flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-orange-500/50 hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icons.Code className="w-5 h-5 text-orange-500 mr-2" />
                        </motion.div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gradient-to-b from-transparent to-gray-800/50 rounded-3xl">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutData.about.services.title.ar}
            </h2>
            <p className="text-xl text-gray-300">
              {aboutData.about.services.subtitle.ar}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Educational Services */}
            {aboutData.about.services.educational.map((service) => {
              const ServiceIcon = getIcon(service.icon);
              return (
                <motion.div
                  key={service.title.ar}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                  dir="rtl"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-orange-500/10 p-4 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                      <ServiceIcon className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title.ar}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description.ar}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-300">{feature.ar}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Corporate Services */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              dir="rtl"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-orange-500/10 p-4 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {aboutData.about.services.corporate.title.ar}
                </h3>
              </div>
              <p className="text-gray-300 mb-8">
                {aboutData.about.services.corporate.description.ar}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aboutData.about.services.corporate.features.map(
                  (section, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold text-orange-500">
                        {section.title.ar}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-300">{item.ar}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section with enhanced animations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {aboutData.about.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label.ar}
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1,
                  }}
                  className="text-5xl font-bold text-orange-500 mb-4"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  {achievement.label.ar}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA with enhanced animations */}
      <section className="py-24 bg-gradient-to-t from-gray-800/50 to-transparent rounded-b-3xl">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              {aboutData.about.contact.title.ar}
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              {aboutData.about.contact.description.ar}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              <RouteWrapper href="/contact">
                {aboutData.about.contact.buttonText.ar}
              </RouteWrapper>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icons.ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
