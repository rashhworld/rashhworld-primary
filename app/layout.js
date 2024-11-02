import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JsonLd from "./components/JsonLd";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: {
    default: "Rashhworld - Digital Marketing & Web Development Services",
    template: "%s | Rashhworld",
  },
  description:
    "Professional digital marketing, web development, and SEO services to help businesses grow online. Expert solutions in website design, social media marketing, and brand development.",
  keywords: [
    "digital marketing",
    "web development",
    "SEO services",
    "social media marketing",
    "website design",
    "brand development",
    "online marketing",
    "digital solutions",
    "business growth",
    "digital strategy",
  ],
  authors: [{ name: "Rashhworld" }],
  creator: "Rashhworld",
  publisher: "Rashhworld",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rashhworld - Digital Marketing & Web Development Services",
    description:
      "Professional digital marketing, web development, and SEO services to help businesses grow online.",
    url: process.env.SITE_URL,
    siteName: "Rashhworld",
    images: [
      {
        url: "/assets/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Rashhworld Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashhworld - Digital Marketing & Web Development Services",
    description:
      "Professional digital marketing, web development, and SEO services to help businesses grow online.",
    images: ["/assets/images/banner.jpg"],
    creator: "@rashh_sikun",
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
  verification: {
    google: "AI_xf3YkT1kAS3nLVaNSWfShTAuUWNcxzLMnt4WrYXs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/assets/favicons/manifest.json" />
        <meta
          name="msapplication-config"
          content="/assets/favicons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
