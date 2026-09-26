import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, Award, ShieldCheck, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Editorial Copy */}
          <motion.div
            className="about-copy-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // ABOUT
            </div>
            <h2 className="section-title">THE STUDIO</h2>

            <p className="about-lead">
              BlazeByte Studio is a digital solutions studio based in Coimbatore, India, focused on professional websites, digital experiences and practical technology solutions for businesses.
            </p>

            <p className="about-body">
              We operate at the intersection of strategic brand identity, custom frontend architecture, and practical back-end integration. Every project we undertake is executed with architectural rigor, transparent scope, and commercial outcome in mind.
            </p>

            <div className="about-values">
              <div className="value-item">
                <span className="value-num">01</span>
                <div>
                  <h4>Zero Template Clutter</h4>
                  <p>Bespoke web solutions built line-by-line for high performance and unique brand positioning.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-num">02</span>
                <div>
                  <h4>Direct Engineering Access</h4>
                  <p>Work directly with product designers and engineers without intermediate account noise.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Business Information Card */}
          <motion.div
            className="about-info-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="business-card editorial-card">
              <div className="card-top-tag">
                <ShieldCheck size={16} className="accent-icon" /> VERIFIED STUDIO REGISTRATION
              </div>

              <h3 className="biz-name">BLAZE BYTE STUDIO</h3>
              <p className="biz-tagline">Digital Experiences • Technology • Growth</p>

              <div className="biz-details-list">
                <div className="biz-detail-row">
                  <div className="biz-detail-label">
                    <User size={15} /> FOUNDER
                  </div>
                  <div className="biz-detail-value">Badri Narayanan</div>
                </div>

                <div className="biz-detail-row">
                  <div className="biz-detail-label">
                    <Building2 size={15} /> ENTERPRISE CLASS
                  </div>
                  <div className="biz-detail-value">Micro Enterprise</div>
                </div>

                <div className="biz-detail-row">
                  <div className="biz-detail-label">
                    <Award size={15} /> UDYAM REGISTRATION
                  </div>
                  <div className="biz-detail-value mono">UDYAM-TN-03-0334061</div>
                </div>

                <div className="biz-detail-row">
                  <div className="biz-detail-label">
                    <MapPin size={15} /> LOCATION
                  </div>
                  <div className="biz-detail-value">Coimbatore, Tamil Nadu, India</div>
                </div>
              </div>

              <div className="biz-card-footer">
                <span className="status-indicator-dot"></span>
                <span>REGISTERED MSME UNIT • GOVERNMENT OF INDIA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
