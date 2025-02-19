"use client";
import { MapMarker } from "@/components/common/ui/MapMarker";
import { contactData } from "@/data/seed";
import { getIcon } from "@/utils/getIcon";
import { motion } from "framer-motion";
import { Code, Send, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  // Terminal effect for hero section
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(contactData.hero.terminal.welcomeText.slice(0, index));
      index++;
      if (index > contactData.hero.terminal.welcomeText.length)
        clearInterval(timer);
    }, 100);

    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent" dir="ltr">
      {/* Hero Section with Terminal Effect */}
      <section className="relative py-24 overflow-hidden" dir="ltr">
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
            {/* Terminal Window */}
            <div className="bg-[#1E2433] rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#151923] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm mr-4">
                  {contactData.hero.terminal.fileName}
                </span>
              </div>
              {/* Terminal Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-lg">
                  <Terminal className="text-orange-500 w-6 h-6" />
                  <span className="text-green-500">~/anycode</span>
                  <span className="text-white">$</span>
                  <span className="text-white">{typedText}</span>
                  {cursorVisible && (
                    <span className="text-orange-500 animate-pulse">_</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech-inspired Social Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactData.socialLinks.map((social, index) => {
              const Icon = getIcon(social.icon);
              return (
                <motion.a
                  key={social.title.ar}
                  href={social.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#151923] p-8 rounded-2xl flex flex-col items-center gap-4 group transition-all duration-300 border border-gray-800 hover:border-orange-500/50"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-300" />
                    <Icon
                      className={`w-8 h-8 text-orange-500 relative ${social.color} transition-colors duration-300`}
                    />
                  </div>
                  <span className="text-white font-medium">
                    {social.title.ar}
                  </span>
                  <span className="text-sm text-gray-400 text-center">
                    {social.description.ar}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactData.contacts.map((info, index) => {
              const Icon = getIcon(info.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#151923] p-8 rounded-2xl flex flex-col items-center gap-4 group border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-300" />
                    <Icon className="w-8 h-8 text-orange-500 relative" />
                  </div>
                  <span className="text-white font-medium">
                    {info.title.ar}
                  </span>
                  <span className="text-gray-400 text-center">
                    {info.subtitle.ar}
                  </span>
                  <span className="text-gray-400 text-center">
                    {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      info.info.ar ?? info.info
                    }
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[#151923] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-end gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white">
                {"</ نموذج التواصل>"}
              </h2>
              <Code className="text-orange-500 w-6 h-6" />
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  <span className="text-orange-500">const</span> name{" "}
                  <span className="text-orange-500">=</span>
                </label>
                <input
                  type="text"
                  placeholder={contactData.form.fields.name.ar}
                  className="w-full bg-[#0B0F1A] text-white p-4 rounded-xl border border-gray-800 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  <span className="text-orange-500">const</span> email{" "}
                  <span className="text-orange-500">=</span>
                </label>
                <input
                  type="email"
                  placeholder={contactData.form.fields.email.ar}
                  className="w-full bg-[#0B0F1A] text-white p-4 rounded-xl border border-gray-800 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  <span className="text-orange-500">const</span> phone{" "}
                  <span className="text-orange-500">=</span>
                </label>
                <input
                  type="tel"
                  placeholder={contactData.form.fields.phone.ar}
                  className="w-full bg-[#0B0F1A] text-white p-4 rounded-xl border border-gray-800 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  <span className="text-orange-500">const</span> subject{" "}
                  <span className="text-orange-500">=</span>
                </label>
                <input
                  type="text"
                  placeholder={contactData.form.fields.subject.ar}
                  className="w-full bg-[#0B0F1A] text-white p-4 rounded-xl border border-gray-800 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2 col-span-2">
                <label className="block text-sm text-gray-400">
                  <span className="text-orange-500">const</span> message{" "}
                  <span className="text-orange-500">=</span>
                </label>
                <textarea
                  placeholder={contactData.form.fields.message.ar}
                  rows={5}
                  className="w-full bg-[#0B0F1A] text-white p-4 rounded-xl border border-gray-800 focus:border-orange-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300"
              >
                <span>{contactData.form.button.ar}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}

      <MapMarker
        latitude={contactData.office.coordinates.lat}
        longitude={contactData.office.coordinates.lng}
        address={contactData.office.address.ar}
        title={contactData.office.title.ar}
        description="يمكنك زيارتنا في موقعنا الرئيسي"
        markerColor="#f97316"
      />

      {/* <section className="py-12 ">
        <div className="container mx-auto px-4 ">
          <div className="bg-[#151923] p-8 rounded-2xl border border-gray-800 ">
            <div className="relative rounded-xl overflow-hidden h-[400px] ">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151923]/80 pointer-events-none z-10 " />
              <Map
                coordinates={contactData.office.coordinates}
                address={contactData.office.address.ar}
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
