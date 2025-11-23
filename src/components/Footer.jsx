import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [lang, setLang] = useState("en");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }
    setMsg({ type: "success", text: "Thank you! You are subscribed." });
    setEmail("");
    setTimeout(() => setMsg(null), 3500);
  };

  return (
    <footer className="w-full bg-white dark:bg-black relative mt-20 overflow-hidden">

      {/* ===== Wave Background (Full width fixed) ===== */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32" preserveAspectRatio="none">
          <path
            d="M0,64 C160,120 320,0 480,48 C640,96 800,0 960,32 C1120,64 1280,16 1440,80 L1440 0 L0 0 Z"
            fill="currentColor"
            className="text-white/90 dark:text-black/90"
          />
        </svg>
      </div>

      {/* ===== Glass Container (Centered + full width fixed) ===== */}
      <div className="relative w-full  mx-auto px-2 z-10">
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-800 rounded-2xl shadow-xl -mt-6 overflow-hidden mt-4 mb-4">

          <div className="py-12 px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

            {/* Logo + About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Hum Tum Ek Seva Samiti logo"
                  className="w-14 h-14 object-cover rounded-md shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Hum Tum Ek Seva Samiti
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Creating lasting impact through education, health & environment.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-md hover:bg-white/40 dark:hover:bg-gray-800 transition">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Objectives", href: "/objectives" },
                  { label: "Programs", href: "/programs" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Donate", href: "/donate" },
                ].map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.href}
                      className="text-gray-700 dark:text-gray-300 relative inline-block py-1 group"
                    >
                      <span>{l.label}</span>
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Our Programs
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "Education Support",
                  "Health Camps",
                  "Women Empowerment",
                  "Environment & Tree Plantation",
                  "Skill Development",
                ].map((p, i) => (
                  <li key={i} className="relative group inline-block">
                    <a href="#" className="py-1 block">
                      {p}
                      <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Language Switcher */}
              <div className="mt-6">
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                  <FaGlobe className="inline mr-2" />
                  Language
                </label>
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="w-full rounded-md px-3 py-2 text-sm bg-white/40 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="mr">मराठी</option>
                  <option value="bn">বাংলা</option>
                </select>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Newsletter
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get monthly updates about our programs and ways to help.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md bg-white/30 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700 focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:brightness-95 transition"
                >
                  Subscribe
                </button>

                {msg && (
                  <div className={`text-sm mt-1 ${msg.type === "success" ? "text-green-600" : "text-red-500"}`}>
                    {msg.text}
                  </div>
                )}

                <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                  <div>📍 Katni, Madhya Pradesh</div>
                  <div>📞 +91 7489581850</div>
                  <div>📧 srijanksah02@gmail.com</div>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-gradient-to-r from-white/10 to-transparent dark:from-black/10 border-t border-white/20 dark:border-gray-700 px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} Hum Tum Ek Seva Samiti. All rights reserved.</div>

              <div className="flex items-center gap-4">
                <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                <a href="#" className="text-sm hover:underline">Terms of Use</a>
                <span className="text-sm text-gray-500">Made with ❤️</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
