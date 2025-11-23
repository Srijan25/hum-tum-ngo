import React from "react";

export default function Loader({ full = true }) {
  return (
    <div className={`${full ? "fixed inset-0 flex items-center justify-center bg-white/70 dark:bg-black/60 z-50" : "inline-block"}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="loader"></div>
        <div className="text-gray-700 dark:text-gray-200 font-medium">Loading...</div>
      </div>
    </div>
  );
}
