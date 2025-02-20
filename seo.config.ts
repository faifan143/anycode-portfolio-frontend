import { DefaultSeoProps } from "next-seo";

const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: "%s | AnyCode",
  defaultTitle: "AnyCode - Software Development Agency",
  description:
    "Professional software development services offering custom solutions",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "http://anycode-sy.com",
    siteName: "AnyCode",
    images: [
      {
        url: "http://anycode-sy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AnyCode",
      },
    ],
  },
  twitter: {
    handle: "@anycode",
    site: "@anycode",
    cardType: "summary_large_image",
  },
};

export default SEO_CONFIG;
