import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-[#B6FF00] mx-auto mb-8" />
        <h1 className="text-[80px] md:text-[120px] font-black tracking-tighter text-white leading-none">
          404
        </h1>
        <p className="text-white/50 text-lg font-medium mt-4 mb-10 max-w-md mx-auto">
          This chunk of the world hasn't been generated yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-black font-bold text-sm px-8 py-4 rounded-2xl hover:bg-[#B6FF00] transition-colors"
        >
          Return to Spawn
        </Link>
      </motion.div>
    </section>
  );
}
