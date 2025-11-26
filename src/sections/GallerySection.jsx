import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  {
    type: "image",
    category: "Education",
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    caption: "Teaching children — spreading knowledge",
  },
  {
    type: "image",
    category: "Health",
    src: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg",
    caption: "Health camp organized for villagers",
  },
  {
    type: "image",
    category: "Women Empowerment",
    src: "https://images.pexels.com/photos/3184645/pexels-photo-3184645.jpeg",
    caption: "Skill training for women's empowerment",
  },
  {
    type: "image",
    category: "Environment",
    src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    caption: "Tree plantation to protect the environment",
  },
  {
    type: "video",
    category: "Events",
    src: "https://videos.pexels.com/video-files/3184312/3184312-hd_1920_1080_25fps.mp4",
    caption: "Community awareness event",
  },
  {
    type: "image",
    category: "Education",
    src: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
    caption: "Student group activities",
  },
  {
    type: "image",
    category: "Health",
    src: "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg",
    caption: "Medical assistance in rural areas",
  },
  {
    type: "image",
    category: "Environment",
    src: "https://images.pexels.com/photos/3184630/pexels-photo-3184630.jpeg",
    caption: "Eco-awareness program",
  },
];

const categories = ["All", "Education", "Health", "Environment", "Women Empowerment", "Events"];

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredData =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % galleryData.length);
    setSelected(galleryData[(slideIndex + 1) % galleryData.length]);
  };

  const goPrev = () => {
    setSlideIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    setSelected(galleryData[(slideIndex - 1 + galleryData.length) % galleryData.length]);
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 transition">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          Explore our journey through photos & videos of our community service initiatives.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition font-medium ${
              filter === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5"
      >
        <AnimatePresence>
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer break-inside-avoid"
              onClick={() => {
                setSelected(item);
                setSlideIndex(galleryData.indexOf(item));
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="w-full rounded-xl transition group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full rounded-xl"
                  muted
                  autoPlay
                  loop
                />
              )}

              {/* Hover Caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4 rounded-xl">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox + Slideshow */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Previous */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-3"
              onClick={goPrev}
            >
              ❮
            </button>

            {/* Next */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-3"
              onClick={goNext}
            >
              ❯
            </button>

            {selected.type === "image" ? (
              <img
                src={selected.src}
                className="w-full rounded-xl shadow-2xl"
              />
            ) : (
              <video
                src={selected.src}
                className="w-full rounded-xl shadow-xl"
                controls
                autoPlay
              />
            )}

            <p className="text-center text-gray-200 mt-3">{selected.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
