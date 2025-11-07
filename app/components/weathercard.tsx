import { Cloud, Droplet, Wind, Eye, Gauge, Sun, CloudRain, Calendar } from "lucide-react";

type Props = {
  temp: number;
  condition: string;
  location: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  feelsLike: number;
};


export default function WeatherCard({
  temp, condition, location, humidity, windSpeed, visibility, pressure, feelsLike,
}: Props) {
  return (
    <div className="rounded-2xl p-4 sm:p-8 w-full max-w-sm sm:max-w-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-xl relative text-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <Cloud className="w-10 h-10 sm:w-14 sm:h-14 text-cyan-400 drop-shadow" />
          <span className="text-4xl sm:text-7xl font-bold">{temp}°</span>
        </div>
        <Cloud className="w-20 h-20 sm:w-32 sm:h-32 opacity-20 text-cyan-200 absolute right-4 top-3 pointer-events-none" />
      </div>
      <div className="mt-4">
        <div className="text-lg sm:text-2xl font-semibold">{condition}</div>
        <div className="text-gray-500">{location}</div>
      </div>
      <div className="mt-6">
        <div className="inline-flex px-3 sm:px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
          Feels like <span className="font-bold ml-2">{feelsLike}°</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 sm:gap-4 mt-6 text-gray-700">
        <div className="flex flex-col items-center flex-1 min-w-[70px]">
          <Droplet className="w-5 h-5 text-cyan-400 mb-1" />
          <span className="font-bold">{humidity}%</span>
          <span className="text-xs text-gray-600">Humidity</span>
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[70px]">
          <Wind className="w-5 h-5 text-blue-300 mb-1" />
          <span className="font-bold">{windSpeed} km/h</span>
          <span className="text-xs text-gray-600">Wind</span>
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[70px]">
          <Eye className="w-5 h-5 text-blue-300 mb-1" />
          <span className="font-bold">{visibility} km</span>
          <span className="text-xs text-gray-600">Visibility</span>
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[70px]">
          <Gauge className="w-5 h-5 text-purple-300 mb-1" />
          <span className="font-bold">{pressure} mb</span>
          <span className="text-xs text-gray-600">Pressure</span>
        </div>
      </div>
    </div>
  );
}
