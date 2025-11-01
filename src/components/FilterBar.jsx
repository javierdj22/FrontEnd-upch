import React, { useEffect, useState } from "react";

const FilterBar = ({ users, onSearch }) => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [filters, setFilters] = useState({ brand: "", model: "" });

  // Obtener opciones únicas de Brand y Model
  useEffect(() => {
    if (users && users.length > 0) {
      const brands = [...new Set(users.map((u) => u.brand))];
      const models = [...new Set(users.map((u) => u.model))];
      setBrandOptions(brands);
      setModelOptions(models);
    }
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    let filtered = users;

    if (filters.brand) {
      filtered = filtered.filter((u) => u.brand === filters.brand);
    }
    if (filters.model) {
      filtered = filtered.filter((u) => u.model === filters.model);
    }

    // Envía el resultado al componente padre
    onSearch(filtered);
  };

  const handleReset = () => {
    setFilters({ brand: "", model: "" });
    onSearch(users); // Mostrar toda la tabla
  };

  return (
    <div className="col-sm-12 mt-4 filtros-content">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="row py-3 g-3">
            <div className="col-sm-12 col-lg-4">
              <select
                className="form-select form-select-sm"
                name="brand"
                value={filters.brand}
                onChange={handleChange}
              >
                <option value="">-- Filtrar por Brand --</option>
                {brandOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-4">
              <select
                className="form-select form-select-sm"
                name="model"
                value={filters.model}
                onChange={handleChange}
              >
                <option value="">-- Filtrar por Model --</option>
                {modelOptions.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex gap-2">
              <button
                className="btn btn-sm btn-primary w-50"
                onClick={handleSearch}
              >
                <i className="bi bi-search me-2"></i> Buscar
              </button>
              <button
                className="btn btn-sm btn-secondary w-50"
                onClick={handleReset}
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
