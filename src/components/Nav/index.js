import React from "react";
import Resume from "../Resume";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">Patrick</a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link active" href="#about">About</a>
            <a className="nav-item nav-link active" href="#experience">Experience</a>
            <a className="nav-item nav-link active" href="#feature">Projects</a>
            <a className="nav-item nav-link active" href="#contact">Contact</a>
            <Resume />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;