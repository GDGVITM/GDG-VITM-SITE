import React from 'react';
import { motion } from 'motion/react';

const stats = [
    { value: '300%', label: 'Average ROI from design improvements' },
    { value: '120+', label: 'Projects delivered for global clients' },
    { value: '4.9/5', label: 'Client rating based on 100+ reviews' },
];

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#F2F3F5] bg-grid-pattern py-[100px] md:py-[160px] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                    {/* ── Left column ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <span className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#B6FF00] uppercase mb-6">
                            ABOUT US
                        </span>
                        <h2 className="text-[40px] md:text-[68px] font-bold leading-[1.02] tracking-tighter text-black">
                            At our core, we believe good design is more than beauty,{' '}
                            <motion.span
                                initial={{ opacity: 0.3 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="italic font-medium text-black/50"
                            >
                                it's emotion
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* ── Right column ── */}
                    <div className="flex-1 flex flex-col lg:flex-row gap-8 items-stretch">

                        {/* Stats stack */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                }
                            }}
                            className="flex flex-col gap-4 flex-1"
                        >
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                                    className="group bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-2xl px-8 py-6 flex items-center gap-6 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#B6FF00] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(182,255,0,0.5)]" />
                                    <div>
                                        <p className="text-[32px] md:text-[38px] font-bold tracking-tighter text-black leading-none mb-1">
                                            {s.value}
                                        </p>
                                        <p className="text-[14px] text-black/40 font-medium leading-snug">{s.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Image placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-shrink-0 w-full lg:w-[240px] min-h-[320px] rounded-3xl bg-gray-200/80 border border-gray-300/60 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
                            <div className="absolute top-0 left-0 w-6 h-6 bg-[#B6FF00] group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#B6FF00] group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                                <span className="text-[12px] font-bold tracking-[0.2em] text-black/20 uppercase group-hover:text-white transition-colors duration-500">
                                    Refined Art
                                </span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
