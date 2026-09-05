import React from 'react';
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
  return (
    <>
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
    </>
  );
}

export default App;
