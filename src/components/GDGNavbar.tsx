import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About Us', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Spectrum', href: '/spectrum' },
];

export default function GDGNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blobStyle, setBlobStyle] = useState({ left: 0, width: 0 });
  const location = useLocation();
  const rafRef = useRef<number>(0);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      rafRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    const idx = navLinks.findIndex((l) => l.href === location.pathname);
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [location.pathname]);

  const updateBlobPosition = useCallback(() => {
    const activeLink = linkRefs.current[activeIndex];
    const container = navContainerRef.current;
    if (!activeLink || !container) return;
    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setBlobStyle({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateBlobPosition();
  }, [updateBlobPosition]);

  useEffect(() => {
    window.addEventListener('resize', updateBlobPosition);
    return () => window.removeEventListener('resize', updateBlobPosition);
  }, [updateBlobPosition]);

  const showDark = isScrolled || location.pathname !== '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'pt-0 md:pt-2' : 'pt-2 md:pt-2'}`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <motion.div
          layout
          className={`relative flex items-center justify-between px-6 md:px-8 py-3 md:py-4 rounded-[24px] md:rounded-3xl border transition-all duration-500 ${showDark
              ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-white'
              : 'bg-white/40 backdrop-blur-xl border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-black'
            }`}
        >
          <Link to="/" aria-label="GDG VIT Mumbai Home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src="/GDG-Sticker-Brackets.gif"
                  alt="GDG Logo"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[15px] md:text-xl font-black tracking-tighter uppercase transition-colors duration-500 ${showDark ? 'text-white' : 'text-black'
                    }`}
                >
                  Google Developer Group
                </span>
                <span
                  className={`text-[7px] md:text-[9px] font-bold tracking-widest uppercase transition-colors duration-500 ${showDark ? 'text-white/30' : 'text-black/30'
                    }`}
                >
                  VIT MUMBAI
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav with Blob Indicator */}
          <div ref={navContainerRef} className="hidden md:flex items-center gap-10 relative">
            {/* Blob */}
            <motion.div
              className="absolute -bottom-2 h-[3px] rounded-full"
              animate={{
                left: blobStyle.left,
                width: blobStyle.width,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
              style={{
                background: '#B6FF00',
                boxShadow: '0 0 12px rgba(182, 255, 0, 0.6), 0 0 30px rgba(182, 255, 0, 0.2)',
              }}
            />

            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                onMouseEnter={() => {
                  const el = linkRefs.current[i];
                  const container = navContainerRef.current;
                  if (!el || !container) return;
                  const r = el.getBoundingClientRect();
                  const cr = container.getBoundingClientRect();
                  setBlobStyle({ left: r.left - cr.left, width: r.width });
                }}
                onMouseLeave={updateBlobPosition}
                className={`text-[13px] font-bold transition-all duration-300 uppercase tracking-[0.15em] relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00] ${location.pathname === link.href
                    ? showDark
                      ? 'text-white'
                      : 'text-black'
                    : showDark
                      ? 'text-white/40 hover:text-white/70'
                      : 'text-black/30 hover:text-black/60'
                  }`}
                aria-current={location.pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center gap-2 text-[13px] font-bold px-7 py-3 rounded-2xl shadow-xl transition-all border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6FF00] ${showDark
                  ? 'bg-white text-black border-white/10 hover:shadow-[#B6FF00]/20'
                  : 'bg-black text-white border-black/10 hover:shadow-[#B6FF00]/10'
                }`}
            >
              Join Us!
              <ArrowRight className="w-4 h-4 text-[#B6FF00] transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 border ${showDark
                  ? 'bg-white/5 border-white/10 text-white'
                  : 'bg-black/5 border-black/10 text-black'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 top-[80px] z-[90] backdrop-blur-2xl md:hidden px-6 pt-12 transition-colors duration-500 ${showDark ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
              }`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-2xl font-black tracking-tighter uppercase flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#B6FF00] ${isActive ? '' : 'opacity-40'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isActive && <div className="w-3 h-3 bg-[#B6FF00] shadow-[0_0_10px_#B6FF00]" />}
                    {link.name}
                  </Link>
                );
              })}
              <button
                className={`mt-4 w-full font-black py-5 rounded-3xl text-lg uppercase tracking-widest shadow-2xl transition-colors ${showDark ? 'bg-[#B6FF00] text-black' : 'bg-black text-white'
                  }`}
              >
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
