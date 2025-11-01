import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const CarForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    onChange({ ...formData, [id]: value });
  };

  return (
    <Form>
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
    </Form>
  );
};

export default CarForm;
