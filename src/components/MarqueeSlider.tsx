import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const words = ['INNOVATIVE', 'VISIONARY', 'CREATIVE', 'KINETIC', 'MINIMAL', 'PREMIUM'];

export default function MarqueeSlider() {
    return (
        <section className="relative w-full bg-black bg-grid-pattern border-t border-b border-white/5 overflow-hidden py-16 md:py-24">

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#B6FF00]/20 to-transparent blur-xl pointer-events-none" />

            <div className="relative flex whitespace-nowrap overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center min-w-full"
                >
                    {[...Array(4)].map((_, groupIdx) => (
                        <div key={groupIdx} className="flex items-center">
                            {words.map((word, i) => (
                                <React.Fragment key={`${groupIdx}-${i}`}>
                                    <span className="text-[72px] md:text-[120px] font-black tracking-tighter text-white/90 whitespace-nowrap px-6 md:px-12 flex items-center gap-4 group cursor-default">
                                        <motion.span
                                            whileHover={{ scale: 1.05, color: '#B6FF00' }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    >
                                        <ChevronRight
                                            className="w-12 h-12 md:w-20 md:h-20 text-[#B6FF00] flex-shrink-0 mx-2"
                                            strokeWidth={3}
                                        />
                                    </motion.div>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Glass overlays on edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
