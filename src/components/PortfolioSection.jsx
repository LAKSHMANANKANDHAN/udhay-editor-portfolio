import React, { useState } from 'react';
import VideoModal from './VideoModal';
import { sound } from '../utils/soundEngine';
import {
  VIDEO_CATEGORIES,
  PORTFOLIO_VIDEOS,
  SAMPLE_SHOWCASE_PREVIEWS,
  getVideoSource,
} from '../data/portfolioVideos';
import {
  Play,
  Film,
  Sparkles,
  ExternalLink,
  LayoutGrid,
  Columns,
  Tv,
  Maximize2
} from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [useSamplePreviews, setUseSamplePreviews] = useState(false);
  const [layoutMode, setLayoutMode] = useState('wide-cinema'); // 'wide-cinema' | 'grid-landscape'

  // Active video items list
  const currentVideoList = useSamplePreviews ? SAMPLE_SHOWCASE_PREVIEWS : PORTFOLIO_VIDEOS;

  const filteredVideos =
    selectedCategory === 'all'
      ? currentVideoList
      : currentVideoList.filter((v) => v.category === selectedCategory);

  const handleCategorySelect = (catId) => {
    sound.playCategorySlide();
    setSelectedCategory(catId);
  };

  const handleCardClick = (video, e) => {
    sound.playWebShoot();

    // Trigger web blast from card to center
    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent('shoot-web', {
        detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      })
    );

    setActiveModalVideo(video);
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#07070b] overflow-hidden">
      {/* Background Spider-Web Grid & Atmosphere */}
      <div className="absolute inset-0 bg-superhero-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF153C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B0015]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
            <Film className="w-3.5 h-3.5 text-[#FF153C]" />
            <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
              16:9 WIDESCREEN CINEMA GALLERIES
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight text-neon-glow">
            ENTER MY EDITVERSE
          </h2>

          <p className="font-heading text-base sm:text-lg text-silver-muted max-w-2xl font-medium">
            Different Styles. One Creative Vision. Presented in High-Definition Landscape.
          </p>

          {/* Controls Bar: Source Drive + Demo Toggle + Landscape Layout Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://drive.google.com/drive/folders/10tqKcwUDaru25VP9px-oyJk4ASoVWmw1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.25)] hover:border-[#FF153C] text-xs font-tech text-silver-light hover:text-white transition-all shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF153C]" />
              <span>Google Drive: <strong className="text-[#FF153C]">MY WORKS</strong></span>
              <ExternalLink className="w-3.5 h-3.5 text-silver-muted group-hover:text-white" />
            </a>

            {/* Showcase Demo Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setUseSamplePreviews(!useSamplePreviews);
              }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border text-xs font-tech font-semibold transition-all ${
                useSamplePreviews
                  ? 'bg-[#FF153C] text-white border-[#FF153C] shadow-[0_0_15px_rgba(255,21,60,0.5)]'
                  : 'bg-[#11111a] text-silver-muted hover:text-white border-[rgba(255,255,255,0.15)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {useSamplePreviews ? 'PREVIEW MODE ACTIVE (4K Clips)' : 'TEST WITH 4K SAMPLE CLIPS'}
              </span>
            </button>

            {/* Landscape Layout Mode Toggle Buttons */}
            <div className="inline-flex items-center p-1 rounded-lg bg-[#111118] border border-[rgba(255,21,60,0.25)]">
              <button
                onClick={() => {
                  sound.playClick();
                  setLayoutMode('wide-cinema');
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-tech tracking-wider transition-all ${
                  layoutMode === 'wide-cinema'
                    ? 'bg-[#FF153C] text-white font-bold shadow-[0_0_10px_#FF153C]'
                    : 'text-silver-muted hover:text-white'
                }`}
                title="Wide Landscape Cinema Cards (16:9 Horizontal)"
              >
                <Tv className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WIDE LANDSCAPE</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setLayoutMode('grid-landscape');
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-tech tracking-wider transition-all ${
                  layoutMode === 'grid-landscape'
                    ? 'bg-[#FF153C] text-white font-bold shadow-[0_0_10px_#FF153C]'
                    : 'text-silver-muted hover:text-white'
                }`}
                title="Dual Landscape Grid (16:9)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LANDSCAPE GRID</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-5 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-bold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-[#FF153C] text-white shadow-[0_0_20px_rgba(255,21,60,0.6)] scale-105'
                : 'bg-[#111118] text-silver-muted hover:text-white border border-[rgba(255,21,60,0.15)] hover:border-[rgba(255,21,60,0.4)]'
            }`}
          >
            ALL CATEGORIES ({currentVideoList.length})
          </button>

          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = currentVideoList.filter((v) => v.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#FF153C] text-white shadow-[0_0_20px_rgba(255,21,60,0.6)] scale-105'
                    : 'bg-[#111118] text-silver-muted hover:text-white border border-[rgba(255,21,60,0.15)] hover:border-[rgba(255,21,60,0.4)]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-black/30 text-white' : 'bg-black/40 text-silver-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner when filtered */}
        {selectedCategory !== 'all' && (
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#12121c] via-[#0d0d14] to-[#12121c] border border-[rgba(255,21,60,0.25)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            {(() => {
              const cat = VIDEO_CATEGORIES.find((c) => c.id === selectedCategory);
              if (!cat) return null;
              return (
                <>
                  <div className="space-y-1">
                    <span className="font-tech text-xs font-bold text-[#FF153C] uppercase tracking-widest">
                      {cat.badge}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {cat.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-silver-muted max-w-2xl">
                      {cat.description}
                    </p>
                  </div>
                  <div className="font-tech text-xs text-silver-light/80 italic border-l-2 border-[#FF153C] pl-3 py-1">
                    "{cat.tagline}"
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW MODE 1: WIDE LANDSCAPE CINEMA CARDS (Horizontal Layout) */}
        {/* ========================================================= */}
        {layoutMode === 'wide-cinema' ? (
          <div className="space-y-8">
            {filteredVideos.map((video) => {
              const source = getVideoSource(video);

              return (
                <div
                  key={video.id}
                  onClick={(e) => handleCardClick(video, e)}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative bg-[#0e0e16] rounded-2xl border border-[rgba(255,21,60,0.2)] hover:border-[#FF153C] overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(255,21,60,0.35)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Left Column: 16:9 Landscape Video Preview Screen (lg:col-span-7) */}
                  <div className="lg:col-span-7 relative aspect-[16/9] bg-[#07070c] overflow-hidden border-b lg:border-b-0 lg:border-r border-[rgba(255,21,60,0.15)]">
                    {/* Ambient Blurred Landscape Backdrop */}
                    {video.thumbnailUrl && (
                      <img
                        src={video.thumbnailUrl}
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                      />
                    )}

                    {/* Crisp Foreground Thumbnail in Landscape Fit */}
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (!img.dataset.step) {
                            img.dataset.step = '1';
                            if (video.googleDriveFileId) {
                              img.src = `https://lh3.googleusercontent.com/d/${video.googleDriveFileId}=w800`;
                            }
                          } else if (img.dataset.step === '1') {
                            img.dataset.step = '2';
                            if (video.googleDriveFileId) {
                              img.src = `https://drive.google.com/thumbnail?id=${video.googleDriveFileId}&sz=w800`;
                            }
                          } else {
                            img.style.display = 'none';
                          }
                        }}
                        className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}

                    {/* Fallback Graphic */}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#141420] via-[#0b0b12] to-[#07070c]">
                      <div className="relative w-16 h-16 rounded-full border border-[rgba(255,21,60,0.4)] flex items-center justify-center bg-[#11111a] shadow-[0_0_20px_rgba(255,21,60,0.25)]">
                        <Play className="w-6 h-6 text-[#FF153C] fill-[#FF153C] translate-x-0.5" />
                      </div>
                    </div>

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Play Button Overlay on Hover */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-[#FF153C] text-white flex items-center justify-center shadow-[0_0_30px_#FF153C] transform scale-75 group-hover:scale-100 transition-transform">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] font-bold text-[#FF153C] border border-[rgba(255,21,60,0.3)] uppercase">
                        {video.category.replace('-', ' ')}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] text-white border border-[rgba(255,255,255,0.1)]">
                        16:9 LANDSCAPE
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] text-silver-light">
                        {video.duration || '0:45'}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Editorial HUD Details (lg:col-span-5) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#0a0a10]">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF153C] animate-ping" />
                        <span className="font-tech text-xs tracking-widest text-[#FF153C] uppercase font-bold">
                          {video.resolution || '4K UHD @ 50FPS'}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-black text-white group-hover:text-[#FF153C] transition-colors tracking-wide">
                        {video.title}
                      </h3>

                      <p className="text-sm text-silver-muted leading-relaxed">
                        {video.description ||
                          'Cinematic edit engineered with advanced color grading, precision velocity curves, and superhero motion rhythm.'}
                      </p>

                      {/* Tool Tags */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {video.tools?.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-md bg-[#141422] text-xs font-tech text-silver-light border border-[rgba(255,21,60,0.15)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                      <span className="font-tech text-xs text-silver-muted">
                        SOURCE: GOOGLE DRIVE PREVIEW
                      </span>

                      <button className="px-5 py-2.5 rounded-xl bg-[#FF153C] text-white font-tech text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(255,21,60,0.5)] group-hover:shadow-[0_0_25px_#FF153C] transition-all">
                        <span>WATCH IN LANDSCAPE</span>
                        <Play className="w-3.5 h-3.5 fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW MODE 2: DUAL 16:9 LANDSCAPE GRID (2 Columns) */
          /* ========================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => {
              return (
                <div
                  key={video.id}
                  onClick={(e) => handleCardClick(video, e)}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative bg-[#0e0e16] rounded-2xl border border-[rgba(255,21,60,0.2)] hover:border-[#FF153C] overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(255,21,60,0.35)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
                >
                  {/* 16:9 Landscape Video Preview Screen */}
                  <div className="relative aspect-[16/9] bg-[#07070c] overflow-hidden">
                    {/* Ambient Blurred Landscape Backdrop */}
                    {video.thumbnailUrl && (
                      <img
                        src={video.thumbnailUrl}
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                      />
                    )}

                    {/* Foreground Thumbnail in Landscape Frame */}
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (!img.dataset.step) {
                            img.dataset.step = '1';
                            if (video.googleDriveFileId) {
                              img.src = `https://lh3.googleusercontent.com/d/${video.googleDriveFileId}=w800`;
                            }
                          } else if (img.dataset.step === '1') {
                            img.dataset.step = '2';
                            if (video.googleDriveFileId) {
                              img.src = `https://drive.google.com/thumbnail?id=${video.googleDriveFileId}&sz=w800`;
                            }
                          } else {
                            img.style.display = 'none';
                          }
                        }}
                        className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}

                    {/* Fallback Graphic */}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#141420] via-[#0b0b12] to-[#07070c]">
                      <div className="relative w-16 h-16 rounded-full border border-[rgba(255,21,60,0.4)] flex items-center justify-center bg-[#11111a] shadow-[0_0_20px_rgba(255,21,60,0.25)]">
                        <Play className="w-6 h-6 text-[#FF153C] fill-[#FF153C] translate-x-0.5" />
                      </div>
                    </div>

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e0e16] via-transparent to-black/40 pointer-events-none" />

                    {/* Play Button Overlay on Hover */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-[#FF153C] text-white flex items-center justify-center shadow-[0_0_30px_#FF153C] transform scale-75 group-hover:scale-100 transition-transform">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </div>

                    {/* Top Corner Badges */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] font-bold text-[#FF153C] border border-[rgba(255,21,60,0.3)] uppercase">
                        {video.category.replace('-', ' ')}
                      </span>
                      {video.resolution && (
                        <span className="px-2 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] text-white">
                          {video.resolution}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2 py-1 rounded-md bg-black/80 backdrop-blur-md font-tech text-[10px] text-silver-light">
                        {video.duration || '0:45'}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="font-display text-lg font-bold text-white group-hover:text-[#FF153C] transition-colors tracking-wide">
                        {video.title}
                      </h4>
                      <p className="text-xs text-silver-muted line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    {/* Tools Strip & Watch Action */}
                    <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 font-tech text-[11px]">
                        {video.tools?.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-[#171722] text-silver-muted border border-[rgba(255,255,255,0.06)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <span className="font-tech text-xs text-[#FF153C] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>WATCH</span>
                        <Play className="w-3 h-3 fill-[#FF153C]" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State when no videos match */}
        {filteredVideos.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0d0d14] border border-[rgba(255,21,60,0.25)] space-y-4 max-w-lg mx-auto">
            <Film className="w-12 h-12 text-[#FF153C] mx-auto opacity-70" />
            <h3 className="font-display text-xl font-bold text-white">
              GALLERY INITIALIZING
            </h3>
            <p className="text-xs text-silver-muted">
              Add entries to <code className="text-[#FF153C]">src/data/portfolioVideos.js</code> to populate this gallery.
            </p>
          </div>
        )}

      </div>

      {/* Cinematic Video Player Modal Component */}
      {activeModalVideo && (
        <VideoModal
          video={activeModalVideo}
          playlist={filteredVideos}
          onClose={() => setActiveModalVideo(null)}
          onSelectVideo={(newVid) => setActiveModalVideo(newVid)}
        />
      )}
    </section>
  );
}
