"use client";
import React, { useState } from "react";
import WeatherCard from "@/app/components/weathercard"; // Import your component

export default function WeatherPage() {
  const [city, setCity] = useState("Bandung");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (targetCity: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(targetCity)}`);
      if (!res.ok) throw new Error("Not found or error fetching data");
      const data = await res.json();
      setWeather(data);
    } catch (err: any) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when city changes (optional: only on search)
  React.useEffect(() => {
    fetchWeather(city);
  }, []);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <div className="flex flex-col items-center pt-20">
      {/* City search form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-0 mb-8 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-md px-2 py-1 transition focus-within:ring-2 focus-within:ring-cyan-300 max-w-sm mx-auto"
      >
        <input
          className="flex-1 px-6 py-3 rounded-full bg-transparent text-lg text-blue-900 placeholder:text-blue-400 outline-none border-none focus:ring-0"
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter a city (e.g. London)"
        />
        <button
          type="submit"
          className="ml-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-bold shadow-lg hover:from-cyan-600 hover:to-blue-500 transition duration-200"
        >
          Search
        </button>
      </form>

      {/* Weather display */}
      {loading && <div className="text-blue-600">Loading...</div>}
      {error && (
        <div className="text-red-600 mb-4">
          {error}
        </div>
      )}
      {weather && weather.main && (
        <WeatherCard
          temp={Math.round(weather.main.temp)}
          condition={weather.weather?.[0]?.main}
          location={weather.name + ", " + (weather.sys?.country ?? "")}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
          visibility={(weather.visibility ?? 0) / 1000}
          pressure={weather.main.pressure}
          feelsLike={Math.round(weather.main.feels_like)}
        />
      )}
    </div>
  );
}
