import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import GenerativeVisual from './GenerativeVisual';
import './Hero.css';

const Hero = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left Editorial Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">BLAZEBYTE STUDIO</span>
            <span className="eyebrow-text">DIGITAL EXPERIENCES • TECHNOLOGY • GROWTH</span>
          </div>

          <h1 className="hero-headline">
            WE BUILD<br />
            DIGITAL EXPERIENCES<br />
            THAT MOVE<br />
            <span className="headline-accent">BUSINESSES FORWARD.</span>
          </h1>

          <p className="hero-paragraph">
            BlazeByte Studio designs and develops premium websites, digital products and intelligent business systems for ambitious brands.
          </p>

          <div className="hero-actions">
            <a
              href="#portfolio"
              className="btn-primary"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            >
              EXPLORE OUR WORK <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              START A PROJECT <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Custom Architecture</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">Coimbatore</span>
              <span className="stat-label">Studio Location, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Generative Visual Column */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visual-card-wrapper">
            <GenerativeVisual />
            <div className="visual-caption">
              <span className="caption-dot"></span>
              <span>GENERATIVE ARCHITECTURAL OBJECT // 01</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
