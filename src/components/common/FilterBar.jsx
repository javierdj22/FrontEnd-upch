import React, { useEffect, useState } from "react";
import CardContainer from "../cars/CardContainer";
import Select from "./Select";
import Button from "./Button";

const FilterBar = ({ users, onSearch }) => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [filters, setFilters] = useState({ brand: "", model: "" });

  useEffect(() => {
    if (users.length > 0) {
      setBrandOptions([...new Set(users.map((u) => u.brand))]);
      setModelOptions([...new Set(users.map((u) => u.model))]);
    }
  }, [users]);

  const handleChange = (e) => setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSearch = () => onSearch(users.filter(u => (!filters.brand || u.brand === filters.brand) && (!filters.model || u.model === filters.model)));
  const handleReset = () => { setFilters({ brand: "", model: "" }); onSearch(users); };

  return (
    <div className="col-sm-12 mt-4 filtros-content">
      <CardContainer className="border-0 shadow-sm">
        <div className="row py-3 g-3">
          <div className="col-sm-12 col-lg-4">
            <Select
              options={brandOptions}
              value={filters.brand}
              onChange={handleChange}
              placeholder="-- Filtrar por Brand --"
              name="brand"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <Select
              options={modelOptions}
              value={filters.model}
              onChange={handleChange}
              placeholder="-- Filtrar por Model --"
              name="model"
            />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex gap-2">
            <Button variant="primary" className="w-50" onClick={handleSearch}>
              <i className="bi bi-search me-2"></i> Buscar
            </Button>
            <Button variant="secondary" className="w-50" onClick={handleReset}>
              Limpiar
            </Button>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default FilterBar;
