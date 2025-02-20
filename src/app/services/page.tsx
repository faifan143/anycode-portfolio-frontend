"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/seed";
import Link from "next/link";
import { getIcon } from "@/utils/getIcon";
import { ArrowUpRight } from "lucide-react";
import RouteWrapper from "@/components/common/ui/RouteWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا - حلول برمجية متكاملة | AnyCode",
  description:
    "نقدم مجموعة متكاملة من الخدمات البرمجية والتقنية، تشمل تطوير المواقع، التطبيقات، الحلول التعليمية والمؤسسية. خبرة متخصصة وحلول مبتكرة لتطوير أعمالك",
  keywords: [
    "خدمات برمجية",
    "تطوير مواقع",
    "تطوير تطبيقات",
    "حلول تقنية",
    "تطوير ويب",
    "برمجة مخصصة",
    "خدمات تعليمية",
    "استشارات تقنية",
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
    canonical: "/services",
    languages: {
      "ar-SY": "/ar/services",
      "en-US": "/en/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "http://anycode-sy.com/services",
    siteName: "AnyCode",
    title: "خدماتنا - حلول برمجية احترافية | AnyCode",
    description:
      "استكشف خدماتنا في تطوير المواقع، التطبيقات، والحلول التقنية المتكاملة. نقدم حلولاً مبتكرة تناسب احتياجات عملك",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "خدمات AnyCode البرمجية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات AnyCode البرمجية المتكاملة",
    description:
      "حلول تقنية مبتكرة لتطوير أعمالك. تطوير مواقع، تطبيقات، وخدمات برمجية متكاملة",
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
  // Add structured data for services
  // other: {
  //   service: {
  //     "@context": "https://schema.org",
  //     "@type": "Service",
  //     provider: {
  //       "@type": "Organization",
  //       name: "AnyCode",
  //       url: "http://anycode-sy.com",
  //     },
  //     serviceType: "Web Development",
  //     areaServed: "Syria",
  //     description:
  //       "خدمات برمجية متكاملة تشمل تطوير المواقع والتطبيقات والحلول التقنية",
  //   },
  // },
};

const Services = () => {
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center justify-center px-6 py-2 border border-orange-500/20 rounded-full bg-orange-500/10 text-orange-500"
            >
              {servicesData.hero.badge.ar}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {servicesData.hero.title.text.ar}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                {servicesData.hero.title.highlight.ar}
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              {servicesData.hero.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {servicesData.mainServices.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-[#151923] rounded-2xl border border-gray-800 overflow-hidden hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-orange-500/10 rounded-xl">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.title.ar}
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-6">
                      {service.description.ar}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span>{feature.ar}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-900/50 text-orange-500 rounded-full border border-orange-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-orange-500 hover:gap-3 transition-all group"
                    >
                      <span>اكتشف المزيد</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {servicesData.process.title.ar}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {servicesData.process.description.ar}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {servicesData.process.steps.map((step, index) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#151923] p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title.ar}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm">{step.description.ar}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#151923] p-8 md:p-12 rounded-2xl border border-gray-800 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {servicesData.cta.title.ar}
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {servicesData.cta.description.ar}
            </p>
            <RouteWrapper
              href={servicesData.cta.button.href}
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
            >
              <span>{servicesData.cta.button.text.ar}</span>
              <ArrowUpRight className="w-5 h-5" />
            </RouteWrapper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
