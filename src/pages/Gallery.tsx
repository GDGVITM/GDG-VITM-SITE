import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import PageTransition from '../components/PageTransition';
import PixelGrid from '../components/PixelGrid';

const BOX_SIZE = "24px";
const MASK_IMAGE = "linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)";
const MASK_SIZE = `100% 100%, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}`;

const maskPositions = [
  `0 0, 0 0, ${BOX_SIZE} 0, ${BOX_SIZE} ${BOX_SIZE}, 0 calc(${BOX_SIZE} * 2)`,
  `0 0, 0 100%, ${BOX_SIZE} 100%, ${BOX_SIZE} calc(100% - ${BOX_SIZE}), 0 calc(100% - ${BOX_SIZE} * 2)`,
  `0 0, 100% 0, calc(100% - ${BOX_SIZE}) 0, calc(100% - ${BOX_SIZE}) ${BOX_SIZE}, 100% calc(${BOX_SIZE} * 2)`,
  `0 0, 100% 100%, calc(100% - ${BOX_SIZE}) 100%, calc(100% - ${BOX_SIZE}) calc(100% - ${BOX_SIZE}), 100% calc(100% - ${BOX_SIZE} * 2)`,
];

const cardRadii = [
  "rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-tl-none",
  "rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-none",
  "rounded-bl-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none",
  "rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-none",
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

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  tag: string;
}

function GalleryBlock({ image, index }: { image: GalleryImage; index: number }) {
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
          maskComposite: 'exclude',
        }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <img
            src={image.src}
            alt={image.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        <PixelGrid isHovered={isHovered} />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-30 text-center">
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 10,
              scale: isHovered ? 1.1 : 1,
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

  const starPositions = useMemo(
    () => Array.from({ length: 6 }, () => ({ left: `${Math.random() * 100}%`, duration: 2 + Math.random() * 2, delay: Math.random() * 10 })),
    []
  );

  const dustPositions = useMemo(
    () => Array.from({ length: 20 }, () => ({ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, duration: 5 + Math.random() * 5 })),
    []
  );

  return (
    <PageTransition>
      <section ref={containerRef} className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-[60px] overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="absolute inset-0 overflow-hidden">
            {starPositions.map((star, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{ top: "-5vh", left: star.left }}
                animate={{ x: "-100vw", y: "100vh", opacity: [0, 1, 0] }}
                transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, repeatDelay: 5 }}
              >
                <div className="h-[2px] w-[150px] bg-gradient-to-r from-[#B6FF00] to-transparent -rotate-45" />
              </motion.div>
            ))}
          </div>

          {dustPositions.map((dust, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-1 h-1 bg-[#B6FF00] rounded-full shadow-[0_0_8px_#B6FF00]"
              style={{ left: dust.left, top: dust.top }}
              animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
              transition={{ duration: dust.duration, repeat: Infinity }}
            />
          ))}
        </motion.div>

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
