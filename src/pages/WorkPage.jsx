import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio/Portfolio';
import { useRouter } from '../router/Router';
import { ArrowUpRight } from 'lucide-react';

const WorkPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="page-work" style={{ paddingTop: '5rem' }}>
      {/* Page Hero Header */}
      <section className="page-hero-section section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // PORTFOLIO
            </div>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              SELECTED WORK &<br />
              DIGITAL PRODUCTS
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '680px' }}>
              Explore our full portfolio of high-converting websites, hospitality platforms, custom digital products, and production concepts engineered for client growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Portfolio Grid with Filters & Case Study Modal */}
      <Portfolio preview={false} />

      {/* CTA Footer */}
      <section className="page-cta-section section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="section-badge-dot"></span> START A CONVERSATION
          </div>
          <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
            LIKE WHAT YOU SEE?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            We work with ambitious founders and brands to craft bespoke digital experiences and scalable technology platforms.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            START YOUR PROJECT <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
