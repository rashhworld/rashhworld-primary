import React from "react";
import Image from "next/image";
import Link from "next/link";
import { skills } from "@/app/lib/data";
import { generateMetadata } from "@/app/utils/metadata";
import Skeleton from "@/app/components/Skeleton";

export const metadata = generateMetadata({
  title: "About",
  description:
    "Learn about Rashhworld's journey, its mission, and how businesses succeed in the digital world.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Turning Ideas Into Digital Reality
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate web developer crafting innovative solutions for the
            modern digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Skeleton />
            <Image
              src="/assets/images/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hello, I&apos;m Ranjan Rashmi
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in web development, I specialize
              in creating beautiful, functional, and user-friendly websites. My
              journey in tech started with a passion for solving problems and
              has evolved into a career focused on delivering exceptional
              digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies and best practices in web
              development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My expertise spans across both frontend and backend development,
              allowing me to build complete web solutions from concept to
              deployment. I&apos;m particularly passionate about creating
              responsive designs and optimizing web performance for the best
              user experience.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900 dark:text-gray-200 rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Journey
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                MERN Stack Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">2023 - Present</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Developing full-stack web applications using MongoDB,
                Express.js, React.js, and Node.js while focusing on scalable and
                performant solutions.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                LAMP Stack Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">2019 - 2023</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Built and maintained dynamic web applications using Core PHP,
                Codeigniter, and MySQL, delivering robust solutions for diverse
                client needs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Frontend Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">2018 - 2019</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Specialized in creating responsive and interactive user
                interfaces using modern frontend technologies like Bootstrap and
                Tailwind.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you need a website, web application, or
            technical consultation, I&apos;m here to help bring your ideas to
            life.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
