import { motion } from 'motion/react';
import { ArrowUp, Instagram, Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Spectrum', href: '/spectrum' },
];

const socials = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Github', icon: <Github className="w-5 h-5" />, href: '#' },
];

function PixelCorner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
    const classes: Record<string, string> = {
        tl: 'top-0 left-0',
        tr: 'top-0 right-0',
        bl: 'bottom-0 left-0',
        br: 'bottom-0 right-0',
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`absolute ${classes[pos]} w-10 h-10 bg-[#B6FF00] z-10 flex items-center justify-center`}
        >
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
        </motion.div>
    );
}

export default function Footer() {
    const handleTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative w-full bg-[#050505] border-t border-white/5 overflow-hidden">
            <PixelCorner pos="tl" />
            <PixelCorner pos="br" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]" aria-hidden="true">
                <span className="text-[200px] md:text-[300px] font-black tracking-tighter text-white uppercase whitespace-nowrap">GDG</span>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] py-24 md:py-40 flex flex-col gap-24 relative z-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 max-w-sm"
                    >
                        <div className="flex items-baseline gap-2 justify-center md:justify-start">
                            <h2 className="text-[56px] md:text-[80px] font-black tracking-tighter leading-none text-white">Google Developer Group</h2>
                            <span className="text-[#B6FF00] text-3xl font-black">VITM</span>
                        </div>
                        <p className="text-[15px] md:text-[16px] text-white/40 font-medium leading-relaxed">
                            Empowering the student developer community at Vidyalankar Institute of Technology through innovation, collaboration, and design excellence.
                        </p>

                        {/* Status indicator — inspired by ACM VIT */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="relative flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#B6FF00] rounded-full" />
                                <div className="absolute w-2 h-2 bg-[#B6FF00] rounded-full animate-ping" />
                            </div>
                            <span className="text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">
                                All systems online
                            </span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-10 items-center md:items-end">
                        <nav className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-12" aria-label="Footer navigation">
                            {navLinks.map((l, i) => (
                                <motion.div
                                    key={l.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={l.href}
                                        className="text-[13px] font-bold tracking-[0.2em] uppercase group block"
                                    >
                                        <span className="inline-block group-hover:translate-x-1 transition-transform text-white/40 group-hover:text-white">{l.name}</span>
                                        <span className="block h-px w-0 group-hover:w-full bg-[#B6FF00] transition-all duration-300 mt-1" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            {socials.map((s, i) => (
                                <motion.a
                                    key={s.name}
                                    href={s.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5, backgroundColor: '#B6FF00' }}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-black hover:border-[#B6FF00] transition-all duration-300 shadow-sm"
                                    title={s.name}
                                    aria-label={s.name}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <p className="text-[12px] text-white/30 font-bold tracking-widest uppercase">
                            &copy; 2026 GDG VIT MUMBAI
                        </p>
                        <div className="hidden sm:block w-px h-3 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-white/20 font-medium">Crafted with</span>
                            <div className="w-3 h-3 bg-[#B6FF00] rotate-45" />
                            <span className="text-[11px] text-white/20 font-medium">by GDG VITM</span>
                        </div>
                    </div>

                    <motion.button
                        onClick={handleTop}
                        whileHover={{ y: -8 }}
                        aria-label="Back to top"
                        className="bg-[#B6FF00] text-black font-black text-[12px] py-4 px-8 rounded-2xl flex items-center gap-3 uppercase tracking-[0.14em] shadow-[0_10px_20px_rgba(182,255,0,0.15)] hover:shadow-[0_15px_30px_rgba(182,255,0,0.3)] transition-all duration-300"
                    >
                        Back to Top
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
