import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useRouter } from '../../router/Router';
import './Footer.css';

const Footer = () => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e, href) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <a href="/" className="footer-brand" onClick={(e) => handleNav(e, '/')}>
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
              <li><a href="/work" onClick={(e) => handleNav(e, '/work')}>Work</a></li>
              <li><a href="/capabilities" onClick={(e) => handleNav(e, '/capabilities')}>Capabilities</a></li>
              <li><a href="/studio" onClick={(e) => handleNav(e, '/studio')}>Studio</a></li>
              <li><a href="/process" onClick={(e) => handleNav(e, '/process')}>Process</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')}>Contact</a></li>
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
