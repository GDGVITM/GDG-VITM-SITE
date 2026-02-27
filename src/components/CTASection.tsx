import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

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
    return (
        <section className="relative w-full bg-[#F2F3F5] bg-grid-pattern py-[120px] md:py-[200px] overflow-hidden flex items-center justify-center">

            {/* Decorative pixel blocks */}
            <PixelBlock className="absolute bottom-0 left-0 z-0" delay={0.2} />
            <PixelBlock className="absolute bottom-0 right-0 z-0 scale-x-[-1]" delay={0.4} />

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
            <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">

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
                            <ChevronLeft className="w-6 h-6 text-black/20" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quote with reveal effect */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[64px] md:text-[110px] font-black tracking-tighter leading-[0.9] text-black uppercase"
                >
                    "Build.<br />
                    <motion.span
                        initial={{ color: "#000" }}
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
                    className="mt-10 text-[16px] md:text-[18px] font-medium text-black/50 leading-relaxed max-w-[600px] mx-auto"
                >
                    We don't just write code. We craft digital experiences that move people and define the future.
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
                        className="inline-flex items-center gap-3 bg-black text-white text-[15px] font-black px-10 py-5 rounded-full transition-all duration-300 uppercase tracking-widest group"
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
                    className="flex items-center justify-center gap-3 mt-14"
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ x: [0, 10, 0], opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        >
                            <ChevronRight className="w-6 h-6 text-black/20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
