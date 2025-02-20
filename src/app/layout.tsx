import type { Metadata } from "next";
import "./globals.css";
import LayoutProviders from "@/components/providers/LayoutProviders";
import SEO_CONFIG from "@/seo.config";
import { DefaultSeo } from "next-seo";

export const metadata: Metadata = {
  title: "AnyCode",
  description: "AnyCode Portfolio for Users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <DefaultSeo {...SEO_CONFIG} />

        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
      </head>
      <body>
        <LayoutProviders>{children}</LayoutProviders>
      </body>
    </html>
  );
}
