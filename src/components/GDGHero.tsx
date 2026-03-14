import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { WebcamPixelGrid } from '@/components/ui/webcam-pixel-grid';

export default function Hero() {
  const [webcamReady, setWebcamReady] = useState(false);
  
 useEffect(() => {
    const timer = setTimeout(() => setWebcamReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20 sm:pt-24 md:pt-28">

      {/* Webcam Pixel Grid Background */}
      {/* <div className="absolute inset-0">
        {webcamReady && (
          <WebcamPixelGrid
            gridCols={60}
            gridRows={40}
            maxElevation={50}
            motionSensitivity={0.25}
            elevationSmoothing={0.2}
            colorMode="webcam"
            backgroundColor="#030303"
            mirror={true}
            gapRatio={0.05}
            invertColors={false}
            darken={0.6}
            borderColor="#ffffff"
            borderOpacity={0.06}
            className="w-full h-full"
          />
        )}
      </div> */}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-[1]" />

      <div id="hero-content" className="relative z-10 w-full flex flex-col items-center justify-center flex-1 py-6 sm:py-10 -mt-4 sm:-mt-6 md:-mt-8">

        {/* Neon Green Blocks – Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[60px] sm:top-[70px] md:top-[80px] left-0 flex flex-col gap-0 z-0"
        >
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
          </div>
        </motion.div>

        {/* Neon Green Blocks – Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute bottom-0 right-0 flex flex-col items-end gap-0 z-0"
        >
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
          </div>
          <div className="flex">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-transparent" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B6FF00]" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center">

          {/* Top Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium text-white tracking-tight mb-6 sm:mb-8 md:mb-10 text-center font-space"
          >
            Google Developers Group - LIVE
          </motion.h2>

          {/* Three columns */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

            {/* LEFT: ON / CAMPUS + left arrows below */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start w-full md:w-[28%]"
            >
              <h1
                className="font-black leading-[0.88] tracking-tighter text-white text-center md:text-left font-space"
                style={{ fontSize: 'clamp(48px, 5.5vw, 82px)' }}
              >
                <ScrambleText text="ON" /><br /><ScrambleText text="CAMPUS" />
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="hidden sm:flex items-center mt-5 w-full overflow-hidden"
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [0, -6, 0], opacity: [0.2, 0.55, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                  >
                    <ChevronLeft className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white/35" strokeWidth={1.5} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CENTER: Empty area for layout balance */}
            <div className="w-full md:w-[40%] flex justify-center min-h-[clamp(200px,26vw,300px)]">
            </div>

            {/* RIGHT: right arrows above + VIT / MUMBAI */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-end w-full md:w-[28%]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="hidden sm:flex items-center mb-5 w-full justify-center md:justify-end overflow-hidden"
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [0, 6, 0], opacity: [0.2, 0.55, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                  >
                    <ChevronRight className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white/35" strokeWidth={1.5} />
                  </motion.div>
                ))}
              </motion.div>

              <h1
                className="font-black leading-[0.88] tracking-tighter text-white text-center md:text-right font-space"
                style={{ fontSize: 'clamp(48px, 5.5vw, 82px)' }}
              >
                <ScrambleText text="VIT," /><br /><ScrambleText text="MUMBAI" />
              </h1>
            </motion.div>

          </div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 sm:mt-12 md:mt-14 text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-white/60 max-w-[480px] leading-relaxed"
          >
            Fostering a culture of innovation at VIT Mumbai by transforming ideas into meaningful tech-driven impact.
          </motion.p>

        </div>
      </div>
    </div>
  );
}
