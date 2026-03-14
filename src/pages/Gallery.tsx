import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import PageTransition from '../components/PageTransition';

const GALLERY_IMAGES = [
  { id: 1, src: "/gallery/IMG_8592.JPG",  title: "Lead Guidance", tag: "Break The Loop",   orientation: "vertical"   },
  { id: 2, src: "/gallery/IMG_8630.JPG",  title: "Winner's Felicitation",   tag: "Break The Loop",  orientation: "horizontal" },
  { id: 3, src: "/gallery/IMG_8626.JPG",  title: "Ideation",  tag: "Break The Loop", orientation: "vertical"   },
  { id: 4, src: "/gallery/DSC_0133.jpg",  title: "Thanking The Founders",    tag: "AI Workshop",   orientation: "horizontal" },
  { id: 5, src: "/gallery/Screen.png",  title: "Founder Interaction",   tag: "AI Workshop",  orientation: "vertical"   },
  { id: 6, src: "/gallery/IMG_6718.jpg",  title: "AI Agent In Making",   tag: "AI Workshop", orientation: "horizontal" },
  { id: 7, src: "/gallery/IMG_9350.JPG",  title: "Audience Questions",     tag: "GSOC Guidance",   orientation: "vertical"   },
  { id: 8, src: "/gallery/IMG_9380.JPG",  title: "The Begining",    tag: "GSOC Guidance",  orientation: "horizontal" },
  { id: 9, src: "/gallery/IMG_9337.JPG",               title: "Audience Interaction",    tag: "GSOC Guidance",   orientation: "horizontal" },
];

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  tag: string;
  orientation: "vertical" | "horizontal";
}

function GalleryBlock({ image, index }: { image: GalleryImage; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isHorizontal = image.orientation === "horizontal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full"
    >
      <motion.div
        className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-500 ${
          isHorizontal ? 'aspect-[4/3]' : 'aspect-[3/4]'
        }`}
        animate={{
          borderColor: isHovered ? 'rgba(182,255,0,0.6)' : 'rgba(255,255,255,0.06)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <img
            src={image.src}
            alt={image.title}
            loading="eager"
            decoding="async"
           className="w-full h-full object-cover opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
        </div>

        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] group-hover:opacity-[0.02] transition-opacity duration-500"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
            backgroundSize: '100% 3px',
          }}
        />

        

        <div className="absolute top-4 right-4 z-20">
          <span className="text-[10px] font-mono text-white/20 tabular-nums">
            {String(image.id).padStart(2, '0')}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            <span className="self-start text-[9px] font-black font-mono uppercase tracking-[0.25em] bg-[#B6FF00]/15 text-[#B6FF00] border border-[#B6FF00]/30 px-2.5 py-1 rounded-full">
              {image.tag}
            </span>
            <h3 className="text-white font-black text-xl uppercase tracking-tighter leading-none">
              {image.title}
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#B6FF00] z-30"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}

function GalleryBlockFill({ image, index }: { image: GalleryImage; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-full"
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl border"
        animate={{
          borderColor: isHovered ? 'rgba(182,255,0,0.6)' : 'rgba(255,255,255,0.06)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <img
            src={image.src}
            alt={image.title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
        </div>

        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] group-hover:opacity-[0.02] transition-opacity duration-500"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
            backgroundSize: '100% 3px',
          }}
        />

        

        <div className="absolute top-4 right-4 z-20">
          <span className="text-[10px] font-mono text-white/20 tabular-nums">
            {String(image.id).padStart(2, '0')}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            <span className="self-start text-[9px] font-black font-mono uppercase tracking-[0.25em] bg-[#B6FF00]/15 text-[#B6FF00] border border-[#B6FF00]/30 px-2.5 py-1 rounded-full">
              {image.tag}
            </span>
            <h3 className="text-white font-black text-xl uppercase tracking-tighter leading-none">
              {image.title}
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#B6FF00] z-30"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
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
    () => Array.from({ length: 4 }, () => ({
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 10
    })),
    []
  );

  const dustPositions = useMemo(
    () => Array.from({ length: 10 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5
    })),
    []
  );

  // ✅ First two rows use GalleryBlock (aspect ratio)
  const rows = [
    GALLERY_IMAGES.slice(0, 3), // row 1: V H V
    GALLERY_IMAGES.slice(3, 6), // row 2: H V H
  ];

  // ✅ Last section uses GalleryBlockFill (fixed height)
  const lastSection = GALLERY_IMAGES.slice(6, 9); // V H H

  return (
    <PageTransition>
      <section ref={containerRef} className="relative min-h-screen bg-[#080808] py-24 px-6 md:px-[60px] overflow-hidden">

        {/* Background */}
        <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute inset-0 overflow-hidden">
            {starPositions.map((star, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{ top: "-5vh", left: star.left }}
                animate={{ x: "-100vw", y: "100vh", opacity: [0, 1, 0] }}
                transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, repeatDelay: 8 }}
              >
                <div className="h-[1px] w-[200px] bg-gradient-to-r from-[#B6FF00] to-transparent -rotate-45" />
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

          {/* Header — right aligned */}
          <header className="mb-24 flex flex-col items-end text-right">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold tracking-[0.3em] text-white/50 uppercase">Archive_System</span>
              <div className="w-3 h-3 bg-[#B6FF00] shadow-[0_0_10px_#B6FF00]" />
            </div>
            <h1 className="text-[48px] md:text-[80px] font-extrabold tracking-tighter text-white leading-[1.05]">
              The Memory <br /> <span className="text-[#B6FF00]">Chunks</span>
            </h1>
            <div className="mt-6 w-32 h-px bg-gradient-to-l from-[#B6FF00]/60 to-transparent" />
          </header>

          <div className="flex flex-col gap-6">

            {/* ✅ Rows 1 and 2 — aspect ratio cards */}
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-6"
                style={{
                  gridTemplateColumns: row.map(img =>
                    img.orientation === 'horizontal' ? '1.4fr' : '1fr'
                  ).join(' ')
                }}
              >
                {row.map((item, colIndex) => (
                  <GalleryBlock
                    key={item.id}
                    image={item}
                    index={rowIndex * 3 + colIndex}
                  />
                ))}
              </div>
            ))}

            {/* ✅ Last section — fixed height, vertical left + two horizontals stacked right */}
            <div
              className="grid grid-cols-[1fr_1.4fr] gap-6"
              style={{ height: '700px' }}
            >
              {/* Left — single tall vertical spanning both rows */}
              <div className="row-span-2 h-full">
                <GalleryBlockFill image={lastSection[0]} index={6} />
              </div>

              {/* Right top */}
              <GalleryBlockFill image={lastSection[1]} index={7} />

              {/* Right bottom */}
              <GalleryBlockFill image={lastSection[2]} index={8} />
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}