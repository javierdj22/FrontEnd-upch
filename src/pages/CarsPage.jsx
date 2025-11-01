import React, { useEffect, useState } from "react";
import FilterBar from "@components/common/FilterBar";
import CarModal from "@components/cars/CarModal"; // unificado Edit/Nuevo
import DeleteModal from "@components/cars/DeleteModal";
import UserTable from "@components/users/UserTable";
import { useTheme } from "../context/ThemeContext";
import { getCars, createCar, updateCar, deleteCar } from "../api/users"; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [carModalOpen, setCarModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const fetchUsers = async () => {
    const data = await getCars(); 
    setUsers(data);
    setFilteredUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSaveUser = async (user) => {
    if (user.id) {
      await updateCar(user.id, user); 
    } else {
      await createCar(user); 
    }
    fetchUsers();
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      await deleteCar(selectedUser.id); 
      fetchUsers();
      setDeleteModalOpen(false);
    }
  };

  const handleFilter = (filtered) => {
    setFilteredUsers(filtered); 
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
    <div className={theme === "dark" ? "bg-dark text-white min-vh-100" : "bg-light text-dark min-vh-100"}>
      <div className="container">
        <div className="row mb-3"> 
          <div className="col-sm-12 col-md-6 mt-5">
            <div className="dt-title">
              <h3>Listado de usuarios</h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-3 mt-5">
            <div className="d-flex justify-content-end align-items-center">
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
            user={selectedUser} 
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
    </div>
  );
};

export default App;
