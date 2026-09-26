import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    num: '01',
    initials: 'BN',
    name: 'BADRI NARAYANAN',
    role: 'Founder / Creative & Technology Lead',
  },
  {
    num: '02',
    initials: 'J',
    name: 'JERSON',
    role: 'Sales Manager',
  },
  {
    num: '03',
    initials: 'S',
    name: 'SARASWATHI',
    role: 'Operations Manager',
  },
  {
    num: '04',
    initials: 'B',
    name: 'BHARATH',
    role: 'Web Designer',
  },
  {
    num: '05',
    initials: 'P',
    name: 'PRABHA',
    role: 'Web Developer',
  },
  {
    num: '06',
    initials: 'PK',
    name: 'PRANEETH KUMAR',
    role: 'Client Handling & Lead Specialist',
    isNew: true,
  },
];

const Team = () => {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // TEAM
          </div>
          <h2 className="section-title">
            THE PEOPLE<br />BEHIND THE WORK.
          </h2>
          <p className="section-subtitle">
            BlazeByte Studio is built by a focused team combining technology, design, operations, client relationships, and business growth.
          </p>
        </div>

        {/* 6 Member Editorial Grid */}
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.num}
              className={`team-card editorial-card ${member.isNew ? 'new-member-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="team-card-top">
                <span className="team-num">{member.num}</span>
                {member.isNew && (
                  <span className="new-member-badge">NEW TEAM MEMBER</span>
                )}
              </div>

              <div className="avatar-circle">
                <span className="avatar-initials">{member.initials}</span>
              </div>

              <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
