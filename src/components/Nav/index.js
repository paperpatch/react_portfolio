import { useState } from "react";
import { PDFObject } from "react-pdfobject";

import resume from "../../assets/resume/PATRICK_CHEN_RESUME.pdf";


function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleModalClose = () => setModalOpen(false);
  const handleModalShow = () => setModalOpen(true);

  return (
    <nav className="navbar sticky-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">Patrick</a>
        <button className="navbar-toggler" onClick={handleMenuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#featured">Featured</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <button className="nav-link resume-button" onClick={handleModalShow}>Resume</button>
            </li>
          </ul>
        </div>
      </div>
      {modalOpen && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <span className="pdf-modal-close" onClick={handleModalClose}>&times;</span>
            <PDFObject url={resume} width="100%" height="500px" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
