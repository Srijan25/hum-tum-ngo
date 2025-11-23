import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkToggle from "./DarkToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Objectives", path: "/objectives" },
  { name: "Programs", path: "/programs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
        >
          HUM TUM EK SEVA SAMITI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className={`text-sm font-medium transition-all ${
                location.pathname === l.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              {l.name}
            </Link>
          ))}

          {/* Donate button */}
          <Link
            to="/donate"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Donate
          </Link>

          {/* Theme Toggle */}
          <DarkToggle />
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg border-t border-gray-200 dark:border-gray-700 animate-slideDown">
          <nav className="flex flex-col py-4 px-6 gap-3">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base py-2 rounded-md px-2 ${
                  location.pathname === l.path
                    ? "bg-blue-600/10 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {l.name}
              </Link>
            ))}

            {/* Donate button */}
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-md"
            >
              Donate
            </Link>

            {/* Theme Toggle */}
            <DarkToggle className="mt-3" />
          </nav>
        </div>
      )}
    </header>
  );
}
