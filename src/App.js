import React from 'react';

// import js libraries
import './assets/library/jquery/jquery.min.js';
import './assets/library/bootstrap/css/bootstrap.min.css';

// import css in order
import './App.css';

// import components
import Navigation from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Featured from './components/Featured';
import Other from './components/Other';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <>
          <Intro />
          <About />
          <Experience />
          <Featured />
          <Other />
          <Contact />
        </>
      </main>
      <Footer />
    </div>
  );
}

export default App;
