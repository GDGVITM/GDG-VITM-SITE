import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MinecraftMoon = () => (
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-[#E8E8E8] shadow-[0_0_100px_rgba(255,255,255,0.2)] border-4 border-white/10 overflow-hidden">
        {/* Crater Patterns */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-[#D0D0D0]" />
        <div className="absolute top-12 left-16 w-8 h-8 bg-[#D0D0D0]" />
        <div className="absolute bottom-6 left-8 w-10 h-10 bg-[#D0D0D0]" />
        <div className="absolute top-2 w-full h-1 bg-white/20" />
        <div className="absolute left-2 h-full w-1 bg-white/20" />
    </div>
);

import MinecraftPhantoms from './MinecraftPhantoms';

const MinecraftNightCloud = ({ delay, top, opacity = 0.4, duration = 120, scale = 1 }: { delay: number; top: string; opacity?: number; duration?: number; scale?: number }) => (
    <motion.div
        initial={{ x: "120vw" }}
        animate={{ x: "-120vw" }}
        transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
        style={{ top, opacity, scale }}
        className="absolute z-0 pointer-events-none"
    >
        <div className="flex flex-col gap-0">
            <div className="flex">
                <div className="w-16 h-10 bg-[#2D333B]" />
                <div className="w-20 h-12 bg-[#373E47] -mt-2" />
                <div className="w-14 h-10 bg-[#2D333B]" />
            </div>
            <div className="flex -mt-4 ml-8">
                <div className="w-24 h-12 bg-[#373E47]" />
                <div className="w-16 h-10 bg-[#2D333B]" />
            </div>
        </div>
    </motion.div>
);

export default function MinecraftNightSky() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Set initial state
        gsap.set(containerRef.current, { opacity: 0 });

        // Phase 1: Fade IN after Hero (Starts at TrustedStrip)
        const fadeIn = ScrollTrigger.create({
            trigger: "#page-content",
            start: "top bottom",
            end: "top center",
            scrub: true,
            refreshPriority: -10,
            onUpdate: (self) => {
                gsap.set(containerRef.current, { opacity: self.progress });
            }
        });

        // Phase 2: Fade OUT for Team Section (Starts when Team starts entering)
        const fadeOut = ScrollTrigger.create({
            trigger: "#team-section",
            start: "top bottom",
            end: "top center",
            scrub: true,
            refreshPriority: -10,
            onUpdate: (self) => {
                gsap.set(containerRef.current, { opacity: 1 - self.progress });
            }
        });

        // Ensure everything is refreshed after layout settles
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            fadeIn.kill();
            fadeOut.kill();
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-0 bg-black pointer-events-none"
        >
            {/* Stars */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20"
                    style={{
                        top: `${(i * 7.7) % 100}%`,
                        left: `${(i * 13.3) % 100}%`,
                        opacity: 0.3
                    }}
                />
            ))}

            {/* Moon - Fixed position, no slide up */}
            <div className="absolute top-[15%] left-[20%] z-10">
                <MinecraftMoon />
            </div>

            {/* High-Fidelity 3D Phantoms */}
            <MinecraftPhantoms count={6} />

            {/* Clouds */}
            <MinecraftNightCloud delay={0} top="30%" opacity={0.2} duration={140} scale={1.2} />
            <MinecraftNightCloud delay={25} top="15%" opacity={0.15} duration={180} scale={0.8} />
            <MinecraftNightCloud delay={50} top="45%" opacity={0.1} duration={200} scale={1.5} />
            <MinecraftNightCloud delay={15} top="60%" opacity={0.25} duration={160} scale={1.1} />
            <MinecraftNightCloud delay={70} top="10%" opacity={0.1} duration={220} scale={0.7} />
            <MinecraftNightCloud delay={40} top="75%" opacity={0.2} duration={150} scale={1.4} />
        </motion.div>
    );
}
