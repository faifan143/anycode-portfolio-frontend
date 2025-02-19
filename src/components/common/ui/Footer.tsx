"use client";
import { footerData } from "@/data/seed";
import { Code } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-transparent border-t border-gray-800"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-8 md:mb-12">
          {/* Brand Section - Full width on mobile */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              <span
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
                dir="ltr"
              >
                {footerData.brand.logo.text.en}
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              {footerData.brand.description.ar}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href={footerData.quickLinks.buttons.docs.href}
                className="w-full sm:w-auto text-center px-4 py-2 bg-[#1c1e26] text-white text-sm rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors"
              >
                {footerData.quickLinks.buttons.docs.text.ar}
              </Link>
              <Link
                href={footerData.quickLinks.buttons.support.href}
                className="w-full sm:w-auto text-center px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors"
              >
                {footerData.quickLinks.buttons.support.text.ar}
              </Link>
            </div>
          </div>

          {/* Footer Sections - Two columns on mobile */}
          {footerData.sections.map((section) => (
            <div key={section.title.ar} className="col-span-1 md:col-span-2">
              <h3 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">
                {section.title.ar}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name.ar}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-orange-500 transition-colors block"
                    >
                      {link.name.ar}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Badge - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4  pt-6">
          {/* Copyright */}
          <div
            className="text-gray-400 text-sm text-center md:text-start w-full md:w-auto"
            dir="ltr"
          >
            © {currentYear} {footerData.brand.logo.text.en}{" "}
            {footerData.copyright.text.ar}
          </div>

          {/* Powered by Badge */}
          <Link
            href="https://anycode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-[#1c1e26] rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group w-full md:w-auto justify-center md:justify-start"
            dir="ltr"
          >
            <span className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
              Powered by
            </span>
            <div className="flex items-center gap-1">
              {/* <Code className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" /> */}
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                {"<AnyCode />"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
