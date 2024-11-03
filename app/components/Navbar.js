"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { navLinks } from "@/app/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              RASHH <span className="text-blue-400">WORLD</span>
            </Link>
          </div>

          <div
            className={`transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:relative top-0 md:top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-white dark:bg-gray-900 md:dark:bg-transparent shadow-lg md:shadow-none flex items-center justify-center md:block z-50`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none transition-all duration-200 hover:rotate-180"
            >
              <HiX className="h-8 w-8" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center md:ml-10 md:space-x-4 p-4 md:p-0 space-y-8 md:space-y-0 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "bg-blue-500 md:bg-gray-700 text-white"
                      : "text-gray-700 hover:text-white hover:bg-blue-500 md:hover:bg-gray-700 dark:text-gray-300 md:dark:text-white"
                  } uppercase tracking-wider px-8 py-4 md:py-2 md:px-4 text-2xl md:text-base font-semibold transition-all duration-300 relative group overflow-hidden md:rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              <CgMenuGridO className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {isOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transition-all duration-500"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
