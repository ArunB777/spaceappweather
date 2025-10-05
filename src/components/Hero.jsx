import React from 'react';

export default function Hero() {
  return (
    <div className="text-center py-10 bg-day-to-night"> {/* Use custom gradient from tailwind.config.js */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        🌍 Space Weather Explorer
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
        Discover the chances of extreme weather conditions anywhere on Earth —
        oceans, islands, mountains, or your own city — powered by NASA’s open data.
      </p>
      <button className="mt-6 px-6 py-3 bg-sky-blue hover:bg-space-blue text-white font-semibold rounded-lg transition duration-300">
        Explore Now
      </button>
    </div>
  );
}