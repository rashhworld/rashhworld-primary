const baseURL = process.env.SITE_URL;

export const baseMetadata = {
  metadataBase: new URL(baseURL),
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
    url: baseURL,
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
    google: "7E0EkrlET09UGyUBQuyMndPoU0YW3SQwriuaL8vYdpc",
  },
};

export function generateMetadata({ title, description, path = "" }) {
  const canonical = `${baseURL}${path}`;

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${title} | Rashhworld`,
      description,
      url: canonical,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${title} | Rashhworld`,
      description,
    },
  };
}
