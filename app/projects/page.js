import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/app/lib/data";
import { generateMetadata } from "@/app/utils/metadata";
import Skeleton from "@/app/components/Skeleton";

export const metadata = generateMetadata({
  title: "Portfolio",
  description:
    "View successful digital marketing campaigns and web development projects. See how businesses have grown.",
  path: "/projects",
});

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
    <div className="relative h-64 w-full">
      <Skeleton />
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between pt-4">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaGithub className="text-xl" />
            <span>View Code</span>
          </Link>
          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200"
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and personal projects that showcase my skills
            and passion for development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
