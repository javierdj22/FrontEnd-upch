import React from "react";

const Select = ({ options = [], value, onChange, placeholder, name, className = "" }) => {
  return (
    <select className={`form-select ${className}`} name={name} value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Select;

