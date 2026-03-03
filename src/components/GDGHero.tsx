import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8F9FA] bg-grid-pattern pt-20">
      
      {/* Neon Green Blocks - Top Left */}
      <div className="absolute top-[80px] left-0 md:left-[60px] flex flex-col gap-0 z-0">
        <div className="flex">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-transparent"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
        </div>
        <div className="flex">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
        </div>
      </div>

      {/* Neon Green Blocks - Bottom Right */}
      <div className="absolute bottom-0 right-0 md:right-[60px] flex flex-col items-end gap-0 z-0">
        <div className="flex">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
        </div>
        <div className="flex">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center">
        
        {/* Top Heading */}
        <h2 className="text-[32px] md:text-[48px] font-medium text-black tracking-tight mb-12 md:mb-20 text-center">
          Google Developers Group
        </h2>

        {/* Center Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Left Text */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <h1 className="text-[48px] md:text-[80px] font-medium leading-none tracking-tighter text-black text-center md:text-left">
              ON CAMPUS
            </h1>
            {/* Left Arrows */}
            <div className="flex gap-4 mt-6 md:mt-12 text-black/20 w-full justify-center md:justify-start overflow-hidden">
               {[...Array(8)].map((_, i) => (
                 <ChevronLeft key={i} className="w-6 h-6" />
               ))}
            </div>
          </div>

          {/* Center Graphic (Dino) */}
          <div className="w-full md:w-1/3 flex justify-center my-8 md:my-0">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-center p-8">
              {/* Decorative corners for the box */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-black"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-black"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black"></div>
              
              {/* Dino Image */}
              <img 
                src="https://github.com/google/dino/blob/main/assets/default_100_percent/1x-trex.png?raw=true" 
                alt="Chrome Dino" 
                className="w-24 md:w-32 opacity-80"
                style={{ imageRendering: 'pixelated' }}
              />
              {/* Asteroids/Particles decoration */}
              <div className="absolute top-1/3 right-1/4 flex gap-2">
                 <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                 <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
             {/* Right Arrows */}
             <div className="flex gap-4 mb-6 md:mb-12 text-black/20 w-full justify-center md:justify-end overflow-hidden">
               {[...Array(8)].map((_, i) => (
                 <ChevronRight key={i} className="w-6 h-6" />
               ))}
            </div>
            <h1 className="text-[48px] md:text-[80px] font-medium leading-none tracking-tighter text-black text-center md:text-right">
              VIT, MUMBAI
            </h1>
          </div>

        </div>

        {/* Footer Text */}
        <p className="mt-20 md:mt-32 mb-10 text-center text-[14px] md:text-[16px] font-medium text-black/70 max-w-[500px] leading-relaxed">
          We turn ideas into timeless digital experiences through thoughtful strategy and refined aesthetics.
        </p>

  
      </div>
      {/* Add this inside the main container of GDGHero, at the very bottom */}
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
    
  );
}
