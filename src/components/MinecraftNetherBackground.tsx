import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function MinecraftNetherBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
      })),
    []
  );

  const lavaStreaks = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        left: `${10 + i * 16}%`,
        height: 80 + Math.random() * 200,
        duration: 8 + Math.random() * 10,
        delay: i * 1.5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-[#0d0000] to-black" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ff4d00 1px, transparent 1px), linear-gradient(90deg, #ff4d00 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#ff4d00]/10 to-transparent" />

      {lavaStreaks.map((streak, i) => (
        <motion.div
          key={`lava-${i}`}
          className="absolute bottom-0 w-px"
          style={{ left: streak.left, height: streak.height }}
          animate={{ opacity: [0.1, 0.4, 0.1], scaleY: [0.8, 1.2, 0.8] }}
          transition={{ duration: streak.duration, repeat: Infinity, delay: streak.delay }}
        >
          <div className="w-full h-full bg-gradient-to-t from-[#ff4d00]/40 to-transparent" />
        </motion.div>
      ))}

      {particles.map((p, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: '#ff4d00',
            boxShadow: `0 0 ${p.size * 3}px #ff4d00`,
          }}
          animate={{ y: [0, -60, -120], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,77,0,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
