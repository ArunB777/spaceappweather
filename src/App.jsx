import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./components/Hero.jsx";
import MapComponent from "./components/MapComponent.jsx";
import ResultsPanel from "./components/ResultsPanel.jsx";


export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

  useEffect(() => {
    if (selectedLocation) {
      setLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lng}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          const weather = response.data.weather[0].main.toLowerCase();
          setPredictions({
            hot: weather.includes('clear') ? '80%' : '20%',
            cold: weather.includes('snow') ? '70%' : '10%',
            windy: response.data.wind.speed > 5 ? '60%' : '20%',
            wet: weather.includes('rain') ? '70%' : '15%',
            uncomfortable: response.data.main.humidity > 70 ? '50%' : '10%',
          });
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setPredictions({
            hot: '0%',
            cold: '0%',
            windy: '0%',
            wet: '0%',
            uncomfortable: '0%',
          });
        })
        .finally(() => setLoading(false));
    }
  }, [selectedLocation]);

  const defaultPredictions = {
    hot: '70%',
    cold: '10%',
    windy: '30%',
    wet: '40%',
    uncomfortable: '25%',
  };

  return (
    <div className="min-h-screen bg-day-to-night text-white relative">
      <div className="clouds"></div>
      <Hero />
      <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-2/3 h-[500px]">
          <MapComponent setSelectedLocation={setSelectedLocation} />
        </div>
        <div className="w-full md:w-1/3">
          {loading ? (
            <div className="text-center text-gray-400">Loading predictions...</div>
          ) : selectedLocation ? (
            <ResultsPanel location={selectedLocation} predictions={predictions || defaultPredictions} />
          ) : (
            <div className="text-center text-gray-400">Select a location on the map</div>
          )}
        </div>
      </div>
    </div>
  );
}