import React from 'react';
import { motion } from 'framer-motion';
import Engine from '../components/Engine/Engine';
import { useRouter } from '../router/Router';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const processDetails = [
  {
    stage: '01 DISCOVER',
    title: 'Research & Stakeholder Alignment',
    summary: 'We dive deep into your business model, target audience, competitive landscape, and commercial KPIs.',
    deliverables: ['Commercial Requirement Specs', 'Audience & Competitor Mapping', 'Strategic Project Roadmap'],
  },
  {
    stage: '02 DEFINE',
    title: 'Architecture & Technical Scope',
    summary: 'We structure the content wireframes, tech stack selection, database schema, and project milestones.',
    deliverables: ['Wireframe Blueprints', 'Technical Architecture Specs', 'Fixed Scope & Schedule'],
  },
  {
    stage: '03 DESIGN',
    title: 'Editorial Identity & UI/UX System',
    summary: 'We craft high-fidelity visual layouts, typographic scales, micro-interactions, and design systems.',
    deliverables: ['High-Fidelity Figma Layouts', 'Interactive Prototypes', 'Design System & Component Specs'],
  },
  {
    stage: '04 BUILD',
    title: 'Custom Clean Code Production',
    summary: 'We engineer responsive, accessible, high-performance web applications using modern full-stack code.',
    deliverables: ['Production Next.js / React Code', 'Clean API & Database Integration', 'SEO & Analytics Foundation'],
  },
  {
    stage: '05 REVIEW',
    title: 'QA, Speed & Security Validation',
    summary: 'We execute thorough cross-device testing, speed audits, security validation, and client reviews.',
    deliverables: ['Lighthouse 90+ Audit Pass', 'Responsive Device Verification', 'Staging Link Client Demo'],
  },
  {
    stage: '06 LAUNCH',
    title: 'Deployment & Ongoing Scaling',
    summary: 'We push to production cloud infrastructure, configure custom domains, hand over documentation, and provide ongoing support.',
    deliverables: ['Production Vercel / Cloud Deploy', 'Asset & Code Handover', 'Post-Launch Maintenance Support'],
  },
];

const ProcessPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="page-process" style={{ paddingTop: '5rem' }}>
      {/* Hero Header */}
      <section className="page-hero-section section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // METHODOLOGY
            </div>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              THE BLAZEBYTE ENGINE:<br />
              PRECISION METHODOLOGY
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px' }}>
              A disciplined, transparent six-stage execution framework designed to ensure zero scope creep, timely delivery, and exceptional technical quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Engine Component Flow */}
      <Engine preview={false} />

      {/* Detailed Process Deliverables Breakdown */}
      <section className="process-details-section section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="services-header" style={{ marginBottom: '3.5rem' }}>
            <div className="section-badge">
              <span className="section-badge-dot"></span> STAGE DELIVERABLES & QUALITY GATES
            </div>
            <h2 className="section-title">GRANULAR STAGE BREAKDOWN</h2>
            <p className="section-subtitle">
              Every stage of The BlazeByte Engine features clear quality gates and tangible client deliverables.
            </p>
          </div>

          <div className="process-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {processDetails.map((item, idx) => (
              <motion.div
                key={item.stage}
                className="editorial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800', color: 'var(--accent-primary)' }}>
                    {item.stage}
                  </span>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1.5rem' }}>
                  {item.summary}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                    KEY DELIVERABLES:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.deliverables.map((deliv, i) => (
                      <li key={i} style={{ fontSize: '0.825rem', fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                        {deliv}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="page-cta-section section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="section-badge-dot"></span> READY TO EXECUTE
          </div>
          <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
            READY TO START STAGE 01?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Initiate a project brief today and we will prepare a discovery roadmap for your business.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            START A PROJECT <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
