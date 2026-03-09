import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BLOCK_COLORS = ['#B6FF00', '#8BCC00', '#6B9E00', '#A3E600', '#D4FF4D'];
const TOTAL_BLOCKS = 10;

function PixelBlock({ index, filled }: { index: number; filled: boolean }) {
  const color = BLOCK_COLORS[index % BLOCK_COLORS.length];
  return (
    <div
      className="w-full aspect-square border border-black/40 transition-all duration-200"
      style={{
        backgroundColor: filled ? color : '#1A1C1F',
        boxShadow: filled ? `0 0 12px ${color}60, inset 0 -2px 0 rgba(0,0,0,0.3)` : 'inset 0 -2px 0 rgba(0,0,0,0.3)',
      }}
    >
      {filled && (
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/15" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black/15" />
        </div>
      )}
    </div>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const hasShown = useRef(false);

  const completeLoading = useCallback(() => {
    setProgress(100);
    setTimeout(() => setIsComplete(true), 400);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('gdg-preloader-shown', 'true');
    }, 1000);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('gdg-preloader-shown')) {
      setIsVisible(false);
      return;
    }
    if (hasShown.current) return;
    hasShown.current = true;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        const increment = prev < 60 ? 8 : 3;
        return Math.min(prev + increment, 90);
      });
    }, 150);

    const handleLoad = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(completeLoading, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const safety = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      completeLoading();
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener('load', handleLoad);
      clearTimeout(safety);
    };
  }, [completeLoading]);

  const filledBlocks = Math.floor((progress / 100) * TOTAL_BLOCKS);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">GDG.</span>
              <span className="text-[#B6FF00] text-xl md:text-2xl font-black">VITM</span>
            </div>

            <div className="w-[280px] md:w-[360px]">
              <div className={`grid gap-1`} style={{ gridTemplateColumns: `repeat(${TOTAL_BLOCKS}, 1fr)` }}>
                {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                  <PixelBlock key={i} index={i} filled={i < filledBlocks} />
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  {isComplete ? 'World loaded' : 'Generating terrain...'}
                </span>
                <span className="text-[10px] font-mono text-[#B6FF00] tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>

            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[11px] font-mono text-white/20 uppercase tracking-[0.3em]"
              >
                Entering world...
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
