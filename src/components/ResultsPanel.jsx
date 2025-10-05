import React from 'react';

export default function ResultsPanel({ location, predictions }) {
  // Check if location or predictions are available
  if (!location || !predictions) {
    return <div className="p-6 text-center text-gray-400">No data available. Select a location on the map.</div>;
  }

  const categories = [
    { label: "🔥 Very Hot", value: predictions.hot, color: "from-orange-500 to-red-600" },
    { label: "❄️ Very Cold", value: predictions.cold, color: "from-blue-400 to-cyan-600" },
    { label: "💨 Very Windy", value: predictions.windy, color: "from-teal-400 to-green-600" },
    { label: "🌧 Very Wet", value: predictions.wet, color: "from-sky-500 to-indigo-700" },
    { label: "😓 Uncomfortable", value: predictions.uncomfortable, color: "from-gray-400 to-gray-700" },
  ];

  return (
    <div className="p-6 space-y-4 bg-black/30 rounded-lg shadow-lg border border-gray-700" role="region" aria-label="Weather Predictions">
      <h2 className="text-2xl font-semibold mb-2 text-white">Predictions</h2>
      <p className="text-sm text-gray-300">
        Location: {location.lat.toFixed(2)}, {location.lng.toFixed(2)}
      </p>
      <div className="space-y-3">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl bg-gradient-to-r ${cat.color} text-white shadow-md`}
            role="article"
            aria-label={`${cat.label} - ${cat.value}`}
          >
            <p className="text-lg font-bold">{cat.label}</p>
            <p className="text-xl">{cat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}