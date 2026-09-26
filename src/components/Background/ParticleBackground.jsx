import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="light-ambient-background" style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      background: 'radial-gradient(circle at 80% 20%, rgba(217, 228, 255, 0.4) 0%, rgba(247, 247, 242, 0) 60%), radial-gradient(circle at 20% 70%, rgba(32, 184, 166, 0.06) 0%, rgba(247, 247, 242, 0) 50%)'
    }}>
      {/* Subtle Architectural Grid Pattern Overlay */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
        <defs>
          <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(17, 19, 21, 0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archGrid)" />
      </svg>
    </div>
  );
};

export default ParticleBackground;
