import Link from "next/link";
import { navLinks } from "../data";

export const metadata = {
  title: "Sitemap",
  description: "Navigate through all pages and services of Rashhworld.",
  alternates: {
    canonical: `${process.env.SITE_URL}/sitemap`,
  },
};

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Navigation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Sitemap
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find and navigate through all pages and services of Rashhworld
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Main Pages
            </h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Services
            </h2>
            <ul className="space-y-3">
              {[
                "Web Development",
                "E-Commerce Solutions",
                "SEO Services",
                "Support & Extensions",
                "Domain & Hosting",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Legal Pages
            </h2>
            <ul className="space-y-3">
              {[
                { title: "Privacy Policy", path: "/privacy" },
                { title: "Terms of Service", path: "/terms" },
              ].map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.path}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Resources
            </h2>
            <ul className="space-y-3">
              {[
                { title: "Projects", path: "/projects" },
                { title: "Contact", path: "/contact" },
                { title: "About", path: "/about" },
              ].map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.path}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
