import { motion } from 'motion/react';

const stats = [
    { value: 'Build', label: 'Hands-on learning through workshops, hackathons, and real-world projects.' },
    { value: 'Connect', label: 'Collaborate with passionate developers, mentors, and industry experts.' },
    { value: 'Grow', label: 'Explore emerging technologies and evolve into future-ready tech leaders.' },
];

export default function AboutSection() {
    return (
        <section id="about-section" className="page-section relative w-full bg-[#0d0e0d] py-[80px] md:py-[160px] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B6FF00]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B6FF00]/10 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px]"
            >
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    <div className="flex-1 flex flex-col justify-center">
                        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#B6FF00] uppercase mb-6">
                            <span className="w-2 h-2 bg-[#B6FF00] inline-block" />
                            ABOUT US
                        </span>
                        <h2 className="text-[40px] md:text-[68px] font-bold leading-[1.02] tracking-tighter text-white">
                            At our core, we believe technology is more than code,{' '}
                            <br />
                            <motion.span
                                initial={{ opacity: 0.3 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="italic font-medium text-outline text-[#B6FF00]"
                            >
                                it's community, creativity, and impact
                            </motion.span>
                        </h2>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                                className="group relative bg-[#141514] border border-white/[0.06] rounded-none px-8 py-6 flex flex-col items-start gap-4 transition-all duration-500 hover:bg-[#1a1b1a] hover:border-[#B6FF00]/20 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#B6FF00]/0 group-hover:bg-[#B6FF00]/60 transition-all duration-500" />

                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-3 h-3 bg-[#B6FF00]" />
                                    <p className="text-[28px] md:text-[34px] font-bold text-[#B6FF00] tracking-tighter leading-none">
                                        {s.value}
                                    </p>
                                </div>
                                <p className="text-[15px] md:text-[16px] text-white/40 font-medium leading-snug pl-7">
                                    {s.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
