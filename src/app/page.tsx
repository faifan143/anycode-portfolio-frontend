import BriefSection from "@/components/common/home/BriefSection";
import FeaturesSection from "@/components/common/home/FeaturesSection";
import HeroSection from "@/components/common/home/HeroSection";
import SocialMediaSection from "@/components/common/home/SocialMediaSection";
import StatsSection from "@/components/common/home/StatsSection";
import TeamSection from "@/components/common/home/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnyCode - وكالة تطوير برمجية",
  description:
    "وكالة متخصصة في تطوير المواقع الإلكترونية والتطبيقات باستخدام أحدث التقنيات. نقدم حلولاً متكاملة لتطوير الأعمال وتحسين الحضور الرقمي",
  keywords: [
    "تطوير مواقع",
    "برمجة تطبيقات",
    "تصميم مواقع",
    "تطوير ويب",
    "تطبيقات موبايل",
    "خدمات برمجية",
    "تقنيات حديثة",
    "شركة برمجة",
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
    canonical: "/",
    languages: {
      "ar-SY": "/ar",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "http://anycode-sy.com",
    siteName: "AnyCode",
    title: "AnyCode - وكالة تطوير المواقع والتطبيقات المتكاملة",
    description:
      "وكالة متخصصة في تطوير المواقع الإلكترونية والتطبيقات باستخدام أحدث التقنيات. نقدم حلولاً متكاملة لتطوير الأعمال وتحسين الحضور الرقمي",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AnyCode - وكالة تطوير المواقع والتطبيقات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyCode - وكالة تطوير المواقع والتطبيقات",
    description:
      "وكالة متخصصة في تطوير المواقع الإلكترونية والتطبيقات باستخدام أحدث التقنيات",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BriefSection />
      <StatsSection />
      <FeaturesSection />
      <TeamSection />
      <SocialMediaSection />
    </main>
  );
};

export default Home;
