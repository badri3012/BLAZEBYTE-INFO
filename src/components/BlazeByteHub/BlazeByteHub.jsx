import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FolderKanban, CheckSquare, ShieldCheck, Users } from 'lucide-react';
import './BlazeByteHub.css';

const hubTabs = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={16} /> },
  { id: 'projects', label: 'Project Pipeline', icon: <FolderKanban size={16} /> },
  { id: 'tasks', label: 'Sprint & Task Engine', icon: <CheckSquare size={16} /> },
  { id: 'skills', label: 'Skill & Team Matrix', icon: <Users size={16} /> },
];

const techStack = ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Authentication', 'RBAC'];

const BlazeByteHub = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="hub-section section-padding" id="hub">
      <div className="container">
        {/* Header */}
        <div className="hub-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> PROPRIETARY DIGITAL PRODUCT
          </div>
          <h2 className="section-title">BUILT BY US.</h2>
          <h3 className="hub-product-name">BLAZEBYTE HUB</h3>
          <p className="section-subtitle">
            BlazeByte Hub is an internal digital platform created to manage projects, tasks, learning, skills, performance and team operations.
          </p>
        </div>

        {/* Hub Interactive Dashboard Preview Surface */}
        <div className="hub-dashboard-surface">
          {/* Top Bar / Tab Controls */}
          <div className="surface-topbar">
            <div className="surface-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="surface-title-badge">
              <ShieldCheck size={14} className="shield-icon" /> BLAZEBYTE HUB v2.4 // ENTERPRISE CORE
            </div>
            <div className="surface-tabs">
              {hubTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`surface-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="surface-body">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                className="tab-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="dashboard-grid">
                  <div className="dash-card stat-box">
                    <span className="dash-label">ACTIVE CLIENT PROJECTS</span>
                    <span className="dash-value">12</span>
                    <span className="dash-sub green">+3 Delivered this month</span>
                  </div>
                  <div className="dash-card stat-box">
                    <span className="dash-label">SPRINT COMPLETION RATE</span>
                    <span className="dash-value">98.4%</span>
                    <span className="dash-sub">On-time milestone delivery</span>
                  </div>
                  <div className="dash-card stat-box">
                    <span className="dash-label">TEAM SKILL CAPACITY</span>
                    <span className="dash-value">Full Stack</span>
                    <span className="dash-sub">React / Next.js / Python</span>
                  </div>
                  <div className="dash-card stat-box">
                    <span className="dash-label">SYSTEM UPTIME</span>
                    <span className="dash-value">99.99%</span>
                    <span className="dash-sub green">Server Status Nominal</span>
                  </div>

                  <div className="dash-card full-width-card">
                    <div className="card-head">
                      <h4>LIVE OPERATIONS PIPELINE</h4>
                      <span className="tag">REAL-TIME</span>
                    </div>
                    <div className="pipeline-rows">
                      <div className="pipe-row">
                        <span className="pipe-name">Andy Foods GH — Digital Storefront</span>
                        <span className="pipe-status status-green">Completed & Live</span>
                        <span className="pipe-tech">Next.js • Tailwind</span>
                      </div>
                      <div className="pipe-row">
                        <span className="pipe-name">VitaGold Kitchen — Hospitality Platform</span>
                        <span className="pipe-status status-green">Completed & Live</span>
                        <span className="pipe-tech">React • Node.js</span>
                      </div>
                      <div className="pipe-row">
                        <span className="pipe-name">BlazeByte Realty — Property Engine</span>
                        <span className="pipe-status status-blue">In Development</span>
                        <span className="pipe-tech">WebGL • PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                className="tab-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tab-placeholder-grid">
                  <div className="dash-card">
                    <h4>MILESTONE TRACKING</h4>
                    <p>Granular sprint tracking, requirement specs, and deliverable handovers mapped against target deadlines.</p>
                  </div>
                  <div className="dash-card">
                    <h4>RBAC PERMISSIONS</h4>
                    <p>Role-based access control protecting client data, internal repositories, and deployment keys.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && (
              <motion.div
                key="tasks"
                className="tab-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tab-placeholder-grid">
                  <div className="dash-card">
                    <h4>KANBAN SPRINT BOARD</h4>
                    <p>Agile task management with priority tagging, code review bottlenecks, and continuous integration triggers.</p>
                  </div>
                  <div className="dash-card">
                    <h4>AUTOMATED NOTIFICATIONS</h4>
                    <p>Automated Slack and Email alerts upon task completion, client feedback, and staging server updates.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                className="tab-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tab-placeholder-grid">
                  <div className="dash-card">
                    <h4>ENGINEERING SKILL MATRIX</h4>
                    <p>Continuous learning logs, framework certifications, and skill mapping across full-stack & AI automation disciplines.</p>
                  </div>
                  <div className="dash-card">
                    <h4>RESOURCE ALLOCATION</h4>
                    <p>Dynamic capacity planning to ensure developers and designers are allocated effectively without burnout.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Tech Bar */}
          <div className="surface-footer">
            <span className="tech-footer-label">ENGINEERED WITH:</span>
            <div className="hub-tech-tags">
              {techStack.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="hub-footnote">
          The purpose of BlazeByte Hub is to demonstrate that BlazeByte Studio does not only design websites — it can engineer complete digital systems.
        </p>
      </div>
    </section>
  );
};

export default BlazeByteHub;
