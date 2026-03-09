import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // This "Cubic Bezier" makes it feel premium
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}