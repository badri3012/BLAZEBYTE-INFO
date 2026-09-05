import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/Preloader';
import ParticleBackground from './components/Background/ParticleBackground';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Scroll lock while loading
  useEffect(() => {
    if (loading) {
      // Offset scrollbar to prevent layout shift when restored
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Safety cleanup
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <ParticleBackground />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Team />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
