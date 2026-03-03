import React from 'react';
import { motion } from 'framer-motion';  

export default function Web3Hero() {
  return (
    
    <motion.div 
       
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-h-[150vh] flex flex-col items-center justify-start overflow-hidden bg-black"
    >
      {/* Background Video */}
      {/* Add this inside the main container of Web3Hero, at the very top */}
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <motion.div 
        
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center pt-[200px] md:pt-[280px] pb-[102px]"
      >

        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm">
          <div className="w-1 h-1 bg-white rounded-full" />
          <span className="text-[13px] font-medium text-white/60">
            Early access available from <span className="text-white">May 1, 2026</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mb-6 text-center text-[36px] md:text-[56px] font-medium leading-[1.28] tracking-tight max-w-[613px]"
          style={{
            background: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent' 
          }}
        >
          Web3 at the Speed of Experience
        </h1>

        {/* Subtitle */}
        <p className="mb-10 text-center text-[15px] font-normal text-white/70 max-w-[680px] leading-relaxed">
          Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
        </p>

        {/* CTA Button */}
        <button className="relative group rounded-full p-[0.6px] bg-white overflow-hidden transition-transform active:scale-95">
          <div className="absolute inset-x-0 top-0 h-[10px] bg-gradient-to-b from-white to-transparent opacity-50 blur-[4px] group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-white rounded-full px-[29px] py-[11px] flex items-center justify-center">
            <span className="text-[14px] font-medium text-black">Join Waitlist</span>
          </div>
        </button>

      </motion.div>
    </motion.div>
  );
}