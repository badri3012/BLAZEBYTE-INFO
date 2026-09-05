import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity } from 'lucide-react';
import './Team.css';

const TeamCard = ({ member, delay }) => {
  const isFounder = member.id === 'BB-001';
  
  return (
    <motion.div 
      className={`team-card ${isFounder ? 'founder-card' : ''}`}
      initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <div className="id-badge">
        <div className="badge-header">
          <div className="badge-logo">BB-SYS</div>
          <div className="badge-status">
            {isFounder && <span className="founder-label">FOUNDER // CORE SYSTEM</span>}
            <span className="status-dot"></span> ACTIVE
          </div>
        </div>
        
        <div className="badge-profile">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              <User size={40} className="placeholder-icon" />
            </div>
            <div className="scanner-line"></div>
          </div>
          
          <div className="profile-info">
            <h4 className="member-name">{member.name}</h4>
            <div className="member-role">{member.role}</div>
            
            <div className="member-data">
              <div className="data-row">
                <span className="data-label">ID:</span>
                <span className="data-value">{member.id}</span>
              </div>
              <div className="data-row">
                <span className="data-label">LVL:</span>
                <span className="data-value">{member.level}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="badge-description">
          <p>{member.description}</p>
        </div>
        
        <div className="badge-skills">
          {member.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        <div className="badge-footer">
          <Activity size={16} className="activity-icon" />
          <div className="barcode">|| ||| | || ||| | |||</div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "BADRI NARAYANAN",
      role: "FOUNDER & CREATIVE TECH LEAD",
      description: "Founder of BlazeByte Studio, overseeing the company's overall vision, strategy, creative direction, technology, web development, AI solutions, and project execution.",
      id: "BB-001",
      level: "99",
      skills: ["LEADERSHIP", "WEB DEV", "AI AUTOMATION", "CREATIVE STRATEGY"]
    },
    {
      name: "BHARATH RAJ",
      role: "CONTENT & WEB DESIGNER",
      description: "Responsible for creating engaging digital content and designing modern, visually powerful web experiences for BlazeByte Studio and its clients.",
      id: "BB-002",
      level: "96",
      skills: ["CONTENT CREATION", "WEB DESIGN", "UI/UX", "CREATIVE DESIGN"]
    },
    {
      name: "JERSON",
      role: "SALES & BUSINESS DEV",
      description: "Focused on client communication, lead conversion, sales strategy, business opportunities, and helping BlazeByte Studio build strong client relationships.",
      id: "BB-003",
      level: "95",
      skills: ["SALES", "CLIENT ACQUISITION", "BUSINESS DEV", "NEGOTIATION"]
    },
    {
      name: "SARASWATHI",
      role: "OPERATIONS MANAGER",
      description: "Responsible for coordinating operations, managing internal workflows, organizing projects, supporting the team, and ensuring smooth execution across BlazeByte Studio.",
      id: "BB-004",
      level: "97",
      skills: ["OPERATIONS", "PROJECT MGMT", "TEAM COORDINATION", "WORKFLOW"]
    }
  ];

  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-badge"
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="status-dot-small"></span> BLAZEBYTE STUDIO // CORE TEAM DATABASE
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >THE <span className="title-accent">COLLECTIVE</span></motion.h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} delay={0.1 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
