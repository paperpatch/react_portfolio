import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
