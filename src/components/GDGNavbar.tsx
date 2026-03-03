import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function GDGNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Spectrum', href: '#' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <motion.div
          layout
          className={`relative flex items-center justify-between px-8 py-4 rounded-3xl border transition-all duration-500 ${isScrolled
            ? 'bg-black/50 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
            : 'bg-transparent border-transparent'
            }`}
        >
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-[#B6FF00] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-[10px] font-black text-black">G</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className={`text-xl font-black tracking-tighter uppercase transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>GDG.</span>
              <span className={`text-[9px] font-bold tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-white/30' : 'text-black/30'}`}>VIT MUMBAI</span>
            </div>
          </motion.div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[13px] font-bold transition-all uppercase tracking-[0.15em] relative group ${isScrolled ? 'text-white/50 hover:text-white' : 'text-black/40 hover:text-black'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6FF00] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right: Join Button */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center gap-2 text-[13px] font-bold px-7 py-3 rounded-2xl shadow-xl transition-all border ${isScrolled
                ? 'bg-white text-black border-white/10 hover:shadow-[#B6FF00]/20'
                : 'bg-black text-white border-black/10 hover:shadow-[#B6FF00]/10'}`}
            >
              Join Us!
              <ArrowRight className="w-4 h-4 text-[#B6FF00] transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[100px] z-[90] bg-black/95 backdrop-blur-2xl md:hidden px-6 pt-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black tracking-tighter text-white uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-8 w-full bg-[#B6FF00] text-black font-black py-6 rounded-3xl text-xl uppercase tracking-widest shadow-2xl">
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
