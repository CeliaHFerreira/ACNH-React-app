import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Modal.css';

export default function Modalcomponent(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body className="body-modal">
                {props.text}
            </Modal.Body>
            <Modal.Footer className="footer-modal">
                <Button variant="warning" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
