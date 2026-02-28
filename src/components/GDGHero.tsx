import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#F8F9FA] bg-grid-pattern pt-16 md:pt-20">

      {/* Content Wrapper for Fading */}
      <div id="hero-content" className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Neon Green Blocks - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[80px] left-0 md:left-[60px] flex flex-col gap-0 z-0"
        >
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
          </div>
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
          </div>
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
          </div>
        </motion.div>

        {/* Neon Green Blocks - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute bottom-0 right-0 md:right-[60px] flex flex-col items-end gap-0 z-0"
        >
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
          </div>
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
          </div>
          <div className="flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border-[0.5px] border-gray-100/10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00]"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center">

          {/* Top Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[28px] md:text-[40px] font-medium text-black tracking-tight mb-8 md:mb-12 text-center"
          >
            Google Developers Group - LIVE
          </motion.h2>

          {/* Center Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start w-full md:w-1/3"
            >
              <h1 className="text-[56px] md:text-[96px] font-black leading-none tracking-tighter text-black text-center md:text-left">
                ON CAMPUS
              </h1>
              {/* Left Arrows */}
              <div className="flex gap-4 mt-8 md:mt-14 text-[#B6FF00]/40 w-full justify-center md:justify-start overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [-5, 0, -5], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center Graphic (Dino) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 flex justify-center my-6 md:my-0 h-full py-6 md:py-10"
            >
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-gray-100/50 flex items-center justify-center p-12 cursor-none group">
                {/* Decorative corners for the box */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-black"></div>
                <div className="absolute top-6 right-6 w-3 h-3 bg-black"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-black"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-black"></div>

                {/* Dino Image */}
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="https://github.com/google/dino/blob/main/assets/default_100_percent/1x-trex.png?raw=true"
                  alt="Chrome Dino"
                  className="w-32 md:w-44 opacity-90 drop-shadow-2xl"
                  style={{ imageRendering: 'pixelated' }}
                />

                {/* Floating elements */}
                <div className="absolute top-1/4 right-[20%] w-4 h-4 bg-[#B6FF00] rotate-45 animate-bounce" />
                <div className="absolute bottom-1/4 left-[15%] w-2 h-2 bg-black rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-end w-full md:w-1/3"
            >
              {/* Right Arrows */}
              <div className="flex gap-4 mb-8 md:mb-14 text-[#B6FF00]/40 w-full justify-center md:justify-end overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [0, 5, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
              <h1 className="text-[56px] md:text-[96px] font-black leading-none tracking-tighter text-black text-center md:text-right">
                VIT, MUMBAI
              </h1>
            </motion.div>

          </div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 md:mt-16 text-center text-[14px] md:text-[15px] font-medium text-black/70 max-w-[500px] leading-relaxed"
          >
            We turn ideas into timeless digital experiences through thoughtful strategy and refined aesthetics.
          </motion.p>

        </div>
      </div>
    </div>
  );
}
