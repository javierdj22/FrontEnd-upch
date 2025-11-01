import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "@components/common/Modal";
import CarForm from "@components/common/Form";
import { isNotEmpty, isValidYear, isPositiveNumber } from "../../utils/validators";

const CarModal = ({ show, handleClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    type: "",
    seats: "",
    color: "",
    notes: "",
  });

  useEffect(() => {
    if (user) setFormData(user);
    else
      setFormData({
        brand: "",
        model: "",
        year: "",
        type: "",
        seats: "",
        color: "",
        notes: "",
      });
  }, [user, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  return (
    <CustomModal
      show={show}
      handleClose={handleClose}
      title={user?.id ? "Editar Carro" : "Nuevo Carro"}
      footer={
        <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit}>
          Guardar
        </Button>
      }
    >
      <CarForm formData={formData} onChange={setFormData} />
    </CustomModal>
  );
};

export default CarModal;
