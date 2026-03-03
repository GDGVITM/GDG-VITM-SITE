import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400vw"]);

  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    size: i % 2 === 0 ? 'w-[320px] h-[450px]' : 'w-[400px] h-[300px]',
    top: i % 3 === 0 ? '15%' : i % 3 === 1 ? '45%' : '25%',
    left: `${(i * 40) + 10}vw`, 
    label: `CHUNK_${String(i + 1).padStart(2, '0')}`,
    desc: i % 2 === 0 ? 'ABYSSAL_CORE' : 'DEEP_PULSE'
  }));

  return (
    <PageTransition>
      <section ref={containerRef} className="relative h-[600vh] bg-[#010205]">
        
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          {/* --- LAYER 1: LARGE LEVIATHAN CREATURES (Deep Background) --- */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`leviathan-${i}`}
                animate={{
                  x: i % 2 === 0 ? [-200, 1500] : [1500, -200],
                  y: [0, 50, -50, 0],
                  opacity: [0, 0.15, 0.15, 0]
                }}
                transition={{
                  duration: 25 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 8
                }}
                className="absolute blur-[100px]"
                style={{
                  width: '800px',
                  height: '200px',
                  background: `radial-gradient(ellipse at center, ${i % 2 === 0 ? '#CCFF00' : '#00f2ff'} 0%, transparent 80%)`,
                  top: `${20 + i * 25}%`,
                }}
              />
            ))}
          </div>

          {/* --- LAYER 2: PULSING JELLY-SPORES --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`jelly-${i}`}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.05, 0.2, 0.05],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute rounded-full blur-[60px]"
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: i % 2 === 0 ? '#CCFF00' : '#00f2ff',
                  left: `${(i * 15)}%`,
                  top: `${(i * 12) % 80}%`,
                }}
              />
            ))}
          </div>

          {/* --- LAYER 3: RISING MARINE SNOW --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`snow-${i}`}
                initial={{ y: '110vh' }}
                animate={{ 
                  y: '-10vh',
                  x: [0, 30, -30, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 12 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 15,
                  ease: "linear"
                }}
                className="absolute w-[2px] h-[2px] rounded-full"
                style={{
                  backgroundColor: '#CCFF00',
                  boxShadow: '0 0 8px #CCFF00',
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* --- THE HORIZONTAL TRACK (Your Scroll Logic) --- */}
          <motion.div style={{ x }} className="relative flex h-full items-center z-10">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0.1, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)",
                  transition: { duration: 0.5 } 
                }}
                viewport={{ once: false, amount: 0.2 }}
                className={`absolute ${item.size} group flex flex-col`}
                style={{ top: item.top, left: item.left }}
              >
                {/* Image Block with Glassmorphism */}
                <div className="relative flex-grow bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group-hover:border-[#CCFF00]/60 transition-all duration-500 shadow-2xl">
                  {/* Neon Scan */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2.5s] ease-linear" />
                  
                  {/* Placeholder Icon */}
                  <div className="w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 border border-[#CCFF00] rotate-45 group-hover:rotate-90 transition-transform duration-1000 shadow-[0_0_15px_#CCFF00]" />
                  </div>

                  {/* Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#CCFF00] opacity-0 group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#CCFF00] opacity-0 group-hover:opacity-100" />
                </div>

                {/* TEXT CONTENT */}
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#CCFF00] font-bold">[{item.label}]</span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-1 text-white group-hover:text-[#CCFF00] transition-colors leading-none">
                    {item.desc}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* HUD FOOTER */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-50 pointer-events-none">
            <div className="flex flex-col font-mono text-[10px]">
              <span className="text-white/40 uppercase tracking-[0.3em]">Depth_Protocol</span>
              <span className="text-[#00f2ff] font-bold">ABYSSAL_SYNC_V4</span>
            </div>
            <div className="w-80 h-[2px] bg-white/5 relative">
              <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#CCFF00] origin-left shadow-[0_0_20px_#CCFF00]" 
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}