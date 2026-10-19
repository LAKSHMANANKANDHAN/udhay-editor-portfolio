import React, { useState, useEffect } from 'react';
import { sound } from '../utils/soundEngine';
import { Volume2, VolumeX, Menu, X, Sparkles, Send, Phone, Film } from 'lucide-react';

export default function Navbar({ onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsSoundOn(sound.getSoundStatus());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'portfolio', 'about', 'skills', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    sound.playNav();

    // Trigger subtle web shoot toward clicked position
    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(new CustomEvent('shoot-web', {
      detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    }));

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  const handleToggleSound = () => {
    const newState = sound.toggleSound();
    setIsSoundOn(newState);
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08080d]/85 backdrop-blur-xl border-b border-[rgba(255,21,60,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Neon Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group"
          >
            {/* Glowing Spider Badge */}
            <div className="relative w-9 h-9 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.4)] flex items-center justify-center shadow-[0_0_15px_rgba(255,21,60,0.4)] group-hover:shadow-[0_0_25px_#FF153C] transition-all">
              <span className="font-display font-black text-sm text-[#FF153C]">DJ</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF153C] animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-black tracking-wider text-white group-hover:text-[#FF153C] transition-colors flex items-center gap-1">
                UDHAYA<span className="text-[#FF153C]">.DJ</span>
              </span>
              <span className="font-tech text-[10px] tracking-[0.25em] text-silver-muted uppercase -mt-1">
                EDITVERSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#101018]/60 p-1.5 rounded-full border border-[rgba(255,21,60,0.18)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-4 py-1.5 rounded-full font-tech text-xs tracking-wider font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-[#FF153C] shadow-[0_0_16px_rgba(255,21,60,0.6)]'
                      : 'text-silver-muted hover:text-white hover:bg-[rgba(255,21,60,0.08)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Audio Toggle + Quick CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button with Visual Bars */}
            <button
              onClick={handleToggleSound}
              title={isSoundOn ? 'Sound Effects Enabled (Click to Mute)' : 'Sound Effects Muted (Click to Enable)'}
              aria-label={isSoundOn ? 'Disable Sound Effects' : 'Enable Sound Effects'}
              className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-tech tracking-wider transition-all duration-300 ${
                isSoundOn
                  ? 'bg-[rgba(255,21,60,0.15)] border-[#FF153C] text-white shadow-[0_0_12px_rgba(255,21,60,0.35)]'
                  : 'bg-[#111118]/80 border-[rgba(255,255,255,0.1)] text-silver-muted hover:text-white'
              }`}
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#FF153C]" />
                  {/* Pulsing Audio Bars */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#FF153C] animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#FF153C] animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="w-0.5 h-1.5 bg-[#FF153C] animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                  <span className="hidden sm:inline text-[11px] font-bold text-[#FF153C]">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-silver-muted" />
                  <span className="hidden sm:inline text-[11px]">AUDIO OFF</span>
                </>
              )}
            </button>

            {/* Quick Hero Swing Trigger Button (Manual Interaction) */}
            <button
              onClick={() => {
                sound.playWebShoot();
                window.dispatchEvent(new CustomEvent('swing-hero'));
              }}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,21,60,0.08)] hover:bg-[rgba(255,21,60,0.2)] border border-[rgba(255,21,60,0.25)] text-xs font-tech text-silver-muted hover:text-white transition-all"
              title="Summon web-slinger hero"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF153C]" />
              <span>SWING HERO</span>
            </button>

            {/* Let's Work Together CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF153C] to-[#8B0015] text-white font-tech text-xs tracking-wider font-bold shadow-[0_0_15px_rgba(255,21,60,0.4)] hover:shadow-[0_0_25px_rgba(255,21,60,0.7)] transition-all transform hover:scale-105"
            >
              <span>HIRE ME</span>
              <Send className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.3)] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF153C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090910]/95 backdrop-blur-2xl border-b border-[rgba(255,21,60,0.3)] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-xl font-tech text-sm tracking-widest font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#FF153C] text-white shadow-[0_0_12px_rgba(255,21,60,0.5)]'
                      : 'text-silver-light hover:bg-[rgba(255,21,60,0.1)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
              );
            })}

            {/* Mobile Quick Contacts */}
            <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-around gap-2 text-xs font-tech">
              <a
                href="https://wa.me/918610658691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.2)] text-white hover:border-[#FF153C]"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+918610658691"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.2)] text-white hover:border-[#FF153C]"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF153C]" />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
