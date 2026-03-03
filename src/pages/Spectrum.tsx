import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Spectrum() {
  return (
    <PageTransition>
      <div className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        
        {/* 1. ANIMATED BACKGROUND GRID (Drifting Effect) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            backgroundPosition: ["0% 0%", "100% 100%"] 
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* 2. RUNNING MARQUEE (Moving Text in Background) */}
        <div className="absolute top-1/4 w-full overflow-hidden opacity-10 pointer-events-none select-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-[120px] font-black uppercase italic italic"
          >
            SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI •
          </motion.div>
        </div>

        {/* 3. MAIN CENTERPIECE */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            // Continuous Floating/Stable Movement
            y: [0, -15, 0] 
          }}
          transition={{ 
            scale: { duration: 1 },
            opacity: { duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Floating effect
          }}
          className="relative z-10"
        >
          {/* Dynamic Neon Glow */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#CCFF00] blur-[120px]" 
          />
          
          <h1 className="relative text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
            Spectrum
          </h1>
        </motion.div>
        
        {/* 4. FOOTER TEXT WITH DELAYED REVEAL */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.8 }}
           className="flex flex-col items-center mt-6 z-10"
        >
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-lg font-medium tracking-[0.3em] uppercase text-white/80"
            >
              Coming Soon
            </motion.p>
            <div className="w-12 h-[1px] bg-[#CCFF00] mt-4 shadow-[0_0_10px_#CCFF00]" />
        </motion.div>

        {/* 5. FLOATING PARTICLES (Random drift) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#CCFF00] rounded-full opacity-30"
            animate={{
              x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </div>
    </PageTransition>
  );
}