import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaBullhorn,
  FaLeaf,
  FaHandsHelping,
  FaHeartbeat,
  FaUsers,
  FaAward,
  FaGlobeAmericas,
  FaTree,
  FaWater,
  FaTools,
} from "react-icons/fa";

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <FaBookReader className="text-4xl text-blue-500" />,
      text: "For the advancement of science, education, literature, or fine arts.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-indigo-500" />,
      text: "To establish schools, colleges, technical institutions, and universities to provide vocational education and employment-oriented services.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-yellow-500" />,
      text: "To work for the dissemination of useful knowledge.",
    },
    {
      icon: <FaTools className="text-4xl text-amber-600" />,
      text: "To develop technologies for agriculture, energy, water, and environmental conservation.",
    },
    {
      icon: <FaBookReader className="text-4xl text-green-600" />,
      text: "To operate schools, colleges, and non-formal education centers including literacy and moral education.",
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-teal-600" />,
      text: "To bring awareness about education, health, drinking water, safety, irrigation, land reform & environmental protection.",
    },
    {
      icon: <FaUsers className="text-4xl text-pink-500" />,
      text: "To provide career counseling and personality development for youth and women.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-orange-500" />,
      text: "For the promotion of social welfare.",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-red-500" />,
      text: "To run health awareness programs, provide medical facilities, and operate medical camps.",
    },
    {
      icon: <FaAward className="text-4xl text-purple-600" />,
      text: "To organize cultural programs on national, religious, and social festivals.",
    },
    {
      icon: <FaTree className="text-4xl text-green-700" />,
      text: "To promote cow protection, animal conservation, and bird conservation awareness.",
    },
    {
      icon: <FaWater className="text-4xl text-blue-700" />,
      text: "To conduct awareness programs on energy conservation and water preservation.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-black overflow-hidden">
      {/* Floating soft gradients */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300/30 dark:bg-blue-900/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal-300/30 dark:bg-teal-900/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4"
        >
          Our Objectives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14"
        >
          The 12 core goals that guide Hum Tum Ek Seva Samiti towards a brighter, empowered society.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl border border-white/30 dark:border-gray-700 shadow-lg p-6 transition-all hover:shadow-2xl"
            >
              <div className="flex gap-4 items-start">
                <div className="p-4 bg-white/80 dark:bg-gray-800/50 rounded-xl shadow-inner">
                  {obj.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {obj.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
