import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const EVENT_DATA = [
    {
        date: "1st April",
        title: "THE LAST STANDING RONIN",
        subtitle: "Speed Code Instant Death",
        biome: "Crimson Forest",
        color: "#ff4d4d"
    },
    {
        date: "2nd April",
        title: "The Age of AI Agents",
        subtitle: "Speaker Session",
        biome: "Soul Sand Valley",
        color: "#4d94ff"
    },
    {
        date: "3rd April",
        title: "THE WAY OF THE GHOST",
        subtitle: "Bluff & bid",
        biome: "Warped Forest",
        color: "#00ffff"
    },
    {
        date: "4th April",
        title: "THE INVASION",
        subtitle: "Hackathon",
        biome: "Basalt Deltas",
        color: "#ff8c00"
    }
];

export default function NetherMapNodes() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Nodes are moved lower in their 60vh sections.
    // Instead of 30vh, they are at 45vh, 105vh, 165vh, 225vh.
    // Normalized triggers in a 300vh container:
    const triggers = [0.15, 0.35, 0.55, 0.75];

    // The ray starts at the very beginning of the section (scrollYProgress = 0)
    // and ends exactly at Node 4 center (0.75).
    const pathLength = useTransform(scrollYProgress, [0, triggers[3]], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full h-[300vh] z-0">
            {/* ── THE BURNING PATH ── */}
            {/* Path starts at the top (0vh) and ends at Node 4 (225vh). Total Height = 225vh. */}
            <div className="absolute top-0 left-0 right-0 h-[225vh] pointer-events-none flex justify-center z-10">
                <svg className="h-full w-24 overflow-visible" preserveAspectRatio="none">
                    {/* Background Path (Removed/Invisible) */}
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="none" opacity="0" />

                    {/* Active Path (Lava) - Starts from top, Terminates exactly at Node 4 marker center */}
                    <motion.line
                        x1="50%" y1="0" x2="50%" y2="100%"
                        stroke="#ff4d00" strokeWidth="4"
                        strokeLinecap="round"
                        style={{ pathLength, filter: 'drop-shadow(0 0 15px #ff4d00)' }}
                    />
                </svg>
            </div>

            {/* ── THE NODES ── */}
            <div className="relative w-full flex flex-col items-center">
                {EVENT_DATA.map((event, i) => {
                    return (
                        <section
                            key={i}
                            className="h-[60vh] w-full flex flex-col items-center justify-center relative"
                        >
                            {/* Card & Marker Grouped for synced Fade In */}
                            {/* Marker is positioned at 45vh down the section (75% depth) */}
                            <div className="absolute top-[45vh] -translate-y-1/2 left-0 right-0 w-full flex flex-col items-center pointer-events-none z-10">
                                <NodeWrapper progress={scrollYProgress} trigger={triggers[i]}>
                                    {/* Node Marker (Pulse) - Centered exactly on the ray path */}
                                    <div className="mb-4 flex flex-col items-center z-50">
                                        <div className="w-10 h-10 rounded-full bg-[#ff4d00] shadow-[0_0_30px_#ff4d00] border-4 border-white/20 animate-pulse" />
                                    </div>

                                    {/* Event Card - Centered below marker */}
                                    <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] shadow-2xl overflow-hidden group hover:border-[#ff4d00]/50 transition-colors max-w-xl w-full mx-6 relative pointer-events-auto">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff4d00]/10 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-1 opacity-40">
                                                <div className="w-2 h-2 bg-white" />
                                                <div className="w-2 h-2 bg-transparent" />
                                                <div className="w-2 h-2 bg-transparent" />
                                                <div className="w-2 h-2 bg-white" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1 mb-6">
                                            <span className="text-xs font-black tracking-[0.3em] text-[#ff4d00] uppercase font-mono">
                                                {event.date} / {event.biome}
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none">
                                                {event.title}
                                            </h2>
                                        </div>

                                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-8">
                                            {event.subtitle}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <button className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#ff4d00] hover:text-white transition-all">
                                                More Info Coming soon
                                            </button>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>
                                    </div>
                                </NodeWrapper>
                            </div>
                        </section>
                    );
                })}

                {/* Final Lava Pool Transition */}
                <div className="h-[60vh] w-full flex flex-col items-center justify-end pb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative z-10 text-center"
                    >
                        <div className="relative group">
                            <motion.div
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -inset-10 bg-[#ff4d00] blur-3xl opacity-20"
                            />
                            <h3 className="text-4xl md:text-7xl font-black italic text-white/90 tracking-tighter drop-shadow-2xl">
                                FALLEN INTO <br />
                                <span className="text-[#ff4d00]">THE VOID</span>
                            </h3>
                        </div>
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#ff4d00] to-transparent opacity-60 mix-blend-screen" />
                </div>
            </div>
        </div>
    );
}

function NodeWrapper({ progress, trigger, children }: { progress: any, trigger: number, children: React.ReactNode }) {
    // Reveal (Fade In) happens exactly as the ray arrives at the trigger point.
    // Starts fading 0.1 normalized progress earlier.
    const opacity = useTransform(progress, [trigger - 0.1, trigger], [0, 1]);

    return (
        <motion.div
            style={{ opacity }}
            className="w-full flex flex-col items-center justify-center relative z-40"
        >
            {children}
        </motion.div>
    );
}
