import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const textSequence = [
  "INITIALIZING SYSTEM",
  "ESTABLISHING DIGITAL CONNECTION",
  "SIGNAL SECURED",
  "BLAZEBYTE SYSTEM ONLINE"
];

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 4.0-second cinematic sequence
    const t1 = setTimeout(() => setPhase(1), 900);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setPhase(3), 2700);
    
    // Trigger unmount sequence at 3.9s
    const t4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3900);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="blazebyte-3d-preloader"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 4, /* Extreme cinematic camera push-in */
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* 3D Master Container */}
      <div className="preloader-3d-scene">
        
        {/* Layer 1: Deep Space Background (translateZ(-400px)) */}
        <div className="preloader-layer-bg">
          <div className="preloader-grid"></div>
        </div>

        {/* Layer 2: Floating Midground Data Fragments (translateZ(-200px)) */}
        <div className="preloader-layer-mid">
          <div className="data-fragment frag-1"></div>
          <div className="data-fragment frag-2"></div>
          <div className="data-fragment frag-3"></div>
          <div className="data-fragment frag-4"></div>
        </div>

        {/* Layer 3: Foreground Interface (translateZ(0px)) */}
        <div className="preloader-layer-fg">
          
          <div className="preloader-interface">
            
            {/* LOGO MATERIALIZATION */}
            <motion.div 
              className="preloader-brand-container"
              initial={{ opacity: 0, filter: 'blur(10px) brightness(0)', scale: 0.9 }}
              animate={{ opacity: 1, filter: 'blur(0px) brightness(1)', scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="preloader-logo-wrapper">
                <img 
                  src="/blazebyte-logo.jpg" 
                  alt="BlazeByte System Boot" 
                  className="preloader-logo-3d" 
                />
                <div className="preloader-logo-glow-3d"></div>
                {/* Scanner and Energy Streak */}
                <div className="preloader-scanline-3d"></div>
                <div className="preloader-energy-streak"></div>
              </div>
            </motion.div>

            {/* BLUR-TO-FOCUS TYPOGRAPHY */}
            <div className="preloader-status-container-3d">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  className={`preloader-status-text-3d ${phase === 3 ? 'final-phase' : ''}`}
                  initial={{ opacity: 0, filter: 'blur(8px)', y: 15, letterSpacing: '0.1em' }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0, letterSpacing: '0.2em' }}
                  exit={{ opacity: 0, filter: 'blur(8px)', y: -15, letterSpacing: '0.3em' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {textSequence[phase]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CINEMATIC ENERGY TRANSMISSION LINE */}
            <div className="preloader-transmission-track-3d">
              <div className="preloader-transmission-glow"></div>
              <div className="preloader-transmission-fill-3d"></div>
              <div className="preloader-transmission-pulse"></div>
            </div>

            {/* FINAL SYSTEM ONLINE STATUS */}
            <motion.div 
              className="preloader-final-indicator-3d"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: phase === 3 ? 1 : 0, filter: phase === 3 ? 'blur(0px)' : 'blur(4px)' }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-dot-small pulse-cyan"></span> SYSTEM ONLINE
            </motion.div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;
