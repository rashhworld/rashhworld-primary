import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import {
  featuredServices,
  featuredProjects,
  testimonials,
} from "@/app/lib/data";
import { generateMetadata } from "@/app/utils/metadata";
import Skeleton from "@/app/components/Skeleton";

export const metadata = generateMetadata({
  title: "Rashhworld - Digital Marketing & Web Development Services",
  description:
    "Professional digital marketing, web development, and SEO services to help businesses grow online.",
  path: "/",
});

const HomePage = () => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative h-[calc(100vh-60px)] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 dark:bg-gray-900 opacity-90"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900/50"></div>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  background: "linear-gradient(45deg, #60A5FA, #8B5CF6)",
                  borderRadius: "2px",
                  opacity: 0.3,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400">
                Step into the future{" "}
                <span className="hidden md:inline">
                  {" "}
                  of digital enhancement!
                </span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into
              <span className="text-blue-400 block">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional web development services to help your business grow
              and succeed in the digital world.
            </p>
            <div className="flex justify-center gap-6 mt-12">
              <Link
                href="/contact"
                className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="hidden md:inline-flex px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm border border-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400">Perfect Catch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expert Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive web solutions for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg font-semibold transition-all duration-200 border border-blue-500/20 hover:border-blue-500/30"
            >
              View All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400">Attractive Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Some of the best work that showcases the capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Skeleton />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg font-semibold transition-all duration-200 border border-blue-500/20 hover:border-blue-500/30"
            >
              View All Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Skeleton />
                <Image
                  src="/assets/images/about.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
                <span className="text-blue-400">About RashhWorld</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Crafting Digital Excellence
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Dedicated to digital craftsmanship, the focus is on
                  transforming ideas into impactful online experiences. With
                  expertise in web development, e-commerce, and digital
                  solutions, businesses can establish a strong digital presence.
                </p>
                <p>
                  The approach merges creative design, advanced technology, and
                  strategic thinking to provide solutions that foster genuine
                  business growth.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg font-semibold transition-all duration-200 border border-blue-500/20 hover:border-blue-500/30"
                >
                  More Details
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-600 dark:text-blue-400">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Don&apos;t just take the word for it - hear from the satisfied
              clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 relative group hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md"
              >
                <FaQuoteLeft className="text-blue-500/20 dark:text-blue-400/20 text-4xl absolute top-6 left-6" />
                <div className="relative z-10">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
