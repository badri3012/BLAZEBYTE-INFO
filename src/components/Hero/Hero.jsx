import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingHumanoid from './FloatingHumanoid';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Cinematic Camera Pull-Back Mappings
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Depth Parallax
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgLightY = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      <motion.div className="ambient-light-blue" style={{ top: '10%', left: '20%', y: bgLightY }}></motion.div>
      <motion.div className="ambient-light-orange" style={{ bottom: '10%', right: '20%', y: visualY }}></motion.div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ scale: contentScale, opacity: contentOpacity, y: contentY }}
        >
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">SYSTEM ONLINE // ZERO-G MODE</span>
          </div>
          
          <h1 className="hero-title">
            WE BUILD DIGITAL EXPERIENCES THAT <br/>
            <span className="text-gradient">DEFY GRAVITY.</span>
          </h1>
          
          <p className="hero-description">
            A bold, futuristic creative technology studio specializing in immersive web experiences, powerful branding, and intelligent AI automation.
          </p>
          
          <div className="hero-actions">
            <a href="#portfolio" className="btn-primary magnetic-btn">EXPLORE OUR UNIVERSE</a>
            <a href="#contact" className="btn-secondary">START A PROJECT</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          style={{ y: visualY, opacity: contentOpacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <FloatingHumanoid />
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: contentOpacity }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-arrows">
          <span className="arrow"></span>
          <span className="arrow"></span>
          <span className="arrow"></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
