/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import GDGNavbar from './components/GDGNavbar';
import GDGHero from './components/GDGHero';
import TrustedStrip from './components/TrustedStrip';
import AboutSection from './components/AboutSection';
import MarqueeSlider from './components/MarqueeSlider';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full selection:bg-[#B6FF00] selection:text-black">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-screen bg-[#F8F9FA]">
        <GDGNavbar />
        {/* Force Refresh: 2024-02-24 00:15 */}
        <GDGHero />
      </section>

      {/* ── 1. Trusted By Strip ── */}
      <TrustedStrip />

      {/* ── 2. About Us ── */}
      <AboutSection />

      {/* ── 3. Marquee Slider ── */}
      <MarqueeSlider />

      {/* ── 4. Team Members ── */}
      <TeamSection />

      {/* ── 5. FAQs ── */}
      <FAQSection />

      {/* ── 6. CTA / Quote ── */}
      <CTASection />

      {/* ── 7. Footer ── */}
      <Footer />
    </main>
  );
}

