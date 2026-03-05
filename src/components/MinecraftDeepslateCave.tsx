import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pixel-Accurate Deepslate Texture Component
 */
const DeepslateBlock = ({ className = "" }: { className?: string }) => (
    <div className={`relative w-full h-full bg-[#1e1e1e] border border-black/40 overflow-hidden ${className}`}>
        {/* Layer 1: Base Shading */}
        <div className="absolute inset-0 opacity-40"
            style={{
                backgroundImage: `
                    repeating-linear-gradient(rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 4px, transparent 4px, transparent 8px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '100% 8px, 4px 100%'
            }}
        />

        {/* Layer 2: Jagged Highlights */}
        <div className="absolute inset-0 opacity-15"
            style={{
                backgroundImage: `
                    repeating-linear-gradient(115deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 12px),
                    repeating-linear-gradient(245deg, transparent, transparent 15px, rgba(0,0,0,0.2) 15px, rgba(0,0,0,0.2) 17px)
                `,
                backgroundSize: '20px 100%, 30px 100%'
            }}
        />

        {/* Layer 3: Modular Block Edges */}
        <div className="absolute inset-0 border-t-2 border-white/5 border-l-2 border-white/5 shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.5)]" />
    </div>
);

/**
 * Deepslate Ore variants
 */
const DeepslateOre = ({ type }: { type: 'redstone' | 'gold' | 'diamond' }) => {
    const oreColors = {
        redstone: ['#9A0000', '#FF0000', '#FF5555'],
        gold: ['#C29100', '#FCEE4B', '#FFF9B0'],
        diamond: ['#2EBAC9', '#58D9E3', '#B2F7FD']
    };

    const colors = oreColors[type];

    return (
        <div className="relative w-12 h-12 bg-[#1e1e1e] border border-black/50 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'repeating-linear-gradient(transparent 0, transparent 4px, rgba(0,0,0,0.5) 4px, rgba(0,0,0,0.5) 8px)' }}
            />
            <div className="grid grid-cols-4 grid-rows-4 gap-0.5 p-1 h-full w-full relative z-10">
                <div className="col-start-2 row-start-1" style={{ backgroundColor: colors[1], boxShadow: `0 0 8px ${colors[1]}a0` }} />
                <div className="col-start-4 row-start-2" style={{ backgroundColor: colors[0] }} />
                <div className="col-start-1 row-start-3" style={{ backgroundColor: colors[2] }} />
                <div className="col-start-3 row-start-3" style={{ backgroundColor: colors[1], boxShadow: `0 0 12px ${colors[1]}` }} />
                <div className="col-start-2 row-start-4" style={{ backgroundColor: colors[0] }} />
            </div>
            {type !== 'gold' && (
                <div className="absolute inset-0 animate-pulse opacity-20 mix-blend-screen" style={{ backgroundColor: colors[1] }} />
            )}
        </div>
    );
};

const CaveTorch = ({ top, left, delay = 0 }: { top: string, left: string, delay?: number }) => (
    <div className="absolute z-30" style={{ top, left }}>
        <div className="w-2 h-6 bg-[#5C4033] relative origin-bottom rotate-12">
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut"
                }}
                className="absolute -top-3 -left-1 w-4 h-4 bg-[#FFB84D] shadow-[0_0_20px_#FFB84D]"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#FFB84D]/10 blur-[30px] rounded-full" />
        </div>
    </div>
);

const LushVines = ({ top, left, length = 5, delay = 0 }: { top: string, left: string, length?: number, delay?: number }) => (
    <div className="absolute z-20" style={{ top, left }}>
        <div className="flex flex-col">
            {[...Array(length)].map((_, i) => (
                <div
                    key={i}
                    className="w-3 h-5 bg-[#4B6B2F] border-x border-black/10 relative"
                    style={{ opacity: 1 - i * 0.1, marginTop: i === 0 ? 0 : -2 }}
                >
                    {i % 2 === 0 && <div className="absolute -left-2 top-0 w-2 h-3 bg-[#5A8239] rounded-sm" />}
                </div>
            ))}
        </div>
    </div>
);

const CrystalCluster = ({ top, left, color = "#58D9E3", delay = 0 }: { top: string, left: string, color?: string, delay?: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className="absolute z-20"
        style={{ top, left }}
    >
        <div className="relative">
            <div className="w-4 h-12 bg-white/40 blur-[10px] absolute -top-2 left-0 animate-pulse" style={{ backgroundColor: color }} />
            <div className="flex gap-0.5 items-end">
                <div className="w-3 h-8 border border-white/20 skew-x-[15deg] origin-bottom" style={{ backgroundColor: color }} />
                <div className="w-4 h-12 border border-white/20 origin-bottom" style={{ backgroundColor: color }} />
                <div className="w-2 h-6 border border-white/20 -skew-x-[20deg] origin-bottom" style={{ backgroundColor: color }} />
            </div>
        </div>
    </motion.div>
);

const Stalactite = ({ height = 120, width = 48, left, top }: { height?: number, width?: number, left: string, top: string }) => (
    <div className="absolute z-20" style={{ left, top }}>
        <div
            className="bg-[#242424] border-x border-black/30 relative"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                clipPath: 'polygon(0 0, 100% 0, 90% 20%, 75% 45%, 55% 85%, 50% 100%, 45% 85%, 25% 45%, 10% 20%)',
                backgroundImage: 'repeating-linear-gradient(rgba(0,0,0,0.3) 2px, transparent 2px, transparent 6px, rgba(255,255,255,0.02) 6px, rgba(255,255,255,0.02) 7px)',
                backgroundSize: '100% 8px'
            }}
        >
            <div className="absolute inset-0 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)]" />
        </div>
    </div>
);

export default function MinecraftDeepslateCave() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = React.useState(0);

    // Parallax transforms based on LOCALIZED progress
    const layer1Y = progress * -1000 + 500;
    const layer1X = progress * 60;
    const layer2Y = progress * -600 + 300;
    const layer2X = progress * 120;
    const layer3Y = progress * -300 + 150;
    const layer4Y = progress * -100 + 50;

    useEffect(() => {
        if (!containerRef.current) return;
        gsap.set(containerRef.current, { opacity: 0 });

        let fadeIn: ScrollTrigger;
        let parallax: ScrollTrigger;

        // Phase 1: Fade IN logic (matches Night Sky Fade OUT)
        fadeIn = ScrollTrigger.create({
            trigger: "#team-section",
            start: "top bottom",
            end: "top center",
            scrub: true,
            refreshPriority: -10,
            onUpdate: (self) => {
                gsap.set(containerRef.current, { opacity: self.progress });
            }
        });

        // Phase 2: Parallax DRIvER
        parallax = ScrollTrigger.create({
            trigger: "#team-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            refreshPriority: -10,
            onUpdate: (self) => {
                // Parallax logic: update localized state
                setProgress(self.progress);
            }
        });

        // Ensure everything is refreshed after layout settles
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            fadeIn?.kill();
            parallax?.kill();
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-0 bg-[#020202] pointer-events-none overflow-hidden"
        >
            {/* LAYER 4: Deep Voids */}
            <motion.div style={{ y: layer4Y }} className="absolute inset-0 opacity-15">
                <div className="absolute top-[30%] left-[15%] w-[80%] h-80 bg-[#0a0a0a] shadow-2xl" />
                <div className="absolute top-[70%] left-[10%] w-[50%] h-[300px] bg-[#0a0a0a]" />
            </motion.div>

            {/* LAYER 3: Background Walls, Ores, & Distant Crystals */}
            <motion.div style={{ y: layer3Y }} className="absolute inset-0 z-10 opacity-60">
                <div className="absolute top-[10%] right-[10%] w-64 h-[120vh] bg-[#141414] shadow-inner" />
                <div className="absolute bottom-[20%] left-[5%] w-96 h-64 bg-[#141414]" />

                {/* Ores embedded in rock */}
                <div className="absolute top-[25%] right-[18%]"><DeepslateOre type="diamond" /></div>
                <div className="absolute top-[60%] left-[20%]"><DeepslateOre type="gold" /></div>
                <div className="absolute top-[80%] right-[25%]"><DeepslateOre type="redstone" /></div>

                {/* Distant Amethyst clusters */}
                <CrystalCluster top="15%" left="45%" color="#9D58E3" delay={0.8} />
                <CrystalCluster top="70%" left="15%" color="#58D9E3" delay={1.0} />
            </motion.div>

            {/* LAYER 2: Structural Ledges, Pillars, & Mid-Vines */}
            <motion.div style={{ y: layer2Y, x: layer2X }} className="absolute inset-0 z-20">
                <div className="absolute top-0 right-[35%] w-24 h-full bg-[#1c1c1c] border-x border-black/50" />
                <div className="absolute top-[50%] left-[60%] w-[45%] h-24"> <DeepslateBlock /> </div>

                {/* Midground Details */}
                <LushVines top="50%" left="65%" length={8} delay={0.2} />
                <LushVines top="50%" left="85%" length={6} delay={0.4} />
                <CrystalCluster top="42%" left="62%" color="#FFB84D" delay={0.5} />

                <CaveTorch top="48%" left="65%" delay={0.1} />
            </motion.div>

            {/* LAYER 1: Entrance Frame, Stalactites, Torches, & Lush Vines */}
            <motion.div style={{ y: layer1Y, x: layer1X }} className="absolute inset-0 z-30">
                {/* Stallagtite Clusters (Inverted Rockhills) */}
                <Stalactite top="-10px" left="20%" height={180} width={72} />
                <Stalactite top="-5px" left="42%" height={120} width={56} />
                <Stalactite top="-15px" left="65%" height={240} width={88} />
                <Stalactite top="0px" left="82%" height={140} width={60} />

                {/* Jagged Entry Frame */}
                <div className="absolute top-0 left-[-5%] w-56 h-full"> <DeepslateBlock /> </div>
                <div className="absolute bottom-0 right-[-5%] w-64 h-80"> <DeepslateBlock /> </div>

                {/* Lush Vines in the Foreground */}
                <LushVines top="5%" left="30%" length={14} delay={0.6} />
                <LushVines top="10%" left="15%" length={10} delay={0.7} />
                <LushVines top="0px" left="75%" length={18} delay={0.9} />

                {/* Torches in the Foreground */}
                <CaveTorch top="15%" left="25%" delay={0} />
                <CaveTorch top="75%" left="80%" delay={0.2} />

                {/* Mossy highlights (Glows representing Lush Cave life) */}
                <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-green-900/10 blur-[60px] rounded-full" />
            </motion.div>

            {/* ATMOSPHERIC DEPTH & LIGHTING */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/95 z-40" />

            {/* Focal Bioluminescent Glows */}
            <div className="absolute top-[15%] left-[25%] w-[400px] h-[400px] bg-orange-900/5 blur-[120px] rounded-full z-45" />
            <div className="absolute top-[40%] left-[65%] w-[350px] h-[350px] bg-cyan-900/5 blur-[100px] rounded-full z-45" />
            <div className="absolute top-[70%] left-[15%] w-[450px] h-[450px] bg-purple-900/5 blur-[130px] rounded-full z-45" />

            {/* Final Darkness Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,1)] z-50 pointer-events-none" />
        </motion.div>
    );
}
