import React from 'react'
import { Inter, Manrope, Outfit, IBM_Plex_Sans, Urbanist } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function page() {
  return (
    <div className={`${inter.variable} min-h-screen bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 font-sans`}>
      <div className='flex flex-col justify-center items-center'> {/*Hero Section*/}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full
                bg-white/10 backdrop-blur-md border border-white/30
                shadow-none m-3 mt-15">
          <span className="block h-3 w-3 rounded-full bg-blue-400"></span>
          <span className="text-base text-gray-800">Live Weather Updates</span>
        </div>
        <h1 className="text-6xl font-bold tracking-tight flex flex-col items-center justify-center">
          <div className='text-gray-800 text-8xl'>Aethera</div>
          <div>
            <span className="bg-gradient-to-r from-cyan-500 via-green-400 to-yellow-400 bg-clip-text text-transparent opacity-80">Weather Intelligence</span>
          </div>
        </h1>
      </div>
    </div>
  )
}
