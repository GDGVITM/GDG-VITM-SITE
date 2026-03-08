import React, { useRef } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import MinecraftNetherBackground from '../components/MinecraftNetherBackground';
import NetherMapNodes from '../components/NetherMapNodes';
import SpectrumGhast from '../components/SpectrumGhast';

export default function Spectrum() {
  return (
    <PageTransition>
      <main className="relative bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#ff4d00] selection:text-white">

        {/* ── Persistent Nether Atmosphere ── */}
        <MinecraftNetherBackground />
        <SpectrumGhast />

        {/* ── Scroll Content ── */}
        <div className="relative z-10">

          {/* 1. HERO SECTION (Pin scroll to explore) */}
          <section className="h-screen w-full flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-[120px] font-black italic tracking-tighter text-white leading-none mb-8">
                SPECTRUM <br />
                <span className="text-[#ff4d00] drop-shadow-[0_0_30px_#ff4d00]">WEEK</span>
              </h1>

              <div className="flex flex-col items-center gap-6">
                <div className="px-8 py-3 bg-[#ff4d00]/10 border border-[#ff4d00]/30 backdrop-blur-md rounded-full">
                  <span className="text-[#ff4d00] font-mono font-bold tracking-[0.3em] uppercase text-sm">
                    1st — 4th April / THE NETHER EXCURSION
                  </span>
                </div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-3 opacity-40 mt-12">
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase">SCROLL TO EXPLORE MAP</span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-16 bg-gradient-to-b from-white to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* 2. THE MAP (Nodes) */}
          <NetherMapNodes />

          {/* 3. FOOTER INFO */}
          <section className="h-[40vh] w-full flex items-center justify-center relative bg-[#ff4d00] opacity-60">
            <div className="max-w-4xl px-6 text-center">
              <p className="text-[#fff0fff]/90 font-mono text-xs uppercase tracking-[0.2em] mb-4">
                End of Dimension / Final Destination: THE INVASION
              </p>
              <h3 className="text-2xl md:text-4xl font-black italic text-[#ffffff]/90">
                Will you emerge as the last ronin?
              </h3>
            </div>
          </section>

        </div>

        {/* ── UI HUD Overlay ── */}
        <div className="fixed bottom-10 left-10 right-10 flex justify-between items-end z-50 pointer-events-none opacity-40 font-mono text-[9px] uppercase tracking-widest text-[#ffffff]">
          <div className="flex flex-col gap-1">
            <span>ZONE: NETHER_SPECTRUM</span>
            <span>DIFFICULTY: HARDCORE</span>
          </div>
          <div className="text-right">
            <span>Dimension: 0x666</span>
            <div className="flex gap-1 mt-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#ffffff] border border-[#ffffff]/10" />
              ))}
            </div>
          </div>
        </div>

      </main>
    </PageTransition>
  );
}