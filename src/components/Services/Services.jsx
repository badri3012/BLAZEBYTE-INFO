import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, TrendingUp, Layers } from 'lucide-react';
import './Services.css';

// Reusable Internal HTML/CSS UI Components
const WebUI = () => (
  <div className="capability-ui web-ui">
    <div className="browser-window">
      <div className="browser-header">
        <div className="dots"><span/><span/><span/></div>
        <div className="url-bar">blazebyte.studio/web</div>
      </div>
      <div className="browser-body">
        <div className="wire-nav"></div>
        <div className="wire-hero">
          <div className="wire-title"></div>
          <div className="wire-sub"></div>
        </div>
        <div className="wire-grid">
          <div className="wire-card"></div>
          <div className="wire-card"></div>
          <div className="wire-card"></div>
        </div>
      </div>
    </div>
  </div>
);

const AIUI = () => (
  <div className="capability-ui ai-ui">
    <svg viewBox="0 0 200 120" className="ai-svg">
      {/* Paths */}
      <path d="M20 60 C 60 20, 100 20, 140 60" className="node-path" />
      <path d="M20 60 C 60 100, 100 100, 140 60" className="node-path" />
      <path d="M140 60 L 180 60" className="node-path" />
      
      {/* Animated Data Packets */}
      <circle r="3" className="data-packet fast" />
      <circle r="3" className="data-packet slow" />
      
      {/* Nodes */}
      <circle cx="20" cy="60" r="8" className="node start-node" />
      <circle cx="80" cy="28" r="6" className="node processing-node" />
      <circle cx="80" cy="92" r="6" className="node processing-node" />
      <circle cx="140" cy="60" r="10" className="node core-node pulse" />
      <circle cx="180" cy="60" r="6" className="node end-node" />
    </svg>
  </div>
);

const MarketingUI = () => (
  <div className="capability-ui marketing-ui">
    <div className="chart-container">
      <div className="chart-bars">
        {[40, 65, 30, 85, 50, 95].map((h, i) => (
          <div key={i} className="bar-wrapper">
            <div className="bar" style={{ height: `${h}%` }}></div>
          </div>
        ))}
      </div>
      <div className="chart-line-svg">
        <svg viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M0 40 L 20 20 L 40 30 L 60 5 L 80 15 L 100 0" className="trend-line" />
        </svg>
      </div>
    </div>
    <div className="metrics-row">
      <div className="metric-pill positive">+24.8% ENG</div>
      <div className="metric-pill">1.2M REACH</div>
    </div>
  </div>
);

const BrandingUI = () => (
  <div className="capability-ui branding-ui">
    <div className="brand-geometry">
      <div className="geo-circle"></div>
      <div className="geo-square"></div>
      <div className="geo-triangle"></div>
    </div>
    <div className="brand-palette">
      <div className="swatch primary"></div>
      <div className="swatch secondary"></div>
      <div className="swatch dark"></div>
      <div className="swatch light"></div>
    </div>
    <div className="brand-type">
      <div className="type-heading">Aa</div>
      <div className="type-lines">
        <div className="t-line"></div>
        <div className="t-line short"></div>
      </div>
    </div>
  </div>
);

// Main Capability Card Component
const CapabilityCard = ({ module, delay, isFeatured }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle 3D rotation
    setRotateX(((y - centerY) / centerY) * -5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`capability-module ${isFeatured ? 'featured-capability' : 'standard-capability'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, transformPerspective: 1000 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="module-glow-bg"></div>
      
      <div className="module-content" style={{ transform: "translateZ(30px)" }}>
        
        {/* Top Header */}
        <div className="module-header">
          <div className="module-id">
            <span className="id-number">{module.number}</span>
            <module.icon className="module-icon" size={18} />
          </div>
          <div className="module-status">
            <span className="status-dot"></span> {module.status || 'ONLINE'}
          </div>
        </div>
        
        {/* The Interactive UI Element */}
        <div className="module-interface">
          {module.uiComponent}
        </div>
        
        {/* Description & Capabilities List */}
        <div className="module-details">
          <h3 className="module-title">{module.title}</h3>
          <p className="module-desc">{module.description}</p>
          
          <ul className="capability-list">
            {module.capabilities.map((cap, i) => (
              <li key={i}>
                <span className="list-bullet"></span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </motion.div>
  );
};

const Services = () => {
  const capabilityModules = [
    {
      number: "01",
      title: "WEB EXPERIENCES",
      description: "Premium websites that don't just look good — they create an experience.",
      icon: Globe,
      capabilities: [
        "Business Websites",
        "Portfolio Websites",
        "E-Commerce",
        "Landing Pages",
        "Custom Web Experiences"
      ],
      uiComponent: <WebUI />,
      isFeatured: true,
      status: "SYSTEM READY"
    },
    {
      number: "02",
      title: "AI AUTOMATION",
      description: "Intelligent systems designed to reduce manual work and automate business workflows.",
      icon: Cpu,
      capabilities: [
        "AI Workflows",
        "Lead Automation",
        "WhatsApp Automation",
        "Business Automation",
        "Custom AI Systems"
      ],
      uiComponent: <AIUI />,
      isFeatured: false
    },
    {
      number: "03",
      title: "DIGITAL MARKETING",
      description: "Creative strategies and content systems designed to build visibility, engagement, and growth.",
      icon: TrendingUp,
      capabilities: [
        "Social Media Marketing",
        "Content Strategy",
        "Campaigns",
        "Performance Tracking",
        "Growth Strategy"
      ],
      uiComponent: <MarketingUI />,
      isFeatured: false
    },
    {
      number: "04",
      title: "BRANDING & CREATIVE",
      description: "Building distinctive visual identities that make businesses recognizable and memorable.",
      icon: Layers,
      capabilities: [
        "Brand Identity",
        "Logo Systems",
        "Social Media Creatives",
        "UI/UX Design",
        "Motion Content"
      ],
      uiComponent: <BrandingUI />,
      isFeatured: false
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <span className="status-dot-small"></span> BLAZEBYTE // CORE CAPABILITIES
          </div>
          <h2 className="section-title">
            BLAZEBYTE <span className="title-accent">CAPABILITY SYSTEM</span>
          </h2>
        </div>
        
        <div className="capability-grid">
          {capabilityModules.map((module, index) => (
            <CapabilityCard 
              key={index}
              module={module}
              isFeatured={module.isFeatured}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
