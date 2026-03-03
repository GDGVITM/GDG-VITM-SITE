/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import GDGNavbar from './components/GDGNavbar';
import GDGHero from './components/GDGHero';
import Web3Hero from './components/Web3Hero';
import PageTransition from './components/PageTransition';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Spectrum from './pages/Spectrum';

export default function App() {
  const location = useLocation();

   return (
    <main className="w-full min-h-screen">
      <GDGNavbar />

      <AnimatePresence mode="wait">
        {/* We wrap the Routes in a motion.div. 
           The 'key' here tells AnimatePresence: "The content changed, play the animation!" 
        */}
        <motion.div key={location.pathname} className="w-full">
          <Routes location={location}>
            <Route path="/" element={
              <PageTransition>
                <section className="relative w-full min-h-screen bg-[#F8F9FA]">
                  <GDGHero />
                </section>
                <section className="relative w-full min-h-screen bg-black">
                  <Web3Hero />
                </section>
              </PageTransition>
            } />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/spectrum" element={<Spectrum />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}