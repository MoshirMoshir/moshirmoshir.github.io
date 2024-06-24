import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './IosPermissionModal.css';

interface IosPermissionModalProps {
  show: boolean;
  handleClose: () => void;
  handleGrantPermission: () => void;
}

const IosPermissionModal: React.FC<IosPermissionModalProps> = ({ show, handleClose, handleGrantPermission }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enable Parallax Effect</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cool Background Effect</p>
        <p className="ios-permission-note">
          <em>*iOS requires permission for websites to access tilt/gyroscope</em>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleGrantPermission}>
          Enable
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IosPermissionModal;
