import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Engine from '../components/Engine/Engine';
import { useRouter } from '../router/Router';

const Home = () => {
  const { navigate } = useRouter();

  return (
    <div className="page-home">
      <Hero />
      <Portfolio preview={true} />
      <Services preview={true} />
      <About preview={true} />
      <Engine preview={true} />

      {/* Home Final CTA Section */}
      <section className="home-cta-section section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> READY TO COLLABORATE
            </div>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
              Let’s discuss your objectives, technical requirements, and strategic deliverables. We build digital experiences engineered for growth.
            </p>
            <button
              className="btn-primary"
              style={{ fontSize: '0.9rem', padding: '14px 32px' }}
              onClick={() => navigate('/contact')}
            >
              START A PROJECT <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
