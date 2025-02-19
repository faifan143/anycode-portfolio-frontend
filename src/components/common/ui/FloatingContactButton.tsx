// FloatingContactButton.tsx
"use client";
import { floatingContactData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        className="absolute bottom-16 left-0 overflow-hidden"
      >
        {isOpen && (
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 min-w-[200px]"
            dir="rtl"
          >
            {/* Contact Links */}
            {floatingContactData.contacts.map((contact, index) => {
              const Icon = getIcon(contact.icon);
              return (
                <motion.a
                  key={contact.id}
                  href={contact.link}
                  target={contact.type === "whatsapp" ? "_blank" : undefined}
                  rel={
                    contact.type === "whatsapp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl group transition-all duration-300"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {contact.title.ar}
                    </span>
                    <span className="text-xs text-gray-400">
                      {contact.value}
                    </span>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="mt-2 pt-2 border-t border-white/10">
              <div className="flex justify-center gap-2">
                {floatingContactData.socialLinks.map((social, index) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <motion.a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-2 bg-white/5 rounded-lg hover:bg-orange-500/20 transition-colors"
                      title={social.title.ar}
                    >
                      <Icon className="w-4 h-4 text-orange-400" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors relative"
        aria-label={
          isOpen
            ? floatingContactData.buttons.close.ar
            : floatingContactData.buttons.contact.ar
        }
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Image
              src={floatingContactData.images.logo}
              alt="logo"
              width={10}
              height={8}
              quality={100}
              sizes="100x100"
              className="w-10 h-8"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
