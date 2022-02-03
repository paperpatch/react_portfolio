import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import { PDFObject } from 'react-pdfobject';
import resume from "../../assets/resume/PATRICK_CHEN_RESUME.pdf";

function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Resume
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PDFObject url={resume}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Resume;