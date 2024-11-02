export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data protection information for Rashhworld services.",
  alternates: {
    canonical: `${process.env.SITE_URL}/privacy`,
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            How personal information is collected, used, and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Information Collection and Use
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Information is collected when you:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Visit the website",
                    "Fill out a contact form",
                    "Subscribe to a newsletter",
                    "Use the provided services",
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

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  The information collected includes:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Name and contact information",
                    "Business details",
                    "Website usage data",
                    "Technical information about your device and browser",
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
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How the information is used:
            </h2>
            <ul className="space-y-3">
              {[
                "Provide and maintain services",
                "Improve the website and services",
                "Communicate with you about the services",
                "Send periodic emails and updates",
                "Respond to your inquiries",
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
              Data Protection
            </h2>
            <ul className="space-y-3">
              {[
                "Secure SSL encryption",
                "Regular security assessments",
                "Limited access to personal information",
                "Secure data storage",
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
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                For questions about this privacy policy, please get in touch at:
              </p>
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

export default PrivacyPolicy;
