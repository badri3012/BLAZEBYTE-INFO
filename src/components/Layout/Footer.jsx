import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
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
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <a href="#hero" className="footer-brand" onClick={(e) => handleSmoothScroll(e, '#hero')}>
              BLAZEBYTE STUDIO
            </a>
            <p className="footer-tagline">
              Digital Experiences • Technology • Growth
            </p>
            <p className="footer-desc">
              Designing and engineering high-performance websites, digital products, and practical business automation for ambitious companies worldwide.
            </p>
          </div>

          {/* Nav Col */}
          <div className="footer-col nav-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Work</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Capabilities</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>Studio</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Info Col */}
          <div className="footer-col info-col">
            <h4 className="footer-heading">DIRECT CHANNEL</h4>
            <p className="footer-email">
              <a href="mailto:blazebytestudio7@gmail.com">blazebytestudio7@gmail.com</a>
            </p>

            <h4 className="footer-heading mt-4">STUDIO LOCATION</h4>
            <p className="footer-loc">Coimbatore, Tamil Nadu, India</p>

            <div className="reg-badge">
              <span>Registered Enterprise: BLAZE BYTE STUDIO</span><br />
              <span>UDYAM: UDYAM-TN-03-0334061</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 BlazeByte Studio. All rights reserved.</p>

          <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Back to Top">
            BACK TO TOP <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
