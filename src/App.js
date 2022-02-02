import React from 'react';

// import css in order
import './App.css';

// import js libraries
import './assets/library/jquery/jquery.min.js';
import './assets/library/bootstrap/css/bootstrap.min.css';

// import components
import Navbar from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Featured from './components/Featured';
import Other from './components/Other';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <>
          <Intro />
          <About />
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
