import React from 'react'
import { Cloud, CloudRain, Sun, ArrowDown } from "lucide-react";
import { Inter, Manrope, Outfit, IBM_Plex_Sans, Urbanist } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function page() {
  return (
    <div className={`${inter.variable} min-h-screen bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 font-sans`}>
      {/*Hero Section*/}
      <div className='flex flex-col justify-center items-center'> 
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full
                bg-white/10 backdrop-blur-md border border-white/30
                shadow-none m-3 mt-15">
          <span className="block h-3 w-3 rounded-full bg-blue-400"></span>
          <span className="text-base text-gray-800">Live Weather Updates</span>
        </div>
        <h1 className=" font-bold tracking-tight flex flex-col items-center justify-center">
          <div className='text-cyan-200 drop-shadow-lg text-9xl'>Aethera</div>
          <div>
            <span className="bg-gradient-to-r text-8xl drop-shadow-lg from-cyan-500 via-green-400 to-yellow-400 bg-clip-text text-transparent opacity-80">Weather Intelligence</span>
          </div>
        </h1>
        <div className="absolute z-0 top-40 left-20 opacity-40 pointer-events-none">
          <Cloud className="w-60 h-60 text-white animate-cloud" />
        </div>
         <div className="absolute z-0 top-20 right-40 opacity-40 pointer-events-none">
          <Sun className="w-60 h-60 text-white animate-cloud" />
        </div>
        <div className='text-gray-600 text-2xl w-140 flex justify-center items-center flex-col '>
          <p>Real-time weather insights powered by advanced</p>
          <p>AI Integration</p> 
        </div>
      </div>
      {/*Weather Data Section*/}
    </div>
  )
}
