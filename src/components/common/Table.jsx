import React from "react";

const Table = ({ columns = [], data = [], renderRow }) => {
  return (
    <table className="table table-hover table-light">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
