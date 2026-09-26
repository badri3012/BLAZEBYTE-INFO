import React from 'react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const principles = [
  {
    num: '01',
    title: 'BUSINESS FIRST',
    description: 'Every project starts with the commercial objective, audience behavior, and measurable business outcomes.',
  },
  {
    num: '02',
    title: 'CUSTOM BY DESIGN',
    description: 'Solutions are engineered around the brand identity and workflow instead of forcing a generic template.',
  },
  {
    num: '03',
    title: 'CLEAR SCOPE',
    description: 'Deliverables, milestones, technical specs, and commercial terms are clearly defined before production begins.',
  },
  {
    num: '04',
    title: 'ENGINEERED TO SCALE',
    description: 'We construct digital architecture with future integrations, marketing campaigns, and business growth in mind.',
  },
  {
    num: '05',
    title: 'LONG-TERM SUPPORT',
    description: 'Launch is not the end of the relationship. We provide performance monitoring, updates, and ongoing technical support.',
  },
];

const WhyUs = () => {
  return (
    <section className="whyus-section section-padding" id="whyus">
      <div className="container">
        {/* Header */}
        <div className="whyus-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // PHILOSOPHY
          </div>
          <h2 className="section-title">BUILT AROUND THE BUSINESS.</h2>
          <p className="section-subtitle">
            Five operational principles that govern how we design, build, and deliver digital technology for clients.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="principles-grid">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              className="principle-card editorial-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <span className="p-num">{p.num}</span>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-desc">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
