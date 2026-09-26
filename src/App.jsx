import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/Preloader';
import ParticleBackground from './components/Background/ParticleBackground';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Engine from './components/Engine/Engine';
import BlazeByteHub from './components/BlazeByteHub/BlazeByteHub';
import WhyUs from './components/WhyUs/WhyUs';
import About from './components/About/About';
import Team from './components/Team/Team';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Scroll lock while preloader displays
  useEffect(() => {
    if (loading) {
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <ParticleBackground />
            <Navbar />
            <main>
              <Hero />
              <Portfolio />
              <Services />
              <Engine />
              <BlazeByteHub />
              <WhyUs />
              <About />
              <Team />
              <TechStack />
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
