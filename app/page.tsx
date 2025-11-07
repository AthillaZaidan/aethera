import React from 'react';
import { Cloud, Sun } from "lucide-react";
import { Inter } from "next/font/google";
import WeatherPage from './components/weatherPage';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Page() {
  return (
    <div className={`${inter.variable} min-h-screen bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 font-sans overflow-x-hidden`}>
      <div className="relative w-full">
        <div className="absolute z-0 top-10 left-2 md:top-20 md:left-20 opacity-30 pointer-events-none">
          <Cloud className="w-12 h-12 sm:w-20 sm:h-20 md:w-44 md:h-44 text-white animate-cloud" />
        </div>
        <div className="absolute z-0 top-6 right-2 md:top-12 md:right-40 opacity-30 pointer-events-none">
          <Sun className="w-12 h-12 sm:w-20 sm:h-20 md:w-44 md:h-44 text-white animate-cloud" />
        </div>
      </div>
      {/* Hero Section */}
      <div className='flex flex-col justify-center items-center relative z-10 w-full px-2 pt-10 sm:pt-16'>
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full
                bg-white/10 backdrop-blur-md border border-white/30 shadow-none m-3 mt-4 sm:mt-8">
          <span className="block h-3 w-3 rounded-full bg-blue-400"></span>
          <span className="text-base sm:text-lg text-gray-800">Live Weather Updates</span>
        </div>
        <h1 className="font-bold tracking-tight flex flex-col items-center justify-center text-center mt-2">
          <div className='text-cyan-200 drop-shadow-lg text-4xl sm:text-6xl md:text-8xl lg:text-9xl transition-all'>Aethera</div>
          <div>
            <span className="bg-gradient-to-r from-cyan-500 via-green-400 to-yellow-400
                    bg-clip-text text-transparent opacity-80 drop-shadow-lg
                    text-3xl sm:text-5xl md:text-7xl lg:text-8xl transition-all block">
              Weather Intelligence
            </span>
          </div>
        </h1>
        <div className="text-gray-600 text-base sm:text-xl md:text-2xl w-full max-w-2xl flex justify-center items-center flex-col mt-4 mb-6 px-2 text-center">
          <p>Real-time weather insights powered by advanced</p>
          <p>AI Integration</p>
        </div>
      </div>
      {/* Weather Data Section */}
      <div className="w-full flex justify-center pb-20 px-2">
        <div className="w-full max-w-2xl">
          <WeatherPage />
        </div>
      </div>
    </div>
  );
}
