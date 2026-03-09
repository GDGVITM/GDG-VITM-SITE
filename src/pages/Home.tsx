import { useRef } from 'react';
import GDGHero from '../components/GDGHero';
import TrustedStrip from '../components/TrustedStrip';
import AboutSection from '../components/AboutSection';
import MarqueeSlider from '../components/MarqueeSlider';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import PixelRevealTransition from '../components/PixelRevealTransition';

export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null);
  return (
    <>
      <section ref={heroSectionRef} className="relative w-full h-[200vh] bg-transparent">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <GDGHero />
          <PixelRevealTransition triggerRef={heroSectionRef} />
        </div>
      </section>

      <div id="page-content" className="relative z-[50] -mt-[100vh]">
        <TrustedStrip />
        <AboutSection />
      </div>

      <div className="relative z-[50]">
        <MarqueeSlider />
        <CTASection />
        <TeamSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
