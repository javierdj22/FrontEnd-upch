import React, { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import CarModal from "./components/CarModal"; // unificado Edit/Nuevo
import DeleteModal from "./components/DeleteModal";
import UserTable from "./components/UserTable";
import { getUsers, createUser, updateUser, deleteUser } from "./api/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [carModalOpen, setCarModalOpen] = useState(false); // para Edit/Nuevo
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
    setFilteredUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSaveUser = async (user) => {
    if (user.id) {
      await updateUser(user.id, user); // Editar
    } else {
      await createUser(user); // Nuevo
    }
    fetchUsers();
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id);
      fetchUsers();
      setDeleteModalOpen(false);
    }
  };

  const handleFilter = (brandFilter, modelFilter) => {
    setFilteredUsers(brandFilter);
  };

  const handleNewUser = () => {
    setSelectedUser(null);
    setCarModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setCarModalOpen(true);
  };

  return (
    <div className="container mt-5">
      <div className="row mb-3"> 
        <div class="col-sm-12 col-md-6">
          <div class="dt-title ">
              <h3>Listado de usuarios</h3>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mt-3 ">
            <div class="d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-sm btn-outline-primary px-4 mb-3"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <i className="bi bi-sliders"></i> Filtros
                </button>
            </div>
        </div>
        {showFilters && <FilterBar users={users} onSearch={handleFilter} />}
      </div>

      <UserTable
        users={filteredUsers}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onNew={handleNewUser}
        onEdit={handleEditUser}
        setShowDeleteModal={setDeleteModalOpen}
      />

      {carModalOpen && (
        <CarModal
          show={carModalOpen}
          handleClose={() => setCarModalOpen(false)}
          user={selectedUser} // null si es nuevo
          onSave={handleSaveUser}
        />
      )}

      {deleteModalOpen && selectedUser && (
        <DeleteModal
          show={deleteModalOpen}
          handleClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default App;
