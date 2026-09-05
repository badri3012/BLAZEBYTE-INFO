import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Cpu, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nodes = [
    { id: 'creative', title: 'CREATIVE', subtitle: 'BRANDING + CONTENT', icon: PenTool, delay: 0.2 },
    { id: 'build', title: 'BUILD', subtitle: 'WEB + DIGITAL PRODUCTS', icon: Code, delay: 0.4 },
    { id: 'automate', title: 'AUTOMATE', subtitle: 'AI + WORKFLOWS', icon: Cpu, delay: 0.6 },
    { id: 'grow', title: 'GROW', subtitle: 'MARKETING + STRATEGY', icon: TrendingUp, delay: 0.8 },
  ];

  const values = [
    { title: 'CREATE WITH PURPOSE', desc: 'Every design decision should solve a real problem.' },
    { title: 'BUILD FOR IMPACT', desc: 'Technology should create measurable business value.' },
    { title: 'THINK BEYOND TODAY', desc: 'We build digital systems designed for the future.' }
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-container">
        
        {/* Section Label */}
        <div className="section-header-center">
          <motion.div 
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="status-dot-small"></span> ORIGIN // MISSION // FUTURE
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="mission-module"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cinematic-heading">
            WE DON'T JUST BUILD WEBSITES.<br/>
            WE BUILD <span className="text-gradient">DIGITAL EXPERIENCES</span> BUILT FOR WHAT'S NEXT.
          </h2>
          <div className="mission-content-wrapper">
            <div className="mission-text-col">
              <p>
                BlazeByte Studio combines creative thinking, modern web technology, AI automation, digital marketing, and strong brand systems to help businesses move beyond ordinary digital experiences.
              </p>
              <p>
                We believe technology should not feel complicated. It should feel powerful, intuitive, and built around real business growth.
              </p>
            </div>
            <div className="our-mission-box glass-panel">
              <div className="om-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="om-title">OUR MISSION</span>
              </div>
              <p>To help ambitious businesses build a stronger digital presence through creative technology, intelligent automation, powerful design, and future-ready digital systems.</p>
            </div>
          </div>
        </motion.div>

        {/* Holographic Ecosystem Transmission */}
        <div className="ecosystem-transmission">
          
          {/* Desktop Radial Connections (Hidden on Mobile) */}
          {!isMobile && (
            <svg className="desktop-connections" viewBox="0 0 1000 600">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 210, 255, 0.1)" />
                  <stop offset="50%" stopColor="var(--color-electric-blue)" />
                  <stop offset="100%" stopColor="rgba(0, 210, 255, 0.1)" />
                </linearGradient>
              </defs>
              {/* Radial Lines connecting center (500, 300) to nodes */}
              <motion.path d="M 300,150 L 500,300" className="radial-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
              <motion.path d="M 700,150 L 500,300" className="radial-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
              <motion.path d="M 300,450 L 500,300" className="radial-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
              <motion.path d="M 700,450 L 500,300" className="radial-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
              
              {/* Animated Data Particles */}
              <circle r="3" className="data-particle dp-1" />
              <circle r="3" className="data-particle dp-2" />
              <circle r="3" className="data-particle dp-3" />
              <circle r="3" className="data-particle dp-4" />
            </svg>
          )}

          {/* Central Core */}
          <div className="blazebyte-core-wrapper">
            {/* Mobile Vertical Connection Line (Top) */}
            {isMobile && <div className="mobile-connector-line core-out"></div>}
            
            <motion.div 
              className="blazebyte-core"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="core-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              <div className="core-logo-container">
                <img src="/blazebyte-logo.jpg" alt="BlazeByte Core" className="core-logo" loading="lazy" />
                <div className="core-glow-overlay"></div>
              </div>
              <div className="core-label">BLAZEBYTE CORE</div>
            </motion.div>
          </div>

          {/* Nodes */}
          <div className="nodes-container">
            {nodes.map((node, i) => (
              <React.Fragment key={node.id}>
                <motion.div 
                  className={`system-node node-${node.id}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: node.delay }}
                >
                  <div className="node-icon-wrapper">
                    <node.icon size={24} className="node-icon" />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="node-text">
                    <h4>{node.title}</h4>
                    <span>{node.subtitle}</span>
                  </div>
                </motion.div>
                {/* Mobile Vertical Connection Line (Between Nodes) */}
                {isMobile && i < nodes.length - 1 && <div className="mobile-connector-line"></div>}
              </React.Fragment>
            ))}
          </div>
          
        </div>

        {/* Company Values */}
        <div className="values-grid">
          {values.map((value, i) => (
            <motion.div 
              key={i}
              className="value-micro-module glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="value-indicator"></div>
              <div className="value-content">
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
