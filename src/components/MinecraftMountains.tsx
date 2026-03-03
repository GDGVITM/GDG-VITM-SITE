import React from 'react';
import { motion } from 'motion/react';

const blocks = [
    { width: '10%', height: '70%', label: '', labelPos: 'left' },
    { width: '10%', height: '55%' },
    { width: '10%', height: '40%' },
    { width: '40%', height: '30%' },
    { width: '10%', height: '40%' },
    { width: '10%', height: '60%' },
    { width: '15%', height: '85%', label: '', labelPos: 'right' },
];

export default function MinecraftMountains() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[600px] md:h-screen pointer-events-none z-0 flex items-end opacity-90 overflow-hidden">
            {blocks.map((block, i) => (
                <motion.div
                    key={i}
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ width: block.width, height: block.height }}
                    className="relative bg-[#B6FF00] border-t-8 border-white/5"
                >
                    {block.label && (
                        <div className={`absolute bottom-12 ${block.labelPos === 'left' ? 'left-10' : 'right-10'} bg-black px-3 py-1.5 flex items-center gap-2 border border-white/10`}>
                            <div className="w-2.5 h-2.5 bg-[#B6FF00]" />
                            <span className="text-[11px] font-black tracking-[0.2em] text-[#B6FF00] uppercase">
                                {block.label}
                            </span>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
