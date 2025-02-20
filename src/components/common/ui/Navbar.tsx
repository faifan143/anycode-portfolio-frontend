// Navbar.tsx
"use client";
import { navigationData } from "@/data/seed";
import { NavbarItem, NavbarItem2 } from "@/types";
import { getIcon } from "@/utils/getIcon";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import RouteWrapper from "../ui/RouteWrapper";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const isRTL = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const renderNavItem = (item: NavbarItem | NavbarItem2) => {
    const Icon = getIcon(item.icon);

    if (item.items) {
      return (
        <div
          className="relative group"
          onMouseEnter={() => setActiveMenu(item.id)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors gap-2 group cursor-pointer">
            <Icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity text-orange-400" />
            <span className="group-hover:text-orange-400 transition-colors">
              {item.name.ar}
            </span>
          </div>

          <AnimatePresence>
            {activeMenu === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 w-[300px] bg-gray-900/95 rounded-xl border border-gray-800 shadow-xl backdrop-blur-lg"
                style={{ zIndex: 1000 }}
              >
                <div className="p-4 space-y-2">
                  {item.items.map((subItem) => {
                    const SubIcon = getIcon(subItem.icon);
                    return (
                      <RouteWrapper key={subItem.id} href={subItem.href}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-orange-400 transition-all gap-3"
                        >
                          <SubIcon className="h-5 w-5 text-orange-400" />
                          <span className="font-medium">{subItem.name.ar}</span>
                        </motion.div>
                      </RouteWrapper>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
        </div>
      );
    }

    return (
      <RouteWrapper href={item.href}>
        <div className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors gap-2 group">
          <Icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity text-orange-400" />
          <span className="group-hover:text-orange-400 transition-colors">
            {item.name.ar}
          </span>
        </div>
      </RouteWrapper>
    );
  };

  return (
    <nav className="w-full top-0 z-50 fixed" dir="ltr">
      <div className="bg-background/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                {navigationData.brand.logo.text.en}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center justify-between flex-1 mr-8"
              dir="rtl"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex space-x-8"
              >
                {navigationData.navigation.main.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    {renderNavItem(item)}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex  items-center gap-4" dir="rtl">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-orange-400 transition-colors"
                aria-label={
                  isMobileMenuOpen
                    ? navigationData.buttons.menu.close.ar
                    : navigationData.buttons.menu.open.ar
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden block absolute top-16 left-0 right-0 bg-gray-900/90 border-b border-gray-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationData.navigation.main.map((item) =>
                  item.items ? (
                    <div key={item.id} className="flex flex-col gap-1 ">
                      <div className="px-3 py-2 text-gray-400 font-medium text-end">
                        {item.name.ar}
                      </div>
                      {item.items.map((subItem) => {
                        const SubIcon = getIcon(subItem.icon);
                        return (
                          <RouteWrapper key={subItem.id} href={subItem.href}>
                            <motion.div
                              whileHover={{ x: isRTL ? -4 : 4 }}
                              onClick={handleMobileItemClick}
                              className={`flex items-center ${
                                isRTL ? "pr-6 flex-row-reverse" : "px-6"
                              } py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-orange-400 transition-all gap-2`}
                            >
                              <SubIcon className="h-4 w-4 text-orange-400" />
                              <span>{subItem.name.ar}</span>
                            </motion.div>
                          </RouteWrapper>
                        );
                      })}
                    </div>
                  ) : (
                    <RouteWrapper key={item.id} href={item.href}>
                      <motion.div
                        whileHover={{ x: isRTL ? -4 : 4 }}
                        onClick={handleMobileItemClick}
                        className={`flex items-center ${
                          isRTL ? "pr-3 flex-row-reverse" : "px-3"
                        } py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-orange-400 transition-all gap-2`}
                      >
                        {React.createElement(getIcon(item.icon), {
                          className: "h-4 w-4 text-orange-400",
                        })}
                        <span>{item.name.ar}</span>
                      </motion.div>
                    </RouteWrapper>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
