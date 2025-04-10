import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Resume from "../components/Resume";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Education from "../components/Education";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Education />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
