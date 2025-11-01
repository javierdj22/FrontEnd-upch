import React from "react";
import CustomModal from "@components/common/Modal";
import { Button } from "react-bootstrap";

const DeleteModal = ({ show, handleClose, onDelete }) => {
  const footer = (
    <>
      <Button variant="danger" onClick={onDelete}>
        Eliminar
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
    </>
  );

  return (
    <CustomModal
      show={show}
      handleClose={handleClose}
      title="Eliminar Usuario"
      footer={footer} // enviamos los botones al footer
    >
      <p>¿Estás seguro de que deseas eliminar este usuario?</p>
    </CustomModal>
  );
};

export default DeleteModal;
