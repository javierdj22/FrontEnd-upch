import React from "react";

const UserTable = ({ users, selectedUser, setSelectedUser, onEdit, setShowDeleteModal }) => {
  return (
    <div className="card border rounded-2" style={{ background: "#f8f8f8" }}>
      <div className="card-header py-3" style={{ background: "#f8f8f8" }}>
        <div className="d-flex justify-content-start align-items-center">
          <button
            className="btn btn-sm btn-outline-primary px-4 me-2"
            onClick={() => onEdit(null)} // null = nuevo usuario
          >
            <i className="bi bi-plus-lg me-2"></i> Nuevo Carro
          </button>

          <button
            className="btn btn-sm btn-outline-primary px-4 me-2"
            disabled={!selectedUser}
            onClick={() => onEdit(selectedUser)}
          >
            <i className="bi bi-pencil"></i> Editar
          </button>

          <button
            className="btn btn-sm btn-outline-danger px-4 me-2"
            disabled={!selectedUser}
            onClick={() => setShowDeleteModal(true)}
          >
            <i className="bi bi-trash3"></i> Eliminar
          </button>
        </div>
      </div>

      <div className="card-body">
        <table className="table table-hover table-light">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Type</th>
              <th>Seats</th>
              <th>Color</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((car) => (
              <tr key={car.id}>
                <th>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedUser?.id === car.id}
                    onChange={() =>
                      setSelectedUser(selectedUser?.id === car.id ? null : car)
                    }
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
