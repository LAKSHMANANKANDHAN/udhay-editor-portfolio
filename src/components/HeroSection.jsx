import React, { useState, useEffect } from 'react';
import EditorPortrait from './EditorPortrait';
import { sound } from '../utils/soundEngine';
import { Play, Sparkles, Send, Film, Flame, Zap, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const rotatingTaglines = [
    "I Create Visual Magic",
    "I Turn Clips Into Cinema",
    "I Design. I Edit. I Inspire.",
    "Your Vision, My Timeline."
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
        setFade(true);
      }, 350);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  const handleExploreWork = (e) => {
    e.preventDefault();
    sound.playWebShoot();
    
    // Shoot web blast from button
    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(new CustomEvent('shoot-web', {
      detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    }));

    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    sound.playClick();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-radial-vignette"
    >
      {/* Background Energy Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF153C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8B0015]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Spider-Web Ambient Backdrop Grid */}
      <div className="absolute inset-0 bg-superhero-grid opacity-25 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Multiverse Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#FF153C] animate-ping" />
              <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
                CINEMATIC MULTIVERSE // RED & BLACK NEON EDITION
              </span>
            </div>

            {/* Main Super Hero Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.08]">
                UDHAYA <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF153C] via-[#ff4767] to-[#ffffff] text-neon-glow">
                  KUMAR.DJ
                </span>
              </h1>
              <p className="font-heading text-sm sm:text-base font-bold text-silver-muted tracking-[0.2em] uppercase mt-2">
                VIDEO EDITOR <span className="text-[#FF153C]">|</span> GRAPHICS DESIGNER <span className="text-[#FF153C]">|</span> MOTION ARTIST
              </p>
            </div>

            {/* Static Tagline & Rotating Kinetic Subtext */}
            <div className="space-y-2 py-2">
              <div className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#FF153C]" />
                <span className="border-b-2 border-[#FF153C] pb-0.5">
                  "EVERY FRAME HAS A STORY."
                </span>
              </div>

              {/* Kinetic Rotating Carousel Text */}
              <div className="h-9 flex items-center justify-center lg:justify-start overflow-hidden">
                <p
                  className={`font-display text-xl sm:text-2xl font-extrabold text-[#FF153C] tracking-wide transition-all duration-300 transform ${
                    fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {rotatingTaglines[currentTaglineIndex]}
                </p>
              </div>
            </div>

            {/* Two Large CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Explore My Work CTA with Web-Sling Transition */}
              <button
                onClick={handleExploreWork}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-[#FF153C] via-[#d60e32] to-[#8B0015] text-white font-display text-sm font-bold tracking-widest uppercase rounded-xl shadow-[0_0_25px_rgba(255,21,60,0.6)] hover:shadow-[0_0_40px_rgba(255,21,60,0.9)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 border border-[rgba(255,255,255,0.25)]"
              >
                <span>EXPLORE MY WORK</span>
                <Film className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              </button>

              {/* Let's Work Together CTA */}
              <button
                onClick={handleContact}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto px-8 py-4 bg-[#111118]/80 hover:bg-[#161622] text-silver-light hover:text-white font-display text-sm font-bold tracking-widest uppercase rounded-xl border border-[rgba(255,21,60,0.3)] hover:border-[#FF153C] shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>LET'S WORK TOGETHER</span>
                <Send className="w-4 h-4 text-[#FF153C]" />
              </button>
            </div>

            {/* Quick Hero Capabilities Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[rgba(255,255,255,0.08)] w-full">
              <div className="p-3 rounded-xl bg-[#0f0f16]/60 border border-[rgba(255,21,60,0.12)]">
                <span className="block font-display text-base sm:text-lg font-bold text-white">4K 50FPS</span>
                <span className="font-tech text-[11px] text-silver-muted uppercase tracking-wider">Cinematic Clarity</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f0f16]/60 border border-[rgba(255,21,60,0.12)]">
                <span className="block font-display text-base sm:text-lg font-bold text-[#FF153C]">SPEED RAMPS</span>
                <span className="font-tech text-[11px] text-silver-muted uppercase tracking-wider">Kinetic Timing</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f0f16]/60 border border-[rgba(255,21,60,0.12)]">
                <span className="block font-display text-base sm:text-lg font-bold text-white">VFX & 3D</span>
                <span className="font-tech text-[11px] text-silver-muted uppercase tracking-wider">Motion Magic</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Editor Portrait with 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center">
            <EditorPortrait />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#portfolio"
            onClick={handleExploreWork}
            className="flex flex-col items-center gap-2 text-silver-muted hover:text-[#FF153C] transition-colors group"
          >
            <span className="font-tech text-[11px] tracking-[0.3em] uppercase">SCROLL TO EDITVERSE</span>
            <div className="w-5 h-9 rounded-full border border-[rgba(255,21,60,0.4)] flex justify-center p-1 group-hover:border-[#FF153C]">
              <span className="w-1.5 h-2.5 rounded-full bg-[#FF153C] animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
