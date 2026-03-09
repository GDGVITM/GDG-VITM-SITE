// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import PageTransition from '../components/PageTransition';

// // 1. SIMPLE IMAGE ARRAY
// const GALLERY_IMAGES = [
//   { id: 1, src: "https://picsum.photos/seed/1/600/600", title: "Project Alpha", tag: "LOG" },
//   { id: 2, src: "https://picsum.photos/seed/2/600/600", title: "Neural Hack", tag: "DATA" },
//   { id: 3, src: "https://picsum.photos/seed/3/600/600", title: "Abyssal Sync", tag: "CHUNK" },
//   { id: 4, src: "https://picsum.photos/seed/4/600/600", title: "Logic Gate", tag: "LOG" },
//   { id: 5, src: "https://picsum.photos/seed/5/600/600", title: "Redstone UI", tag: "DATA" },
//   { id: 6, src: "https://picsum.photos/seed/6/600/600", title: "Void Script", tag: "CHUNK" },
//   { id: 7, src: "https://picsum.photos/seed/7/600/600", title: "Sector 07", tag: "LOG" },
//   { id: 8, src: "https://picsum.photos/seed/8/600/600", title: "Deep Trace", tag: "DATA" },
//   { id: 9, src: "https://picsum.photos/seed/9/600/600", title: "Matrix V1", tag: "CHUNK" },
//   { id: 10, src: "https://picsum.photos/seed/10/600/600", title: "Apex Build", tag: "LOG" },
//   { id: 11, src: "https://picsum.photos/seed/11/600/600", title: "Cloud Sync", tag: "DATA" },
//   { id: 12, src: "https://picsum.photos/seed/12/600/600", title: "Ghost Frame", tag: "CHUNK" },
//   { id: 13, src: "https://picsum.photos/seed/13/600/600", title: "Root Node", tag: "LOG" },
//   { id: 14, src: "https://picsum.photos/seed/14/600/600", title: "Pixel Core", tag: "DATA" },
//   { id: 15, src: "https://picsum.photos/seed/15/600/600", title: "Bit Stream", tag: "CHUNK" },
//   { id: 16, src: "https://picsum.photos/seed/16/600/600", title: "Final Chunk", tag: "LOG" },
// ];

// export default function Gallery() {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
  
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
//   const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);

//   return (
//     <PageTransition>
//       <section ref={containerRef} className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-10 overflow-hidden">
        
//         {/* --- CREATIVE BACKGROUND LAYER --- */}
//         <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
          
//           {/* 1. Grid Texture */}
//           <div className="absolute inset-0 opacity-[0.05]"
//             style={{ 
//               backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
//               backgroundSize: '80px 80px' 
//             }}
//           />

//           {/* --- TRUE SHOOTING STARS (METEORS) --- */}
// <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
//   {[...Array(8)].map((_, i) => (
//     <motion.div
//       key={`meteor-${i}`}
//       className="absolute"
//       style={{
//         top: "-10vh", // Start above the screen
//         left: `${20 + Math.random() * 100}%`, // Random horizontal start position
//       }}
//       initial={{ x: 0, y: 0, opacity: 0 }}
//       animate={{
//         x: "-120vw", // Large horizontal sweep
//         y: "120vh",  // Large vertical drop
//         opacity: [0, 1, 1, 0],
//       }}
//       transition={{
//         duration: 5.5 + Math.random() * 1.5, // Faster speed for "meteor" feel
//         repeat: Infinity,
//         ease: "easeIn",
//         delay: Math.random() * 20,
//         repeatDelay: Math.random() * 10,
//       }}
//     >
//       {/* THE METEOR HEAD (The bright glowing star) */}
//       <div className="h-1 w-1 bg-white rounded-full shadow-[0_0_15px_4px_#B6FF00,0_0_30px_#fff]" />
      
//       {/* THE TRAIL (Slanted, fading, and tapered) */}
//       <div 
//         className="absolute top-1/2 left-0 origin-left"
//         style={{
//           width: Math.random() * 200 + 150 + 'px',
//           height: '2px',
//           background: 'linear-gradient(to right, #B6FF00, rgba(182,255,0,0.1), transparent)',
//           transform: 'rotate(-45deg)', // Forced slant
//           filter: 'blur(1px)',
//         }} 
//       />
//     </motion.div>
//   ))}
// </div>

// {/* --- EXTRA CREATIVE OBJECTS --- */}

// {/* 1. PULSING GLOWSTONE (Deep Background) */}
// {[...Array(4)].map((_, i) => (
//   <motion.div
//     key={`glow-${i}`}
//     className="absolute w-24 h-24 bg-[#FFF1B5]/10 border border-[#F6DE84]/20"
//     style={{
//       left: `${(i * 30) % 100}%`,
//       top: `${(i * 40) % 100}%`,
//       clipPath: 'polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)',
//     }}
//     animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
//     transition={{ duration: 8, repeat: Infinity }}
//   />
// ))}

// {/* 2. FLOATING DATA PACKETS (Small Creative Objects) */}
// {[...Array(12)].map((_, i) => (
//   <motion.div
//     key={`data-${i}`}
//     className="absolute w-1 h-4 bg-[#B6FF00]/30"
//     style={{
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//     }}
//     animate={{
//       y: [0, -40, 0],
//       opacity: [0, 0.5, 0],
//       rotate: [0, 180],
//     }}
//     transition={{ duration: 10 + i, repeat: Infinity }}
//   />
// ))}

//           {/* 2. Swirling XP Dust */}
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={`dust-${i}`}
//               className="absolute bg-[#B6FF00] rounded-full shadow-[0_0_10px_#B6FF00]"
//               style={{
//                 width: Math.random() * 5 + 2 + 'px',
//                 height: Math.random() * 5 + 2 + 'px',
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 x: [0, Math.random() * 40 - 20, 0],
//                 y: [0, Math.random() * -80 - 40, 0],
//                 opacity: [0, 0.6, 0],
//                 scale: [0, 1.2, 0],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//               }}
//             />
//           ))}

//           {/* 3. Pulsing Glowstones */}
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={`glowstone-${i}`}
//               className="absolute bg-[#FFF1B5] shadow-[0_0_40px_#FFF1B5]"
//               style={{
//                 width: '120px',
//                 height: '120px',
//                 left: `${(i * 25) % 100}%`,
//                 top: `${(i * 35) % 100}%`,
//                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
//               }}
//               animate={{
//                 opacity: [0.02, 0.08, 0.02],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 10 + i,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//           ))}

//           {/* 4. Ambient Colored Haze */}
//           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px]" />
//           <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[200px]" />

//             {[...Array(20)].map((_, i) => (
//                     <motion.div
//                       key={`ore-${i}`}
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ 
//                         opacity: [0, 0.8, 0], 
//                         scale: [0, 1, 0],
//                         y: -100 - (Math.random() * 200) 
//                       }}
//                       transition={{ 
//                         duration: 4 + Math.random() * 4, 
//                         repeat: Infinity, 
//                         delay: Math.random() * 5 
//                       }}
//                       className="absolute w-2 h-2 bg-[#B6FF00] shadow-[0_0_10px_#B6FF00]"
//                       style={{
//                         left: `${Math.random() * 100}%`,
//                         bottom: '10%',
//                       }}
//                     />
//                   ))}
          
          
//         </motion.div> {/* Tag Match Check: motion.div closed here */}

//         {/* --- CONTENT LAYER --- */}
//         <div className="relative z-10 max-w-[1400px] mx-auto">
          
//           <header className="mb-20">
//              <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-none">
//                Memory_<span className="text-[#B6FF00]">Chunks</span>
//              </h1>
//              <p className="font-mono text-[#B6FF00] text-[11px] tracking-[0.4em] uppercase mt-4 border-l-2 border-[#B6FF00] pl-4">
//                Status: Creative_Aether_Synced
//              </p>
//           </header>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 [perspective:1200px]">
//             {GALLERY_IMAGES.map((item, index) => (
//               <GalleryBlock key={item.id} image={item} index={index} />
//             ))}
//           </div>

//         </div>
//       </section>
//     </PageTransition>
//   );
// }

// function GalleryBlock({ image, index }: any) {
//   const delay = (index % 4) * 0.1;
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10, scale: 1.05 }}
//       transition={{ duration: 0.4, delay }}
//       className="group relative aspect-[3/4] p-4"
//     >
//       {/* --- MAIN CARD BODY --- */}
//       <div className="relative w-full h-full bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-colors group-hover:border-[#B6FF00]/50">
        
//         {/* THE GRID OVERLAY (Matches your image background) */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none"
//              style={{ 
//                backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`, 
//                backgroundSize: '20px 20px' 
//              }} 
//         />

//         {/* IMAGE CONTENT */}
//         <div className="relative w-full h-full p-3">
//           <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
//             <img 
//               src={image.src} 
//               alt={image.title}
//               className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
//             />
            
//             {/* TEXT CONTENT */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
//               <h3 className="text-white font-bold text-xl tracking-tight leading-tight mb-1 group-hover:text-[#B6FF00] transition-colors">
//                 {image.title}
//               </h3>
//               <p className="text-white/40 font-mono text-[9px] uppercase tracking-[0.3em]">
//                 {image.tag} // Node_{image.id}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* --- THE BUILDING BLOCKS (PIXEL NOTCHES) --- */}
        
//         {/* Top-Left Blocks */}
//         <div className="absolute -top-1 -left-1 flex flex-wrap w-8 h-8 pointer-events-none">
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px]" />
//           <div className="w-3 h-3 bg-transparent m-[1px]" />
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px]" />
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px] opacity-40" />
//         </div>

//         {/* Bottom-Right Blocks */}
//         <div className="absolute -bottom-1 -right-1 flex flex-wrap w-8 h-8 rotate-180 pointer-events-none">
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px]" />
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px] opacity-60" />
//           <div className="w-3 h-3 bg-transparent m-[1px]" />
//           <div className="w-3 h-3 bg-[#121212] border border-white/10 m-[1px]" />
//         </div>

//       </div>

//       {/* AMBIENT GLOW */}
//       <div className="absolute inset-4 bg-[#B6FF00]/0 group-hover:bg-[#B6FF00]/5 blur-3xl transition-colors -z-10" />
//     </motion.div>
//   );
// }


import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// --- CONFIGURATION FOR THE PIXEL-BIT STYLE ---
const BOX_SIZE = "24px"; 
const MASK_IMAGE = "linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)";
const MASK_SIZE = `100% 100%, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}`;

const maskPositions = [
    `0 0, 0 0, ${BOX_SIZE} 0, ${BOX_SIZE} ${BOX_SIZE}, 0 calc(${BOX_SIZE} * 2)`, // Top-Left
    `0 0, 0 100%, ${BOX_SIZE} 100%, ${BOX_SIZE} calc(100% - ${BOX_SIZE}), 0 calc(100% - ${BOX_SIZE} * 2)`, // Bottom-Left
    `0 0, 100% 0, calc(100% - ${BOX_SIZE}) 0, calc(100% - ${BOX_SIZE}) ${BOX_SIZE}, 100% calc(${BOX_SIZE} * 2)`, // Top-Right
    `0 0, 100% 100%, calc(100% - ${BOX_SIZE}) 100%, calc(100% - ${BOX_SIZE}) calc(100% - ${BOX_SIZE}), 100% calc(100% - ${BOX_SIZE} * 2)` // Bottom-Right
];

const cardRadii = [
    "rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-tl-none",
    "rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-none",
    "rounded-bl-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none",
    "rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-none"
];

const GALLERY_IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/1/600/600", title: "Project Alpha", tag: "LOG" },
  { id: 2, src: "https://picsum.photos/seed/2/600/600", title: "Neural Hack", tag: "DATA" },
  { id: 3, src: "https://picsum.photos/seed/3/600/600", title: "Abyssal Sync", tag: "CHUNK" },
  { id: 4, src: "https://picsum.photos/seed/4/600/600", title: "Logic Gate", tag: "LOG" },
  { id: 5, src: "https://picsum.photos/seed/5/600/600", title: "Redstone UI", tag: "DATA" },
  { id: 6, src: "https://picsum.photos/seed/6/600/600", title: "Void Script", tag: "CHUNK" },
  { id: 7, src: "https://picsum.photos/seed/7/600/600", title: "Sector 07", tag: "LOG" },
  { id: 8, src: "https://picsum.photos/seed/8/600/600", title: "Deep Trace", tag: "DATA" },
  { id: 9, src: "https://picsum.photos/seed/9/600/600", title: "Matrix V1", tag: "CHUNK" },
  { id: 10, src: "https://picsum.photos/seed/10/600/600", title: "Apex Build", tag: "LOG" },
  { id: 11, src: "https://picsum.photos/seed/11/600/600", title: "Cloud Sync", tag: "DATA" },
  { id: 12, src: "https://picsum.photos/seed/12/600/600", title: "Ghost Frame", tag: "CHUNK" },
];

const PixelGrid = ({ isHovered }: { isHovered: boolean }) => {
  const GRID = 7;
  return (
    <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 z-20 pointer-events-none">
      {Array.from({ length: GRID * GRID }).map((_, idx) => {
        const r = Math.floor(idx / GRID);
        const c = idx % GRID;
        return (
          <motion.div
            key={idx}
            animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0 : 1 }}
            transition={{ duration: 0.4, delay: (r + c) * 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="bg-[#1A1C1F] border-[0.2px] border-white/5"
          />
        );
      })}
    </div>
  );
};

function GalleryBlock({ image, index }: { image: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isShiftedDown = index % 2 === 1;
  const currentMaskPosition = maskPositions[index % 4];
  const currentRadius = cardRadii[index % 4];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col items-center w-full transition-all duration-500 ${isShiftedDown ? 'lg:mt-24' : ''}`}
    >
      <div
        className={`relative w-full aspect-[4/5] bg-white/5 overflow-hidden shadow-inner border border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#B6FF00]/10 ${currentRadius}`}
        style={{
          WebkitMaskImage: MASK_IMAGE,
          maskImage: MASK_IMAGE,
          WebkitMaskSize: MASK_SIZE,
          maskSize: MASK_SIZE,
          WebkitMaskPosition: currentMaskPosition,
          maskPosition: currentMaskPosition,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude'
        }}
      >
        {/* Revealed Image Layer */}
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        {/* Pixel Overlay */}
        <PixelGrid isHovered={isHovered} />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-30 text-center">
          <motion.div
            animate={{ 
                opacity: isHovered ? 1 : 0.8, 
                y: isHovered ? 0 : 10,
                scale: isHovered ? 1.1 : 1 
            }}
          >
            <h3 className="text-white font-black text-2xl italic uppercase tracking-tighter leading-none mb-2">
              {image.title}
            </h3>
            <p className="text-[#B6FF00] font-mono text-[10px] uppercase tracking-[0.3em]">
              {image.tag} // 0{image.id}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Selector Tag (Appears on Hover) */}
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        className="absolute -bottom-6 bg-[#1A1C1F] border border-[#B6FF00]/30 px-4 py-1.5 rounded-full shadow-xl z-40 pointer-events-none"
      >
        <span className="text-[9px] font-bold text-white uppercase tracking-widest">Initial_Sync</span>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);

  return (
    <PageTransition>
      <section ref={containerRef} className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-[60px] overflow-hidden">
        
        {/* --- BACKGROUND LAYER --- */}
        <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
          />

          {/* Shooting Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{ top: "-5vh", left: `${Math.random() * 100}%` }}
                animate={{ x: "-100vw", y: "100vh", opacity: [0, 1, 0] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 10, repeatDelay: 5 }}
                >
                <div className="h-[2px] w-[150px] bg-gradient-to-r from-[#B6FF00] to-transparent -rotate-45" />
                </motion.div>
            ))}
          </div>

          {/* Glow Dust */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-1 h-1 bg-[#B6FF00] rounded-full shadow-[0_0_8px_#B6FF00]"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <header className="mb-32">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#B6FF00] shadow-[0_0_10px_#B6FF00]" />
              <span className="text-[12px] font-bold tracking-[0.3em] text-white uppercase">Archive_System</span>
            </div>
            <h1 className="text-[48px] md:text-[80px] font-extrabold tracking-tighter text-white leading-[1.05]">
              The Memory <br /> <span className="text-[#B6FF00]">Chunks</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-32">
            {GALLERY_IMAGES.map((item, index) => (
              <GalleryBlock key={item.id} image={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}