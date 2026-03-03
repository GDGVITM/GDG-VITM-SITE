import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  // Determine if we are on a dark page (Web3Hero or Spectrum)
  // This ensures the logo and links turn white when the background is black
  const isDarkPage = location.pathname === '/spectrum' ||  location.pathname === '/gallery' || location.pathname === '/events'; 
  // Note: For the home page scroll, we might need more logic, 
  // but for now, let's fix the navigation.

  const textColor = isDarkPage ? 'text-white' : 'text-black';
  const subTextColor = isDarkPage ? 'text-white/70' : 'text-black/70';

  const navLinks = [
    { name: 'ABOUT US', path: '/' },
    { name: 'UPCOMING EVENTS', path: '/events' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'SPECTRUM', path: '/spectrum' },
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-[60px] w-full bg-transparent ${textColor}`}>
      {/* Left Side: Logo */}
      <Link to="/" className="flex items-center group">
        <span className="text-2xl font-bold tracking-tight uppercase">GDG VITM</span>
        <span className="text-[10px] font-bold mb-auto ml-1">TM</span>
      </Link>

      {/* Center: Nav Links */}
<div className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => {
    // 1. Logic inside the map requires curly braces and a return statement
    const isActive = location.pathname === link.path;
    
    return (
      <Link
        key={link.name}
        to={link.path}
        className={`text-[13px] font-medium transition-all uppercase tracking-wide 
          ${isActive ? 'italic font-bold underline underline-offset-4' : subTextColor} 
          hover:italic hover:text-current`}
      >
        {link.name}
      </Link>
    );
  })}
</div>
      {/* Right Side: Join Us Button */}
      <div className="hidden md:block">
        <button className={`${isDarkPage ? 'bg-white text-black' : 'bg-[#333333] text-white'} text-[14px] font-medium px-6 py-2.5 rounded-lg shadow-lg hover:scale-105 transition-transform`}>
          Join Us!
        </button>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </nav>
  );
}