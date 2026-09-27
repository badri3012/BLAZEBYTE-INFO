import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Globe } from 'lucide-react';
import { useRouter } from '../../router/Router';
import './Portfolio.css';

const projects = [
  {
    id: '01',
    title: 'ANDY FOODS GH',
    category: 'Digital Experience',
    filterCategory: 'DIGITAL EXPERIENCES',
    location: 'Ghana',
    tags: ['E-Commerce', 'Brand Experience', 'UI/UX'],
    description: 'A modern African food distribution and digital experience platform designed to showcase Ghanaian food heritage and streamline order inquiries.',
    image: '/blazebyte_restaurant_showcase.png',
    overview: 'Andy Foods GH brings authentic Ghanaian food products to the digital market. We engineered a high-converting digital storefront with immersive storytelling and catalog exploration.',
    services: ['WEB DEVELOPMENT', 'BRAND SYSTEM', 'UI/UX DESIGN', 'PRODUCT CATALOG'],
    status: 'CASE STUDY',
    type: 'case-study',
    urlVerified: false,
    link: null
  },
  {
    id: '02',
    title: 'VITAGOLD KITCHEN',
    category: 'Hospitality Digital Experience',
    filterCategory: 'HOSPITALITY',
    location: 'West Africa',
    tags: ['Hospitality', 'Web Experience', 'Menu System'],
    description: 'A modern dining digital showcase built with elegant visual presentation, interactive menu systems, and seamless reservation booking.',
    image: '/proj_restaurant.png',
    overview: 'VitaGold Kitchen needed a digital presence that matched their culinary quality. We designed an editorial hospitality platform showcasing chef specials and online table bookings.',
    services: ['HOSPITALITY WEB DEV', 'MENU SYSTEM', 'RESERVATION FLOW', 'UI/UX'],
    status: 'CASE STUDY',
    type: 'case-study',
    urlVerified: false,
    link: null
  },
  {
    id: '03',
    title: 'THE CATFISH GRILL',
    category: 'Restaurant Digital Experience',
    filterCategory: 'HOSPITALITY',
    location: 'Ghana',
    tags: ['Restaurant', 'Brand Experience', 'UI/UX'],
    description: 'A vibrant grill and restaurant web platform crafted to showcase specialized seafood dining, location details, and order channels.',
    image: '/proj_branding.png',
    overview: 'The Catfish Grill required a bold, appetite-focused digital platform. We designed an interactive food showcase with mobile-first menu navigation and social integrations.',
    services: ['RESTAURANT WEB DEV', 'BRANDING', 'MOBILE UI/UX', 'ORDER SYSTEMS'],
    status: 'LIVE PROJECT',
    type: 'live',
    urlVerified: true,
    link: 'https://catfish-grill.vercel.app/'
  },
  {
    id: '04',
    title: 'JIKONI',
    category: 'Restaurant Experience',
    filterCategory: 'HOSPITALITY',
    location: 'Uganda',
    tags: ['Hospitality', 'Digital Experience', 'UI/UX'],
    description: 'An East African culinary web platform combining traditional hospitality storytelling with modern digital reservation and menu systems.',
    image: '/proj_webgl.png',
    overview: 'Jikoni blends regional heritage with high-performance web engineering. The experience highlights seasonal menus and dining atmospheres with fluid transitions.',
    services: ['CUSTOM WEB DEV', 'CREATIVE DIRECTION', 'RESERVATION SYSTEM', 'UI/UX'],
    status: 'LIVE PROJECT',
    type: 'live',
    urlVerified: true,
    link: 'https://jikoni.vercel.app/'
  },
  {
    id: '05',
    title: 'JE ME RÉGALE',
    category: 'French-Fusion / Private Dining',
    filterCategory: 'HOSPITALITY',
    location: 'Ghana',
    tags: ['Private Dining', 'Editorial Experience', 'UI/UX'],
    description: 'A high-end French-fusion private dining digital experience featuring curated multi-course menus and VIP event booking.',
    image: '/proj_realestate.png',
    overview: 'Je Me Régale offers bespoke culinary events. We crafted an exclusive editorial web experience reflecting luxury gastronomy and private chef booking workflows.',
    services: ['LUXURY WEB SYSTEM', 'VIP BOOKING', 'BRAND STORYTELLING', 'UI/UX'],
    status: 'LIVE PROJECT',
    type: 'live',
    urlVerified: true,
    link: 'https://jemeregale.vercel.app/'
  },
  {
    id: '06',
    title: 'BLAZEBYTE HUB',
    category: 'Internal Digital Product',
    filterCategory: 'PRODUCT & SYSTEMS',
    location: 'Studio Core',
    tags: ['Digital Product', 'SaaS Dashboard', 'React/Next.js'],
    description: 'Our internal operations and project management dashboard engineered to orchestrate client workflows, sprint deliverables, and team skills.',
    image: '/proj_dashboard.png',
    overview: 'BlazeByte Hub is our proprietary operations platform. It unifies project tracking, milestone invoicing, RBAC permissions, and team productivity analytics.',
    services: ['FULL STACK SAAS', 'NEXT.JS & PRISMA', 'DASHBOARD ARCHITECTURE', 'RBAC'],
    status: 'INTERNAL DIGITAL PRODUCT',
    type: 'internal',
    urlVerified: true,
    link: '/studio'
  },
  {
    id: '07',
    title: 'BLAZEBYTE CAFE',
    category: 'Digital Experience Concept',
    filterCategory: 'CONCEPTS',
    location: 'Concept Lab',
    tags: ['Cafe & Roastery', 'E-Commerce', 'UI/UX'],
    description: 'A concept web experience designed for modern specialty coffee roasteries, combining artisanal storytelling and coffee subscription ordering.',
    image: '/proj_cafe.png',
    overview: 'An exploration in high-converting specialty coffee websites with interactive flavor notes, origin maps, and recurring subscription checkout.',
    services: ['DIGITAL STOREFRONT', 'SUBSCRIPTION UI', 'BRAND SYSTEM', 'UI/UX'],
    status: 'WEBSITE CONCEPT',
    type: 'concept',
    urlVerified: true,
    link: 'https://blazebyte-cafe.vercel.app/'
  },
  {
    id: '08',
    title: 'BLAZEBYTE REALTY',
    category: 'Real Estate Digital Experience',
    filterCategory: 'CONCEPTS',
    location: 'Concept Lab',
    tags: ['Real Estate', 'Web Platform', '3D Architecture'],
    description: 'An immersive luxury property exploration web platform utilizing architectural rendering previews and smart inquiry management.',
    image: '/proj_ai.png',
    overview: 'A digital solution engineered for high-end real estate developments. Features interactive floor plan exploration and property agent routing.',
    services: ['REAL ESTATE PLATFORM', 'PROPERTY SHOWCASE', 'INQUIRY PIPELINE', 'UI/UX'],
    status: 'DIGITAL EXPERIENCE CONCEPT',
    type: 'concept',
    urlVerified: true,
    link: 'https://blazebyte-realty.vercel.app/'
  }
];

const categories = ['ALL', 'DIGITAL EXPERIENCES', 'HOSPITALITY', 'PRODUCT & SYSTEMS', 'CONCEPTS'];

const Portfolio = ({ preview = false }) => {
  const { navigate } = useRouter();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Keyboard Escape Listener for Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Handle Scroll Lock when Modal is Open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const displayedProjects = preview
    ? projects.filter((p) => ['01', '03', '06'].includes(p.id))
    : activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.filterCategory === activeCategory);

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // PORTFOLIO
          </div>
          <h2 className="section-title">
            {preview ? 'SELECTED WORK PREVIEW' : 'SELECTED WORK'}
          </h2>
          <p className="section-subtitle">
            A selection of digital experiences, websites and technology projects developed by BlazeByte Studio.
          </p>
        </div>

        {/* Category Filter Bar (Full View Only) */}
        {!preview && (
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Editorial Project Grid */}
        <div className="portfolio-grid">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay"></div>
                <div className="project-num-badge">{project.id}</div>
              </div>

              {/* Project Meta */}
              <div className="project-info">
                <div className="project-meta-top">
                  <span className="project-category">{project.category}</span>
                  {project.location && (
                    <span className="project-location">
                      <Globe size={12} /> {project.location}
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-cta-row">
                  <button className="btn-case-study">
                    {project.type === 'live' && project.urlVerified && 'VIEW LIVE PROJECT →'}
                    {project.type === 'concept' && project.urlVerified && 'EXPLORE CONCEPT →'}
                    {project.type === 'internal' && 'VIEW PRODUCT →'}
                    {(project.type === 'case-study' || !project.urlVerified) && 'VIEW CASE STUDY →'}
                    <ArrowRight size={16} className="arrow-icon" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Mode Footer Link */}
        {preview && (
          <div className="portfolio-preview-footer">
            <button
              className="btn-primary"
              onClick={() => navigate('/work')}
            >
              EXPLORE ALL WORK <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Editorial Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Case Study Modal"
              >
                <X size={20} /> CLOSE
              </button>

              <div className="modal-header">
                <span className="modal-num">PROJECT // {selectedProject.id}</span>
                <span className="modal-status">{selectedProject.status}</span>
              </div>

              <div className="modal-hero-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-content">
                <div className="modal-title-row">
                  <div>
                    <span className="modal-cat">{selectedProject.category}</span>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                  </div>

                  {/* Dynamic CTA Button Logic */}
                  {selectedProject.type === 'live' && selectedProject.urlVerified && selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary modal-live-btn"
                    >
                      VIEW LIVE PROJECT <ExternalLink size={16} />
                    </a>
                  )}

                  {selectedProject.type === 'concept' && selectedProject.urlVerified && selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary modal-live-btn"
                    >
                      EXPLORE CONCEPT <ExternalLink size={16} />
                    </a>
                  )}

                  {selectedProject.type === 'internal' && selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      className="btn-primary modal-live-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(null);
                        navigate('/studio');
                      }}
                    >
                      VIEW PRODUCT <ArrowRight size={16} />
                    </a>
                  )}

                  {(selectedProject.type === 'case-study' || !selectedProject.urlVerified) && (
                    <button
                      className="btn-secondary modal-live-btn"
                      onClick={() => setSelectedProject(null)}
                    >
                      CLOSE CASE STUDY
                    </button>
                  )}
                </div>

                <div className="modal-grid">
                  <div className="modal-col">
                    <h4>OVERVIEW</h4>
                    <p>{selectedProject.overview}</p>
                  </div>

                  <div className="modal-col">
                    <h4>CAPABILITIES DELIVERED</h4>
                    <ul className="modal-services-list">
                      {selectedProject.services.map((srv, idx) => (
                        <li key={idx}>
                          <span className="list-dot"></span> {srv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="modal-tags-section">
                  <h4>TAGS & STACK</h4>
                  <div className="modal-tags-row">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
