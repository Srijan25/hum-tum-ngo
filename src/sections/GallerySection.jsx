import React, { useState } from "react";
import { motion } from "framer-motion";

// Online images for now — replace anytime
const images = [
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg",
  "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg",
  "https://images.pexels.com/photos/3184645/pexels-photo-3184645.jpeg",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
  "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg",
  "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg",
  "https://images.pexels.com/photos/3184630/pexels-photo-3184630.jpeg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 transition">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          Moments we captured while serving the community. These photos represent
          hope, kindness, and our team in action.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer break-inside-avoid"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-auto object-cover rounded-xl hover:opacity-90 transition"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
}
