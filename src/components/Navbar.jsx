// src/components/Navbar.jsx
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-gray-400/10 dark:bg-gray-900/50 shadow z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="SoftSell Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl text-blue-600">SoftSell</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
          />
          <button className="bg-blue-600 text-white active:scale-95 px-4 py-1 rounded hover:bg-blue-700 transition">
            Get Quote
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 active:scale-95 text-gray-800 dark:text-gray-200 px-4 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Contact Us
          </button>
          <DarkModeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
          />
          <button className="w-full bg-blue-600 text-white active:scale-95 px-4 py-2 rounded hover:bg-blue-700 transition">
            Get Quote
          </button>
          <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
