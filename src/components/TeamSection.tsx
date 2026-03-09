import { useState } from 'react';
import { motion } from 'motion/react';

interface TeamMember {
    name: string;
    role: string;
    dithered: string;
    color: string;
}

const members: TeamMember[] = [
    { name: 'Devdatta Talele', role: 'Organizer Head', dithered: '/team/dithered/devdatta.png', color: '/team/color/Organizer.png' },
    { name: 'Zubiya Quadri', role: 'Associate Lead', dithered: '/team/dithered/zubiya.png', color: '/team/color/Co.png' },
    { name: 'Aman Singh', role: 'Open Source Lead', dithered: '/team/dithered/aman.png', color: '/team/color/OSS.png' },
    { name: 'Tanishq Chavan', role: 'Technical Lead', dithered: '/team/dithered/tanishq.png', color: '/team/color/TECH.png' },
    { name: 'Apurv Deshmukh', role: 'Technical Lead', dithered: '/team/dithered/apurv.png', color: '/team/color/Tech (2).png' },
    { name: 'Ronak Boddu', role: 'Design Lead', dithered: '/team/dithered/ronak.png', color: '/team/color/Design.png' },
    { name: 'Tanmay Gore', role: 'UI/UX Lead', dithered: '/team/dithered/tanmay.png', color: '/team/color/UI.png' },
    { name: 'Sarthak Bongane', role: 'Media Lead', dithered: '/team/dithered/sarthak.png', color: '/team/color/MEDIA.png' },
    { name: 'Ketan Patil', role: 'Media Lead', dithered: '/team/dithered/ketan.png', color: '/team/color/Media (2).png' },
    { name: 'Srilakshmi K', role: 'Documentation Lead', dithered: '/team/dithered/srilakshmi.png', color: '/team/color/DOCX.png' },
    { name: 'Pearl Rathod', role: 'Management Lead', dithered: '/team/dithered/pearl.png', color: '/team/color/EVENT.png' },
    { name: 'Ishwari Pandit', role: 'Management Lead', dithered: '/team/dithered/ishwari.png', color: '/team/color/Event (2).png' },
    { name: 'Om Nikam', role: 'Finance Lead', dithered: '/team/dithered/om.png', color: '/team/color/FNS.png' },
    { name: 'Swayam Ballal', role: 'Outreach Lead', dithered: '/team/dithered/swayam.png', color: '/team/color/OUTREACH.png' },
    { name: 'Jitesh Gaikwad', role: 'Outreach Lead', dithered: '/team/color/Outreach (2).png', color: '/team/color/Outreach (2).png' },
];

const BOX_SIZE = "24px";
const MASK_IMAGE = "linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)";
const MASK_SIZE = `100% 100%, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}`;

const maskPositions = [
    `0 0, 0 0, ${BOX_SIZE} 0, ${BOX_SIZE} ${BOX_SIZE}, 0 calc(${BOX_SIZE} * 2)`,
    `0 0, 0 100%, ${BOX_SIZE} 100%, ${BOX_SIZE} calc(100% - ${BOX_SIZE}), 0 calc(100% - ${BOX_SIZE} * 2)`,
    `0 0, 100% 0, calc(100% - ${BOX_SIZE}) 0, calc(100% - ${BOX_SIZE}) ${BOX_SIZE}, 100% calc(${BOX_SIZE} * 2)`,
    `0 0, 100% 100%, calc(100% - ${BOX_SIZE}) 100%, calc(100% - ${BOX_SIZE}) calc(100% - ${BOX_SIZE}), 100% calc(100% - ${BOX_SIZE} * 2)`
];

const cardRadii = [
    "rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-tl-none",
    "rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-none",
    "rounded-bl-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none",
    "rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-none"
];

function TeamMemberCard({ m, i }: { m: TeamMember; i: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const isShiftedDown = i % 2 === 1;
    const currentMaskPosition = maskPositions[i % 4];
    const currentRadius = cardRadii[i % 4];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
            className={`group relative flex flex-col items-center w-full self-start transition-all duration-500 ${isShiftedDown ? 'mt-12 lg:mt-24' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative w-full aspect-[4/5] bg-[#0d0e0d] overflow-hidden border border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/50 ${currentRadius}`}
                style={{
                    WebkitMaskImage: MASK_IMAGE,
                    maskImage: MASK_IMAGE,
                    WebkitMaskSize: MASK_SIZE,
                    maskSize: MASK_SIZE,
                    WebkitMaskPosition: currentMaskPosition,
                    maskPosition: currentMaskPosition,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude'
                }}
            >
                {/* Color image underneath — revealed on hover */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={m.color}
                        alt={`${m.name} color`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top scale-[1.35] origin-top transition-transform duration-700 group-hover:scale-[1.25]"
                    />
                </div>

                {/* Dithered image — multiply blend makes white bg → card dark bg */}
                <motion.div
                    className="absolute inset-0 z-10"
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img
                        src={m.dithered}
                        alt={`${m.name} dithered`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top scale-[1.35] origin-top brightness-[1.15]"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                </motion.div>

                {/* Bottom gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-15 pointer-events-none" />

                {/* Name & Role */}
                <div className="absolute inset-0 flex items-end p-6 z-20">
                    <div className="flex flex-col gap-1 drop-shadow-2xl">
                        <h3 className="text-[22px] md:text-[26px] font-polysans-bold font-black text-white leading-tight tracking-tighter">
                            {m.name}
                        </h3>
                        <p className={`text-[12px] font-polysans-bold font-bold uppercase tracking-[0.12em] transition-colors duration-500 ${isHovered ? 'text-[#B6FF00]' : 'text-white/60'}`}>
                            {m.role}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function TeamSection() {
    const displayMembers = members;

    return (
        <section id="team-section" className="relative w-full bg-[#0a0b0a] py-24 md:py-40 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px]">
                <div className="text-center mb-32">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-[#B6FF00]" />
                        <span className="text-[12px] font-bold tracking-[0.25em] text-white uppercase">
                            TEAM MEMBERS
                        </span>
                    </div>
                    <h2 className="text-[48px] md:text-[80px] font-polysans-wide font-extrabold tracking-tighter text-white leading-[1.05] mb-4">
                        The Minds <br /> Behind the Work
                    </h2>
                </div>

                <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden flex items-center bg-[#B6FF00] py-4 mb-32 -rotate-2 shadow-[0_0_40px_rgba(182,255,0,0.3)] z-20 border-y-4 border-black group">
                    <div className="flex whitespace-nowrap animate-marquee group-hover:animation-play-state-paused">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex shrink-0 gap-8 items-center px-4">
                                <span className="font-polysans-wide text-5xl uppercase tracking-tighter font-extrabold text-black">The Minds Behind</span>
                                <div className="w-4 h-4 bg-black" />
                                <span className="font-polysans-wide text-5xl uppercase tracking-tighter font-extrabold text-transparent" style={{ WebkitTextStroke: '2px black' }}>Team Members</span>
                                <div className="w-4 h-4 bg-black" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {displayMembers.map((m, i) => (
                        <TeamMemberCard key={m.name} m={m} i={i} />
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#141514] bg-gradient-to-br from-[#1a1b1a] to-[#0d0e0d] rounded-[40px] p-10 flex flex-col justify-between h-full min-h-[440px] shadow-2xl overflow-hidden border border-white/5 mt-12 lg:mt-24"
                    >
                        <div>
                            <div className="w-10 h-10 bg-[#B6FF00] mb-8 shadow-[0_0_20px_rgba(182,255,0,0.4)]" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[32px] font-polysans-wide font-bold text-white tracking-tighter leading-[1.1]">
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
                                <span className="text-white group-hover:text-black font-polysans-bold font-extrabold tracking-tight pr-4">Apply Now</span>
                            </div>
                        </div>

                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid-pattern" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
