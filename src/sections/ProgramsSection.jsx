import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaBook, FaHandsHelping, FaHeartbeat, FaFemale, FaSeedling } from "react-icons/fa";

const programs = [
  {
    icon: <FaBook />,
    title: "Education Support",
    desc: "Free tuition, books, uniforms & skill training for underprivileged children.",
    progress: 10,
    video: "https://videos.pexels.com/video-files/31921/31921-hd_1920_1080_24fps.mp4"
  },
  {
    icon: <FaHeartbeat />,
    title: "Health & Medical Camps",
    desc: "Organizing medical check-ups, blood camps & basic health awareness.",
    progress: 80,
    video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4"
  },
  {
    icon: <FaFemale />,
    title: "Women Empowerment",
    desc: "Skill development, financial literacy & self-employment programs.",
    progress: 75,
    video: "https://videos.pexels.com/video-files/1815252/1815252-hd_1920_1080_25fps.mp4"
  },
  {
    icon: <FaLeaf />,
    title: "Environment & Plantation",
    desc: "Tree plantation drives, clean-up campaigns & climate awareness.",
    progress: 85,
    video: "https://videos.pexels.com/video-files/2887469/2887469-hd_1920_1080_30fps.mp4"
  }
];

export default function ProgramSection() {
  return (
    <section className="relative pt-20 pb-32 bg-gray-50 dark:bg-black overflow-hidden">

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-1 z-0">
        <svg viewBox="0 0 1440 150" className="w-full fill-white dark:fill-black">
          <path d="M0 0L48 10C96 20 192 40 288 65C384 90 480 120 576 110C672 100 768 50 864 40C960 30 1056 60 1152 75C1248 90 1344 90 1392 90L1440 90V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"/>
        </svg>
      </div>

      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress')] bg-cover bg-center opacity-20 dark:opacity-30"
      ></div>

      {/* Color Overlay for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-black/70 dark:via-black/50 dark:to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Our Programs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Initiatives that create real, lasting change for society.
        </motion.p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              {/* Video */}
              <div className="h-52 overflow-hidden">
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3000ms]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-3xl text-teal-600 dark:text-teal-400 mb-3">
                  {p.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {p.desc}
                </p>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span>Impact Progress</span>
                    <span>{p.progress}%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1 z-0">
        <svg viewBox="0 0 1440 150" className="w-full fill-white dark:fill-black">
          <path d="M0 150L48 135C96 120 192 90 288 95C384 100 480 140 576 145C672 150 768 120 864 100C960 80 1056 70 1152 85C1248 100 1344 140 1392 145L1440 150V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"/>
        </svg>
      </div>
    </section>
  );
}
