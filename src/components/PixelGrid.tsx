import { memo } from 'react';
import { motion } from 'motion/react';

const GRID = 7;
const TOTAL = GRID * GRID;

function PixelGridInner({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 z-20 pointer-events-none" aria-hidden="true">
      {Array.from({ length: TOTAL }).map((_, idx) => {
        const r = Math.floor(idx / GRID);
        const c = idx % GRID;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0 : 1,
            }}
            transition={{
              duration: 0.4,
              delay: (r + c) * 0.05,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="bg-[#0d0e0d] border-[0.2px] border-white/[0.03]"
          />
        );
      })}
    </div>
  );
}

const PixelGrid = memo(PixelGridInner);
export default PixelGrid;
