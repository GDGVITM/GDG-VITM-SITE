import React from 'react';
import { motion } from 'motion/react';

const members = [
    { name: 'Devdatta Talele', role: 'Organizer Head' },
    { name: 'Zubiya Quadri', role: 'Associate Lead' },
    { name: 'Aman Singh', role: 'Open Source Lead' },
    { name: 'Tanishq Chavan', role: 'Technical Lead' },
    { name: 'Apurv Deshmukh', role: 'Technical Lead' },
    { name: 'Ronak Boddu', role: 'Design Lead' },
    { name: 'Tanmay Gore', role: 'UI/UX Lead' },
    { name: 'Sarthak Bongane', role: 'Media Lead' },
    { name: 'Ketan Patil', role: 'Media Lead' },
    { name: 'Srilakshmi K', role: 'Documentation Lead' },
    { name: 'Pearl Rathod', role: 'Management Lead' },
    { name: 'Ishwari Pandit', role: 'Management Lead' },
    { name: 'Om Nikam', role: 'Finance Lead' },
    { name: 'Swayam Ballal', role: 'Outreach Lead' },
    { name: 'Jitesh Gaikwad', role: 'Outreach Lead' },
];

function PixelCorner({ side }: { side: 'tl' | 'tr' }) {
    return (
        <div className={`absolute ${side === 'tl' ? '-top-1 -left-1' : '-top-1 -right-1'} flex flex-col pointer-events-none z-20`}>
            {side === 'tl' ? (
                <div className="flex flex-col gap-0">
                    <div className="flex"><div className="w-5 h-5 bg-black" /><div className="w-5 h-5 bg-white/5" /></div>
                    <div className="flex"><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-white/5" /></div>
                    <div className="flex gap-0"><div className="w-5 h-5 bg-transparent" /><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-white/10" /></div>
                </div>
            ) : (
                <div className="flex flex-col items-end gap-0">
                    <div className="flex"><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-black" /></div>
                    <div className="flex"><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-white/5" /></div>
                    <div className="flex gap-0"><div className="w-5 h-5 bg-white/10" /><div className="w-5 h-5 bg-white/5" /><div className="w-5 h-5 bg-transparent" /></div>
                </div>
            )}
        </div>
    );
}

export default function TeamSection() {
    // Show all members from the updated list
    const displayMembers = members;

    return (
        <section id="team-section" className="relative w-full bg-transparent bg-grid-pattern py-24 md:py-40 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">

                {/* Heading */}
                <div className="text-center mb-32">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-[#B6FF00]" />
                        <span className="text-[12px] font-bold tracking-[0.25em] text-white uppercase">
                            TEAM MEMBERS
                        </span>
                    </div>
                    <h2 className="text-[48px] md:text-[80px] font-extrabold tracking-tighter text-white leading-[1.05] mb-4">
                        The Minds <br /> Behind the Work
                    </h2>
                </div>

                {/* Grid with staggered layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">

                    {displayMembers.map((m, i) => {
                        // Stagger effect: even columns higher, odd columns lower
                        const isStaggered = Math.floor(i / 1) % 2 === (i % 4 === 1 || i % 4 === 3 ? 1 : 0);
                        // Simplified stagger for 4 columns: 0,2 are high, 1,3 are low
                        const desktopStagger = (i % 4 === 1 || i % 4 === 3);

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
                                className={`group relative flex flex-col items-center ${desktopStagger ? 'lg:mt-16' : ''}`}
                            >
                                {/* Main Grey Card (Image Placeholder) */}
                                <div className="relative w-full aspect-[4/5] bg-white/5 rounded-[40px] overflow-hidden shadow-inner group-hover:shadow-md transition-shadow">
                                    <PixelCorner side={i % 2 === 0 ? 'tl' : 'tr'} />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                                    <div className="w-full h-full flex items-center justify-center opacity-[0.1]">
                                        <span className="text-6xl font-black italic text-white/20">GDG</span>
                                    </div>
                                </div>

                                {/* Floating Name Tag */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-[#1A1C1F] rounded-[28px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col items-center text-center z-10 border border-white/5 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500">
                                    <h3 className="text-[20px] font-bold text-white tracking-tight">{m.name}</h3>
                                    <p className="text-[13px] text-white/40 font-semibold mt-0.5 tracking-wide">{m.role}</p>

                                    <div className="flex gap-2 mt-4">
                                        {[1, 2, 3].map((_, idx) => (
                                            <div key={idx} className="w-9 h-9 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center group/icon overflow-hidden transition-colors hover:bg-[#B6FF00]">
                                                <div className="w-3.5 h-3.5 bg-white/10 group-hover/icon:bg-black transition-colors rounded-sm" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Special CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#2A2D32] bg-gradient-to-br from-[#35393f] to-[#1A1C1F] rounded-[40px] p-10 flex flex-col justify-between h-full min-h-[440px] shadow-2xl overflow-hidden border border-white/5 lg:mt-16 sm:mt-0"
                    >
                        <div>
                            <div className="w-10 h-10 bg-[#B6FF00] mb-8 shadow-[0_0_20px_rgba(182,255,0,0.4)]" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[32px] font-bold text-white tracking-tighter leading-[1.1]">
                                    We're Searching <br /> For Talents
                                </h3>
                                <p className="text-[15px] text-white/40 font-medium leading-relaxed">
                                    Join our team of creatives pushing boundaries, experimenting with ideas.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 group cursor-pointer z-10">
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10 group-hover:bg-white transition-all duration-500">
                                <div className="w-12 h-12 bg-[#B6FF00] rounded-xl flex items-center justify-center overflow-hidden">
                                    <div className="grid grid-cols-2 gap-1 px-3 opacity-40 group-hover:opacity-100">
                                        <div className="w-1 h-1 bg-black" />
                                        <div className="w-1 h-1 bg-black" />
                                        <div className="w-1 h-1 bg-black" />
                                        <div className="w-1 h-1 bg-black" />
                                    </div>
                                </div>
                                <span className="text-white group-hover:text-black font-extrabold tracking-tight pr-4">Apply Now</span>
                            </div>
                        </div>

                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
