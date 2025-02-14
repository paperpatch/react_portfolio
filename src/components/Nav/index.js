import { useEffect, useState, useRef } from "react";
import { PDFObject } from "react-pdfobject";
import "./Nav.css";

import resume from "../../assets/resume/PATRICK_CHEN_RESUME.pdf";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef(null);
  const modalRef = useRef(null);
  const togglerRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleModalClose = () => setModalOpen(false);
  const handleModalShow = () => setModalOpen(true);

  const handleClickOutside = (event) => {
    if (togglerRef.current && togglerRef.current.contains(event.target)) {
      return;
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">
          Patrick
        </a>
        <button
          className="navbar-toggler"
          onClick={handleMenuToggle}
          ref={togglerRef}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${menuOpen ? "show" : ""}`}
          ref={menuRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link resume-button"
                onClick={handleModalShow}
                aria-label="View resume"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
      {modalOpen && (
        <div className="pdf-modal">
          <div className="pdf-modal-content" ref={modalRef}>
            <span className="pdf-modal-close" onClick={handleModalClose}>
              &times;
            </span>
            <PDFObject url={resume} width="100%" height="100%" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
