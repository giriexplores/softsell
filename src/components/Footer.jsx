// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="SoftSell Logo" className="h-6 w-auto" />
          <span className="text-sm">&copy; {year} SoftSell</span>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-4">
          <span className="text-sm hover:underline">Privacy Policy</span>
          <span className="text-sm hover:underline">
            Terms & Conditions
          </span>
        </div>

        {/* Right: Created By */}
        <div className="text-sm">
          Created by{" "}
          <a
            href="https://github.com/giriexplores"
            target="_blank"
            className="hover:underline text-blue-500"
          >
            Aditya Kumar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
