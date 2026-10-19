import React, { useEffect, useState, useRef } from 'react';
import { sound } from '../utils/soundEngine';
import { getVideoSource } from '../data/portfolioVideos';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Film,
  ExternalLink,
  Loader2,
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

export default function VideoModal({ video, playlist, onClose, onSelectVideo }) {
  const [isLoading, setIsLoading] = useState(true);
  const [testDriveId, setTestDriveId] = useState('');
  const [activeVideo, setActiveVideo] = useState(video);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveVideo(video);
    setIsLoading(true);
    sound.playModalOpen();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video]);

  const handleClose = () => {
    sound.playModalClose();
    onClose();
  };

  const currentIndex = playlist.findIndex((v) => v.id === activeVideo.id);

  const handleNext = () => {
    if (playlist.length <= 1) return;
    const nextIdx = (currentIndex + 1) % playlist.length;
    sound.playNav();
    onSelectVideo(playlist[nextIdx]);
  };

  const handlePrev = () => {
    if (playlist.length <= 1) return;
    const prevIdx = (currentIndex - 1 + playlist.length) % playlist.length;
    sound.playNav();
    onSelectVideo(playlist[prevIdx]);
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const source = getVideoSource(activeVideo);

  // If user entered a live test drive ID in this modal
  const effectiveSource = testDriveId.trim()
    ? {
        type: 'drive',
        url: `https://drive.google.com/file/d/${testDriveId.trim()}/preview`,
        fileId: testDriveId.trim(),
      }
    : source;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Outer Spider-Web Energy Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      {/* Main Cinematic Video Dialog Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl bg-[#0c0c14] border border-[rgba(255,21,60,0.35)] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,21,60,0.35)] flex flex-col max-h-[95vh] z-10"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0e0e18] border-b border-[rgba(255,21,60,0.2)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF153C] animate-pulse" />
            <span className="font-tech text-xs tracking-widest text-[#FF153C] uppercase font-bold">
              16:9 LANDSCAPE CINEMA
            </span>
            <span className="hidden sm:inline text-xs text-silver-muted">|</span>
            <span className="hidden sm:inline font-heading text-xs text-silver-light truncate max-w-md">
              {activeVideo.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFullscreen}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-tech text-silver-muted hover:text-white hover:bg-[rgba(255,21,60,0.15)] transition-all"
              title="Fullscreen Mode"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">FULLSCREEN</span>
            </button>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-silver-muted hover:text-white hover:bg-[#FF153C] transition-all"
              title="Close Player (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Area */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Direct HTML5 Video Player */}
          {effectiveSource.type === 'direct' && (
            <video
              key={effectiveSource.url}
              src={effectiveSource.url}
              controls
              autoPlay
              onCanPlay={() => setIsLoading(false)}
              className="w-full h-full object-contain"
            />
          )}

          {/* Google Drive Preview Embed Iframe */}
          {effectiveSource.type === 'drive' && (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 text-silver-muted">
                  <Loader2 className="w-8 h-8 text-[#FF153C] animate-spin mb-2" />
                  <span className="font-tech text-xs tracking-wider">
                    STREAMING GOOGLE DRIVE VIDEO...
                  </span>
                </div>
              )}
              <iframe
                key={effectiveSource.url}
                src={effectiveSource.url}
                title={activeVideo.title}
                onLoad={() => setIsLoading(false)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </>
          )}

          {/* Configured Video Awaiting Drive ID State */}
          {effectiveSource.type === 'none' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 text-center bg-gradient-to-b from-[#101018] to-[#07070a]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(255,21,60,0.12)] border border-[rgba(255,21,60,0.3)] flex items-center justify-center text-[#FF153C] mb-4 shadow-[0_0_20px_rgba(255,21,60,0.3)]">
                <Film className="w-8 h-8" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                VIDEO SLOT AWAITING DRIVE FILE ID
              </h3>
              <p className="text-sm text-silver-muted max-w-lg mb-6 leading-relaxed">
                This item is configured for{' '}
                <span className="text-[#FF153C] font-semibold">{activeVideo.title}</span>.
                To link your video from your portfolio folder, copy its file ID and paste it into{' '}
                <code className="text-[#FF153C] bg-black/40 px-2 py-0.5 rounded border border-[rgba(255,21,60,0.2)]">
                  src/data/portfolioVideos.js
                </code>
              </p>

              {/* Instant Test Drive ID Input Bar */}
              <div className="w-full max-w-md p-4 rounded-xl bg-[#09090f] border border-[rgba(255,21,60,0.3)] space-y-3">
                <span className="block font-tech text-xs text-left text-[#FF153C] uppercase tracking-wider font-semibold">
                  QUICK LIVE PREVIEW: Paste Any Google Drive File ID
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={testDriveId}
                    onChange={(e) => setTestDriveId(e.target.value)}
                    placeholder="e.g. 10tqKcwUDaru25VP9px-oyJk4ASoVWmw1"
                    className="flex-1 px-3 py-2 bg-[#14141e] border border-[rgba(255,21,60,0.2)] rounded-lg text-xs text-white placeholder-silver-muted/50 focus:outline-none focus:border-[#FF153C]"
                  />
                  <button
                    onClick={() => {
                      if (testDriveId.trim()) setIsLoading(true);
                    }}
                    className="px-4 py-2 bg-[#FF153C] hover:bg-[#d60e32] text-white font-tech text-xs font-bold rounded-lg transition-all"
                  >
                    PLAY
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-silver-muted">
                  <Info className="w-3.5 h-3.5 text-silver-muted flex-shrink-0" />
                  <span>Ensure your Drive video is set to "Anyone with the link can view".</span>
                </div>
              </div>

              {/* Source Google Drive Folder Link */}
              <a
                href="https://drive.google.com/drive/folders/10tqKcwUDaru25VP9px-oyJk4ASoVWmw1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-tech text-xs text-silver-muted hover:text-[#FF153C] transition-colors"
              >
                <span>Open Portfolio Drive Folder</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Previous / Next Overlay Controls */}
          {playlist.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF153C] text-white border border-[rgba(255,255,255,0.1)] transition-all z-20 backdrop-blur-md"
                title="Previous Video (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF153C] text-white border border-[rgba(255,255,255,0.1)] transition-all z-20 backdrop-blur-md"
                title="Next Video (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Modal Bottom Metadata Area */}
        <div className="p-5 bg-[#090910] border-t border-[rgba(255,21,60,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display text-lg font-bold text-white tracking-wide">
              {activeVideo.title}
            </h4>
            <p className="text-xs text-silver-muted max-w-2xl leading-relaxed">
              {activeVideo.description ||
                'High-performance cinematic edit engineered with advanced color grading, precision speed curves, and visual mastery.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-tech text-xs">
            {activeVideo.resolution && (
              <span className="px-2.5 py-1 rounded bg-[#171724] border border-[rgba(255,21,60,0.25)] text-white">
                {activeVideo.resolution}
              </span>
            )}
            {activeVideo.duration && (
              <span className="px-2.5 py-1 rounded bg-[#171724] text-silver-muted">
                {activeVideo.duration}
              </span>
            )}
            {activeVideo.tools?.map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded bg-[rgba(255,21,60,0.12)] text-[#FF153C]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
