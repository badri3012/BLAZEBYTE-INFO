import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact/Contact';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="page-contact" style={{ paddingTop: '5rem' }}>
      {/* Hero Header */}
      <section className="page-hero-section section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // INITIATE
            </div>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              START A PROJECT &<br />
              DIRECT CHANNEL
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px' }}>
              Send us your project brief or inquiry below. We respond promptly with initial recommendations, timeline estimation, and next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form Component */}
      <Contact />

      {/* Direct Contact & Studio Info Banner */}
      <section className="direct-contact-section section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="direct-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="editorial-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Mail size={22} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>DIRECT EMAIL</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                For general inquiries, RFPs, or direct partnership specs:
              </p>
              <a href="mailto:blazebytestudio7@gmail.com" style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-primary)', fontSize: '1rem', textDecoration: 'none' }}>
                blazebytestudio7@gmail.com
              </a>
            </div>

            <div className="editorial-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <MapPin size={22} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>STUDIO LOCATION</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                Coimbatore, Tamil Nadu, India
              </p>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Serving clients across India, West Africa, North America, and globally.
              </p>
            </div>

            <div className="editorial-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <ShieldCheck size={22} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>REGISTERED ENTERPRISE</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                Registered MSME: <strong>BLAZE BYTE STUDIO</strong>
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '700' }}>
                UDYAM: UDYAM-TN-03-0334061
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
