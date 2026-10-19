import React, { useEffect, useState, useRef } from 'react';
import { sound } from '../utils/soundEngine';

export default function SuperheroSlinger() {
  const [isSwinging, setIsSwinging] = useState(false);
  const [swingPhase, setSwingPhase] = useState(0); // 0 to 1
  const [direction, setDirection] = useState('right-to-left');
  const animRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerSwing = (dir = Math.random() > 0.5 ? 'right-to-left' : 'left-to-right') => {
    if (isSwinging) return;
    setDirection(dir);
    setIsSwinging(true);
    setSwingPhase(0);
    sound.playWebShoot();

    let start = null;
    const duration = 2800; // ms for full swing arc

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      setSwingPhase(progress);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setIsSwinging(false);
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  // Auto trigger periodically
  useEffect(() => {
    // Initial hero swing after 4 seconds
    const initialTimer = setTimeout(() => {
      triggerSwing('right-to-left');
    }, 4500);

    // Periodic swing every 24 seconds
    const interval = setInterval(() => {
      triggerSwing(Math.random() > 0.5 ? 'right-to-left' : 'left-to-right');
    }, 24000);

    // Listen to custom event to swing hero on demand
    const handleManualSwing = () => triggerSwing();
    window.addEventListener('swing-hero', handleManualSwing);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      window.removeEventListener('swing-hero', handleManualSwing);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (!isSwinging) return null;

  // Pendulum arc physics calculation
  const t = swingPhase; // 0 to 1
  // Smooth sine easing for swing
  const angle = Math.sin((t - 0.5) * Math.PI) * 0.75; // radians (-0.75 to +0.75)
  const isRight = direction === 'right-to-left';

  // Anchor point at top corner
  const anchorX = isRight ? windowSize.width * 0.65 : windowSize.width * 0.35;
  const anchorY = -20;
  const webLength = Math.min(windowSize.height * 0.7, 520);

  // Position of hero's hand / body
  const currentAngle = isRight ? (1 - t * 2) * 0.8 : (t * 2 - 1) * 0.8;
  const heroX = anchorX + Math.sin(currentAngle) * webLength;
  const heroY = anchorY + Math.cos(currentAngle) * webLength;
  const heroRotation = currentAngle * (180 / Math.PI) + (isRight ? 15 : -15);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Web Line from screen top/corner to hero's hand */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="webGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FF153C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B0015" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line
          x1={anchorX}
          y1={anchorY}
          x2={heroX}
          y2={heroY}
          stroke="url(#webGlow)"
          strokeWidth="2.5"
          filter="url(#glowFilter)"
        />
        {/* Web strand vibrations */}
        <circle cx={anchorX} cy={10} r="4" fill="#FF153C" />
      </svg>

      {/* Original Spider-Man-Inspired Web-Slinging Hero Character */}
      <div
        className="absolute w-24 h-32 -translate-x-1/2 -translate-y-1/2 transition-transform"
        style={{
          left: `${heroX}px`,
          top: `${heroY}px`,
          transform: `translate(-50%, -50%) rotate(${heroRotation}deg) scale(${isRight ? -1 : 1}, 1)`,
        }}
      >
        <svg
          viewBox="0 0 100 130"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(255,21,60,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Energy aura */}
          <path
            d="M50 8 C30 8 20 28 20 45 C20 70 35 110 50 120 C65 110 80 70 80 45 C80 28 70 8 50 8 Z"
            fill="none"
            stroke="#FF153C"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-spin"
            style={{ transformOrigin: '50% 50%', animationDuration: '6s' }}
          />

          {/* Mask / Head */}
          <path
            d="M50 12 C36 12 28 22 28 35 C28 52 40 62 50 62 C60 62 72 52 72 35 C72 22 64 12 50 12 Z"
            fill="#FF153C"
            stroke="#111111"
            strokeWidth="2.5"
          />

          {/* Head Web Grid Patterns */}
          <path
            d="M50 12 L50 62 M28 35 Q50 38 72 35 M32 24 Q50 28 68 24 M35 48 Q50 52 65 48"
            stroke="#0a0a0f"
            strokeWidth="1.2"
            opacity="0.85"
          />

          {/* Iconic Superhero Eyes (Silver / White Glowing Lenses) */}
          {/* Left Eye */}
          <path
            d="M34 32 C38 30 45 35 46 42 C42 43 36 39 34 32 Z"
            fill="#FFFFFF"
            stroke="#0a0a0f"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_#ffffff]"
          />
          {/* Right Eye */}
          <path
            d="M66 32 C62 30 55 35 54 42 C58 43 64 39 66 32 Z"
            fill="#FFFFFF"
            stroke="#0a0a0f"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_#ffffff]"
          />

          {/* Torso (Red and Charcoal Suit) */}
          <path
            d="M36 60 L24 88 L34 115 L50 118 L66 115 L76 88 L64 60 Z"
            fill="#111115"
            stroke="#FF153C"
            strokeWidth="2"
          />
          <path
            d="M42 60 L40 85 L50 115 L60 85 L58 60 Z"
            fill="#FF153C"
          />

          {/* Abstract Chest Emblem */}
          <path
            d="M50 72 L46 80 L50 86 L54 80 Z M46 76 L38 70 M54 76 L62 70 M47 82 L36 92 M53 82 L64 92"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Arm holding web strand up */}
          <path
            d="M65 65 Q82 45 88 15"
            stroke="#FF153C"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="88" cy="15" r="5" fill="#111115" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Trailing legs in dynamic superhero dive pose */}
          <path
            d="M38 112 Q20 120 10 135"
            stroke="#FF153C"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M62 112 Q55 125 45 142"
            stroke="#111115"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
