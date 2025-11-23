import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const objectives = [
  "For the advancement of science, education, literature, or fine arts.",
  "To establish schools, colleges, technical institutions, and universities to provide vocational education and employment-oriented services. To organize training camps and competitions.",
  "To work for the dissemination of useful knowledge.",
  "To develop new technologies for agriculture, energy, water, and environmental conservation and promote their development and distribution.",
  "To operate schools, colleges, and non-formal education centers including literacy and moral education centers.",
  "To bring awareness regarding education, health, drinking water, safety, irrigation, land reform, resource conservation, wildlife & environmental protection, and tree plantation.",
  "To provide career counseling and personality development guidance for youth and women.",
  "For the promotion of social welfare.",
  "To run programs for health awareness, providing medical facilities, and operating medical camps.",
  "To organize cultural programs on national, religious, and social festivals.",
  "To promote cow protection, cow rearing, and conduct awareness programs for animal and bird conservation.",
  "To conduct awareness programs on energy conservation and water preservation."
];

export default function ObjectivesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black" id="objectives">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Our Objectives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          The core goals that guide our mission towards a better and empowered society.
        </motion.p>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-2xl mt-1" />
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {obj}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
