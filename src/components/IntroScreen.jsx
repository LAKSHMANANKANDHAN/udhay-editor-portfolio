import React, { useState, useEffect } from 'react';
import { sound } from '../utils/soundEngine';
import { Play, FastForward, Sparkles } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('entering'); // 'entering' | 'ready' | 'exit'
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check if user already saw intro in this session
    const hasSeen = sessionStorage.getItem('udhay_intro_seen');
    if (hasSeen === 'true') {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('ready');
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleEnter = () => {
    if (phase === 'exit') return;
    setPhase('exit');
    sessionStorage.setItem('udhay_intro_seen', 'true');
    sound.init();
    sound.playIntroStinger();

    // Trigger corner web blast
    window.dispatchEvent(new CustomEvent('shoot-web', {
      detail: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    }));

    setTimeout(() => {
      onComplete?.();
    }, 850);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    sessionStorage.setItem('udhay_intro_seen', 'true');
    onComplete?.();
  };

  if (isSkipped) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] transition-all duration-700 select-none ${
        phase === 'exit' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Spider-Web Corner Laser Traces */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {/* Top Left Corner Web */}
        <path
          d="M0 0 L180 180 M0 60 L140 140 M60 0 L140 140 M0 120 L100 100 M120 0 L100 100"
          stroke="#FF153C"
          strokeWidth="1.2"
          className="transition-all duration-1000"
          style={{ strokeDasharray: 400, strokeDashoffset: Math.max(0, 400 - progress * 4) }}
        />
        {/* Top Right Corner Web */}
        <path
          d="M100% 0 Lcalc(100% - 180px) 180 M100% 60 Lcalc(100% - 140px) 140 Mcalc(100% - 60px) 0 Lcalc(100% - 140px) 140"
          stroke="#FF153C"
          strokeWidth="1.2"
          className="transition-all duration-1000"
        />
        {/* Bottom Left Corner Web */}
        <path
          d="M0 100% L180 calc(100% - 180px) M0 calc(100% - 60px) L140 calc(100% - 140px) M60 100% L140 calc(100% - 140px)"
          stroke="#FF153C"
          strokeWidth="1.2"
        />
        {/* Bottom Right Corner Web */}
        <path
          d="M100% 100% Lcalc(100% - 180px) calc(100% - 180px)"
          stroke="#FF153C"
          strokeWidth="1.2"
        />
      </svg>

      {/* Floating Red Energy Particle Ring */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-[rgba(255,21,60,0.15)] animate-spin" style={{ animationDuration: '18s' }}>
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF153C] shadow-[0_0_12px_#FF153C]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF153C] shadow-[0_0_12px_#FF153C]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
        {/* Glowing Spider Emblem */}
        <div className="relative w-28 h-28 mb-8 cursor-pointer group" onClick={handleEnter}>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF153C] via-[#8B0015] to-[#FF153C] rounded-full opacity-40 blur-2xl group-hover:opacity-80 transition-opacity animate-pulse-glow" />
          <div className="relative w-full h-full rounded-full border-2 border-[#FF153C] bg-[#0c0c12] p-4 flex items-center justify-center shadow-[0_0_35px_rgba(255,21,60,0.6)]">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_#FF153C]">
              {/* Spider Body */}
              <ellipse cx="50" cy="50" rx="9" ry="16" fill="#FF153C" />
              <circle cx="50" cy="30" r="7" fill="#FF153C" />
              {/* Superhero Stylized Legs */}
              <path d="M42 42 Q20 25 12 38 M58 42 Q80 25 88 38" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M40 50 Q16 45 10 60 M60 50 Q84 45 90 60" stroke="#FF153C" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M42 58 Q22 68 18 84 M58 58 Q78 68 82 84" stroke="#FF153C" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M46 64 Q32 80 28 92 M54 64 Q68 80 72 92" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Intro Headlines */}
        <div className="space-y-2 mb-8">
          <p className="font-tech text-xs tracking-[0.35em] text-[#FF153C] uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> CINEMATIC SUPERHERO MULTIVERSE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-wider text-white text-neon-glow">
            ENTER THE EDITVERSE
          </h1>
          <p className="font-heading text-sm text-silver-muted tracking-widest uppercase">
            UDHAYA KUMAR.DJ // VIDEO EDITOR & MOTION ARTIST
          </p>
        </div>

        {/* Loading Progress Bar or Enter Button */}
        {progress < 100 ? (
          <div className="w-64 space-y-2">
            <div className="h-1.5 w-full bg-[#171722] rounded-full overflow-hidden border border-[rgba(255,21,60,0.3)]">
              <div
                className="h-full bg-gradient-to-r from-[#8B0015] via-[#FF153C] to-[#ffffff] shadow-[0_0_12px_#FF153C] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-tech text-silver-muted tracking-wider">
              <span>SYNCHRONIZING TIMELINES</span>
              <span className="text-[#FF153C] font-bold">{progress}%</span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleEnter}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-[#FF153C] to-[#8B0015] text-white font-display text-sm font-bold tracking-widest uppercase rounded-xl shadow-[0_0_25px_rgba(255,21,60,0.7)] hover:shadow-[0_0_40px_rgba(255,21,60,0.9)] transition-all transform hover:scale-105 flex items-center gap-3 border border-[rgba(255,255,255,0.3)]"
          >
            <span>ENTER THE EDITVERSE</span>
            <Play className="w-4 h-4 fill-white text-white group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="mt-8 font-tech text-xs tracking-widest text-silver-muted/70 hover:text-white transition-colors flex items-center gap-1.5 uppercase hover:underline"
        >
          <FastForward className="w-3.5 h-3.5" /> Skip Intro
        </button>
      </div>

      {/* Silhouette Glide across screen during transition */}
      {phase === 'exit' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-ping opacity-30">
          <div className="w-[800px] h-[800px] rounded-full bg-[#FF153C] blur-3xl" />
        </div>
      )}
    </div>
  );
}
