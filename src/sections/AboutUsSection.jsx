import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaHandHoldingHeart,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 pt-20 bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">

      {/* ========================= HERO SECTION ========================= */}
      <section className="relative text-center py-16 px-4 md:py-20 overflow-hidden">

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <FaHandHoldingHeart className="text-pink-400/20 absolute top-10 left-10 text-6xl animate-pulse" />
          <FaGlobeAsia className="text-blue-400/20 absolute top-32 right-12 text-7xl animate-bounce" />
          <FaLeaf className="text-green-400/20 absolute bottom-20 left-20 text-7xl animate-spin-slow" />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          About <span className="text-blue-600">Hum Tum Ek Seva Samiti</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4"
        >
          Dedicated to education, health, environment, and social empowerment.
        </motion.p>

        <div className="mt-4 w-24 sm:w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
      </section>

      {/* ========================= STATS SECTION ========================= */}
      <section className="py-14 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">

          {[
            { number: "10+", label: "Years of Service" },
            { number: "5000+", label: "Beneficiaries Helped" },
            { number: "120+", label: "Volunteers" },
            { number: "40+", label: "Successful Programs" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center p-4 sm:p-6 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 shadow-lg"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                {stat.number}
              </div>
              <div className="mt-1 sm:mt-2 text-gray-700 text-sm sm:text-base dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ========================= TIMELINE ========================= */}
      <section className="py-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

        <div className="max-w-5xl mx-auto relative">

          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-teal-400"></div>

          {[
            { year: "2015", text: "Founded with 5 volunteers and a dream to serve society." },
            { year: "2018", text: "Started education & women empowerment programs." },
            { year: "2021", text: "Launched health camps and environmental drives." },
            { year: "2024", text: "Reached 5000+ people through multiple initiatives." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`mb-10 md:mb-14 flex md:justify-${i % 2 === 0 ? "start" : "end"} w-full`}
            >
              <div className="bg-white dark:bg-gray-900 p-5 md:p-6 rounded-xl shadow-xl w-full md:w-[45%] border border-white/20 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-lg sm:text-xl mb-2">
                  {item.year}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item.text}</div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ========================= VIDEO + STORY ========================= */}
      <section className="py-16 px-4 md:px-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg border border-white/20"
          >
            <video
              src="https://cdn.pixabay.com/vimeo/373984351/pexels-video-2153623.mp4?width=640"
              controls
              className="w-full h-auto rounded-xl"
            ></video>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
              Hum Tum Ek Seva Samiti was started with a passion to uplift society through
              education, healthcare, and environmental action.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              Today, we continue our mission with stronger determination and dedicated volunteers
              who help us create lasting impact.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================= WHY CHOOSE US ========================= */}
      <section className="py-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              icon: <FaUsers className="text-4xl text-blue-600" />,
              title: "Strong Volunteer Base",
              desc: "Our dedicated volunteers make every program successful.",
            },
            {
              icon: <FaLeaf className="text-4xl text-green-600" />,
              title: "Environment First",
              desc: "We focus on sustainable, eco-friendly initiatives.",
            },
            {
              icon: <FaHandHoldingHeart className="text-4xl text-pink-600" />,
              title: "Service With Compassion",
              desc: "Every step we take is rooted in care and humanity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-xl shadow-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-700"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
