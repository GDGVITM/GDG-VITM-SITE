import React from 'react';
import { motion } from 'motion/react';

const stats = [
    { value: 'Build', label: 'Hands-on learning through workshops, hackathons, and real-world projects.' },
    { value: 'Connect', label: 'Collaborate with passionate developers, mentors, and industry experts.' },
    { value: 'Grow', label: 'Explore emerging technologies and evolve into future-ready tech leaders.' },
];

export default function AboutSection() {
    return (
        // Static background wrapper so it seamlessly blends.
        <section id="about-section" className="relative w-full bg-black bg-grid-pattern py-[50px] md:py-[160px] overflow-hidden">

            {/* Animate the CONTENT inside, not the background wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-[1400px] mx-auto px-6 md:px-[60px]"
            >
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                    {/* ── Left column ── */}
                    <div className="flex-1 flex flex-col justify-center">
                        <span className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#B6FF00] uppercase mb-6">
                            ABOUT US
                        </span>
                        <h2 className="text-[40px] md:text-[68px] font-bold leading-[1.02] tracking-tighter text-white">
                            At our core, we believe technology is more than code,{' '}
                            <br />
                            <motion.span
                                initial={{ opacity: 0.3 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="italic font-medium text-white/50"
                            >
                                it’s community, creativity, and impact
                            </motion.span>
                        </h2>
                    </div>

                    {/* ── Right column ── */}
                    <div className="flex-1 flex flex-col lg:flex-row gap-8 items-stretch ">
                        {/* Stats stack */}
                        <div className="flex flex-col gap-4 flex-1">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                                    className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 flex flex-col items-start gap-4 transition-all duration-500 hover:bg-white/[0.06] hover:border-[#B6FF00]/30"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#B6FF00] shadow-[0_0_20px_rgba(182,255,0,0.6)]" />
                                        <p className="text-[28px] md:text-[34px] font-bold text-[#B6FF00] tracking-tighter leading-none">
                                            {s.value}
                                        </p>
                                    </div>
                                    <p className="text-[15px] md:text-[16px] text-white/40 font-medium leading-snug">
                                        {s.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}