import React from 'react';
import { motion } from 'motion/react';

const MinecraftGhast = ({ delay = 0, top = '20%', left = '10%' }: { delay?: number, top?: string, left?: string }) => (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0, 0.6, 0.4]
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute z-10 pointer-events-none"
        style={{ top, left }}
    >
        {/* Head */}
        <div className="relative w-24 h-24 bg-[#e8e8e8] border-b-8 border-black/10">
            {/* Face */}
            <div className="absolute top-4 left-4 flex gap-4">
                <div className="w-4 h-4 bg-[#800000] border-t-2 border-l-2 border-black/20" />
                <div className="w-4 h-4 bg-[#800000] border-t-2 border-l-2 border-black/20" />
            </div>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-4 bg-black/20" />

            {/* Tentacles */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-between px-2">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [40, 60, 40] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-2 bg-[#d1d1d1]"
                    />
                ))}
            </div>

            {/* Emission Light (Crying/Firing) */}
            <motion.div
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay }}
                className="absolute inset-0 bg-red-500/10 blur-xl"
            />
        </div>
    </motion.div>
);

export default function SpectrumGhast() {
    return (
        <>
            <MinecraftGhast delay={0} top="15%" left="5%" />
            <MinecraftGhast delay={3} top="40%" left="80%" />
            <MinecraftGhast delay={7} top="70%" left="15%" />
        </>
    );
}
