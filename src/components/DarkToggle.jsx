import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkToggle({ className = "" }) {
  const { theme, toggle } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`flex items-center gap-2 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {isDark ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-700" />}
      <span className="text-sm hidden md:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
