import React from "react";
import Button from "@components/common/Button";
import Table from "@components/common/Table";


const UserTable = ({ users, selectedUser, setSelectedUser, onEdit, setShowDeleteModal }) => {

  const columns = [
    { key: "select", label: "" },
    { key: "id", label: "Id" },
    { key: "brand", label: "Brand" },
    { key: "model", label: "Model" },
    { key: "year", label: "Year" },
    { key: "type", label: "Type" },
    { key: "seats", label: "Seats" },
    { key: "color", label: "Color" },
    { key: "notes", label: "Notes" },
  ];

  const handleRowClick = (car) => {
    setSelectedUser(selectedUser?.id === car.id ? null : car);
  };

  return (
    <div className="card border rounded-2" style={{ background: "#f8f8f8" }}>
      <div className="card-header py-3" style={{ background: "#f8f8f8" }}>
        <div className="d-flex justify-content-start align-items-center">
          <Button variant="outline-primary" className="px-4 me-2" onClick={() => onEdit(null)}>
            <i className="bi bi-plus-lg me-2"></i> Nuevo Carro
          </Button>

          <Button
            variant="outline-primary"
            className="px-4 me-2"
            disabled={!selectedUser}
            onClick={() => onEdit(selectedUser)}
          >
            <i className="bi bi-pencil"></i> Editar
          </Button>

          <Button
            variant="outline-danger"
            className="px-4 me-2"
            disabled={!selectedUser}
            onClick={() => setShowDeleteModal(true)}
          >
            <i className="bi bi-trash3"></i> Eliminar
          </Button>
        </div>
      </div>

      <div className="card-body">
        <Table
          columns={columns}
          data={users}
          renderRow={(car) => (
            <tr
              key={car.id}
              onClick={() => handleRowClick(car)}
              style={{ cursor: "pointer" }}
              className={selectedUser?.id === car.id ? "table-active" : ""}
            >
              <th>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedUser?.id === car.id}
                  onChange={(e) => e.stopPropagation()} // evita doble toggle
                />
              </th>
              <td>{car.id}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.type}</td>
              <td>{car.seats}</td>
              <td>{car.color}</td>
              <td>{car.notes}</td>
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default UserTable;
