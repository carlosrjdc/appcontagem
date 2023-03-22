import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalConfirmacao(props) {
  const { ver, setarver, funcao } = props;

  const handleClose = () => setarver(false);
  const handleShow = () => setarver(true);

  return (
    <>
      <Modal show={ver} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realmente executar essa ação?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="primary" onClick={funcao}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
