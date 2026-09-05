import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

// --- MAGNETIC DESKTOP LINK ---
const MagneticLink = ({ href, children, isActive, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Max displacement of 8px
    const distanceX = (e.clientX - centerX) * 0.2;
    const distanceY = (e.clientY - centerY) * 0.2;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a 
      href={href} 
      className={`nav-link ${isActive ? 'active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div 
          className="nav-link-indicator" 
          layoutId="activeNavIndicator" 
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.a>
  );
};

// --- MOBILE MATRIX OVERLAY ---
const navItems = [
  { id: 'hero', num: '01', title: 'HOME', meta: 'INITIATION SEQUENCE', href: '#hero' },
  { id: 'about', num: '02', title: 'ABOUT', meta: 'BLAZEBYTE CORE SYSTEM', href: '#about' },
  { id: 'services', num: '03', title: 'SERVICES', meta: 'CAPABILITY MATRIX', href: '#services' },
  { id: 'portfolio', num: '04', title: 'PORTFOLIO', meta: 'DIGITAL PROJECT ARCHIVE', href: '#portfolio' },
  { id: 'team', num: '05', title: 'COLLECTIVE', meta: 'IDENTITY NETWORK', href: '#team' },
  { id: 'contact', num: '06', title: 'CONTACT', meta: 'TRANSMISSION TERMINAL', href: '#contact' },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 }
  },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const MobileMatrixOverlay = ({ isOpen, onClose, activeSection }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mobile-matrix-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Ambient Particles / Lines */}
          <div className="matrix-bg-lines">
            <div className="matrix-line line-1"></div>
            <div className="matrix-line line-2"></div>
            <div className="matrix-line line-3"></div>
          </div>

          <div className="matrix-header">
            <div className="matrix-system-label">
              <span className="status-dot-small"></span> SYSTEM MATRIX ONLINE
            </div>
            <button className="matrix-close-btn" onClick={onClose} aria-label="Close Menu">
              <X size={28} color="#fff" />
            </button>
          </div>

          <div className="matrix-content">
            {navItems.map((item) => (
              <motion.a 
                key={item.id}
                href={item.href} 
                className={`matrix-nav-item ${activeSection === item.id ? 'active' : ''}`}
                variants={itemVariants}
                onClick={onClose}
              >
                <div className="matrix-nav-num">{item.num} //</div>
                <div className="matrix-nav-text">
                  <span className="matrix-nav-title">{item.title}</span>
                  <span className="matrix-nav-meta">{item.meta}</span>
                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll detection for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for Active Section Spy
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'portfolio', 'team', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      // Find the entry that is intersecting the most in the viewport
      let intersectingEntries = entries.filter(entry => entry.isIntersecting);
      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio to get the most visible one
        intersectingEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(intersectingEntries[0].target.id);
      }
    }, {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when section is in top 40% of viewport
      threshold: [0, 0.1, 0.5, 1.0]
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Body Scroll Lock for Mobile Menu
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen]);

  // Smooth Scroll handler for Desktop Links
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container navbar-container">
          
          {/* Logo / Brand Module */}
          <a href="#hero" className="navbar-brand-module" onClick={(e) => handleSmoothScroll(e, '#hero')}>
            <div className="brand-module-content">
              <img src="/blazebyte-logo.jpg" alt="BlazeByte Studio" className="brand-module-logo" />
              <div className="brand-module-status">
                <span className="status-dot-small"></span>
                <span className="status-text-small">SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="brand-module-scanline"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop-only">
            <MagneticLink href="#about" isActive={activeSection === 'about'} onClick={(e) => handleSmoothScroll(e, '#about')}>About</MagneticLink>
            <MagneticLink href="#services" isActive={activeSection === 'services'} onClick={(e) => handleSmoothScroll(e, '#services')}>Services</MagneticLink>
            <MagneticLink href="#portfolio" isActive={activeSection === 'portfolio'} onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Portfolio</MagneticLink>
            <MagneticLink href="#team" isActive={activeSection === 'team'} onClick={(e) => handleSmoothScroll(e, '#team')}>Collective</MagneticLink>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta desktop-only">
            <MagneticLink href="#contact" isActive={activeSection === 'contact'} onClick={(e) => handleSmoothScroll(e, '#contact')}>
              <span className="nav-btn-inner">INITIATE</span>
            </MagneticLink>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Matrix"
          >
            <Menu size={28} color="#00d2ff" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Matrix Overlay */}
      <MobileMatrixOverlay 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        activeSection={activeSection} 
      />
    </>
  );
};

export default Navbar;
