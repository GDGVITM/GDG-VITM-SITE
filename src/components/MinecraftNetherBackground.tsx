import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Particles = ({ color, count = 20, speed = 5 }: { color: string, count?: number, speed?: number }) => {
    const particles = useMemo(() =>
        Array.from({ length: count }).map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * speed,
            size: 2 + Math.random() * 4
        })), [count, speed]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        y: [-20, -120]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    className="absolute rounded-sm"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`
                    }}
                />
            ))}
        </div>
    );
};

const LavaFall = ({ left, delay = 0 }: { left: string, delay?: number }) => (
    <div className="absolute top-0 bottom-0" style={{ left, width: '20px' }}>
        <motion.div
            animate={{
                height: ['0%', '100%'],
                opacity: [0.8, 1, 0.8]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                delay,
                ease: "linear"
            }}
            className="w-full bg-gradient-to-b from-[#FF4D00] via-[#FF8C00] to-[#FF4D00] shadow-[0_0_30px_#FF4D00]"
        />
    </div>
);

export default function MinecraftNetherBackground() {
    const { scrollYProgress } = useScroll();

    // Biome Opacity Transitions
    const crimsonOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const soulSandOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 1, 0]);
    const warpedOpacity = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [0, 1, 0]);
    const deltaOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

    // Falling Parallax Effect
    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    // Speed lines intensity based on scroll progress
    const speedLinesOpacity = useTransform(scrollYProgress, [0.05, 0.9], [0.05, 0.4]);

    return (
        <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
            {/* ── SPEED LINES (Falling Effect) ── */}
            <motion.div style={{ opacity: speedLinesOpacity }} className="absolute inset-0 z-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [-500, 1500] }}
                        transition={{
                            duration: 0.4 + Math.random() * 0.4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "linear"
                        }}
                        className="absolute w-px h-64 bg-white/20"
                        style={{ left: `${Math.random() * 100}%` }}
                    />
                ))}
            </motion.div>

            <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[130%]">
                {/* ── CRIMSON FOREST (RONIN) ── */}
                <motion.div style={{ opacity: crimsonOpacity }} className="absolute inset-0 bg-[#3a0a0a]">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <Particles color="#ff4d4d" count={30} />
                    <div className="absolute top-0 left-[10%] w-2 h-96 bg-[#9a0000] opacity-40 shadow-[0_0_20px_rgba(154,0,0,0.5)]" />
                    <div className="absolute top-0 left-[85%] w-2 h-[120vh] bg-[#9a0000] opacity-30 shadow-[0_0_20px_rgba(154,0,0,0.5)]" />
                </motion.div>

                {/* ── SOUL SAND VALLEY (AI AGENTS) ── */}
                <motion.div style={{ opacity: soulSandOpacity }} className="absolute inset-0 bg-[#1a1a1a]">
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#4d94ff10_0%,_transparent_100%)]" />
                    <Particles color="#4d94ff" count={40} speed={8} />
                    <div className="absolute top-1/4 left-1/3 w-64 h-8 bg-white/5 skew-x-12 rotate-45 blur-sm" />
                    <div className="absolute top-1/2 left-2/3 w-8 h-64 bg-white/5 -skew-y-12 -rotate-12 blur-sm" />
                </motion.div>

                {/* ── WARPED FOREST (GHOST) ── */}
                <motion.div style={{ opacity: warpedOpacity }} className="absolute inset-0 bg-[#0a2a2a]">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #00ffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                    <Particles color="#00ffff" count={30} />
                    <div className="absolute bottom-0 left-[15%] w-2 h-[80vh] bg-[#008b8b] opacity-40 shadow-[0_0_20px_rgba(0,139,139,0.5)]" />
                    <div className="absolute bottom-0 left-[75%] w-2 h-[100vh] bg-[#008b8b] opacity-30 shadow-[0_0_20px_rgba(0,139,139,0.5)]" />
                </motion.div>

                {/* ── BASALT DELTAS (INVASION) ── */}
                <motion.div style={{ opacity: deltaOpacity }} className="absolute inset-0 bg-[#1a110a]">
                    <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-[#402000] to-transparent" />
                    <Particles color="#ff8c00" count={50} speed={4} />
                    <LavaFall left="10%" delay={0} />
                    <LavaFall left="90%" delay={0.5} />
                    <div className="absolute bottom-0 left-[35%] w-16 h-[90vh] bg-[#2d2d2d] border-t-8 border-white/5" />
                    <div className="absolute bottom-0 left-[65%] w-14 h-[70vh] bg-[#2d2d2d] border-t-8 border-white/5" />
                </motion.div>
            </motion.div>

            {/* Global Vignette and Depth Mist */}
            <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,1)] z-30" />
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-30" />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/40 to-transparent z-30" />
        </div>
    );
}
