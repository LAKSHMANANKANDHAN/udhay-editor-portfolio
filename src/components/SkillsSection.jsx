import React from 'react';
import { sound } from '../utils/soundEngine';
import {
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Film,
  Box,
  Image,
  Share2,
  Wand2
} from 'lucide-react';

export default function SkillsSection() {
  const tools = [
    {
      name: 'Adobe After Effects',
      short: 'Ae',
      color: '#9999FF',
      role: 'VFX & Motion Graphics',
      desc: 'Kinetic typography, mask tracking, visual effects, and particle simulations.',
      icon: Wand2,
    },
    {
      name: 'Adobe Premiere Pro',
      short: 'Pr',
      color: '#EA77FF',
      role: 'NLE Video Editing',
      desc: 'Timeline assembly, multi-cam editing, audio syncing, and 4K mastering.',
      icon: Film,
    },
    {
      name: 'Blender',
      short: '3D',
      color: '#F5792A',
      role: '3D Motion Design',
      desc: '3D camera mapping, geometric environments, lighting, and camera passes.',
      icon: Box,
    },
    {
      name: 'Adobe Photoshop',
      short: 'Ps',
      color: '#31A8FF',
      role: 'Poster & Photo Design',
      desc: 'Cinematic composite posters, creative manipulation, and YouTube thumbnails.',
      icon: Image,
    },
    {
      name: 'Adobe Media Encoder',
      short: 'Me',
      color: '#E8B6FF',
      role: 'Encoding & Transcoding',
      desc: 'High-bitrate exports, platform-optimized presets, and lossless delivery.',
      icon: Cpu,
    },
    {
      name: 'Adobe Illustrator',
      short: 'Ai',
      color: '#FF9A00',
      role: 'Vector Graphics',
      desc: 'Logo treatments, custom icons, typography badges, and vector overlays.',
      icon: Layers,
    },
    {
      name: 'CapCut',
      short: 'Cc',
      color: '#FFFFFF',
      role: 'Reel & Short Velocity',
      desc: 'Fast-paced kinetic mobile edits, trending sound alignment, and snappy cuts.',
      icon: Zap,
    },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#08080d] overflow-hidden">
      {/* Background Energy Glows */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#FF153C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-superhero-grid opacity-20 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[#FF153C]" />
            <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
              PROFESSIONAL SOFTWARE SUITE
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight text-neon-glow">
            MY CREATIVE ARSENAL
          </h2>

          <p className="font-heading text-sm sm:text-base text-silver-muted max-w-2xl font-medium">
            Industry-Standard Tools Engineered for Superhero-Grade Visuals
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.name}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-6 rounded-2xl bg-[#0e0e16] border border-[rgba(255,21,60,0.2)] hover:border-[#FF153C] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,21,60,0.3)] flex flex-col justify-between"
              >
                {/* Corner Web Accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#FF153C]/40 group-hover:border-[#FF153C] transition-colors" />

                <div className="space-y-4">
                  {/* Tool Badge / Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#141420] border border-[rgba(255,21,60,0.3)] flex items-center justify-center font-display font-black text-lg text-white group-hover:shadow-[0_0_20px_#FF153C] transition-all">
                      <span style={{ color: tool.color }}>{tool.short}</span>
                    </div>

                    <IconComponent className="w-5 h-5 text-silver-muted group-hover:text-[#FF153C] transition-colors" />
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FF153C] transition-colors">
                      {tool.name}
                    </h3>
                    <span className="font-tech text-xs text-[#FF153C] font-semibold tracking-wider uppercase block mt-0.5">
                      {tool.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-silver-muted leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[11px] font-tech text-silver-muted">
                  <span>ACTIVE SUITE</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF153C] opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
