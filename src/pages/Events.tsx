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
}

const EVENTS_DATA: EventData[] = [
  { id: '01', title: 'Neural Hack', date: 'JAN 12', type: 'WORKSHOP', desc: 'Decoding deep-sea neural networks.', status: 'COMPLETED' },
  { id: '02', title: 'Abyssal Sync', date: 'FEB 05', type: 'MEETUP', desc: 'Connecting developers in the trench.', status: 'COMPLETED' },
  { id: '03', title: 'Spectrum v1', date: 'MAR 20', type: 'FESTIVAL', desc: 'The flagship pixel-art experience.', status: 'ACTIVE' },
  { id: '04', title: 'Logic Gate', date: 'APR 15', type: 'HACKATHON', desc: 'Survival of the fastest coders.', status: 'UPCOMING' },
  { id: '05', title: 'Redstone UI', date: 'MAY 02', type: 'SEMINAR', desc: 'Advanced automation techniques.', status: 'LOCKED' },
  { id: '06', title: 'Void Script', date: 'JUN 18', type: 'SPRINT', desc: 'Optimizing for zero-latency systems.', status: 'LOCKED' },
  { id: '07', title: 'Apex Build', date: 'JUL 22', type: 'GRAND_FINALE', desc: 'The final evolution of the sector.', status: 'LOCKED' },
];

interface EventCardProps {
  event: EventData;
  progress: ReturnType<typeof useSpring>;
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
      className="relative min-w-[80vw] md:min-w-[25vw] h-[55vh] flex flex-col items-center justify-center border-2 border-transparent"
    >
      <div className={`relative w-full h-full p-1 border-4 transition-all duration-500
        ${event.status === 'LOCKED' ? 'border-white/5 bg-white/5' : 'border-white/10 bg-[#111]'}`}>
        <div className="h-full w-full bg-[#0a0a0a] p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-[#B6FF00] bg-[#B6FF00]/10 px-2 py-1 uppercase tracking-tighter">
                ID_{event.id}
              </span>
              <span className={`font-mono text-[9px] tracking-[0.2em] uppercase
                ${event.status === 'ACTIVE' ? 'text-[#B6FF00]' : 'text-white/20'}`}>
                {event.status}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black uppercase italic tracking-tighter mt-6 leading-[0.85]
              ${event.status === 'LOCKED' ? 'text-white/10' : 'text-white'}`}>
              {event.title}
            </h2>
            <div className="h-1 w-12 bg-[#B6FF00] mt-4 opacity-50" />
          </div>

          <div className="z-10">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
              {event.status === 'LOCKED' ? '?? RESTRICTED ??' : event.desc}
            </p>
            <div className="flex items-end justify-between">
              <span className="text-2xl md:text-3xl font-black italic text-white tracking-tighter">{event.date}</span>
              <button
                disabled={event.status === 'LOCKED'}
                aria-disabled={event.status === 'LOCKED'}
                className="px-4 py-2 bg-white text-black font-bold text-[10px] uppercase hover:bg-[#B6FF00] transition-colors disabled:opacity-5 disabled:cursor-not-allowed"
              >
                Access
              </button>
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

          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

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
                  boxShadow: '0 0 40px rgba(182, 255, 0, 0.05)',
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, 50, 0],
                  rotate: [0, 90],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: block.duration, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#B6FF00]/20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#B6FF00]/10" />
              </motion.div>
            ))}

            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#B6FF00]/10 blur-[150px] rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#B6FF00]/5 blur-[200px] rounded-full" />
            </div>

            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`column-${i}`}
                  initial={{ y: -1000 }}
                  animate={{ y: 1000 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * -2 }}
                  className="absolute flex flex-col font-mono text-[14px] text-[#B6FF00]"
                  style={{ left: `${(i * 100) / 15}%` }}
                >
                  {["0", "1", "[]", "::", "++"].map((char, j) => (
                    <span key={j} className="mb-4 opacity-20">{char}</span>
                  ))}
                  <span className="text-white font-bold shadow-[0_0_15px_#B6FF00]">&#9632;</span>
                </motion.div>
              ))}
            </div>

            {orbConfigs.map((orb, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute w-2 h-2 bg-[#B6FF00] rounded-full shadow-[0_0_15px_#B6FF00]"
                style={{ left: orb.left, top: orb.top }}
                animate={{ scale: [0, 1.5, 0], opacity: [0, 0.7, 0], y: [0, -100] }}
                transition={{ duration: orb.duration, repeat: Infinity, delay: orb.delay }}
              />
            ))}

            <motion.div
              style={{ x: grassX }}
              className="absolute bottom-[-10vh] left-0 w-[150vw] h-[30vh] z-[-10] pointer-events-none opacity-10"
            >
              {grassConfigs.map((grass, i) => (
                <div
                  key={`grass-${i}`}
                  className="absolute bottom-0 bg-white"
                  style={{
                    width: '40px',
                    height: grass.height + 'px',
                    left: grass.left,
                    clipPath: 'polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%)',
                    transform: `perspective(500px) rotateX(${grass.rotateX}deg)`,
                  }}
                />
              ))}
            </motion.div>

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`phantom-${i}`}
                  className="absolute border-2 border-[#B6FF00]/30 shadow-[0_0_30px_#B6FF00]"
                  style={{
                    width: '180px',
                    height: '60px',
                    left: `${-20 + i * 15}%`,
                    top: `${15 + i * 20}%`,
                    background: 'linear-gradient(90deg, #0a0a20 0%, #1e3a8a 100%)',
                    clipPath: 'polygon(0% 20%, 30% 0%, 70% 0%, 100% 20%, 90% 100%, 10% 100%)',
                  }}
                  animate={{
                    x: ['-10vw', '110vw'],
                    y: [0, 50, -50, 0],
                    rotate: [0, 5, -5, 0],
                    opacity: [0, 0.6, 0.6, 0],
                  }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut", delay: i * 8 }}
                >
                  <div className="absolute top-4 right-6 w-3 h-3 bg-white shadow-[0_0_10px_white]" />
                  <div className="absolute top-4 right-10 w-3 h-3 bg-white shadow-[0_0_10px_white]" />
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,255,0,0.08)_0%,transparent_70%)]" />
          </div>

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

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07] z-[60]"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
              backgroundSize: '100% 4px, 3px 100%',
            }}
          />
        </div>
      </section>
    </PageTransition>
  );
}
