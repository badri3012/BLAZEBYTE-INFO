import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import WhyUs from '../components/WhyUs/WhyUs';
import BlazeByteHub from '../components/BlazeByteHub/BlazeByteHub';
import { useRouter } from '../router/Router';
import { ArrowUpRight } from 'lucide-react';

const StudioPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="page-studio" style={{ paddingTop: '5rem' }}>
      {/* Hero Header */}
      <section className="page-hero-section section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // STUDIO & TEAM
            </div>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              INTELLECTUAL RIGOR.<br />
              REGISTERED ENTERPRISE.
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px' }}>
              Learn more about BlazeByte Studio — a registered MSME digital experience and technology enterprise based in Coimbatore, India, driven by dedicated specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verified Business & Studio Overview */}
      <About preview={false} />

      {/* 6-Member Team Section (Includes Praneeth Kumar) */}
      <Team />

      {/* Operational Principles */}
      <WhyUs />

      {/* Proprietary Product Showcase: BlazeByte Hub */}
      <BlazeByteHub />

      {/* CTA Footer */}
      <section className="page-cta-section section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="section-badge-dot"></span> WORK WITH BLAZEBYTE STUDIO
          </div>
          <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
            READY TO ELEVATE YOUR BRAND?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Partner directly with our team of designers, engineers, and specialists. No intermediate account fluff.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            START A PROJECT <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;
