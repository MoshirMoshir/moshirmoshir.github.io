import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ProjectModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  hash: string;
  description: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ show, handleClose, title, hash, description }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" href={`#/projects/${hash}`}>
          View Project
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
