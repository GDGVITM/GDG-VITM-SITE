import { motion } from 'motion/react';

export default function FloatingChatbot() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
      {/* Floating Icon */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 shadow-[0_0_20px_rgba(182,255,0,0.2)] flex items-center justify-center bg-white border-2 border-[#B6FF00]"
      >
        <img 
          src="/google_dino.png" 
          alt="Floating Dino" 
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
}
