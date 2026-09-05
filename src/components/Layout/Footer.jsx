import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Terminal, Activity, MapPin, Mail } from 'lucide-react';
import './Footer.css';

// Framer Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.2 }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } 
  }
};

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="terminal-footer">
      {/* Ambient Background Signal Lines */}
      <div className="footer-bg-lines">
        <div className="footer-line f-line-1"></div>
        <div className="footer-line f-line-2"></div>
      </div>

      <div className="container footer-container">
        
        {/* 1. CINEMATIC ENTRY SEQUENCE */}
        <motion.div 
          className="footer-entry-sequence"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="sequence-text" variants={textReveal}>
            <span className="sequence-dot"></span> TRANSMISSION COMPLETE
          </motion.div>
          <motion.div className="sequence-text" variants={textReveal}>
            <span className="sequence-dot"></span> SIGNAL SECURED
          </motion.div>
          <motion.div className="sequence-text highlight" variants={textReveal}>
            BLAZEBYTE STUDIO
          </motion.div>
        </motion.div>

        {/* 2. MAIN FOOTER STRUCTURE */}
        <motion.div 
          className="footer-main-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo-container">
              <img src="/blazebyte-logo.jpg" alt="BlazeByte Studio Logo" className="footer-logo-img" loading="lazy" />
              <div className="logo-glow"></div>
            </div>
            <h3 className="brand-statement">WE BUILD WHAT'S NEXT.</h3>
            <p className="brand-description">
              Digital experiences designed for the future.<br/>
              Web Experiences • AI Automation<br/>
              Digital Marketing • Creative Systems
            </p>
          </div>

          {/* Navigation Matrix */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-header">NAVIGATION</h4>
            <div className="footer-nav-matrix">
              <a href="#hero" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#hero')}>HOME</a>
              <a href="#about" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>ABOUT</a>
              <a href="#services" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#services')}>SERVICES</a>
              <a href="#portfolio" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>PORTFOLIO</a>
              <a href="#team" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#team')}>COLLECTIVE</a>
              <a href="#contact" className="footer-nav-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>CONTACT</a>
            </div>
          </div>

          {/* System Information Block */}
          <div className="footer-col sys-col">
            <h4 className="footer-col-header">SYSTEM INFORMATION</h4>
            <div className="system-info-panel glass-panel">
              <div className="sys-capabilities">
                <div className="sys-item"><Terminal size={12} className="sys-icon"/> WEB EXPERIENCES</div>
                <div className="sys-item"><Activity size={12} className="sys-icon"/> AI AUTOMATION</div>
                <div className="sys-item"><Terminal size={12} className="sys-icon"/> DIGITAL MARKETING</div>
                <div className="sys-item"><Terminal size={12} className="sys-icon"/> CREATIVE SYSTEMS</div>
              </div>
              <div className="sys-divider"></div>
              <div className="sys-status">
                <div className="sys-status-item">
                  <span className="status-dot-small pulse-green"></span> SYSTEM STATUS: ONLINE
                </div>
                <div className="sys-status-item">
                  <MapPin size={12} className="sys-icon"/> LOCATION: COIMBATORE, INDIA
                </div>
                <div className="sys-status-item highlight">
                  DIGITAL TRANSMISSION ACTIVE
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Direct Channel */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-header">DIRECT CHANNEL</h4>
            <a href="mailto:blazebytestudio7@gmail.com" className="contact-email-btn">
              <Mail size={16} />
              blazebytestudio7@gmail.com
            </a>
          </div>

        </motion.div>

        {/* 3. FINAL COPYRIGHT BAR */}
        <motion.div 
          className="footer-bottom-bar"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="copyright-info">
            <span className="copyright-year">© 2026 BLAZEBYTE STUDIO</span>
            <span className="copyright-separator">|</span>
            <span className="copyright-tag">BUILT FOR WHAT'S NEXT.</span>
          </div>

          <div className="system-online-indicator">
            <span className="ambient-pulse-dot"></span> SYSTEM ONLINE
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to Top">
            <span className="btt-text">BACK TO TOP</span>
            <div className="btt-icon-wrapper">
              <ArrowUp size={16} />
            </div>
          </button>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
