import React from 'react';
import { sound } from '../utils/soundEngine';
import {
  Film,
  Sparkles,
  Palette,
  Cpu,
  Layers,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'PROFESSIONAL VIDEO EDITING',
      tagline: 'Cinematic Storytelling & Kinetic Impact',
      desc: 'Premium cinematic storytelling, viral social media reels, commercial promotional videos, and creative visual edits assembled with rhythm and impact.',
      features: ['Beat-matched audio editing', 'Speed ramps & velocity curves', 'Sound design & Foley synthesis'],
      icon: Film,
    },
    {
      number: '02',
      title: '4K VIDEO ENHANCEMENT',
      tagline: 'Ultra-High Definition Clarity',
      desc: 'High-resolution video enhancement, optical flow frame rate interpolation, detail reconstruction, and visual refinement for breathtaking playback.',
      features: ['50FPS / 60FPS motion smoothing', 'Artifact reduction', 'Ultra-crisp sharpening'],
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'PREMIUM COLOUR CORRECTION',
      tagline: 'Emotional Tone & Cinematic Look',
      desc: 'Creative colour grading, cinematic Hollywood-style tones, skin-tone preservation, and polished visual consistency across all scene lighting.',
      features: ['Custom LUT creation', 'Shot-to-shot matching', 'Dynamic range preservation'],
      icon: Palette,
    },
    {
      number: '04',
      title: 'VIDEO ENCODING',
      tagline: 'Lossless Transcoding & Delivery',
      desc: 'Optimized video export, multi-codec compression (ProRes, H.264, HEVC/H.265), bitrate calibration, and platform-tailored master delivery.',
      features: ['Zero compression banding', 'Web & broadcast specs', 'Fast cloud handoff'],
      icon: Cpu,
    },
    {
      number: '05',
      title: 'POSTER & GRAPHICS DESIGN',
      tagline: 'High-Conversion Thumbnails & Art',
      desc: 'Eye-catching cinematic movie posters, YouTube click-through thumbnails, promotional creatives, and professional brand visual designs.',
      features: ['VFX composites & lighting', 'Custom 3D typography', 'High CTR visual hooks'],
      icon: Layers,
    },
  ];

  const handleEnquire = (serviceTitle, e) => {
    sound.playWebShoot();

    // Trigger web blast from button
    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent('shoot-web', {
        detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      })
    );

    const message = `Hi Udhaya, I'm interested in your ${serviceTitle} service. Can we discuss my project?`;
    const whatsappUrl = `https://wa.me/918610658691?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#060609] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#FF153C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-superhero-grid opacity-25 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF153C]" />
            <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
              CREATIVE PRODUCTION CAPABILITIES
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight text-neon-glow">
            THE POWER BEHIND EVERY FRAME
          </h2>

          <p className="font-heading text-sm sm:text-base text-silver-muted max-w-2xl font-medium">
            End-To-End Post-Production Tailored to Elevate Your Content
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.number}
                onMouseEnter={() => sound.playHover()}
                className={`group relative p-8 rounded-2xl bg-[#0c0c14] border border-[rgba(255,21,60,0.2)] hover:border-[#FF153C] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,21,60,0.3)] flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Number Badge & Corner Line Accent */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#131320] border border-[rgba(255,21,60,0.3)] flex items-center justify-center text-[#FF153C] group-hover:bg-[#FF153C] group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,21,60,0.2)]">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="font-display font-black text-3xl text-white/15 group-hover:text-[#FF153C]/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#FF153C] transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  <span className="font-tech text-xs text-[#FF153C] tracking-widest uppercase font-semibold block">
                    {service.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-silver-muted leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="pt-2 space-y-1.5">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-silver-light/90 font-tech"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF153C] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated Red Line Divider */}
                <div className="w-full h-0.5 bg-gradient-to-r from-[#FF153C] via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity my-4" />

                {/* Functional ENQUIRE NOW Button with Prefilled WhatsApp */}
                <button
                  onClick={(e) => handleEnquire(service.title, e)}
                  className="w-full py-3 px-4 rounded-xl bg-[#11111a] hover:bg-[#FF153C] text-silver-light hover:text-white font-tech text-xs font-bold tracking-widest uppercase border border-[rgba(255,21,60,0.3)] hover:border-white shadow-md hover:shadow-[0_0_20px_#FF153C] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF153C] group-hover/btn:text-white transition-colors" />
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Project Consultation Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#141422] via-[#0d0d16] to-[#141422] border border-[rgba(255,21,60,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              NEED A BESPOKE EDITING OR MOTION PACKAGE?
            </h3>
            <p className="text-xs sm:text-sm text-silver-muted">
              Whether you need daily Instagram Reels, a high-converting commercial, or a full cinematic showreel.
            </p>
          </div>

          <a
            href="https://wa.me/918610658691?text=Hi%20Udhaya%2C%20I%20have%20a%20custom%20video%20editing%20project%20I%27d%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWebShoot()}
            className="px-8 py-3.5 bg-gradient-to-r from-[#FF153C] to-[#8B0015] text-white font-display text-xs font-bold tracking-widest uppercase rounded-xl shadow-[0_0_20px_rgba(255,21,60,0.6)] hover:shadow-[0_0_30px_rgba(255,21,60,0.9)] transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            <span>START DISCUSSION</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
