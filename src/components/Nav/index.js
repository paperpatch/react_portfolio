import { useState } from "react";
import { Button, Modal, Navbar, Nav, Container } from "react-bootstrap";
import { PDFObject } from "react-pdfobject";

import resume from "../../assets/resume/PATRICK_CHEN_RESUME.pdf";


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar sticky-top" id="navbar" bg="" expand="md">
      <Container>
        <Navbar.Brand className="brand" href="./index.html">
          Patrick
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="nav-link" href="#feature">
              Projects
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
            {/* Resume */}
            <>
              <Button className="resume-btn" onClick={handleShow}>
                Resume
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PDFObject url={resume} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
