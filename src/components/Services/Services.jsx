import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, TrendingUp, Bot, ArrowRight } from 'lucide-react';
import { useRouter } from '../../router/Router';
import './Services.css';

const capabilities = [
  {
    num: '01',
    title: 'DIGITAL EXPERIENCES',
    subtitle: 'Brand-Led Websites & Landing Platforms',
    description: 'Premium business websites, landing pages and brand-led digital experiences designed to position your company at the top of your industry.',
    icon: <Layout size={24} />,
    deliverables: ['Custom Web Engineering', 'Editorial Design & UI/UX', 'Performance Optimization', 'Brand Identity Systems']
  },
  {
    num: '02',
    title: 'DIGITAL PRODUCTS',
    subtitle: 'Custom Web Apps & Operational Systems',
    description: 'Dashboards, portals, internal systems and custom web applications built with modern full-stack architecture for seamless business operations.',
    icon: <Cpu size={24} />,
    deliverables: ['SaaS & Web Applications', 'Admin Dashboards', 'Internal Operations Portals', 'API & Database Architecture']
  },
  {
    num: '03',
    title: 'GROWTH SYSTEMS',
    subtitle: 'Marketing & Conversion Infrastructure',
    description: 'Digital marketing, content systems, lead generation and campaign infrastructure designed around measurable commercial objectives.',
    icon: <TrendingUp size={24} />,
    deliverables: ['Conversion Rate Optimization', 'Campaign Infrastructure', 'SEO & Analytics Architecture', 'Lead Routing Systems']
  },
  {
    num: '04',
    title: 'AI & AUTOMATION',
    subtitle: 'Intelligent Workflow Automation',
    description: 'Intelligent workflows and business automation designed around real operational needs to eliminate friction and scale capacity.',
    icon: <Bot size={24} />,
    deliverables: ['Custom AI Integrations', 'Operational Workflow Automation', 'CRM & ERP Pipeline Sync', 'Automated Customer Channels']
  }
];

const Services = ({ preview = false }) => {
  const { navigate } = useRouter();

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // CAPABILITIES
          </div>
          <h2 className="section-title">WHAT WE BUILD</h2>
          <p className="section-subtitle">
            We focus on four core capabilities that combine design discipline, practical engineering, and commercial growth.
          </p>
        </div>

        {/* 4 Capabilities Rows/Cards */}
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.num}
              className="capability-card editorial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="cap-card-header">
                <span className="cap-number">{cap.num}</span>
                <div className="cap-icon-box">{cap.icon}</div>
              </div>

              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-subtitle">{cap.subtitle}</p>
              <p className="cap-desc">{cap.description}</p>

              <div className="cap-deliverables">
                <span className="deliverables-heading">DELIVERABLES:</span>
                <div className="deliverables-list">
                  {cap.deliverables.map((item, i) => (
                    <span key={i} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Footer CTA */}
        {preview && (
          <div className="services-preview-footer" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn-primary"
              onClick={() => navigate('/capabilities')}
            >
              VIEW ALL CAPABILITIES <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
