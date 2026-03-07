import React from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Linkedin } from 'lucide-react';

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

// 1. CSS Mask Configurations for the 'Tetris' pixel cutouts (8-bit style)
const BOX_SIZE = "24px"; // Matches background grid cells
const MASK_IMAGE = "linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)";
const MASK_SIZE = `100% 100%, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}, ${BOX_SIZE} ${BOX_SIZE}`;

const maskPositions = [
    // Top-Left (Card 1)
    `0 0, 0 0, ${BOX_SIZE} 0, ${BOX_SIZE} ${BOX_SIZE}, 0 calc(${BOX_SIZE} * 2)`,
    // Bottom-Left (Card 2)
    `0 0, 0 100%, ${BOX_SIZE} 100%, ${BOX_SIZE} calc(100% - ${BOX_SIZE}), 0 calc(100% - ${BOX_SIZE} * 2)`,
    // Top-Right (Card 3)
    `0 0, 100% 0, calc(100% - ${BOX_SIZE}) 0, calc(100% - ${BOX_SIZE}) ${BOX_SIZE}, 100% calc(${BOX_SIZE} * 2)`,
    // Bottom-Right (Card 4)
    `0 0, 100% 100%, calc(100% - ${BOX_SIZE}) 100%, calc(100% - ${BOX_SIZE}) calc(100% - ${BOX_SIZE}), 100% calc(100% - ${BOX_SIZE} * 2)`
];

const cardRadii = [
    "rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-tl-none",
    "rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-none",
    "rounded-bl-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none",
    "rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-none"
];

const PixelGrid = ({ isHovered }: { isHovered: boolean }) => {
    const GRID = 7;
    return (
        <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 z-20 pointer-events-none">
            {Array.from({ length: GRID * GRID }).map((_, idx) => {
                const r = Math.floor(idx / GRID);
                const c = idx % GRID;
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{
                            opacity: isHovered ? 0 : 1,
                            scale: isHovered ? 0 : 1,
                        }}
                        transition={{
                            duration: 0.4,
                            delay: (r + c) * 0.05,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className="bg-[#1A1C1F] border-[0.2px] border-white/5"
                    />
                );
            })}
        </div>
    );
};

function TeamMemberCard({ m, i }: { m: any, i: number, key?: any }) {
    const [isHovered, setIsHovered] = React.useState(false);
    // 2. Stagger Logic: Odd (1,3) high, Even (2,4) low
    const isShiftedDown = i % 2 === 1;
    const photoUrl = `https://i.pravatar.cc/800?u=${encodeURIComponent(m.name)}`;
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
            {/* Main Interactive Card Body with CSS Mask Cutout */}
            <div
                className={`relative w-full aspect-[4/5] bg-white/5 overflow-hidden shadow-inner border border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/50 ${currentRadius}`}
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

                {/* Image layer (revealed on hover) */}
                <div className="absolute inset-0 bg-[#0D0D0D]">
                    <img
                        src={photoUrl}
                        alt={m.name}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                </div>

                {/* Pixel Overlay (evaporates on hover) */}
                <PixelGrid isHovered={isHovered} />

                {/* Name & Role Center Control (fades out on hover) */}
                <div className="absolute inset-0 flex items-center justify-center p-8 z-30">
                    <motion.div
                        animate={{
                            opacity: isHovered ? 0 : 1,
                            scale: isHovered ? 0.8 : 1,
                            y: isHovered ? -20 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center text-center gap-1 drop-shadow-2xl"
                    >
                        <h3 className="text-[26px] md:text-[30px] font-black text-white leading-tight tracking-tighter">
                            {m.name}
                        </h3>
                        <p className="text-[13px] text-white/50 font-bold uppercase tracking-[0.1em]">
                            {m.role}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Social Buttons Tag (Maintains position and style) */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#1A1C1F] rounded-[24px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-40 border border-white/5 flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 shadow-black/60' : ''}`}>
                <div className="flex gap-2.5">
                    {[
                        { Icon: Github, color: 'hover:text-white', label: 'GitHub' },
                        { Icon: Instagram, color: 'hover:text-[#E4405F]', label: 'Instagram' },
                        { Icon: Linkedin, color: 'hover:text-[#0077B5]', label: 'LinkedIn' }
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group/icon transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95 shadow-lg"
                        >
                            <social.Icon size={18} className={`text-white/70 transition-colors ${social.color}`} strokeWidth={2} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
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

                    {displayMembers.map((m, i) => (
                        <TeamMemberCard key={i} m={m} i={i} />
                    ))}

                    {/* Special CTA Card - Follows stagger pattern */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#2A2D32] bg-gradient-to-br from-[#35393f] to-[#1A1C1F] rounded-[40px] p-10 flex flex-col justify-between h-full min-h-[440px] shadow-2xl overflow-hidden border border-white/5 mt-12 lg:mt-24"
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
