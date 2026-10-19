import React, { useState, useRef } from 'react';
import { Sparkles, Camera, Shield, Video, Award } from 'lucide-react';

export default function EditorPortrait() {
  const [imgSrc, setImgSrc] = useState('/editor-portrait.png');
  const [imgError, setImgError] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Instant photo preview replacement handler
  const handleUploadPreview = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setImgError(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] mx-auto aspect-[4/5] perspective-1000 group cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Tilting Card Container */}
      <div
        className="relative w-full h-full transition-transform duration-200 ease-out preserve-3d rounded-2xl"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Backlight Halo Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF153C] via-[#8B0015] to-[#FF153C] rounded-3xl opacity-40 blur-2xl group-hover:opacity-75 transition-opacity duration-500 animate-pulse-glow" />

        {/* Outer Tech Frame with Neon Corners */}
        <div className="relative w-full h-full bg-[#0a0a10] rounded-2xl border border-[rgba(255,21,60,0.35)] overflow-hidden shadow-2xl flex flex-col justify-end">
          {/* Futuristic Web Matrix Grid Backdrop */}
          <div className="absolute inset-0 bg-superhero-grid opacity-30 pointer-events-none" />

          {/* Holographic Radar Sweep */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,21,60,0.06)] to-transparent pointer-events-none scanline-effect opacity-60" />

          {/* Corner Web Reticles */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF153C] pointer-events-none z-20" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#FF153C] pointer-events-none z-20" />
          <div className="absolute bottom-3 left-3 w-6 h-7 border-b-2 border-l-2 border-[#FF153C] pointer-events-none z-20" />
          <div className="absolute bottom-3 right-3 w-6 h-7 border-b-2 border-r-2 border-[#FF153C] pointer-events-none z-20" />

          {/* Portrait Image Layer with Superhero Red Edge Light */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {!imgError ? (
              <img
                src={imgSrc}
                alt="Udhaya Kumar.DJ - Professional Video Editor Portrait"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top transition-all duration-700 filter contrast-110 group-hover:scale-105"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />
            ) : (
              /* Fallback Superhero Mask Composition if custom PNG is missing */
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#13131c] via-[#09090e] to-[#050505]">
                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#FF153C] opacity-20 blur-xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full border-2 border-[#FF153C] flex items-center justify-center bg-[#111116] shadow-[0_0_25px_rgba(255,21,60,0.5)]">
                    <Video className="w-16 h-16 text-[#FF153C]" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold tracking-wider text-white text-center">
                  UDHAYA KUMAR.DJ
                </h4>
                <p className="font-tech text-sm text-[#FF153C] tracking-widest uppercase mt-1">
                  Master Visual Architect
                </p>
                <span className="text-xs text-silver-muted/70 text-center mt-3 max-w-[240px]">
                  Place your cutout photo at <code className="text-[#FF153C]">public/editor-portrait.png</code>
                </span>
              </div>
            )}

            {/* Glowing Red Energy Rim Lighting along figure edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(255,21,60,0.2)] via-transparent to-[rgba(255,21,60,0.2)]" />
          </div>

          {/* Lower HUD Overlay Info Badge */}
          <div className="relative z-20 p-5 bg-gradient-to-t from-[#09090f] via-[rgba(9,9,15,0.9)] to-transparent border-t border-[rgba(255,21,60,0.2)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF153C] animate-ping" />
                  <span className="font-tech text-xs uppercase tracking-widest text-[#FF153C] font-semibold">
                    ACTIVE TIMELINE PILOT
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wide mt-0.5">
                  UDHAYA KUMAR.DJ
                </h3>
              </div>

              {/* Upload / Swap Tooltip Control */}
              <label
                htmlFor="portrait-upload"
                className="relative p-2 rounded-lg bg-[rgba(255,21,60,0.15)] hover:bg-[#FF153C] border border-[rgba(255,21,60,0.4)] text-white transition-all cursor-pointer group/btn"
                title="Click to live preview another portrait photograph"
              >
                <Camera className="w-4 h-4 text-white" />
                <input
                  id="portrait-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleUploadPreview}
                  className="hidden"
                />
              </label>
            </div>

            {/* Editing Badges Bar */}
            <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs text-silver-muted font-tech">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#FF153C]" /> 4K 50FPS CERTIFIED
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF153C]" /> SPEED RAMP SPECIALIST
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
