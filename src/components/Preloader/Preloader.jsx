import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-brand"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="brand-word">BLAZEBYTE</span>
          <span className="brand-dot"></span>
          <span className="brand-sub">STUDIO</span>
        </motion.div>
        
        <div className="preloader-progress-bar">
          <motion.div
            className="preloader-progress-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
