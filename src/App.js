import React, { useState } from 'react';

// import css in order
import './App.css';

// import js libraries
import './assets/library/jquery/jquery.min.js';
import './assets/library/bootstrap/css/bootstrap.min.css';

// import components
import Header from './components/Nav';
import About from './components/About';
import Featured from './components/Featured';
import Other from './components/Other';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <>
          <About />
          <Featured />
          <Other />
          <Contact />
        </>
      </main>
    </div>
  );
}

export default App;
