export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Rashhworld services.",
  alternates: {
    canonical: `${process.env.SITE_URL}/terms`,
  },
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Terms and conditions for using Rashhworld services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              1. Services
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Rashhworld provides the following services:
              </p>
              <ul className="space-y-3">
                {[
                  "Web Development (Static & Dynamic)",
                  "E-Commerce Solutions",
                  "SEO Services",
                  "Support & Extensions",
                  "Domain & Hosting Solutions",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center text-gray-600 dark:text-gray-300"
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              2. Project Terms
            </h2>
            <ul className="space-y-3">
              {[
                "All projects require a signed agreement",
                "Payment terms: 50% upfront, 50% upon completion",
                "Project timelines will be specified in the agreement",
                "Two rounds of revisions included in base price",
                "Additional revisions charged at hourly rate",
                "Regular progress updates and communication",
              ].map((term) => (
                <li
                  key={term}
                  className="flex items-center text-gray-600 dark:text-gray-300"
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {term}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              3. Intellectual Property
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Upon full payment:
              </p>
              <ul className="space-y-3">
                {[
                  "Clients receive full rights to their website design",
                  "Custom code remains property of Rashhworld",
                  "Third-party assets maintain their original licenses",
                  "Source code provided as specified in agreement",
                  "Client content remains property of the client",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-600 dark:text-gray-300"
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              4. Maintenance & Support
            </h2>
            <ul className="space-y-3">
              {[
                "30-day bug fix guarantee after project completion",
                "Optional maintenance packages available",
                "24/7 emergency support for hosting issues",
                "Regular security updates and monitoring",
                "Backup and recovery services",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-gray-600 dark:text-gray-300"
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              5. Contact Information
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>For questions about these terms, please get in touch at:</p>
              <div className="space-y-2">
                <p>Email: rashhworld@hotmail.com</p>
                <p>Phone: +91 7008862618</p>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
