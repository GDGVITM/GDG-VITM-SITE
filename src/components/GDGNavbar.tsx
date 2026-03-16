import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About Us', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Spectrum', href: 'https://spectrum26.gdgvitm.tech/', isExternal: true },
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

  // Common styles for the pill aesthetics
  const glassPanelDark = 'bg-black/30 border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white';
  const glassPanelLight = 'bg-white/40 border-black/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-black';
  const glassClass = showDark ? glassPanelDark : glassPanelLight;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pt-4 md:pt-5 pointer-events-none`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] flex items-center justify-between pointer-events-auto">

        {/* LEFT: LOGO PILL */}
        <Link to="/" aria-label="GDG VIT Mumbai Home" className="relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] rounded-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-2.5 px-2 md:px-3 py-2 rounded-full border transition-colors duration-500 ${glassClass}`}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <img
                src="/GDG-Sticker-Brackets.gif"
                alt="GDG Logo"
                className="w-full h-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col pr-3 md:pr-4">
              <span
                className={`text-[12px] md:text-[14px] font-black tracking-tighter uppercase leading-none transition-colors duration-500 ${showDark ? 'text-white' : 'text-black'
                  }`}
              >
                Google Developer Group
              </span>
              <span
                className={`text-[7px] md:text-[9px] font-bold tracking-widest uppercase leading-none mt-1 transition-colors duration-500 ${showDark ? 'text-white/60' : 'text-black/50'
                  }`}
              >
                VIT MUMBAI
              </span>
            </div>
          </motion.div>
        </Link>

        {/* CENTER: NAV LINKS PILL */}
        <div
          ref={navContainerRef}
          className={`hidden md:flex items-center p-1.5 rounded-full border transition-colors duration-500 relative ${glassClass}`}
        >
          {/* Active Link Blob Background */}
          <motion.div
            className="absolute inset-y-1.5 rounded-full z-0"
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
              boxShadow: '0 0 20px rgba(182, 255, 0, 0.4)',
            }}
          />

          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
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
                className={`relative z-10 px-6 py-2.5 text-[13px] font-bold transition-colors duration-300 uppercase tracking-[0.1em] focus-visible:outline-none ${isActive
                    ? 'text-black'
                    : showDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-black/60 hover:text-black'
                  }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: JOIN BUTTON & MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-3 md:gap-4 relative z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:flex items-center gap-2 text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-500 border group ${glassClass} hover:border-[#B6FF00]/50`}
          >
            Join Us!
            <ArrowRight className="w-4 h-4 text-[#B6FF00] transition-transform group-hover:translate-x-1" />
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`md:hidden w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 border ${glassClass}`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            className={`fixed inset-0 top-[80px] z-[90] md:hidden px-6 pt-8 transition-colors duration-500 pointer-events-auto backdrop-blur-3xl ${showDark ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
              }`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-3xl font-black tracking-tighter uppercase flex items-center gap-4 transition-opacity ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isActive ? (
                      <div className="w-3 h-3 rounded-full bg-[#B6FF00] shadow-[0_0_15px_#B6FF00]" />
                    ) : (
                      <div className="w-3 h-3" />
                    )}
                    {link.name}
                  </Link>
                );
              })}
              <button
                className={`mt-8 w-full font-black py-4 rounded-full text-lg uppercase tracking-widest shadow-xl transition-colors ${showDark ? 'bg-[#B6FF00] text-black hover:bg-[#a1e600]' : 'bg-black text-white hover:bg-gray-800'
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
