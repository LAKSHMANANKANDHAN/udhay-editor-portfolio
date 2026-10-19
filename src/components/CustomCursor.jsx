import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .interactive-cursor');
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation loop
    let animId;
    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.22;
      trailY += (mouseY - trailY) * 0.22;
      setTrailing({ x: trailX, y: trailY });
      animId = requestAnimationFrame(animateTrail);
    };
    animId = requestAnimationFrame(animateTrail);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Web Ring Target */}
      <div
        className="fixed rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          border: isHovered ? '1.5px solid #FF153C' : '1px solid rgba(255, 21, 60, 0.45)',
          backgroundColor: isHovered ? 'rgba(255, 21, 60, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px #FF153C' : '0 0 6px rgba(255, 21, 60, 0.3)',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
        }}
      >
        {/* Subtle crosshair reticle ticks when hovering */}
        {isHovered && (
          <>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-0.5 bg-[#FF153C]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1.5 h-0.5 bg-[#FF153C]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-0.5 h-1.5 bg-[#FF153C]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0.5 h-1.5 bg-[#FF153C]" />
          </>
        )}
      </div>

      {/* Center Laser Core */}
      <div
        className="fixed w-2 h-2 rounded-full bg-[#FF153C] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#FF153C]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
        }}
      />
    </div>
  );
}
