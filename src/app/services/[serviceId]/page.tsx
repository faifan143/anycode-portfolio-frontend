// app/services/[serviceId]/page.tsx
"use client";

import { servicesData } from "@/data/seed";
import { motion } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { getIcon } from "@/utils/getIcon";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  // Find the service by ID
  const service = servicesData.mainServices.find(
    (service) => service.id === serviceId
  );

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  const Icon = getIcon(service.icon);

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
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>عودة إلى الخدمات</span>
            </Link>

            {/* Service Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Icon className="w-8 h-8 text-orange-500" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                {service.title.ar}
              </h1>
            </div>

            {/* Service Description */}
            <p className="text-xl text-gray-400 mb-8">
              {service.description.ar}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#151923] p-8 rounded-2xl border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">المميزات</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                    <span>{feature.ar}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#151923] p-8 rounded-2xl border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                التقنيات المستخدمة
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-900/50 text-orange-500 rounded-xl border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
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
              هل لديك مشروع؟
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحويل فكرتك إلى واقع. تواصل معنا لمناقشة
              مشروعك.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
            >
              <span>ابدأ مشروعك</span>
              <Code2 className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
