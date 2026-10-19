import React, { useEffect, useRef } from 'react';
import { sound } from '../utils/soundEngine';

export default function SpiderWebCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive node count based on screen size
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 18 : 38;
    const maxDistance = isMobile ? 110 : 160;
    const mouseWebDistance = isMobile ? 100 : 180;

    // Node particle system
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
      });
    }

    // Floating embers
    const emberCount = isMobile ? 12 : 28;
    const embers = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.6 - 0.2, // drifting upwards
        size: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.7 + 0.2,
      });
    }

    // Active web blast projectiles from button clicks
    const webShots = [];

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: mouseWebDistance,
      isActive: false,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Custom Web Shoot Event (fired when buttons are clicked)
    const handleShootWeb = (e) => {
      const targetX = e.detail?.x || mouse.x || width / 2;
      const targetY = e.detail?.y || mouse.y || height / 2;

      // Determine closest corner to shoot from
      const corners = [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: 0, y: height },
        { x: width, y: height },
      ];
      corners.sort((a, b) => {
        const da = Math.hypot(a.x - targetX, a.y - targetY);
        const db = Math.hypot(b.x - targetX, b.y - targetY);
        return da - db;
      });

      const origin = corners[0];

      webShots.push({
        startX: origin.x,
        startY: origin.y,
        targetX,
        targetY,
        progress: 0,
        speed: 0.12,
        life: 1.0,
        subBranches: Array.from({ length: 4 }).map(() => ({
          offset: (Math.random() - 0.5) * 35,
          curve: (Math.random() - 0.5) * 50,
        })),
      });

      sound.playWebShoot();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    window.addEventListener('shoot-web', handleShootWeb);

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating red embers
      for (let i = 0; i < embers.length; i++) {
        const emb = embers[i];
        emb.x += emb.vx;
        emb.y += emb.vy;

        if (emb.y < -10) {
          emb.y = height + 10;
          emb.x = Math.random() * width;
        }
        if (emb.x < -10) emb.x = width + 10;
        if (emb.x > width + 10) emb.x = -10;

        ctx.beginPath();
        ctx.arc(emb.x, emb.y, emb.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 21, 60, ${emb.alpha})`;
        ctx.shadowColor = '#FF153C';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update and draw node web mesh
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from boundaries gently
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node center dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 35, 75, ${node.baseAlpha})`;
        ctx.fill();

        // Connect node to nearby nodes with spider-web strands
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 21, 60, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect nodes to mouse pointer (interactive elastic stretching)
        if (mouse.isActive) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.65;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            // Elastic slight curve
            const midX = (node.x + mouse.x) / 2;
            const midY = (node.y + mouse.y) / 2 + 5;
            ctx.quadraticCurveTo(midX, midY, mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 30, 70, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.shadowColor = '#FF153C';
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw active web shot blasts from button interactions
      for (let s = webShots.length - 1; s >= 0; s--) {
        const shot = webShots[s];
        shot.progress = Math.min(1, shot.progress + shot.speed);
        shot.life -= 0.035;

        const currentX = shot.startX + (shot.targetX - shot.startX) * shot.progress;
        const currentY = shot.startY + (shot.targetY - shot.startY) * shot.progress;

        // Main web laser strand
        ctx.beginPath();
        ctx.moveTo(shot.startX, shot.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shot.life * 0.9})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#FF153C';
        ctx.shadowBlur = 15;
        ctx.stroke();

        // Crimson secondary glow strand
        ctx.beginPath();
        ctx.moveTo(shot.startX, shot.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = `rgba(255, 21, 60, ${shot.life * 0.8})`;
        ctx.lineWidth = 4;
        ctx.stroke();

        // Web target impact ring
        if (shot.progress >= 0.7) {
          const ringRadius = (1 - shot.life) * 55;
          ctx.beginPath();
          ctx.arc(shot.targetX, shot.targetY, Math.max(0, ringRadius), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 21, 60, ${Math.max(0, shot.life)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        ctx.shadowBlur = 0;

        if (shot.life <= 0) {
          webShots.splice(s, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('shoot-web', handleShootWeb);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
