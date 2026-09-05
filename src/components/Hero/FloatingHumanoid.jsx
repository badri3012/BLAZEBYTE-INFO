import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Terminal, TrendingUp, Smartphone } from 'lucide-react';

const BrandLogo = ({ className = "" }) => (
  <div className={`panel-brand ${className}`}>
    <img src="/blazebyte-logo.jpg" alt="BlazeByte Studio" style={{ maxWidth: '100px', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(0, 210, 255, 0.3))' }} />
  </div>
);

const FloatingHumanoid = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 40;
      const y = (e.clientY - top - height / 2) / 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="ecosystem-container" ref={containerRef}>
      
      {/* 
        =========================================
        TERTIARY BACKGROUND LAYER
        =========================================
      */}
      {/* Floating Project Preview 1 (Background) */}
      <motion.div 
        className="floating-artifact bg-artifact-1"
        animate={{ y: [-15, 15, -15], rotateZ: -5, rotateX: mousePosition.y * 0.5, rotateY: mousePosition.x * 0.5 }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/proj_realestate.png" alt="Real Estate Project" className="artifact-image" />
        <div className="artifact-glass"></div>
      </motion.div>

      {/* Floating Project Preview 2 (Background) */}
      <motion.div 
        className="floating-artifact bg-artifact-2"
        animate={{ y: [10, -10, 10], rotateZ: 8, rotateX: mousePosition.y * 0.3, rotateY: mousePosition.x * 0.3 }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <img src="/proj_dashboard.png" alt="Dashboard Project" className="artifact-image" />
        <div className="artifact-glass"></div>
      </motion.div>

      {/* Analytics Mini-Panel (Background) */}
      <motion.div 
        className="ui-panel tertiary-panel analytics-panel"
        animate={{ y: [-10, 10, -10], rotateX: mousePosition.y * 0.5, rotateY: mousePosition.x * 0.5, rotateZ: -2 }}
        transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div className="panel-body compact">
          <div className="chart-bar-container mini">
            {[40, 65, 30, 85, 55].map((h, i) => (
              <motion.div key={i} className="chart-bar" style={{ height: `${h}%` }} animate={{ height: [`${h * 0.8}%`, `${h}%`, `${h * 0.8}%`] }} transition={{ duration: 3 + i, repeat: Infinity }} />
            ))}
          </div>
        </div>
      </motion.div>


      {/* 
        =========================================
        PRIMARY CENTER LAYER 
        =========================================
      */}
      <motion.div
        className="center-entity humanoid-entity"
        animate={{ y: [-10, 10, -10], rotateX: mousePosition.y * 1, rotateY: mousePosition.x * 1 }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      >
        <img src="/humanoid.png" alt="Futuristic AI Humanoid" className="entity-image humanoid-img" />
      </motion.div>

      {/* FUTURISTIC LAPTOP */}
      <motion.div
        className="center-entity laptop-entity"
        animate={{ y: [10, -10, 10], rotateX: mousePosition.y * 1.5 + 5, rotateY: mousePosition.x * 1.5 - 10 }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
      >
        <img src="/laptop.png" alt="Futuristic Workstation Laptop" className="entity-image laptop-img" />
        <div className="laptop-screen-overlay">
          <div className="laptop-screen-glow">
            <BrandLogo />
            <div className="screen-status pulse-text">BB_OS // ONLINE</div>
          </div>
        </div>
      </motion.div>


      {/* 
        =========================================
        SECONDARY MIDGROUND PANELS (MAJOR UI)
        =========================================
      */}
      
      {/* 01 - AI COMMAND INTERFACE */}
      <motion.div 
        className="ui-panel major-panel ai-panel"
        animate={{ y: [-20, 20, -20], rotateX: mousePosition.y * 1.2, rotateY: mousePosition.x * 1.2, rotateZ: 5 }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
      >
        <div className="panel-header">
          <Activity size={14} className="panel-icon orange" />
          <span>NEURAL_CORE // AUTOMATION</span>
        </div>
        <div className="panel-body">
          <div className="neural-network">
            <svg viewBox="0 0 200 100" className="neural-svg">
              <path d="M20 50 Q 80 10 100 50 T 180 50" stroke="rgba(255, 75, 31, 0.5)" fill="none" strokeWidth="2" className="data-stream" />
              <path d="M20 50 Q 80 90 100 50 T 180 50" stroke="rgba(0, 210, 255, 0.5)" fill="none" strokeWidth="2" className="data-stream-slow" />
              <circle cx="20" cy="50" r="4" fill="#00d2ff" />
              <circle cx="100" cy="50" r="6" fill="#ff4b1f" className="pulse-node" />
              <circle cx="180" cy="50" r="4" fill="#00d2ff" />
            </svg>
          </div>
          <div className="diagnostics">
            <div className="diag-line"><span>TRIGGER</span> <span className="blue">ACTIVE</span></div>
            <div className="diag-line"><span>PROCESS</span> <span className="orange pulse-text">ROUTING</span></div>
          </div>
        </div>
      </motion.div>

      {/* 02 - DIGITAL MARKETING DASHBOARD */}
      <motion.div 
        className="ui-panel major-panel marketing-panel"
        animate={{ y: [15, -15, 15], rotateX: mousePosition.y * 1.3, rotateY: mousePosition.x * 1.3, rotateZ: -6 }}
        transition={{ y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
      >
        <div className="panel-header">
          <TrendingUp size={14} className="panel-icon blue" />
          <span>SOCIAL_SYS // GROWTH</span>
        </div>
        <div className="panel-body">
          <div className="marketing-metrics">
            <div className="metric-box">
              <span className="metric-title">ENGAGEMENT</span>
              <span className="metric-number green">+42.8%</span>
            </div>
            <div className="metric-box">
              <span className="metric-title">REACH</span>
              <span className="metric-number blue">1.2M</span>
            </div>
          </div>
          <div className="social-feed-preview">
            <div className="post-skeleton"><div className="avatar"/><div className="lines"><div className="line"/><div className="line short"/></div></div>
            <div className="post-skeleton"><div className="avatar"/><div className="lines"><div className="line"/><div className="line short"/></div></div>
          </div>
        </div>
      </motion.div>

      {/* 03 - UI/UX DESIGN SCREENS (Tertiary midground) */}
      <motion.div 
        className="ui-screens-container"
        animate={{ y: [-10, 15, -10], rotateX: mousePosition.y * 1.4, rotateY: mousePosition.x * 1.4, rotateZ: 12 }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <div className="mobile-screen-wireframe">
          <div className="screen-header"></div>
          <div className="screen-hero"></div>
          <div className="screen-grid"><div/><div/><div/><div/></div>
        </div>
        <div className="mobile-screen-wireframe offset">
          <Smartphone size={24} className="blue" style={{ opacity: 0.5, margin: 'auto' }} />
        </div>
      </motion.div>


      {/* 
        =========================================
        TERTIARY FOREGROUND LAYER (Closest)
        =========================================
      */}
      {/* 04 - CODE / DEVELOPMENT INTERFACE */}
      <motion.div 
        className="ui-panel major-panel code-panel"
        animate={{ y: [-20, 20, -20], rotateX: mousePosition.y * 1.8, rotateY: mousePosition.x * 1.8, rotateZ: 8 }}
        transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 } }}
      >
        <div className="panel-header">
          <Terminal size={14} className="panel-icon blue" />
          <span>DEV_TERMINAL // BUILD</span>
        </div>
        <div className="panel-body code-body">
          <pre className="code-block">
            <span className="code-keyword">const</span> <span className="code-var">deploy</span> = <span className="code-keyword">async</span> () <span className="code-keyword">=&gt;</span> {'{'}
            <br/>&nbsp;&nbsp;<span className="code-keyword">await</span> Network.sync();
            <br/>&nbsp;&nbsp;console.log(<span className="code-string">"LIVE"</span>);
            <br/>{'}'};
          </pre>
        </div>
      </motion.div>

      {/* Floating Project Preview 3 (Foreground) */}
      <motion.div 
        className="floating-artifact fg-artifact-1"
        animate={{ y: [20, -20, 20], rotateZ: -15, rotateX: mousePosition.y * 2, rotateY: mousePosition.x * 2 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <img src="/proj_ai.png" alt="AI Project Preview" className="artifact-image" />
        <div className="artifact-glass"></div>
      </motion.div>

    </div>
  );
};

export default FloatingHumanoid;
