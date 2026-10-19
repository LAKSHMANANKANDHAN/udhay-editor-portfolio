import React from 'react';
import { sound } from '../utils/soundEngine';
import {
  Scissors,
  Layers,
  Sparkles,
  Sliders,
  Palette,
  Activity,
  Zap,
  Eye,
  CheckCircle2
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden">
      {/* Background Energy Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF153C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-superhero-grid opacity-20 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
            <Eye className="w-3.5 h-3.5 text-[#FF153C]" />
            <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
              CREATIVE IDENTITY & PHILOSOPHY
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight text-neon-glow">
            BEHIND THE MASK. BEHIND THE MAGIC.
          </h2>

          <p className="font-heading text-sm sm:text-base text-silver-muted max-w-2xl font-medium">
            Where Technical Video Engineering Meets Cinematic Superhero Vision
          </p>
        </div>

        {/* Two-Column Grid: Narrative & Motion Graphics Timeline HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-silver-light font-normal text-base sm:text-lg leading-relaxed">
              <p className="p-6 rounded-2xl bg-[#0c0c14] border-l-4 border-[#FF153C] border-y border-r border-[rgba(255,21,60,0.15)] shadow-lg">
                "I'm <strong className="text-white font-bold">Udhaya Kumar.DJ</strong>, a passionate video editor, graphics designer, and visual creator who believes that <span className="text-[#FF153C] font-semibold">every frame has the potential to tell an unforgettable story</span>."
              </p>

              <p className="text-silver-muted text-sm sm:text-base leading-relaxed">
                From cinematic 4K edits and energetic speed ramps to promotional videos, seamless transitions, and eye-catching graphics, I turn creative ideas into powerful visual experiences that command audience attention and stay lodged in their memory.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.18)] hover:border-[#FF153C] transition-colors group">
                <Scissors className="w-5 h-5 text-[#FF153C] mb-2 group-hover:rotate-12 transition-transform" />
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  Precision Cuts
                </h4>
                <p className="text-xs text-silver-muted leading-relaxed">
                  Sub-frame timing synced to beats, transients, and narrative tension.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.18)] hover:border-[#FF153C] transition-colors group">
                <Palette className="w-5 h-5 text-[#FF153C] mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  Colour Grading
                </h4>
                <p className="text-xs text-silver-muted leading-relaxed">
                  Cinematic film tones, dark mood contrast, and clean skin highlights.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f0f18] border border-[rgba(255,21,60,0.18)] hover:border-[#FF153C] transition-colors group">
                <Zap className="w-5 h-5 text-[#FF153C] mb-2 group-hover:-translate-y-0.5 transition-transform" />
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  Speed Curves
                </h4>
                <p className="text-xs text-silver-muted leading-relaxed">
                  Velocities remapped with optical flow and impactful punch zooms.
                </p>
              </div>
            </div>

            {/* Signature Quote & Editor Badge */}
            <div className="pt-4 flex items-center gap-4 text-silver-light font-tech text-xs tracking-wider">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF153C] shadow-[0_0_15px_rgba(255,21,60,0.4)] flex-shrink-0 group">
                <img
                  src="/editor-portrait.png"
                  alt="Udhaya Kumar.DJ"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="space-y-0.5">
                <span className="font-display font-bold text-white text-sm block tracking-wide">
                  UDHAYA KUMAR.DJ
                </span>
                <span className="text-[#FF153C] font-semibold text-[11px] tracking-widest uppercase block">
                  CREATIVE TIMELINE MASTER & LEAD EDITOR
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Motion Graphic NLE Timeline Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0b0b12] border border-[rgba(255,21,60,0.3)] p-5 shadow-[0_0_35px_rgba(255,21,60,0.2)] space-y-4 overflow-hidden">
              
              {/* Timeline Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF153C] animate-pulse" />
                  <span className="font-tech text-xs text-white font-bold tracking-wider">
                    TIMELINE 01: CINEMATIC_REEL_MASTER
                  </span>
                </div>
                <span className="font-tech text-xs text-[#FF153C] font-mono">
                  00:01:24:18
                </span>
              </div>

              {/* Resolution & FPS Status HUD */}
              <div className="grid grid-cols-3 gap-2 text-center font-tech text-xs">
                <div className="p-2 rounded-lg bg-[#12121e] border border-[rgba(255,21,60,0.15)]">
                  <span className="text-silver-muted block text-[10px]">FORMAT</span>
                  <strong className="text-white">3840 x 2160</strong>
                </div>
                <div className="p-2 rounded-lg bg-[#12121e] border border-[rgba(255,21,60,0.15)]">
                  <span className="text-silver-muted block text-[10px]">FRAME RATE</span>
                  <strong className="text-[#FF153C]">50.00 FPS</strong>
                </div>
                <div className="p-2 rounded-lg bg-[#12121e] border border-[rgba(255,21,60,0.15)]">
                  <span className="text-silver-muted block text-[10px]">COLOR SPACE</span>
                  <strong className="text-white">Rec.709 10-BIT</strong>
                </div>
              </div>

              {/* Visual Track Layers (V2, V1, A1, A2) */}
              <div className="space-y-2 py-2">
                {/* V2 - Motion Graphics / Title Track */}
                <div className="flex items-center gap-2">
                  <span className="w-8 font-tech text-[10px] text-silver-muted font-bold">V2</span>
                  <div className="flex-1 h-7 rounded bg-[#171728] border border-[rgba(255,21,60,0.2)] relative overflow-hidden flex items-center px-3">
                    <div className="w-2/3 h-full bg-[rgba(255,21,60,0.25)] border-r border-[#FF153C] flex items-center px-2">
                      <span className="text-[10px] font-tech text-white truncate">
                        [VFX] SpiderWeb_Displacement.aep
                      </span>
                    </div>
                  </div>
                </div>

                {/* V1 - Video 4K Master Track */}
                <div className="flex items-center gap-2">
                  <span className="w-8 font-tech text-[10px] text-silver-muted font-bold">V1</span>
                  <div className="flex-1 h-9 rounded bg-[#131322] border border-[rgba(255,21,60,0.3)] relative overflow-hidden flex items-center">
                    <div className="w-1/3 h-full bg-[#8B0015]/60 border-r border-[#FF153C] flex items-center px-2">
                      <span className="text-[10px] font-tech text-white truncate">Clip_01_Ramp</span>
                    </div>
                    <div className="w-1/2 h-full bg-[#FF153C]/30 border-r border-[#FF153C] flex items-center px-2">
                      <span className="text-[10px] font-tech text-white truncate">Clip_02_4K_Action</span>
                    </div>
                  </div>
                </div>

                {/* A1 - Sound Design & Impacts */}
                <div className="flex items-center gap-2">
                  <span className="w-8 font-tech text-[10px] text-silver-muted font-bold">A1</span>
                  <div className="flex-1 h-6 rounded bg-[#11111c] border border-[rgba(255,255,255,0.06)] relative overflow-hidden flex items-center px-2">
                    <div className="flex items-end gap-1 h-3 w-full opacity-60">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#FF153C] rounded-sm"
                          style={{ height: `${(i % 5 + 1) * 20}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Playhead Timecode Bar */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-tech text-silver-muted">
                <span>ACTIVE NLE ENGINE: PREMIERE + AFTER EFFECTS</span>
                <span className="text-[#FF153C]">RENDER: 100% COMPLETE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
