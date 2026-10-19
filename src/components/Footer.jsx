import React from 'react';
import { sound } from '../utils/soundEngine';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  ArrowUp,
  RotateCcw,
  Sparkles,
  Film
} from 'lucide-react';

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    sound.playNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040406] border-t border-[rgba(255,21,60,0.2)] pt-16 pb-12 overflow-hidden">
      {/* Subtle Spider-Web Corner Overlay */}
      <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-20 pointer-events-none">
        <path
          d="M320 320 L100 100 M320 220 L160 160 M220 320 L160 160 M320 120 L220 220 M120 320 L220 220"
          stroke="#FF153C"
          strokeWidth="1.5"
        />
        <circle cx="320" cy="320" r="80" fill="none" stroke="#FF153C" strokeWidth="1" />
        <circle cx="320" cy="320" r="160" fill="none" stroke="#FF153C" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[rgba(255,255,255,0.06)]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.4)] flex items-center justify-center shadow-[0_0_12px_rgba(255,21,60,0.4)]">
                <span className="font-display font-black text-xs text-[#FF153C]">DJ</span>
              </div>
              <span className="font-display text-2xl font-black text-white tracking-wider">
                UDHAYA <span className="text-[#FF153C]">KUMAR.DJ</span>
              </span>
            </div>

            <p className="font-tech text-xs tracking-[0.3em] text-[#FF153C] uppercase font-bold">
              EDIT. DESIGN. CREATE. REPEAT.
            </p>
            <p className="text-xs text-silver-muted max-w-sm">
              Professional Video Editor, Motion Designer & Photo Designer. Transforming raw footage into superhero-grade cinematic spectacles.
            </p>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/dj_editzx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-11 h-11 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.25)] hover:border-[#FF153C] hover:bg-[#FF153C] text-silver-light hover:text-white flex items-center justify-center transition-all shadow-md group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://wa.me/918610658691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="w-11 h-11 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.25)] hover:border-[#FF153C] hover:bg-[#25D366] text-silver-light hover:text-white flex items-center justify-center transition-all shadow-md group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="tel:+918610658691"
              aria-label="Call Direct"
              className="w-11 h-11 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.25)] hover:border-[#FF153C] hover:bg-[#FF153C] text-silver-light hover:text-white flex items-center justify-center transition-all shadow-md group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="mailto:thivagarj74@gmail.com"
              aria-label="Send Email"
              className="w-11 h-11 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.25)] hover:border-[#FF153C] hover:bg-[#EA4335] text-silver-light hover:text-white flex items-center justify-center transition-all shadow-md group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="w-11 h-11 rounded-xl bg-[#141422] border border-[rgba(255,21,60,0.3)] hover:border-[#FF153C] text-white flex items-center justify-center transition-all shadow-md hover:bg-[#FF153C] group ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Lower Footer Tier: Copyright + Replay Intro */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-silver-muted">
          <div>
            © 2026 <strong className="text-white">UDHAYA KUMAR.DJ</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 text-silver-muted hover:text-[#FF153C] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>

            <span className="text-white/20">|</span>

            <span className="text-silver-muted/80">
              Chennai, India • Available Worldwide
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
