import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { id: 'portfolio', label: 'Work', href: '#portfolio' },
  { id: 'services', label: 'Capabilities', href: '#services' },
  { id: 'about', label: 'Studio', href: '#about' },
  { id: 'engine', label: 'Process', href: '#engine' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'portfolio', 'services', 'about', 'engine', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: [0.1, 0.5] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard Escape listener for Mobile Menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="navbar-brand" onClick={(e) => handleSmoothScroll(e, '#hero')}>
            <span className="brand-title">BLAZEBYTE</span>
            <span className="brand-dot"></span>
            <span className="brand-subtitle">STUDIO</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-links desktop-only">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="navbar-actions desktop-only">
            <a
              href="#contact"
              className="btn-nav-cta"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              START A PROJECT <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mobile-menu-content">
              <div className="mobile-menu-links">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    <span className="mobile-nav-num">0{idx + 1}</span>
                    <span className="mobile-nav-label">{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a
                  href="#contact"
                  className="btn-primary mobile-cta-btn"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  START A PROJECT <ArrowUpRight size={18} />
                </a>
                <div className="mobile-contact-info">
                  <p>blazebytestudio7@gmail.com</p>
                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
