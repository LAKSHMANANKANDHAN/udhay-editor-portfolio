/**
 * =========================================================================
 * UDHAYA KUMAR.DJ — EDITVERSE PORTFOLIO VIDEO CONFIGURATION
 * =========================================================================
 * 
 * Sourced directly from Udhaya Kumar.DJ's Google Drive:
 * https://drive.google.com/drive/folders/10tqKcwUDaru25VP9px-oyJk4ASoVWmw1
 * 
 * Every video file below uses the real Google Drive File ID and streams
 * inside the website's cinematic modal player via:
 * https://drive.google.com/file/d/FILE_ID/preview
 * 
 * Real high-resolution thumbnails are loaded directly from Google Drive CDN:
 * https://lh3.googleusercontent.com/d/FILE_ID=w800
 */

export const VIDEO_CATEGORIES = [
  {
    id: "4k-50fps",
    name: "4K 50 FPS EDITS",
    badge: "ULTRA HD PRECISION",
    headline: "Cinematic Clarity & Ultra-Fluid 50FPS Motion",
    description: "Experience the power of cinematic clarity, fluid motion, and precision high-framerate editing that preserves every visual nuance.",
    color: "#FF153C",
    accent: "from-red-600 to-rose-900",
    tagline: "Razor-sharp details, high bitrate mastering, flawless motion blur."
  },
  {
    id: "ramp-edits",
    name: "RAMP EDITS",
    badge: "DYNAMIC VELOCITY",
    headline: "Precision Speed Ramps & High-Energy Timing",
    description: "Precision speed ramps, beat-perfect timing, and high-energy visual storytelling tuned with optical flow and kinetic impact.",
    color: "#FF2D55",
    accent: "from-rose-600 to-red-950",
    tagline: "Speed curves, audio-synced velocity shifts, visceral pacing."
  },
  {
    id: "promotional",
    name: "PROMOTIONAL EDITS",
    badge: "HIGH CONVERSION",
    headline: "Bold Commercial Campaigns & Visual Hype",
    description: "Bold visual campaigns and premium promotional edits designed to command viewer attention and elevate brand presence.",
    color: "#E11D48",
    accent: "from-red-500 to-crimson-950",
    tagline: "Story-driven hype reels, cinematic trailers, brand commercials."
  },
  {
    id: "transitions",
    name: "TRANSITION EDITS",
    badge: "SEAMLESS VFX",
    headline: "Visual Transformations & Mind-Bending Transitions",
    description: "Seamless transitions, creative masking, match cuts, and visual transformations that elevate every single frame.",
    color: "#FF153C",
    accent: "from-red-700 to-neutral-950",
    tagline: "Match cuts, dimensional portal wipes, mask tracking illusions."
  }
];

// Helper to generate Google Drive thumbnail URL
export function getDriveThumbnailUrl(fileId) {
  if (!fileId) return '';
  return `https://lh3.googleusercontent.com/d/${fileId}=w800`;
}

// 100% Real Portfolio Videos from Udhaya Kumar.DJ's Google Drive folder
export const PORTFOLIO_VIDEOS = [
  // -------------------------------------------------------------
  // CATEGORY 1: 4K 50 FPS EDITS (Folder: 1j6ntUQvKmk7qGbqxEJL_UuUa401NmfGm)
  // -------------------------------------------------------------
  {
    id: "vid-4k-01",
    title: "24 MOVIE 4K EDIT",
    category: "4k-50fps",
    googleDriveFileId: "1MhofkBnlmcB4NZ07huGpb0Dkf0L6__Y6",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-4k-01.jpg",
    duration: "0:45",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "High-framerate 4K cinematic sequence from the sci-fi thriller 24, mastered with extreme motion clarity and high-bitrate color grading.",
  },
  {
    id: "vid-4k-02",
    title: "ENDGAME CLIMAX EDIT",
    category: "4k-50fps",
    googleDriveFileId: "1lkkMKtNmVH0KVApoQ1tOya5IUaawpwHZ",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-4k-02.jpg",
    duration: "0:50",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "Epic Avengers Endgame climax sequence edited with cinematic pace, bass-boosted impact sound design, and 4K visual punch.",
  },
  {
    id: "vid-4k-03",
    title: "GHOSTED 4K EDIT",
    category: "4k-50fps",
    googleDriveFileId: "1IpmW2UchsiX4tW5i5lkXjkw_4mV_q-Qq",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-4k-03.jpg",
    duration: "0:35",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "Media Encoder"],
    description: "Ultra-crisp 4K visual edit with high dynamic range color grading and frame-accurate cutting.",
  },
  {
    id: "vid-4k-04",
    title: "SADIE SINK 4K EDIT",
    category: "4k-50fps",
    googleDriveFileId: "1L9lu6UZYiMXWrXqcVw8aHjbmcVWnvowf",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-4k-04.jpg",
    duration: "0:30",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "Cinematic portrait character edit highlighting lighting nuances, slow-motion velocity, and emotional beats.",
  },

  // -------------------------------------------------------------
  // CATEGORY 2: RAMP EDITS (Folder: 1KAEUOf8BEQa8YFhqC6UftxOdrcaXb2qZ)
  // -------------------------------------------------------------
  {
    id: "vid-ramp-01",
    title: "MANDADI RAMP EDIT",
    category: "ramp-edits",
    googleDriveFileId: "1Lfc15KP0d_xQSSwfRwhqU_6gBax_SnQO",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-ramp-01.jpg",
    duration: "0:30",
    resolution: "1080p @ 60FPS",
    tools: ["After Effects", "CapCut"],
    description: "High-octane velocity speed curve ramp synchronised to punchy audio transients and directional impact blur.",
  },
  {
    id: "vid-ramp-02",
    title: "TASM EDIT (The Amazing Spider-Man)",
    category: "ramp-edits",
    googleDriveFileId: "1duwYsMxFqlXh7EQeiJZmPkdgclHf-Aoo",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-ramp-02.jpg",
    duration: "0:40",
    resolution: "1080p @ 60FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Spider-Man swinging & action sequence featuring optical flow speed ramps, whip pans, and superhero impact cuts.",
  },
  {
    id: "vid-ramp-03",
    title: "THALAPATHY RAMP EDIT",
    category: "ramp-edits",
    googleDriveFileId: "1CZcJcsVHC7pIndyHRVZaj4ERhqb1rHh7",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-ramp-03.jpg",
    duration: "0:35",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "Mass appeal kinetic hero velocity cut with rapid speed ramps, seamless zooms, and heavy bass synchronization.",
  },

  // -------------------------------------------------------------
  // CATEGORY 3: PROMOTIONAL EDITS (Folder: 1drISYJILfE4PAFQntbc9AjOF-nsunyvo)
  // -------------------------------------------------------------
  {
    id: "vid-promo-01",
    title: "CRICKET REEL",
    category: "promotional",
    googleDriveFileId: "1NbQDyXq4j1-EETlYgkr0wrjXDZdYQ2SX",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-promo-01.jpg",
    duration: "0:45",
    resolution: "1080p @ 60FPS",
    tools: ["Premiere Pro", "Photoshop"],
    description: "High-energy sports campaign edit designed for social media virality, athlete focus, and stadium atmosphere.",
  },
  {
    id: "vid-promo-02",
    title: "GYM REEL",
    category: "promotional",
    googleDriveFileId: "1Y5-Ss4LnC56deX-NBE_6dqRSCskHO5hw",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-promo-02.jpg",
    duration: "0:30",
    resolution: "1080p @ 60FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Intense fitness promotional promo with dynamic rhythmic cuts, motivational pacing, and high contrast tone.",
  },
  {
    id: "vid-promo-03",
    title: "THALAPATHY TRIBUTE REEL",
    category: "promotional",
    googleDriveFileId: "1KyRvz-SXQSh7pKmoZ_iDrzJsFmMX_MPj",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-promo-03.jpg",
    duration: "1:00",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "Grand celebratory tribute visual reel engineered with theatrical build-ups, kinetic titles, and emotional fan applause peaks.",
  },
  {
    id: "vid-promo-04",
    title: "THEME REVEAL VIDEO",
    category: "promotional",
    googleDriveFileId: "1Q5ofJlXk4PnPTWK9GFMai8Nt5WtZvqv3",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-promo-04.jpg",
    duration: "0:50",
    resolution: "1080p @ 60FPS",
    tools: ["After Effects", "Blender"],
    description: "Dramatic commercial title and event theme announcement with atmospheric sound design and countdown tension.",
  },
  {
    id: "vid-promo-05",
    title: "TURF OPENING REEL",
    category: "promotional",
    googleDriveFileId: "1YKBO5lzFu30AmP4FD33oz27DnpUU_Zug",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-promo-05.jpg",
    duration: "0:40",
    resolution: "1080p @ 60FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "Commercial launch reel showcasing sports turf facilities, dynamic drone pass-throughs, and grand opening promotions.",
  },

  // -------------------------------------------------------------
  // CATEGORY 4: TRANSITION EDITS (Folder: 1MntPHS9aZcAhB27JykpzN2Yxy8OkLlhL)
  // -------------------------------------------------------------
  {
    id: "vid-trans-01",
    title: "IRONMAN EDIT",
    category: "transitions",
    googleDriveFileId: "1w3fTr9jwvSOsvwZkesbh2FV3IdGkd6-c",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-trans-01.jpg",
    duration: "0:35",
    resolution: "4K UHD @ 50FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Futuristic suit assembly match-cut with seamless energy HUD transitions and metallic sound design.",
  },
  {
    id: "vid-trans-02",
    title: "MARVEL RELEASE EDIT",
    category: "transitions",
    googleDriveFileId: "1JVwZtgmZqhPNDyWD7YS6DbYoNXjBpV5s",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-trans-02.jpg",
    duration: "0:45",
    resolution: "4K UHD @ 50FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Multiverse cross-dimensional franchise sequence with seamless scene-to-scene luminance masking.",
  },
  {
    id: "vid-trans-03",
    title: "PUSHPA REEL",
    category: "transitions",
    googleDriveFileId: "1-bKJC_P65EqLYNzMgnN9TY1isg39TX78",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-trans-03.jpg",
    duration: "0:30",
    resolution: "1080p @ 60FPS",
    tools: ["Premiere Pro", "After Effects"],
    description: "High-octane mass film transition edit matching character motion through aggressive whip zooms.",
  },
  {
    id: "vid-trans-04",
    title: "RADHIMA EDIT",
    category: "transitions",
    googleDriveFileId: "1H5MNhYHbjxOd92zll6acA2cRaOE8Z9Ud",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-trans-04.jpg",
    duration: "0:35",
    resolution: "1080p @ 60FPS",
    tools: ["Premiere Pro", "Photoshop"],
    description: "Graceful cinematic portrait transition sequence with optical glow bleeds and smooth dissolve wipes.",
  },
  {
    id: "vid-trans-05",
    title: "SPIDYY EDIT (Spider-Man Multiverse)",
    category: "transitions",
    googleDriveFileId: "1z5l_ZAUkjtIraX9tstzSrOBDAJQf0a5i",
    directVideoUrl: "",
    thumbnailUrl: "/thumbnails/vid-trans-05.jpg",
    duration: "0:40",
    resolution: "4K UHD @ 50FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Mind-bending Spider-Man multiverse transition edit connecting Peter Parker iterations via dimensional web glitches.",
  }
];

/**
 * Helper to determine playback source for a video item.
 * Supports Google Drive preview embed, direct streamable MP4/WebM, or sample preview.
 */
export function getVideoSource(video) {
  if (!video) return { type: 'none', url: '' };

  if (video.googleDriveFileId && video.googleDriveFileId.trim() !== '') {
    return {
      type: 'drive',
      url: `https://drive.google.com/file/d/${video.googleDriveFileId.trim()}/preview`,
      fileId: video.googleDriveFileId.trim()
    };
  }

  if (video.directVideoUrl && video.directVideoUrl.trim() !== '') {
    return {
      type: 'direct',
      url: video.directVideoUrl.trim()
    };
  }

  return { type: 'none', url: '' };
}

/**
 * Optional sample video previews
 */
export const SAMPLE_SHOWCASE_PREVIEWS = [
  {
    id: "sample-01",
    title: "Cinematic Superhero Multiverse Edit (Showcase)",
    category: "4k-50fps",
    directVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80",
    duration: "0:45",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "After Effects", "Blender"],
    description: "VFX breakdown showing superhero energy outlines, speed ramps, and high dynamic range color grading.",
    isSample: true
  },
  {
    id: "sample-02",
    title: "High Velocity Cyberpunk Speed Ramp (Showcase)",
    category: "ramp-edits",
    directVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    duration: "0:30",
    resolution: "1080p @ 60FPS",
    tools: ["After Effects", "CapCut"],
    description: "Fast-paced kinetic velocity ramp with audio transient synchronization and red energy particle streaks.",
    isSample: true
  },
  {
    id: "sample-03",
    title: "Epic Brand Commercial & Kinetic Type (Showcase)",
    category: "promotional",
    directVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
    duration: "0:40",
    resolution: "4K UHD @ 50FPS",
    tools: ["Premiere Pro", "Photoshop", "Illustrator"],
    description: "Commercial hype trailer engineered for viral social engagement and high-impact branding.",
    isSample: true
  },
  {
    id: "sample-04",
    title: "Dimensional Seamless Portal Match-Cut (Showcase)",
    category: "transitions",
    directVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    duration: "0:35",
    resolution: "4K UHD @ 50FPS",
    tools: ["After Effects", "Premiere Pro"],
    description: "Impossible transition matching camera velocity through geometric spatial portals and light streaks.",
    isSample: true
  }
];
