import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ['INNOVATIVE', 'VISIONARY', 'CREATIVE'];

export default function MarqueeSlider() {
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalContent = horizontalRef.current;
            if (!horizontalContent) return;

            const totalWidth = horizontalContent.scrollWidth;
            const viewportWidth = window.innerWidth;
            const xVal = totalWidth - viewportWidth;

            gsap.to(horizontalContent, {
                x: -xVal,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    start: "top top",
                    end: () => `+=${xVal}`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    refreshPriority: 10
                }
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={triggerRef} className="relative w-full min-h-screen overflow-hidden bg-transparent">
            <div className="relative h-screen w-full flex items-center overflow-hidden bg-grid-pattern">

                {/* Ambient background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-gradient-to-b from-transparent via-[#B6FF00]/5 to-transparent blur-[120px] pointer-events-none" />

                <div ref={horizontalRef} className="relative flex items-center whitespace-nowrap will-change-transform px-[20vw]">
                    {words.map((word, i) => (
                        <div key={i} className="flex items-center">
                            <h2 className="text-[120px] md:text-[280px] font-black tracking-tighter text-white/90 leading-none select-none px-12 md:px-24 transition-colors duration-500 hover:text-[#B6FF00]">
                                {word}
                            </h2>
                            <div className="flex items-center justify-center">
                                <ChevronRight
                                    className="w-24 h-24 md:w-48 md:h-48 text-[#B6FF00] opacity-50"
                                    strokeWidth={4}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Side Gradients for depth */}
                <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[20vw] h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                {/* Section Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">SCROLL TO EXPLORE</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </div>
        </section>
    );
}
