import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, LayoutGrid, Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './Engine.css';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    description: 'Understand the business, audience, competitive landscape and commercial objective.',
    icon: <Search size={20} aria-hidden="true" />,
  },
  {
    num: '02',
    title: 'DEFINE',
    description: 'Establish clear technical requirements, project scope, architecture and design direction.',
    icon: <Target size={20} aria-hidden="true" />,
  },
  {
    num: '03',
    title: 'DESIGN',
    description: 'Create the high-fidelity visual identity, layout hierarchy and user experience system.',
    icon: <LayoutGrid size={20} aria-hidden="true" />,
  },
  {
    num: '04',
    title: 'BUILD',
    description: 'Develop the approved solution using modern, responsive, and performance-optimized code.',
    icon: <Terminal size={20} aria-hidden="true" />,
  },
  {
    num: '05',
    title: 'REVIEW',
    description: 'Rigorously test across devices, refine interactions, optimize speed and validate functionality.',
    icon: <ShieldCheck size={20} aria-hidden="true" />,
  },
  {
    num: '06',
    title: 'LAUNCH',
    description: 'Deploy to high-performance production infrastructure, hand over assets and provide ongoing support.',
    icon: <ArrowUpRight size={20} aria-hidden="true" />,
  },
];

const Engine = () => {
  return (
    <section className="engine-section section-padding" id="engine">
      <div className="container">
        {/* Header */}
        <div className="engine-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // PROCESS
          </div>
          <h2 className="section-title">THE BLAZEBYTE ENGINE</h2>
          <p className="section-subtitle">
            A disciplined six-stage methodology engineered to deliver technical precision, clear commercial direction, and reliable project execution.
          </p>
        </div>

        {/* Process Flow Line Container */}
        <div className="engine-flow-container">
          <div className="engine-connecting-line"></div>

          <div className="engine-steps-grid">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                className="engine-step-card editorial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="step-num-badge">
                  <span className="step-num">{step.num}</span>
                  <div className="step-icon-box">
                    {step.icon}
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engine;
