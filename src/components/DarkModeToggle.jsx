import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // On mount, check user preference or saved setting
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded focus:outline-none bg-gray-200 dark:bg-gray-700 active:scale-95 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 text-amber-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
