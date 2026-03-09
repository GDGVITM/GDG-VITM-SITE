import { motion } from 'motion/react';

const partners = ['Google', 'GDG India', 'VIT Mumbai', 'GDSC', 'DevFest'];

export default function TrustedStrip() {
    return (
        <section id="trusted-strip" className="relative w-full bg-[#0d0e0d] overflow-hidden" aria-label="Trusted partners">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-[120px] flex items-center justify-between gap-12"
            >
                <p className="text-[11px] font-black tracking-[0.3em] text-white/30 uppercase whitespace-nowrap flex-shrink-0">
                    WE'RE TRUSTED BY
                </p>

                <div className="hidden md:block h-px flex-shrink-0 w-12 bg-white/10 origin-left" />

                <div className="flex items-center gap-6 md:gap-12 overflow-hidden flex-1 justify-end">
                    {partners.map((name) => (
                        <motion.div
                            key={name}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(182, 255, 0, 0.08)" }}
                            className="flex-shrink-0 w-[90px] md:w-[120px] h-[40px] bg-white/[0.03] border border-white/[0.06] transition-colors duration-300 flex items-center justify-center"
                        >
                            <span className="text-[10px] md:text-[11px] font-bold text-white/25 uppercase tracking-wider">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
