// import React from 'react';
// import { motion } from 'framer-motion';
// import PageTransition from '../components/PageTransition';

// export default function Spectrum() {
//   return (
//     <PageTransition>
//       <div className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        
//         {/* 1. ANIMATED BACKGROUND GRID (Drifting Effect) */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ 
//             opacity: 0.15,
//             backgroundPosition: ["0% 0%", "100% 100%"] 
//           }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0 z-0 pointer-events-none"
//           style={{
//             backgroundImage: `linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />

//         {/* 2. RUNNING MARQUEE (Moving Text in Background) */}
//         <div className="absolute top-1/4 w-full overflow-hidden opacity-10 pointer-events-none select-none">
//           <motion.div 
//             animate={{ x: [0, -1000] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="whitespace-nowrap text-[120px] font-black uppercase italic italic"
//           >
//             SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI •
//           </motion.div>
//         </div>

//         {/* 3. MAIN CENTERPIECE */}
//         <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ 
//             scale: 1, 
//             opacity: 1,
//             // Continuous Floating/Stable Movement
//             y: [0, -15, 0] 
//           }}
//           transition={{ 
//             scale: { duration: 1 },
//             opacity: { duration: 1 },
//             y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Floating effect
//           }}
//           className="relative z-10"
//         >
//           {/* Dynamic Neon Glow */}
//           <motion.div 
//             animate={{ 
//               opacity: [0.1, 0.3, 0.1],
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 bg-[#CCFF00] blur-[120px]" 
//           />
          
//           <h1 className="relative text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
//             Spectrum
//           </h1>
//         </motion.div>
        
//         {/* 4. FOOTER TEXT WITH DELAYED REVEAL */}
//         <motion.div
//            initial={{ opacity: 0, y: 20 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ delay: 1, duration: 0.8 }}
//            className="flex flex-col items-center mt-6 z-10"
//         >
//             <motion.p 
//               animate={{ opacity: [0.4, 1, 0.4] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="text-lg font-medium tracking-[0.3em] uppercase text-white/80"
//             >
//               Coming Soon
//             </motion.p>
//             <div className="w-12 h-[1px] bg-[#CCFF00] mt-4 shadow-[0_0_10px_#CCFF00]" />
//         </motion.div>

//         {/* 5. FLOATING PARTICLES (Random drift) */}
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-[#CCFF00] rounded-full opacity-30"
//             animate={{
//               x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
//               y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

//       </div>
//     </PageTransition>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Spectrum() {
  return (
    <PageTransition>
      <div className="relative h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden selection:bg-[#B6FF00] selection:text-black">
        
        {/* 1. THE DEEPSLATE GRID (Matches your Team Section) */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

       <div className="absolute top-1/4 w-full overflow-hidden opacity-10 pointer-events-none select-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-[120px] font-black uppercase italic italic"
          >
            SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI • SPECTRUM • VIT MUMBAI •
          </motion.div>
        </div>

        {/* 2. PIXELATED LIGHT VINES (Inspired by Cave Glow-Lichen) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
                y: [0, 20, 0]
              }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] rounded-full blur-[120px]"
              style={{
                backgroundColor: i % 2 === 0 ? '#B6FF00' : '#4ade80',
                left: `${i * 25}%`,
                top: i % 2 === 0 ? '-10%' : '70%',
              }}
            />
          ))}
        </div>

        {/* 3. FLOATING ORE PARTICLES (Inspired by your Hero Section) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`ore-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0, 1, 0],
              y: -100 - (Math.random() * 200) 
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-2 h-2 bg-[#B6FF00] shadow-[0_0_10px_#B6FF00]"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '10%',
            }}
          />
        ))}

        {/* 4. CONTENT CENTERPIECE */}
        <div className="relative z-10 flex flex-col items-center">
          {/* HUD Brackets (Inspired by your Team Cards) */}
          <div className="absolute -inset-10 pointer-events-none opacity-40">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#B6FF00]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#B6FF00]" />
          </div>

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

           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 px-6 py-2 bg-[#B6FF00]/10 border border-[#B6FF00]/30 backdrop-blur-md rounded-full"
          >
            <span className="text-[#B6FF00] font-mono font-bold tracking-[0.3em] uppercase text-sm animate-pulse">
              Coming Soon...
            </span>
          </motion.div>
        </div>

        {/* 5. MINECRAFT HUD FOOTER (Persistent Info) */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-20 pointer-events-none opacity-50 font-mono text-[10px] uppercase tracking-widest text-white">
          <div className="flex flex-col gap-1">
            <span>BIOME: GOOGLE_DEVELOPER_TRENCH</span>
            <span>XYZ: 172.16.0.1:8090 / VIT_MUMBAI</span>
          </div>
          <div className="text-right">
            <span>Connection: 20ms</span>
            <div className="flex gap-1 mt-1 justify-end">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 ${i < 4 ? 'bg-[#B6FF00]' : 'bg-white/10'}`} />
                ))}
            </div>
          </div>
        </div>
        
      </div>
    </PageTransition>
  );
}