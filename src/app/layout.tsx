import type { Metadata } from "next";
import "./globals.css";
import LayoutProviders from "@/components/providers/LayoutProviders";

export const metadata: Metadata = {
  metadataBase: new URL("http://anycode-sy.com"),
  title: {
    template: "%s | AnyCode",
    default: "AnyCode - Software Development Agency",
  },
  description:
    "وكالة متخصصة في تطوير برمجيات باستخدام أحدث التقنيات. نقدم حلولاً متكاملة لتطوير الأعمال وتحسين الحضور الرقمي",
  keywords: [
    "تطوير مواقع",
    "برمجة تطبيقات",
    "شركة برمجة",
    "خدمات تقنية",
    "تطوير تطبيقات الموبايل",
    "تصميم مواقع الكترونية",
    "برمجة مخصصة",
    "حلول رقمية",
    "تحسين محركات البحث",
    "تجارة الكترونية",
    "تطوير واجهات المستخدم",
    "تطوير ويب",
    "خدمات استضافة",
    "برمجة تطبيقات الويب",
    "مواقع متجاوبة",
    "تطوير منصات",
    "حلول برمجية للشركات",
    "تطوير بوابات دفع",
    "تحسين تجربة المستخدم",
    "دورات برمجة",
  ],
  authors: [{ name: "AnyCode Team" }],
  creator: "AnyCode",
  publisher: "AnyCode",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
      </head>
      <body>
        <LayoutProviders>{children}</LayoutProviders>
      </body>
    </html>
  );
}
