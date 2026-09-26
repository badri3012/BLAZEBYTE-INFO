import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Workflow } from 'lucide-react';
import './TechStack.css';

// Crisp, lightweight vector SVG marks for tech stack brands
const NextIcon = () => (
  <svg width="22" height="22" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="90" cy="90" r="90" fill="#111315" />
    <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V70.3641L136.979 161.182C141.38 160.169 145.578 158.94 149.508 157.52Z" fill="white" />
    <path d="M125 54H138V126H125V54Z" fill="white" />
  </svg>
);

const ReactIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="8" fill="#00d8ff" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#00d8ff" strokeWidth="4" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#00d8ff" strokeWidth="4" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#00d8ff" strokeWidth="4" transform="rotate(120 50 50)" />
  </svg>
);

const TSIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="100" height="100" rx="16" fill="#3178C6" />
    <path d="M28 35H56M42 35V75M60 48C60 44 65 42 72 42C80 42 85 46 85 52C85 64 60 62 60 72C60 78 68 80 75 80C83 80 88 76 88 70" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 10L88 32V76L50 98L12 76V32L50 10Z" stroke="#5FA04E" strokeWidth="7" strokeLinejoin="round" />
    <path d="M50 50V98M50 50L88 32M50 50L12 32" stroke="#5FA04E" strokeWidth="5" />
  </svg>
);

const PostgresIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="50" cy="30" rx="36" ry="14" stroke="#336791" strokeWidth="6" />
    <path d="M14 30V52C14 60 30 66 50 66C70 66 86 60 86 52V30" stroke="#336791" strokeWidth="6" />
    <path d="M14 52V74C14 82 30 88 50 88C70 88 86 82 86 74V52" stroke="#336791" strokeWidth="6" />
  </svg>
);

const PrismaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 82L45 16L82 72L22 82Z" stroke="#2D3748" strokeWidth="6" strokeLinejoin="round" />
    <path d="M45 16L82 72" stroke="#5B5CE2" strokeWidth="6" />
  </svg>
);

const SupabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M54 10L14 58H46L38 90L86 38H50L54 10Z" fill="#3ECF8E" />
  </svg>
);

const TailwindIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M25 45C30 35 38 32 45 37C48 39 50 43 53 47C58 53 64 60 75 60C85 60 92 48 95 40C90 50 82 53 75 48C72 46 70 42 67 38C62 32 56 25 45 25C35 25 28 37 25 45Z" fill="#38BDF8" />
    <path d="M5 70C10 60 18 57 25 62C28 64 30 68 33 72C38 78 44 85 55 85C65 85 72 73 75 65C70 75 62 78 55 73C52 71 50 67 47 63C42 57 36 50 25 50C15 50 8 62 5 70Z" fill="#38BDF8" />
  </svg>
);

const stackItems = [
  { name: 'Next.js', category: 'Frontend Framework', type: 'Core', icon: <NextIcon /> },
  { name: 'React', category: 'UI Engineering', type: 'Core', icon: <ReactIcon /> },
  { name: 'TypeScript', category: 'Type-Safe Logic', type: 'Core', icon: <TSIcon /> },
  { name: 'Node.js', category: 'Backend Runtime', type: 'Server', icon: <NodeIcon /> },
  { name: 'PostgreSQL', category: 'Relational Database', type: 'Data', icon: <PostgresIcon /> },
  { name: 'Prisma', category: 'ORM & Schema', type: 'Data', icon: <PrismaIcon /> },
  { name: 'Supabase', category: 'BaaS & Auth', type: 'Cloud', icon: <SupabaseIcon /> },
  { name: 'Tailwind CSS', category: 'Styling System', type: 'UI', icon: <TailwindIcon /> },
  { name: 'AI Workflows', category: 'Intelligent APIs', type: 'Automation', icon: <Sparkles size={22} className="tech-lucide-icon" aria-hidden="true" /> },
  { name: 'Automation', category: 'Webhook Infrastructure', type: 'Automation', icon: <Workflow size={22} className="tech-lucide-icon" aria-hidden="true" /> },
];

const TechStack = () => {
  return (
    <section className="tech-section section-padding" id="tech">
      <div className="container">
        {/* Header */}
        <div className="tech-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // ARCHITECTURE
          </div>
          <h2 className="section-title">MODERN STACK.<br />PRACTICAL ENGINEERING.</h2>
          <p className="section-subtitle">
            Technology serves the business. Technology is not the product itself.
          </p>
        </div>

        {/* Stack Modular Grid */}
        <div className="tech-grid">
          {stackItems.map((item, idx) => (
            <motion.div
              key={item.name}
              className="tech-card editorial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="tech-card-top">
                <div className="tech-icon-wrapper" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="tech-type-tag">{item.type}</span>
              </div>
              <h3 className="tech-name">{item.name}</h3>
              <p className="tech-cat">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
