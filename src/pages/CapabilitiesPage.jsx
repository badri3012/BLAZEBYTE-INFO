import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services/Services';
import TechStack from '../components/TechStack/TechStack';
import { useRouter } from '../router/Router';
import { ArrowUpRight } from 'lucide-react';

const CapabilitiesPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="page-capabilities" style={{ paddingTop: '5rem' }}>
      {/* Hero Header */}
      <section className="page-hero-section section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // CAPABILITIES
            </div>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              CORE CAPABILITIES &<br />
              TECHNICAL ARCHITECTURE
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px' }}>
              We combine editorial visual design, robust full-stack engineering, and commercial growth strategy across four primary service disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Services Component */}
      <Services preview={false} />

      {/* Tech Stack Component */}
      <TechStack />

      {/* CTA Footer */}
      <section className="page-cta-section section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="section-badge-dot"></span> DISCUSS YOUR TECHNICAL NEEDS
          </div>
          <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
            NEED A TAILORED SOLUTION?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Tell us about your technical requirements and business targets. We will outline the optimal scope and architecture.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            START A PROJECT <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;
