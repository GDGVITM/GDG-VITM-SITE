import { motion } from 'motion/react';

export default function MinecraftMountains() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mountain-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B6FF00" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          d="M0,320 L0,240 L80,200 L160,240 L240,180 L320,220 L400,160 L480,200 L560,140 L640,180 L720,120 L800,160 L880,100 L960,140 L1040,80 L1120,120 L1200,160 L1280,100 L1360,140 L1440,180 L1440,320 Z"
          fill="url(#mountain-grad)"
          className="opacity-60"
        />

        <motion.path
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          d="M0,320 L0,280 L120,240 L240,270 L360,220 L480,260 L600,200 L720,240 L840,190 L960,230 L1080,200 L1200,240 L1320,210 L1440,250 L1440,320 Z"
          fill="#0d0e0d"
          className="opacity-80"
        />
      </svg>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="absolute bottom-0"
          style={{ left: `${i * 8 + Math.random() * 4}%` }}
        >
          <div
            className="bg-[#B6FF00]/10 border border-[#B6FF00]/5"
            style={{
              width: `${16 + Math.random() * 24}px`,
              height: `${40 + Math.random() * 80}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
