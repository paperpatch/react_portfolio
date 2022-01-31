import React, { useState } from 'react';

// import css in order
import './App.css';

// import js libraries
// jquery
// popper
// bootstrap

// import components
import Header from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <>
          <Projects />
          <About />
          <Contact />
        </>
      </main>
    </div>
  );
}

export default App;
