import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Gallery from './Gallery';
import About from './Aboutme';
import Skills from './Skills';
import Contact from './Contact';


function App() {
  return (
    <div>
    <Navbar />
    <Gallery />
    <About />
    <Skills />
    <Contact />
    </div>
  );
}

export default App;
