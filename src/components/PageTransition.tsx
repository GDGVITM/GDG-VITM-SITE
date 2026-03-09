import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100 }, // Start off-screen to the right
  animate: { opacity: 1, x: 0 },   // Slide into center
  exit: { opacity: 0, x: -100 },  // Slide out to the left
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
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