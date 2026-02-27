import React from 'react';
import { motion } from 'motion/react';

export default function TrustedStrip() {
    return (
        <section className="relative w-full bg-[#F2F3F5] bg-grid-pattern border-t border-b border-gray-200/70 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] h-[120px] flex items-center justify-between gap-12">
                {/* Left label */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[11px] font-black tracking-[0.3em] text-black/40 uppercase whitespace-nowrap flex-shrink-0"
                >
                    // WE'RE TRUSTED BY
                </motion.p>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="hidden md:block h-px flex-shrink-0 w-12 bg-black/10 origin-left"
                />

                {/* Logo placeholders */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="flex items-center gap-6 md:gap-12 overflow-hidden flex-1 justify-end"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(182, 255, 0, 0.1)" }}
                            className="flex-shrink-0 w-[90px] md:w-[120px] h-[40px] rounded-xl bg-gray-300/40 border border-gray-200/50 transition-colors duration-300"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
