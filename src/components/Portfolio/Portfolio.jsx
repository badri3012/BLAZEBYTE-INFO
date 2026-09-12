import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Monitor, Smartphone, Layers, Terminal, Activity, X } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'BLAZE BYTE RESTAURANT',
    category: 'PREMIUM RESTAURANT DIGITAL EXPERIENCE',
    tags: ['WEB DESIGN', 'UI/UX', 'BRANDING', 'DIGITAL EXPERIENCE'],
    description: 'A premium digital dining experience designed to combine elegant visual storytelling, modern restaurant presentation, menu exploration, and seamless table reservations.',
    image: '/blazebyte_restaurant_showcase.png',
    icon: <Monitor size={18} />,
    isFeatured: true,
    link: 'https://blazebyte-restaurent.vercel.app/'
  },
  {
    id: 2,
    title: 'AI Automation System',
    category: 'ENTERPRISE SYSTEM',
    tags: ['AI INTEGRATION', 'DASHBOARD'],
    image: '/proj_ai.png',
    icon: <Activity size={18} />,
    overview: 'A robust enterprise dashboard engineered to orchestrate complex AI workflows, predictive data modeling, and automated lead routing systems for high-volume sales pipelines.',
    services: ['AI INTEGRATION', 'DASHBOARD DEV', 'UI/UX', 'DATA VISUALIZATION'],
    status: 'IN DEVELOPMENT'
  },
  {
    id: 3,
    title: 'BLAZEBYTE REALTY',
    category: 'REAL ESTATE / DIGITAL EXPERIENCE',
    tags: ['REAL ESTATE', 'WEB PLATFORM', 'UI/UX'],
    image: '/proj_realestate.png',
    icon: <Box size={18} />,
    overview: 'An immersive property exploration platform leveraging high-performance 3D rendering and an intuitive filtering architecture to redefine digital luxury real estate.',
    services: ['WEB PLATFORM', '3D RENDERING', 'FRONTEND ARCHITECTURE', 'UI/UX'],
    status: 'LIVE',
    link: 'https://blazebyte-realty.vercel.app/'
  },
  {
    id: 4,
    title: 'Creative Brand Identity',
    category: 'BRAND SYSTEM',
    tags: ['IDENTITY', 'DESIGN SYSTEM'],
    image: '/proj_branding.png',
    icon: <Layers size={18} />,
    overview: 'A comprehensive brand design system encompassing bespoke typography, highly structured digital brand guidelines, and a unified visual language crafted for a modern tech startup.',
    services: ['IDENTITY DESIGN', 'DESIGN SYSTEM', 'BRANDING', 'CREATIVE DIRECTION'],
    status: 'CASE STUDY'
  },
  {
    id: 5,
    title: 'Business Management Dashboard',
    category: 'SaaS INTERFACE',
    tags: ['DATA VISUALIZATION', 'UX'],
    image: '/proj_dashboard.png',
    icon: <Terminal size={18} />,
    overview: 'A highly complex, data-heavy SaaS interface designed to simplify financial tracking, employee management, and operational metrics into a single fluid digital environment.',
    services: ['SaaS INTERFACE', 'DATA VISUALIZATION', 'USER EXPERIENCE', 'SYSTEM DESIGN'],
    status: 'CASE STUDY'
  },
  {
    id: 6,
    title: 'Custom Web Experience',
    category: 'WEBGL / INTERACTIVE',
    tags: ['CREATIVE DEV', 'ANIMATION'],
    image: '/proj_webgl.png',
    icon: <Smartphone size={18} />,
    overview: 'An experimental, award-winning interactive canvas utilizing pure WebGL and Framer Motion to push the boundaries of browser-based cinematic storytelling.',
    services: ['WEBGL / INTERACTIVE', 'CREATIVE DEV', 'ANIMATION', 'MOTION GRAPHICS'],
    status: 'CONCEPT'
  },
  {
    id: 7,
    title: 'BLAZEBYTE CAFE',
    category: 'WEB DEVELOPMENT / DIGITAL EXPERIENCE',
    tags: ['CAFE / HOSPITALITY', 'WEB DEVELOPMENT', 'UI/UX'],
    image: '/proj_cafe.png',
    icon: <Monitor size={18} />,
    overview: 'A premium digital experience designed for a modern café, combining strong visual identity, clear menu presentation, and a conversion-focused customer journey.',
    services: ['WEB DEVELOPMENT', 'DIGITAL EXPERIENCE', 'UI/UX', 'FRONTEND ARCHITECTURE'],
    status: 'LIVE',
    link: 'https://blazebyte-cafe.vercel.app/'
  }
];

// Interactive Featured Card
const InteractiveFeaturedCard = ({ project, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="featured-project-module interactive-wrapper"
      initial={{ opacity: 0, y: isMobile ? 12 : 40, scale: isMobile ? 1 : 0.95, filter: isMobile ? 'blur(3px)' : 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
      transition={{ duration: isMobile ? 0.35 : 0.8, ease: "easeOut" }}
      style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={isMobile ? { scale: 0.98 } : {}}
    >
      <div className={`scan-line ${isHovered ? 'active' : ''}`}></div>
      
      <div className="transmission-label" style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}>FEATURED TRANSMISSION // 001</div>
      
      <div className="featured-content-wrapper" style={{ transform: isMobile ? 'none' : 'translateZ(30px)' }}>
        <div className="featured-image-container">
          <img src={project.image} alt={project.title} className="featured-image" loading="lazy" />
          <div className="glass-overlay glow-edge"></div>
        </div>
        
        <div className="featured-metadata" style={{ transform: isMobile ? 'none' : 'translateZ(40px)' }}>
          <div className="project-category">
            {project.icon} 
            <span>01 // {project.category}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description" style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            VIEW PROJECT →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Interactive Archive Card
const InteractiveArchiveCard = ({ project, index, yTransform, onSelect, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className={`archive-module-wrapper ${index % 2 === 0 ? 'offset-down' : ''}`}
      style={isMobile ? {} : { y: yTransform }}
      initial={{ opacity: 0, scale: isMobile ? 1 : 0.9, filter: isMobile ? 'blur(3px)' : 'blur(10px)', y: isMobile ? 12 : 0 }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
      transition={{ duration: isMobile ? 0.35 : 0.8, delay: isMobile ? 0 : index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="archive-module interactive-wrapper clickable"
        style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(project)}
        whileHover={!isMobile ? "hover" : ""}
        whileTap={{ scale: 0.97 }}
      >
        <div className={`scan-line ${isHovered ? 'active' : ''}`}></div>
        
        <div className="archive-image-container" style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}>
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="archive-image zoom-fx"
            loading="lazy"
          />
          <div className="archive-glass-overlay glow-edge"></div>
          
          {!isMobile && (
            <motion.div 
              className="archive-hover-meta"
              variants={{
                hover: { opacity: 1, y: 0 }
              }}
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <button className="btn-icon">
                <ArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </div>
        
        <div className="archive-metadata" style={{ transform: isMobile ? 'none' : 'translateZ(30px)' }}>
          <div className="project-category">
            <span>0{project.id} // {project.category}</span>
          </div>
          <h4 className="project-title-small">{project.title}</h4>
          <div className="project-tags-compact">
            {project.tags.join(' • ')}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Cinematic Project Modal Component
const ProjectModal = ({ project, onClose, isMobile }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  // Staggered variants for fast mobile rendering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12, filter: isMobile ? 'blur(0px)' : 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div 
        className="project-modal-content glass-panel"
        initial={{ opacity: 0, scale: isMobile ? 1 : 0.95, y: isMobile ? 20 : 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} /> CLOSE TRANSMISSION
        </button>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="modal-stagger-wrapper"
        >
          <motion.div variants={itemVariants} className="modal-header">
            <div className="modal-transmission-id">PROJECT TRANSMISSION // 0{project.id}</div>
            <div className="modal-status">
              <span className={`status-dot ${project.status === 'LIVE' ? 'green' : project.status === 'CONCEPT' ? 'blue' : 'orange'}`}></span> 
              STATUS: {project.status}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="modal-hero">
            <img src={project.image} alt={project.title} className="modal-image" />
            <div className="modal-hero-overlay"></div>
          </motion.div>

          <div className="modal-body">
            <motion.div variants={itemVariants} className="modal-title-area">
              <h4 className="modal-category">{project.category}</h4>
              <h2 className="modal-title">{project.title}</h2>
            </motion.div>

            <div className="modal-grid">
              <motion.div variants={itemVariants} className="modal-col modal-col-main">
                <h3 className="modal-subheading">PROJECT OVERVIEW</h3>
                <p className="modal-overview-text">{project.overview}</p>
              </motion.div>
              
              <div className="modal-col modal-col-side">
                <motion.div variants={itemVariants}>
                  <h3 className="modal-subheading">WHAT WE BUILT</h3>
                  <ul className="modal-services-list">
                    {project.services.map((service, idx) => (
                      <motion.li key={idx} variants={itemVariants}>
                        <ArrowRight size={14} className="list-icon" /> {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="modal-subheading mt-6">TECH / CAPABILITIES</h3>
                  <div className="project-tags modal-tags">
                    {project.tags.map((tag, idx) => (
                      <motion.span key={idx} variants={itemVariants} className="tag">{tag}</motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {project.link && (
              <motion.div variants={itemVariants} className="modal-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                  VIEW PROJECT →
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax speeds for asymmetric grid
  const ySpeed1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ySpeed2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const ySpeed3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`; 
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container portfolio-container">
        
        {/* Section Header */}
        <div className="portfolio-header">
          <motion.div 
            className="section-badge"
            initial={{ opacity: 0, y: isMobile ? 12 : 20, filter: isMobile ? 'blur(3px)' : 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.35 : 0.6, ease: "easeOut" }}
          >
            <span className="status-dot-small"></span> BLAZEBYTE // DIGITAL ARCHIVES
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: isMobile ? 12 : 20, filter: isMobile ? 'blur(3px)' : 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: isMobile ? 0 : 0.1, duration: isMobile ? 0.35 : 0.6, ease: "easeOut" }}
          >
            SELECTED WORK <span className="title-accent">// PROJECT ARCHIVE</span>
          </motion.h2>
        </div>

        {/* FEATURED TRANSMISSION (Project 1) */}
        <div className="featured-transmission">
          <InteractiveFeaturedCard project={projects[0]} isMobile={isMobile} />
        </div>

        {/* ASYMMETRIC FLOATING GRID (Projects 2-6) */}
        <div className="archive-grid">
          {projects.slice(1).map((project, index) => {
            const yTransform = index % 3 === 0 ? ySpeed1 : index % 3 === 1 ? ySpeed2 : ySpeed3;
            return (
              <InteractiveArchiveCard 
                key={project.id} 
                project={project} 
                index={index} 
                yTransform={yTransform} 
                onSelect={setSelectedProject} 
                isMobile={isMobile}
              />
            );
          })}
        </div>

      </div>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default Portfolio;
