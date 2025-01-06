import React from "react";

// import js libraries
import "./assets/library/jquery/jquery.min.js";
import "./assets/library/bootstrap/css/bootstrap.min.css";

// import css in order
import "./App.css";

// import components
import Navigation from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import Other from "./components/Other";

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
          <section id="contact">
            <div className="contacts">
              <h1 data-testid="h1tag" className="title">
                Get in Touch
              </h1>
              <p>
                I am looking for new opportunities to grow. My inbox is open.
              </p>
              <p>
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
              <p>
                You can contact me by email me at{" "}
                <a href="mailto: patchen21@gmail.com" target="_blank">
                  patchen21@gmail.com
                </a>
              </p>
            </div>
          </section>
        </>
      </main>
      <footer>
        <nav className="social-container">
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/patchen21/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/paperpatch"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/paperpatch"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
          <span>© 2022 Patrick Chen</span>
          <br />
        </nav>
      </footer>
    </div>
  );
}

export default App;
