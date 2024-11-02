import React from "react";
import { services } from "../data";

export const metadata = {
  title: "Services",
  description:
    "Explore a comprehensive range of digital marketing, web development, and SEO services designed to boost online presence.",
  alternates: {
    canonical: `${process.env.SITE_URL}/services`,
  },
  openGraph: {
    title: "Rashhworld Services",
    description:
      "Explore a comprehensive range of digital marketing, web development, and SEO services designed to boost online presence.",
  },
};

const ServiceCard = ({ service }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
        {service.icon}
      </div>
      <div className="text-right">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Starting at
        </span>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ₹{service.price}
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      {service.description}
    </p>
    <ul className="space-y-2">
      {service.features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center text-gray-600 dark:text-gray-300"
        >
          <svg
            className="w-4 h-4 mr-2 text-green-500"
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
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Services You Need
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Web Solutions That Drive Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business
            needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
