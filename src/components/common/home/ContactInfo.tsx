"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-10 pt-10 border-t border-white/10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
          <div className="mb-3 inline-block p-3 bg-white/5 rounded-lg">
            <Mail className="w-6 h-6 text-orange-400" />
          </div>
          <p className="text-sm text-gray-400">contact@anycode.dev</p>
        </div>
        <div className="p-4">
          <div className="mb-3 inline-block p-3 bg-white/5 rounded-lg">
            <Phone className="w-6 h-6 text-orange-400" />
          </div>
          <p className="text-sm text-gray-400">+123 456 789</p>
        </div>
        <div className="p-4">
          <div className="mb-3 inline-block p-3 bg-white/5 rounded-lg">
            <MapPin className="w-6 h-6 text-orange-400" />
          </div>
          <p className="text-sm text-gray-400">Syria, Damascus</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
