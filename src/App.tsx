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
import PixelRevealTransition from './components/PixelRevealTransition';
import { useRef } from 'react';

export default function App() {
  const heroSectionRef = useRef<HTMLElement>(null);
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
      <GDGNavbar />
      <section ref={heroSectionRef} className="relative w-full h-[200vh] bg-transparent">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Force Refresh: 2024-02-24 00:15 */}
          <GDGHero />
          {/* ── Pixel Reveal Transition Overlay ── */}
          <PixelRevealTransition triggerRef={heroSectionRef} />
        </div>
      </section>

      
      {/* ── Overlapping Layer (-mt-[100vh] makes it slide OVER the Hero) ── */}
      <div id="scrolling-content" className="relative z-20 -mt-[100vh] bg-transparent">
        {/* ── 1. Trusted By Strip ── */}
        <TrustedStrip />

        {/* ── 2. About Us ── */}
        <AboutSection />
      </div>

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

