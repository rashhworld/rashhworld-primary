import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <div className="relative mb-8 group">
          <div className="text-9xl font-bold text-blue-500/20 dark:text-blue-500/10 animate-float">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
          Oops! The page you're looking for seems to have vanished into the
          digital void. Don't worry, you can find your way back home or explore
          other sections of our site.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold hover:shadow-lg"
          >
            <FaHome className="text-lg" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:shadow-lg"
          >
            <FaSearch className="text-lg" />
            Need Help?
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm hover:bg-blue-500/20 transition-colors duration-200 cursor-default">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Error Code: 404 | Page Not Found
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
