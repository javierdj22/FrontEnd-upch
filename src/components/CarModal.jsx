import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

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
    if (user) setFormData(user); // Si hay user, llenamos para editar
    else
      setFormData({
        brand: "",
        model: "",
        year: "",
        type: "",
        seats: "",
        color: "",
        notes: "",
      }); // limpiar formulario si es nuevo
  }, [user, show]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{user && user.id ? "Editar Carro" : "Nuevo Carro"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  id="brand"
                  value={formData.brand || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  id="model"
                  value={formData.model || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  id="year"
                  value={formData.year || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  id="type"
                  value={formData.type || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Seats</Form.Label>
                <Form.Control
                  type="number"
                  id="seats"
                  value={formData.seats || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  id="color"
                  value={formData.color || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                  id="notes"
                  value={formData.notes || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CarModal;
