import React from 'react';
import { motion } from 'motion/react';

export default function TrustedStrip() {
    return (
        // Static background wrapper so it seamlessly blends with the Hero canvas.
        // REMOVED borders.
        <section id="trusted-strip" className="relative w-full bg-[#F8F9FA] bg-grid-pattern overflow-hidden">
            
            {/* Animate the CONTENT inside, not the background wrapper */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }} // Triggers when 40% visible
                transition={{ duration: 10, ease: "easeOut" }}
                className="max-w-[1400px] mx-auto px-6 md:px-[60px] h-[120px] flex items-center justify-between gap-12"
            >
                {/* Left label */}
                <p className="text-[11px] font-black tracking-[0.3em] text-black/40 uppercase whitespace-nowrap flex-shrink-0">
                    // WE'RE TRUSTED BY
                </p>

                {/* Divider line */}
                <div className="hidden md:block h-px flex-shrink-0 w-12 bg-black/10 origin-left" />

                {/* Logo placeholders */}
                <div className="flex items-center gap-6 md:gap-12 overflow-hidden flex-1 justify-end">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(182, 255, 0, 0.1)" }}
                            className="flex-shrink-0 w-[90px] md:w-[120px] h-[40px] rounded-xl bg-gray-300/40 border border-gray-200/50 transition-colors duration-300"
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}