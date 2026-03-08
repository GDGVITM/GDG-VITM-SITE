import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import MinecraftMountains from './MinecraftMountains';

function PixelBlock({ className, delay }: { className: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-0 ${className}`}
        >
            <div className="flex">
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-[#B6FF00]"
                />
                <div className="w-12 h-12 bg-transparent" />
                <div className="w-12 h-12 bg-[#B6FF00]" />
            </div>
            <div className="flex">
                <div className="w-12 h-12 bg-[#B6FF00]" />
            </div>
        </motion.div>
    );
}

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax movement mapping (-15px to 15px)
    const bgY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
    const bgYString = useMotionTemplate`${bgY}px`;

    return (
        <motion.section
            ref={sectionRef}
            id="cta-section"
            className="relative w-full bg-transparent bg-grid-pattern min-h-screen overflow-hidden flex items-center justify-center"
            style={{ "--parallax-bg-y": bgYString } as any}
        >

            <style>{`
                #cta-section .bg-\\[\\#B6FF00\\] {
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.12);
                }
                #cta-section .bg-\\[\\#B6FF00\\]::before {
                    content: "";
                    position: absolute;
                    inset: -30px 0 -30px 0;
                    pointer-events: none;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23D9FF66' d='M2 1h1v1h-1z M6 1h2v1h-2z M12 0h1v1h-1z M14 2h1v1h-1z M1 4h1v1h-1z M4 5h1v1h-1z M9 4h2v1h-2z M15 5h1v1h-1z M0 8h1v1h-1z M3 9h1v1h-1z M7 8h1v1h-1z M11 9h2v1h-2z M13 7h1v1h-1z M2 12h1v1h-1z M5 13h1v1h-1z M8 11h2v1h-2z M14 12h1v1h-1z M4 15h1v1h-1z M10 14h1v1h-1z M12 15h1v1h-1z'/%3E%3Cpath fill='%238CC600' d='M0 2h1v1h-1z M3 0h1v1h-1z M5 2h1v1h-1z M8 1h1v1h-1z M10 0h2v1h-2z M13 3h1v1h-1z M15 1h1v1h-1z M2 5h1v1h-1z M5 4h1v1h-1z M7 6h1v1h-1z M11 5h1v1h-1z M12 4h1v1h-1z M14 6h1v1h-1z M1 8h1v1h-1z M4 7h1v1h-1z M6 9h1v1h-1z M9 8h1v1h-1z M10 10h1v1h-1z M13 9h1v1h-1z M15 8h1v1h-1z M0 11h1v1h-1z M3 13h1v1h-1z M7 12h1v1h-1z M9 13h1v1h-1z M11 11h2v1h-2z M13 13h1v1h-1z M1 14h2v1h-2z M6 15h1v1h-1z M8 14h1v1h-1z M14 15h1v1h-1z M15 14h1v1h-1z M3 3h1v1h-1z M10 6h1v1h-1z M2 10h1v1h-1z M8 9h1v1h-1z M12 11h1v1h-1z'/%3E%3Cpath fill='%23598000' d='M1 1h1v1h-1z M4 2h1v1h-1z M7 0h1v1h-1z M9 2h1v1h-1z M11 3h1v1h-1z M14 0h1v1h-1z M0 5h1v1h-1z M3 4h1v1h-1z M6 5h1v1h-1z M8 7h1v1h-1z M10 4h1v1h-1z M13 5h1v1h-1z M15 3h1v1h-1z M2 7h1v1h-1z M5 8h1v1h-1z M9 10h1v1h-1z M11 7h1v1h-1z M14 8h1v1h-1z M0 14h1v1h-1z M4 11h1v1h-1z M5 14h1v1h-1z M7 10h1v1h-1z M9 15h1v1h-1z M12 13h1v1h-1z M15 11h1v1h-1z M1 15h1v1h-1z M3 12h1v1h-1z M8 13h1v1h-1z M10 12h1v1h-1z M13 14h1v1h-1z'/%3E%3C/svg%3E");
                    background-size: 64px 64px;
                    image-rendering: pixelated;
                    z-index: 10;
                    opacity: 0.8;
                    transform: translateY(var(--parallax-bg-y, 0px));
                    will-change: transform;
                }
            `}</style>

            {/* Decorative pixel blocks & Mountains */}
            <MinecraftMountains />
            <PixelBlock className="absolute bottom-0 left-0 z-10" delay={0.2} />
            <PixelBlock className="absolute bottom-0 right-0 z-10 scale-x-[-1]" delay={0.4} />

            {/* Pulsating circles behind text */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-[#B6FF00]/20 pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[800px] h-[800px] rounded-full border border-gray-400/10 pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-[1000px] mx-auto">

                {/* Animated arrow row - top */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ x: [-10, 0, -10], opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        >
                            <ChevronLeft className="w-6 h-6 text-white/20" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quote with reveal effect */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[64px] md:text-[110px] font-black tracking-tighter leading-[0.9] text-white uppercase"
                >
                    "Build.<br />
                    <motion.span
                        initial={{ color: "#fff" }}
                        whileInView={{ color: "#B6FF00" }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Ship.
                    </motion.span><br />
                    Inspire."
                </motion.blockquote>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-10 text-[16px] md:text-[18px] font-medium text-white/50 leading-relaxed max-w-[600px] mx-auto"
                >
                    We don't just write code. We craft digital experiences  <br />
                    that move people and define the future.
                </motion.p>

                {/* CTA button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-14"
                >
                    <motion.a
                        href="#"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#B6FF00",
                            color: "#000",
                            boxShadow: "0 0 40px rgba(182,255,0,0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-black text-[15px] font-black px-10 py-5 rounded-full transition-all duration-300 uppercase tracking-widest group"
                    >
                        Get In Touch
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.a>
                </motion.div>

                {/* Animated arrow row - bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-3 mt-6 sm:mt-8 md:mt-10"
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ x: [0, 10, 0], opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        >
                            <ChevronRight className="w-6 h-6 text-white/20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
