import Link from "next/link";
import { contactInfo, socialLinks, navLinks } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          <div className="col-span-1 md:col-span-4">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              RASHH <span className="text-blue-400">WORLD</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Transforming ideas into digital excellence through innovative web
              solutions. Specialize in creating powerful, user-friendly websites
              and applications that drive business growth. Commitment to
              excellence ensures that every project is delivered on time and
              within budget.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 col-span-1 md:col-span-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks
                  .filter((link) => link.title !== "Home")
                  .map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Development & SEO",
                  "E-Commerce Solutions",
                  "Domain & Web Hosting",
                  "Support & Maintenance",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {item.details}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                  aria-label={social.title}
                >
                  <div className="flex items-center justify-center w-4 h-4">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between text-center md:text-left">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} RashhWorld. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex justify-center md:justify-start space-x-6 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
