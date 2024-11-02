import { contactInfo, socialLinks } from "../data";

export default function JsonLd() {
  const socialUrls = socialLinks.map((link) => link.url);
  const phoneNumber =
    contactInfo.find((item) => item.title === "Phone")?.details || "";

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rashhworld",
          url: process.env.SITE_URL,
          logo: `${process.env.SITE_URL}/assets/images/logo.png`,
          sameAs: socialUrls,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: phoneNumber,
            contactType: "customer support",
          },
        }),
      }}
    />
  );
}
