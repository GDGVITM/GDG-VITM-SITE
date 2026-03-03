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
import MinecraftNightSky from './components/MinecraftNightSky';
import MinecraftDeepslateCave from './components/MinecraftDeepslateCave';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full selection:bg-[#B6FF00] selection:text-black font-sans">
      <MinecraftNightSky />
      <MinecraftDeepslateCave />
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


      {/* ── Overlapping Layer (Slides OVER the Hero) ── */}
      <div id="page-content" className="relative z-[50] -mt-[100vh] bg-transparent">
        <TrustedStrip />
        <AboutSection />
      </div>

      {/* ── Flowing Content ── */}
      <div className="relative z-[50] bg-transparent">
        {/* ── 3. Marquee Slider ── */}
        <MarqueeSlider />
        {/* ── 6. CTA / Quote ── */}
        <CTASection />
        {/* ── 4. Team Members ── */}
        <TeamSection />

        {/* ── 5. FAQs ── */}
        <FAQSection />



        {/* ── 7. Footer ── */}
        <Footer />
      </div>
    </main>
  );
}

