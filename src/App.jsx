import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import SpiderWebCanvas from './components/SpiderWebCanvas';
import CustomCursor from './components/CustomCursor';
import SuperheroSlinger from './components/SuperheroSlinger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // If user already saw intro in current session, skip it automatically
    try {
      return sessionStorage.getItem('udhay_intro_seen') !== 'true';
    } catch {
      return true;
    }
  });

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem('udhay_intro_seen');
    } catch {}
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#FF153C] selection:text-white">
      {/* Cinematic Intro Screen */}
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Spider-Web Canvas System (Interactive Background Mesh & Blasts) */}
      <SpiderWebCanvas />

      {/* Animated Web-Slinging Superhero Character */}
      <SuperheroSlinger />

      {/* Sticky Glass Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Sections */}
      <main className="relative z-20">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Cinematic Footer */}
      <Footer onReplayIntro={handleReplayIntro} />
    </div>
  );
}
