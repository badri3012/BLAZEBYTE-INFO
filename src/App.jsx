import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RouterProvider, useRouter } from './router/Router';
import Preloader from './components/Preloader/Preloader';
import ParticleBackground from './components/Background/ParticleBackground';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import PageTransition from './components/Layout/PageTransition';

import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import StudioPage from './pages/StudioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

const titleMap = {
  '/': 'BlazeByte Studio — Digital Experiences • Technology • Growth',
  '/work': 'Work & Selected Projects — BlazeByte Studio',
  '/capabilities': 'Capabilities & Technical Architecture — BlazeByte Studio',
  '/studio': 'Studio, Team & Registered Enterprise — BlazeByte Studio',
  '/process': 'The BlazeByte Engine Methodology — BlazeByte Studio',
  '/contact': 'Start a Project & Contact — BlazeByte Studio',
};

function MainContent() {
  const { currentPath } = useRouter();

  // Dynamic document title update
  useEffect(() => {
    const matchedTitle = titleMap[currentPath] || 'BlazeByte Studio — Digital Experiences • Technology • Growth';
    document.title = matchedTitle;
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/work':
        return <WorkPage />;
      case '/capabilities':
        return <CapabilitiesPage />;
      case '/studio':
        return <StudioPage />;
      case '/process':
        return <ProcessPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <ParticleBackground />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={currentPath}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

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
    <RouterProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </RouterProvider>
  );
}

export default App;
