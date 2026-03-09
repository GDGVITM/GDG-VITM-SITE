import { motion } from 'motion/react';

export default function SpectrumGhast() {
  return (
    <motion.div
      className="fixed top-[10%] right-[5%] z-[5] pointer-events-none opacity-[0.06]"
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        rotate: [0, 2, -2, 1, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
        <rect x="40" y="0" width="100" height="120" fill="#ff4d00" />
        <rect x="20" y="20" width="20" height="80" fill="#ff4d00" />
        <rect x="140" y="20" width="20" height="80" fill="#ff4d00" />

        <rect x="60" y="40" width="20" height="20" fill="#1a0000" />
        <rect x="100" y="40" width="20" height="20" fill="#1a0000" />
        <rect x="70" y="70" width="40" height="10" fill="#1a0000" />

        <rect x="40" y="120" width="20" height="40" fill="#ff4d00" />
        <rect x="70" y="120" width="20" height="60" fill="#ff4d00" />
        <rect x="100" y="120" width="20" height="40" fill="#ff4d00" />
        <rect x="130" y="120" width="20" height="60" fill="#ff4d00" />
      </svg>
    </motion.div>
  );
}
