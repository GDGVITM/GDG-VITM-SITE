   import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import PageTransition from '../components/PageTransition';

interface EventData {
  id: string;
  title: string;
  date: string;
  type: string;
  desc: string;
  status: 'COMPLETED' | 'ACTIVE' | 'UPCOMING' | 'LOCKED';
  image?: string; // Added image property
}

const EVENTS_DATA: EventData[] = [
  { 
    id: '01', 
    title: 'WINTER OF CODE 5.0', 
    date: 'DEC 15', 
    type: 'OPEN SOURCE', 
    desc: 'Open source contribution program', 
    status: 'COMPLETED',
    image: '/events/WOC_1.jpeg' // Ensure these paths exist in your public folder
  },
  { 
    id: '02', 
    title: 'TECHSPRINT', 
    date: 'JAN 28', 
    type: 'HACKATHON', 
    desc: 'The ultimate on-campus hackathon', 
    status: 'COMPLETED',
    image: '/events/Tech_Sprint_2.jpeg'
  },
  { 
    id: '03', 
    title: 'GSOC', 
    date: 'FEB 6', 
    type: 'GUIDANCE', 
    desc: 'Strategy session for Google Summer of Code', 
    status: 'COMPLETED',
    image: '/events/GSOC_3.jpeg'
  },
  { 
    id: '04', 
    title: 'AGENTIC AI', 
    date: 'FEB 12-13', 
    type: 'WORKSHOP', 
    desc: 'Introduction to AI-powered development', 
    status: 'COMPLETED',
    image: '/events/AI_5.jpeg'
  },
  { 
    id: '05', 
    title: 'BREAK THE LOOP', 
    date: 'MARCH 6', 
    type: 'CODING', 
    desc: 'Women-only team based technical challenge', 
    status: 'COMPLETED',
    image: '/events/Women_6.jpeg'
  },
  { id: '06', title: '', date: 'APR 1-4', type: 'FLAGSHIP EVENT', desc: 'A week full of amazing challenges', status: 'UPCOMING', image:'/events/spectrum.jpeg' },
]
  

interface EventCardProps {
  event: EventData;
  progress: any;
  index: number;
  total: number;
}

function EventCard({ event, progress, index, total }: EventCardProps) {
  const step = 1 / (total - 1);
  const start = index * step;

  const scale = useTransform(progress, [start - step, start, start + step], [0.85, 1.1, 0.85]);
  const opacity = useTransform(progress, [start - step, start, start + step], [0.4, 1, 0.4]);
  const borderGlow = useTransform(
    progress,
    [start - 0.05, start, start + 0.05],
    ["rgba(182, 255, 0, 0)", "rgba(182, 255, 0, 0.5)", "rgba(182, 255, 0, 0)"]
  );

  return (
    <motion.div
      style={{ scale, opacity, borderColor: borderGlow }}
      className="relative min-w-[80vw] md:min-w-[25vw] h-[55vh] flex flex-col items-center justify-center border-2 border-transparent group"
    >
      <div className={`relative w-full h-full p-1 border-4 transition-all duration-500
        ${event.status === 'LOCKED' ? 'border-white/5 bg-white/5' : 'border-white/10 bg-[#111]'}`}>
        
        <div className="h-full w-full bg-[#0a0a0a] p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* POSTER IMAGE */}
          {event.image && event.status !== 'LOCKED' && (
            <>
              <img 
                src={event.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
              />
              {/* Stronger bottom gradient to make the new title position pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80 z-0" />
            </>
          )}

          {/* TOP SECTION: Date and Status */}
          <div className="z-10 flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black italic text-[#B6FF00] tracking-tighter drop-shadow-md">
                {event.date}
              </span>
              <div className="h-1 w-8 bg-[#B6FF00] mt-1 opacity-70" />
            </div>
            
            <span className={`font-mono text-[9px] tracking-[0.2em] uppercase mt-1
              ${event.status === 'ACTIVE' ? 'text-[#B6FF00]' : 'text-white/40'}`}>
              {event.status}
            </span>
          </div>

          {/* BOTTOM SECTION: Title and Description */}
          <div className="z-10">
            <h2 className={`text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.9]
    /* BLACK OUTLINE: Using drop-shadow for a clean edge */
    filter drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] drop-shadow-[-1px_-1px_0px_rgba(0,0,0,1)]
    ${event.status === 'LOCKED' ? 'text-white/10' : 'text-white'}`}>
    {event.title}
  </h2>
            
           <p className="font-mono text-[9px] text-white/90 uppercase tracking-widest leading-relaxed mt-3 mb-4 max-w-[90%]
    /* BLACK OUTLINE: Helps small text pop against busy posters */
    filter drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)] drop-shadow-[-0.5px_-0.5px_0px_rgba(0,0,0,1)]">
    {event.status === 'LOCKED' ? '?? RESTRICTED ??' : event.desc}
  </p>

            {/* BUTTON: Only shows if NOT Completed and NOT Locked */}
            <div className="flex justify-end">
              {event.status !== 'COMPLETED' && event.status !== 'LOCKED' && (
                <a
  href="https://spectrum26.gdgvitm.tech/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-white text-black font-bold text-[10px] uppercase hover:bg-[#B6FF00] transition-colors shadow-[3px_3px_0px_#B6FF00] inline-block"
>
  Access
</a>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemCount = EVENTS_DATA.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const x = useTransform(smoothProgress, [0, 1], ["0vw", `-${(itemCount - 1) * 30}vw`]);

  const blockConfigs = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({
      width: Math.random() * 300 + 200,
      height: Math.random() * 300 + 200,
      left: `${(i * 30) % 100}%`,
      top: `${(i * 45) % 100}%`,
      duration: 20 + i * 5,
    })),
    []
  );

  const orbConfigs = useMemo(
    () => Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 5,
    })),
    []
  );

  const grassConfigs = useMemo(
    () => Array.from({ length: 15 }, (_, i) => ({
      height: Math.random() * 150 + 100,
      left: `${i * 10}%`,
      rotateX: Math.random() * 10 + 5,
    })),
    []
  );

  const grassX = useTransform(smoothProgress, [0, 1], ["0vw", "-15vw"]);

  return (
    <PageTransition>
      <section ref={containerRef} className="relative h-[700vh] bg-[#050505]" aria-label="Events timeline">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

          {/* GRID BACKGROUND */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* BACKGROUND ANIMATIONS */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {blockConfigs.map((block, i) => (
              <motion.div
                key={`big-block-${i}`}
                className="absolute border-2 border-[#B6FF00]/30 bg-[#B6FF00]/5 backdrop-blur-[2px]"
                style={{
                  width: block.width + 'px',
                  height: block.height + 'px',
                  left: block.left,
                  top: block.top,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, 50, 0],
                  rotate: [0, 90],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: block.duration, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {orbConfigs.map((orb, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute w-2 h-2 bg-[#B6FF00] rounded-full shadow-[0_0_15px_#B6FF00]"
                style={{ left: orb.left, top: orb.top }}
                animate={{ scale: [0, 1.5, 0], opacity: [0, 0.7, 0], y: [0, -100] }}
                transition={{ duration: orb.duration, repeat: Infinity, delay: orb.delay }}
              />
            ))}
          </div>

          {/* HORIZONTAL SCROLL CARDS */}
          <motion.div
            style={{ x }}
            className="flex gap-[5vw] px-[10vw] items-center"
          >
            {EVENTS_DATA.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                progress={smoothProgress}
                index={index}
                total={itemCount}
              />
            ))}
          </motion.div>

          {/* CRT / SCANLINE OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07] z-[60]"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
              backgroundSize: '100% 4px, 3px 100%',
            }}
          />

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[70] flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="font-mono text-[10px] text-[#B6FF00] tracking-[0.3em] uppercase opacity-50">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B6FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        
      </section>
    </PageTransition>
  );
}