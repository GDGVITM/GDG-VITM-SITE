import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Events() {
  // Mock data for upcoming events
  const upcomingEvents = [
    { id: 'EVT_01', title: 'Neural Synthesis', date: 'MAR 24', status: 'INITIATING' },
    { id: 'EVT_02', title: 'Deep Sea Protocol', date: 'APR 12', status: 'STABLE' },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#010205] text-white overflow-hidden pb-20">
        
        {/* --- SHARED ABYSSAL BACKGROUND --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Leviathan Silhouette */}
          <motion.div
            animate={{ x: [-500, 1500], opacity: [0, 0.1, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 w-[800px] h-[300px] blur-[120px] bg-[#00f2ff]"
          />
          
          {/* Marine Snow */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: ['110vh', '-10vh'], opacity: [0, 0.5, 0] }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
              className="absolute w-1 h-1 bg-[#CCFF00] rounded-full shadow-[0_0_8px_#CCFF00]"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 pt-40 px-6 max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#CCFF00] font-mono text-xs tracking-[0.5em] uppercase mb-4 block"
              >
                Signal_Detected // Archive_v4
              </motion.span>
              <h1 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                Events
              </h1>
            </div>
            <div className="text-right font-mono text-[10px] text-white/40 uppercase">
              <p>System_Time: 24:00:03</p>
              <p className="text-[#00f2ff]">Status: Monitoring_Abyss</p>
            </div>
          </div>

          {/* Events Grid */}
          <div className="mt-20 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-xl font-bold uppercase tracking-widest italic text-white/80">Upcoming_Nodes</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event) => (
                    <motion.div 
                      key={event.id}
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#CCFF00]/50"
                    >
                      {/* Interactive Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10 flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-mono text-[#00f2ff]">{event.id} // {event.date}</span>
                          <h3 className="text-3xl font-black uppercase italic mt-2 group-hover:text-[#CCFF00] transition-colors">
                            {event.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center rotate-45 group-hover:border-[#CCFF00] transition-colors">
                          <div className="w-2 h-2 bg-[#CCFF00] animate-pulse" />
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-white/40">
                        <span>Status: <span className="text-white">{event.status}</span></span>
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border border-white/20 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all text-white"
                        >
                          Access_Entry
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-20 border-2 border-dashed border-white/10 rounded-sm text-center"
                >
                  <div className="inline-block w-12 h-12 border border-white/10 rotate-45 mb-8 relative">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[#CCFF00]/20"
                    />
                  </div>
                  <p className="font-mono text-sm tracking-[0.2em] text-white/40 uppercase">
                    New events being planned. <br />
                    <span className="text-[#00f2ff]">Stay Synced to the frequency.</span>
                  </p>
                </motion.div>
              )}
            </section>
          </div>
        </div>

        {/* Floating HUD elements */}
        <div className="fixed bottom-10 left-10 font-mono text-[9px] text-white/20 uppercase vertical-text tracking-[0.5em] hidden lg:block">
          Connection_Stable // Deep_Sea_Ethernet
        </div>
      </div>
    </PageTransition>
  );
}