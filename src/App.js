import { useEffect } from "react";
import Typed from "react-typed";
import "./App.css";

import Navigation from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import Other from "./components/Other";

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <Navigation />
      <main id="home">
        <>
          <div className="intro">
            <h1 className="intro-title">Hi, my name is</h1>
            <h1 className="intro-name">Pat Chen.</h1>
            <span className="intro-text-slider">
              <Typed
                strings={["Developer", "Problem Solver", "Engineer"]}
                typeSpeed={60}
                backSpeed={30}
                backDelay={1100}
                loop
              />
            </span>
            <p className="text-sub">Experienced Software Engineer</p>
            <div className="arrow">
              <hr />
              <a href="#about">
                <i className="fas fa-angle-down"></i>
              </a>
              <hr />
            </div>
          </div>
          <About />
          <Experience />
          <Featured />
          <Other />
          <section id="contact">
            <div className="contacts">
              <h1 className="contact-title">Get in Touch</h1>
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
        <div className="social-container">
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/patchen21/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/paperpatch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/paperpatch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodePen"
              >
                <i className="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
          <div className="footer-text">
            <p>&copy; 2022 Patrick Chen. All rights reserved.</p>
          </div>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default App;
