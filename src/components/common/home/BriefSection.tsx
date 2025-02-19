import { homeData } from "@/data/seed";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BriefSection = () => {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {homeData.brief.introTitle.ar}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {homeData.brief.introText.ar}
          </p>
          <Link href="/about">
            <span className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
              اقرأ المزيد <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefSection;
